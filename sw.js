// ============================================================
// D.D. Solution Service Worker — KILL SWITCH (v6)
// ============================================================
// จงใจ"ไม่ cache อะไรเลย" — แอปออนไลน์ตลอด เพื่อกันบั๊กจอขาว
// อาการเดิม: SW v3 cache ไฟล์ app.js เก่า (ที่ยังมี import) แล้วเสิร์ฟทับ
//            ทำให้ Babel เจอ import → "import declarations may only appear
//            at top level of a module" → จอขาว
//
// หน้าที่ของไฟล์นี้มีแค่ 2 อย่าง:
//   1) เข้ามาแทน SW เก่าทุกตัวที่ยังค้างในเครื่องผู้ใช้ (ผ่าน auto-update ของเบราว์เซอร์)
//   2) ตอน activate → ลบ cache ทุกชั้นทิ้งให้เกลี้ยง
//
// ❗ ไม่มี fetch handler โดยเจตนา → ทุก request วิ่งออกเน็ตตรง ๆ
//    เป็นไปไม่ได้ที่จะเสิร์ฟไฟล์ผิดประเภท (เช่น index.html แทน app.js) อีก
// ============================================================

self.addEventListener('install', () => {
  // ติดตั้งทันที ไม่ต้องรอคิว
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    // ลบ cache เก่าทุกชั้น (ของ v3/v4/v5 ที่อาจค้าง)
    const keys = await caches.keys();
    await Promise.all(keys.map((k) => caches.delete(k)));
    // เข้าควบคุมทุกแท็บที่เปิดอยู่ทันที
    await self.clients.claim();
  })());
});

// ไม่มี self.addEventListener('fetch', ...) — ตั้งใจปล่อยให้เบราว์เซอร์
// โหลดทุกอย่างจาก network เองตามปกติ
