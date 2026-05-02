// ============== D.D. Solution App (Browser Build) ==============
const { useState, useEffect, useMemo, useRef } = React;

// ============== LUCIDE SVG ICONS (inline) ==============
const Icon = ({ children, className = '', size = 16, strokeWidth = 2, ...props }) => 
  React.createElement('svg', {
    className, width: size, height: size, viewBox: '0 0 24 24',
    fill: 'none', stroke: 'currentColor', strokeWidth,
    strokeLinecap: 'round', strokeLinejoin: 'round', ...props
  }, children);

const _icons = {
  Sun: ['M12 2v2', 'M12 20v2', 'm4.93 4.93 1.41 1.41', 'm17.66 17.66 1.41 1.41', 'M2 12h2', 'M20 12h2', 'm6.34 17.66-1.41 1.41', 'm19.07 4.93-1.41 1.41'],
};
const Sun = (p) => Icon({...p, children: [
  React.createElement('circle', {key:'c', cx:12, cy:12, r:4}),
  ..._icons.Sun.map((d,i) => React.createElement('path', {key:i, d}))
]});
const Wallet = (p) => Icon({...p, children: [
  React.createElement('path', {key:'1', d:'M21 12V7H5a2 2 0 0 1 0-4h14v4'}),
  React.createElement('path', {key:'2', d:'M3 5v14a2 2 0 0 0 2 2h16v-5'}),
  React.createElement('path', {key:'3', d:'M18 12a2 2 0 0 0 0 4h4v-4Z'}),
]});
const Package = (p) => Icon({...p, children: [
  React.createElement('path', {key:'1', d:'M16.5 9.4 7.55 4.24'}),
  React.createElement('path', {key:'2', d:'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z'}),
  React.createElement('polyline', {key:'3', points:'3.29 7 12 12 20.71 7'}),
  React.createElement('line', {key:'4', x1:12, x2:12, y1:22, y2:12}),
]});
const Users = (p) => Icon({...p, children: [
  React.createElement('path', {key:'1', d:'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2'}),
  React.createElement('circle', {key:'2', cx:9, cy:7, r:4}),
  React.createElement('path', {key:'3', d:'M22 21v-2a4 4 0 0 0-3-3.87'}),
  React.createElement('path', {key:'4', d:'M16 3.13a4 4 0 0 1 0 7.75'}),
]});
const Briefcase = (p) => Icon({...p, children: [
  React.createElement('rect', {key:'1', width:20, height:14, x:2, y:7, rx:2, ry:2}),
  React.createElement('path', {key:'2', d:'M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16'}),
]});
const Plus = (p) => Icon({...p, children: [
  React.createElement('path', {key:'1', d:'M5 12h14'}),
  React.createElement('path', {key:'2', d:'M12 5v14'}),
]});
const Trash2 = (p) => Icon({...p, children: [
  React.createElement('path', {key:'1', d:'M3 6h18'}),
  React.createElement('path', {key:'2', d:'M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6'}),
  React.createElement('path', {key:'3', d:'M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2'}),
  React.createElement('line', {key:'4', x1:10, x2:10, y1:11, y2:17}),
  React.createElement('line', {key:'5', x1:14, x2:14, y1:11, y2:17}),
]});
const Edit2 = (p) => Icon({...p, children: [
  React.createElement('path', {key:'1', d:'M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z'}),
]});
const TrendingUp = (p) => Icon({...p, children: [
  React.createElement('polyline', {key:'1', points:'22 7 13.5 15.5 8.5 10.5 2 17'}),
  React.createElement('polyline', {key:'2', points:'16 7 22 7 22 13'}),
]});
const TrendingDown = (p) => Icon({...p, children: [
  React.createElement('polyline', {key:'1', points:'22 17 13.5 8.5 8.5 13.5 2 7'}),
  React.createElement('polyline', {key:'2', points:'16 17 22 17 22 11'}),
]});
const DollarSign = (p) => Icon({...p, children: [
  React.createElement('line', {key:'1', x1:12, x2:12, y1:2, y2:22}),
  React.createElement('path', {key:'2', d:'M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6'}),
]});
const AlertCircle = (p) => Icon({...p, children: [
  React.createElement('circle', {key:'1', cx:12, cy:12, r:10}),
  React.createElement('line', {key:'2', x1:12, x2:12, y1:8, y2:12}),
  React.createElement('line', {key:'3', x1:12, x2:12.01, y1:16, y2:16}),
]});
const X = (p) => Icon({...p, children: [
  React.createElement('path', {key:'1', d:'M18 6 6 18'}),
  React.createElement('path', {key:'2', d:'m6 6 12 12'}),
]});
const Save = (p) => Icon({...p, children: [
  React.createElement('path', {key:'1', d:'M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z'}),
  React.createElement('polyline', {key:'2', points:'17 21 17 13 7 13 7 21'}),
  React.createElement('polyline', {key:'3', points:'7 3 7 8 15 8'}),
]});
const PieChart = (p) => Icon({...p, children: [
  React.createElement('path', {key:'1', d:'M21.21 15.89A10 10 0 1 1 8 2.83'}),
  React.createElement('path', {key:'2', d:'M22 12A10 10 0 0 0 12 2v10z'}),
]});
const BarChart3 = (p) => Icon({...p, children: [
  React.createElement('path', {key:'1', d:'M3 3v18h18'}),
  React.createElement('path', {key:'2', d:'M18 17V9'}),
  React.createElement('path', {key:'3', d:'M13 17V5'}),
  React.createElement('path', {key:'4', d:'M8 17v-3'}),
]});
const Eye = (p) => Icon({...p, children: [
  React.createElement('path', {key:'1', d:'M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z'}),
  React.createElement('circle', {key:'2', cx:12, cy:12, r:3}),
]});
const EyeOff = (p) => Icon({...p, children: [
  React.createElement('path', {key:'1', d:'M9.88 9.88a3 3 0 1 0 4.24 4.24'}),
  React.createElement('line', {key:'4', x1:2, x2:22, y1:2, y2:22}),
]});
const Truck = (p) => Icon({...p, children: [
  React.createElement('path', {key:'1', d:'M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11'}),
  React.createElement('path', {key:'2', d:'M14 9h4l4 4v4c0 .6-.4 1-1 1h-2'}),
  React.createElement('circle', {key:'3', cx:7, cy:18, r:2}),
  React.createElement('path', {key:'4', d:'M15 18H9'}),
  React.createElement('circle', {key:'5', cx:17, cy:18, r:2}),
]});
const Wrench = (p) => Icon({...p, children: [
  React.createElement('path', {key:'1', d:'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z'}),
]});
const Coffee = (p) => Icon({...p, children: [
  React.createElement('path', {key:'1', d:'M17 8h1a4 4 0 1 1 0 8h-1'}),
  React.createElement('path', {key:'2', d:'M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z'}),
]});
const Box = (p) => Icon({...p, children: [
  React.createElement('path', {key:'1', d:'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z'}),
  React.createElement('polyline', {key:'2', points:'3.27 6.96 12 12.01 20.73 6.96'}),
  React.createElement('line', {key:'3', x1:12, x2:12, y1:22.08, y2:12}),
]});
const History = (p) => Icon({...p, children: [
  React.createElement('path', {key:'1', d:'M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8'}),
  React.createElement('path', {key:'2', d:'M3 3v5h5'}),
  React.createElement('path', {key:'3', d:'M12 7v5l4 2'}),
]});
const ArrowUpRight = (p) => Icon({...p, children: [
  React.createElement('path', {key:'1', d:'M7 7h10v10'}),
  React.createElement('path', {key:'2', d:'M7 17 17 7'}),
]});
const ArrowDownLeft = (p) => Icon({...p, children: [
  React.createElement('path', {key:'1', d:'M17 17H7V7'}),
  React.createElement('path', {key:'2', d:'M17 7 7 17'}),
]});
const Lock = (p) => Icon({...p, children: [
  React.createElement('rect', {key:'1', width:18, height:11, x:3, y:11, rx:2, ry:2}),
  React.createElement('path', {key:'2', d:'M7 11V7a5 5 0 0 1 10 0v4'}),
]});
const LogOut = (p) => Icon({...p, children: [
  React.createElement('path', {key:'1', d:'M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4'}),
  React.createElement('polyline', {key:'2', points:'16 17 21 12 16 7'}),
  React.createElement('line', {key:'3', x1:21, x2:9, y1:12, y2:12}),
]});
const Phone = (p) => Icon({...p, children: [
  React.createElement('path', {key:'1', d:'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'}),
]});
const MapPin = (p) => Icon({...p, children: [
  React.createElement('path', {key:'1', d:'M20 10c0 7-8 13-8 13s-8-6-8-13a8 8 0 0 1 16 0Z'}),
  React.createElement('circle', {key:'2', cx:12, cy:10, r:3}),
]});
const Download = (p) => Icon({...p, children: [
  React.createElement('path', {key:'1', d:'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4'}),
  React.createElement('polyline', {key:'2', points:'7 10 12 15 17 10'}),
  React.createElement('line', {key:'3', x1:12, x2:12, y1:15, y2:3}),
]});
const Activity = (p) => Icon({...p, children: [
  React.createElement('polyline', {key:'1', points:'22 12 18 12 15 21 9 3 6 12 2 12'}),
]});
const UserCircle = (p) => Icon({...p, children: [
  React.createElement('path', {key:'1', d:'M18 20a6 6 0 0 0-12 0'}),
  React.createElement('circle', {key:'2', cx:12, cy:10, r:4}),
  React.createElement('circle', {key:'3', cx:12, cy:12, r:10}),
]});


// ============== AUTH CONFIG ==============
const USERS = {
  '0000': { id: 'p-pa', name: 'พ่อ', icon: '🔧' },
  '8888': { id: 'p-phone', name: 'โฟน', icon: '💼' },
  '1234': { id: 'p-aam', name: 'อาม', icon: '📱' },
};

const STOCK_CATEGORIES = [
  { id: 'panel', label: 'แผงโซล่า' },
  { id: 'inverter', label: 'อินเวอร์เตอร์' },
  { id: 'battery', label: 'แบตเตอรี่' },
  { id: 'wire', label: 'สายไฟ', byMeter: true },
  { id: 'panel_box', label: 'ตู้คอนโทรล' },
];

const COST_CATEGORIES = [
  { id: 'panel', label: 'แผงโซล่า', icon: Sun },
  { id: 'inverter', label: 'อินเวอร์เตอร์', icon: Box },
  { id: 'battery', label: 'แบตเตอรี่', icon: Box },
  { id: 'wire', label: 'สายไฟ', icon: Box },
  { id: 'panel_box', label: 'ตู้คอนโทรล', icon: Box },
  { id: 'equipment', label: 'อุปกรณ์', icon: Wrench },
  { id: 'material', label: 'วัสดุอื่นๆ', icon: Package },
  { id: 'labor', label: 'ค่าแรง', icon: Users },
  { id: 'travel', label: 'ค่าเดินทาง', icon: Truck },
  { id: 'food', label: 'ค่าน้ำค่าข้าว', icon: Coffee },
  { id: 'other', label: 'อื่นๆ', icon: Box },
];

const getCatLabel = (id) => COST_CATEGORIES.find(c => c.id === id)?.label || id;

const DEFAULT_PARTNERS = [
  { id: 'p-aam', name: 'อาม', fullName: 'ศิรินทร์ ริวัฒนา', role: 'Sales / Marketing / ประสานงาน', bankAccount: '8682177528 กสิกร', totalReturn: 0, note: '' },
  { id: 'p-phone', name: 'โฟน', fullName: 'Phoneyjung', role: 'Operations / Finance / ระบบ', bankAccount: '', totalReturn: 0, note: '' },
  { id: 'p-pa', name: 'พ่อ', fullName: 'aku', role: 'Technical / ช่าง / Sourcing', bankAccount: '3164190533', totalReturn: 0, note: '' },
];

const DEFAULT_STOCK = [
  // ✅ มีของเหลือในสต๊อกจริง (qty > 0)
  { id: 'stk-longi', name: 'แผง Longi 640W', category: 'panel', qty: 27, unitCost: 2911, supplier: '-', owner: 'บริษัท', note: 'ซื้อจากเงินงานแรก+ทุน · ซื้อมา 36 ใช้ในงาน 2 ไป 9', purchaseDate: '2026-04-08', unit: 'แผ่น' },
  { id: 'stk-inv10', name: 'Inverter Hybrid 10kW', category: 'inverter', qty: 1, unitCost: 59000, supplier: '-', owner: 'โฟน', note: 'โฟนซื้อตุนไว้', purchaseDate: '2026-04-26', unit: 'เครื่อง' },
  // 📋 ประวัติ — ของที่เคยซื้อแล้วใช้หมด (qty = 0)
  { id: 'stk-hist-1', name: 'แผง Jinko 725W N-Type', category: 'panel', qty: 0, unitCost: 3585, supplier: 'aku connection', owner: 'อาม', note: 'ใช้ในงาน 1 (8 แผ่น)', purchaseDate: '2026-04-08', unit: 'แผ่น' },
  { id: 'stk-hist-2', name: 'Inverter Hybrid 5kW (งาน 1)', category: 'inverter', qty: 0, unitCost: 33500, supplier: '-', owner: 'โฟน', note: 'ใช้ในงาน 1', purchaseDate: '2026-04-08', unit: 'เครื่อง' },
  { id: 'stk-hist-3', name: 'Inverter Deye 5kW Hybrid', category: 'inverter', qty: 0, unitCost: 33705, supplier: '-', owner: 'อาม', note: 'รวม VAT 7% · ใช้ในงาน 2', purchaseDate: '2026-04-16', unit: 'เครื่อง' },
  { id: 'stk-hist-4', name: 'แบต Deye 51.2V 314Ah 16kWh', category: 'battery', qty: 0, unitCost: 67303, supplier: '-', owner: 'อาม', note: 'รวม VAT · ใช้ในงาน 2', purchaseDate: '2026-04-18', unit: 'ลูก' },
  { id: 'stk-hist-5', name: 'สาย PV 6mm KUKA แดง', category: 'wire', qty: 0, unitCost: 37.236, supplier: 'aku', owner: 'อาม', note: 'ม้วน 100ม. 3,723.60 ฿ (รวม VAT) · ใช้ในงาน 1', purchaseDate: '2026-04-08', unit: 'เมตร', perRoll: 100, rollPrice: 3723.6 },
  { id: 'stk-hist-6', name: 'สาย PV 6mm KUKA ดำ', category: 'wire', qty: 0, unitCost: 37.236, supplier: 'aku', owner: 'อาม', note: 'ม้วน 100ม. 3,723.60 ฿ (รวม VAT) · ใช้ในงาน 1', purchaseDate: '2026-04-08', unit: 'เมตร', perRoll: 100, rollPrice: 3723.6 },
  { id: 'stk-hist-7', name: 'สาย Yazaki 10mm เมน', category: 'wire', qty: 0, unitCost: 48.50, supplier: '-', owner: 'พ่อ', note: 'ม้วน 100ม. 4,850 ฿ · ใช้ในงาน 1', purchaseDate: '2026-04-04', unit: 'เมตร', perRoll: 100, rollPrice: 4850 },
  { id: 'stk-hist-8', name: 'ตู้ Combiner งาน 1', category: 'panel_box', qty: 0, unitCost: 2500, supplier: '-', owner: 'พ่อ', note: 'ใช้ในงาน 1', purchaseDate: '2026-04-08', unit: 'ตู้' },
  { id: 'stk-hist-9', name: 'ตู้ Combiner 2 String งาน 2', category: 'panel_box', qty: 0, unitCost: 3462, supplier: '-', owner: 'อาม', note: 'ใช้ในงาน 2', purchaseDate: '2026-04-26', unit: 'ตู้' },
];

const DEFAULT_JOBS = [
  {
    id: 'job-1', date: '2026-04-08', customer: 'พี่เกรียงศักดิ์ วงวาลย์',
    location: 'ดอนไก่ดี กระทุ่มแบน สมุทรสาคร', type: '5kW Hybrid + Jinko 725W × 8',
    salePrice: 108000, originalPrice: 110000, discount: 2000,
    discountNote: 'ส่วนลด: ค่าแนะนำของอาม',
    status: 'completed',
    investments: { 'p-aam': 55447.20, 'p-phone': 33500, 'p-pa': 8870 },
    costsByCategory: {
      panel: [
        { item: 'แผง Jinko N-Type 725W × 8 แผ่น (รวม VAT)', amount: 28676 },
        { item: 'DC Solar cable KUKA 6sqmm 100M × 2 (รวม VAT)', amount: 7447.20 },
      ],
      inverter: [{ item: 'Inverter Hybrid 5kW (โฟน)', amount: 33500 }],
      panel_box: [{ item: 'Combiner', amount: 2500 }],
      equipment: [
        { item: 'Rail 4.2 × 8', amount: 3400 },
        { item: 'Rail splice × 8', amount: 304 },
        { item: 'Mid clamp × 26', amount: 520 },
        { item: 'End clamp 35/10mm × 10', amount: 200 },
        { item: 'แผ่นกราวด์ × 30', amount: 150 },
        { item: 'Grounding Lug × 10', amount: 270 },
        { item: 'C-Pack Roof Hook × 26', amount: 3120 },
        { item: 'Cable clip × 30', amount: 150 },
        { item: 'Link × 10', amount: 350 },
        { item: 'โฮซอ', amount: 320 },
        { item: 'เบรคเกอร์', amount: 120 },
        { item: 'สายกาว', amount: 900 },
        { item: 'แปรงทาสี', amount: 20 },
        { item: 'ค่าของติดตั้งเพิ่มเติม', amount: 3500 },
        { item: 'ข้อต่อท่อร้อยสาย ก้ามปู', amount: 220 },
      ],
      wire: [{ item: 'สายไฟ เบอร์ 10 (1 ม้วน)', amount: 4850 }],
      labor: [
        { item: 'ค่าช่างสิทธิ์', amount: 6000 },
        { item: 'ค่าแรงช่างเอ๋', amount: 800 },
        { item: 'ค่าแรงช่างหนึ่ง', amount: 500 },
      ],
    },
    totalCost: 97817.20, profit: 10182.80,
    note: 'งานแรก! ผลิตไฟ 28kW/วัน · อาม 55,447.20 + โฟน 33,500 + พ่อ 8,870',
  },
  {
    id: 'job-2', date: '2026-05-02', customer: 'งานที่ 2',
    location: 'หลักสี่ กรุงเทพฯ', type: '5kW Hybrid Deye + แบต 16kW + Longi 640W × 9',
    salePrice: 190000, originalPrice: 190000, discount: 0, discountNote: '',
    status: 'completed',
    investments: { 'p-aam': 127460, 'p-pa': 3200 },
    costsByCategory: {
      panel: [{ item: 'Longi 640W × 9 (จากสต๊อก)', amount: 26199 }],
      inverter: [{ item: 'Inverter Deye 5kW Hybrid (รวม VAT 7%)', amount: 33705 }],
      battery: [{ item: 'Deye แบต 51.2V 314Ah 16kWh (รวม VAT 7%)', amount: 67303 }],
      panel_box: [{ item: 'Combiner', amount: 3462 }],
      equipment: [{ item: 'วัสดุติดตั้ง (ซื้อเพิ่มหน้างาน)', amount: 1372 }],
      labor: [
        { item: 'ค่าแรง+ของ ติดแผง (เหมา)', amount: 20000 },
        { item: 'ค่าช่างเอ๋,ช่างหนึ่ง', amount: 1700 },
      ],
      travel: [
        { item: 'ค่าส่งแบต (ค่ารถ)', amount: 700 },
        { item: 'ค่าน้ำมัน', amount: 1000 },
      ],
      other: [
        { item: 'ค่าข้าวช่าง', amount: 918 },
        { item: 'ค่าข้าว', amount: 500 },
      ],
    },
    totalCost: 156859, profit: 33141,
    note: 'อาม 127,460 + พ่อ 3,200 + แผง Longi 9 แผ่นจากสต๊อก (26,199)',
  },
];

const DEFAULT_TRANSACTIONS = [
  // งานที่ 1
  { id: 't-1', date: '2026-04-08', type: 'income', category: 'รายได้จากงาน', amount: 108000, description: 'งานพี่เกรียงศักดิ์ - 5kW Hybrid', jobId: 'job-1', partnerId: '' },
  { id: 't-2', date: '2026-04-08', type: 'expense', category: 'ต้นทุนงาน', amount: 55447.20, description: 'ทุนอาม งานที่ 1', jobId: 'job-1', partnerId: 'p-aam' },
  { id: 't-3', date: '2026-04-08', type: 'expense', category: 'ต้นทุนงาน', amount: 33500, description: 'ทุนโฟน งานที่ 1 (Inverter 5kW)', jobId: 'job-1', partnerId: 'p-phone' },
  { id: 't-4', date: '2026-04-08', type: 'expense', category: 'ต้นทุนงาน', amount: 8870, description: 'ทุนพ่อ งานที่ 1 (สาย+ตู้+ค่าแรง)', jobId: 'job-1', partnerId: 'p-pa' },
  // ซื้อสต๊อก (Longi) - ใช้เงินบริษัท ไม่ใช่ของอาม
  { id: 't-5', date: '2026-04-08', type: 'expense', category: 'ต้นทุนสต๊อก', amount: 104796, description: 'ซื้อแผง Longi 640W × 36 แผ่น (เงินจากกำไรงาน 1+ทุน)', jobId: '', partnerId: '' },
  // ซื้อสต๊อก Inverter 10kW - โฟนซื้อ
  { id: 't-6', date: '2026-04-26', type: 'expense', category: 'ต้นทุนสต๊อก', amount: 59000, description: 'โฟนซื้อ Inverter Hybrid 10kW (ตุนไว้)', jobId: '', partnerId: 'p-phone' },
  // งานที่ 2
  { id: 't-7', date: '2026-05-02', type: 'income', category: 'รายได้จากงาน', amount: 190000, description: 'งานที่ 2 - 5kW Hybrid + แบต 16kW', jobId: 'job-2', partnerId: '' },
  { id: 't-8', date: '2026-05-02', type: 'expense', category: 'ต้นทุนงาน', amount: 127460, description: 'ทุนอาม งานที่ 2 (Inverter Deye+แบต+อื่นๆ)', jobId: 'job-2', partnerId: 'p-aam' },
  { id: 't-9', date: '2026-05-02', type: 'expense', category: 'ต้นทุนงาน', amount: 3200, description: 'ทุนพ่อ งานที่ 2 (ค่าช่าง 1,700 + น้ำมัน 1,000 + ค่าข้าว 500)', jobId: 'job-2', partnerId: 'p-pa' },
  { id: 't-10', date: '2026-05-02', type: 'expense', category: 'เบิกสต๊อก', amount: 26199, description: 'เบิกแผง Longi 9 แผ่นจากสต๊อก', jobId: 'job-2', partnerId: '' },
];

const DEFAULT_CUSTOMERS = [
  {
    id: 'cust-1', name: 'พี่เกรียงศักดิ์ วงวาลย์', phone: '',
    address: '21 ตำบล ดอนไก่ดี อำเภอกระทุ่มแบน สมุทรสาคร 74110',
    mapLink: 'https://maps.google.com/maps?f=q&q=13.642025,100.255410&spn=0.029488,0.083942&z=14',
    installDate: '2026-04-08', system: '5kW Hybrid + Jinko 725W × 8',
    warranty: 'แผง 30 ปี · Inverter 10 ปี · ติดตั้ง 5 ปี',
    jobId: 'job-1', note: 'งานแรก! ผลิตไฟ 28kW/วัน',
  },
  {
    id: 'cust-2', name: 'งานที่ 2 (หลักสี่)', phone: '',
    address: '67/593 ซอย เกษตร แขวงทุ่งสองห้อง เขตหลักสี่ กรุงเทพมหานคร 10210',
    mapLink: 'https://maps.google.com/maps?f=q&q=13.907270,100.568337&spn=0.029488,0.083942&z=14',
    installDate: '2026-05-02', system: '5kW Hybrid Deye + แบต 16kW + Longi 640W × 9',
    warranty: 'แผง 30 ปี · Inverter 10 ปี · แบต 10 ปี · ติดตั้ง 5 ปี',
    jobId: 'job-2', note: '',
  },
];

// ============== APP WRAPPER WITH LOGIN ==============
function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [checkingAuth, setCheckingAuth] = useState(true);

  // Load SheetJS for Excel export
  useEffect(() => {
    if (!window.XLSX) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/xlsx-js-style@1.2.0/dist/xlsx.bundle.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  // Check saved login on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const saved = await window.storage.get('dd:auth:current', false).catch(() => null);
        if (saved && saved.value) {
          const userId = saved.value;
          const userEntry = Object.entries(USERS).find(([_, u]) => u.id === userId);
          if (userEntry) {
            setCurrentUser({ pin: userEntry[0], ...userEntry[1] });
          }
        }
      } catch (e) {}
      setCheckingAuth(false);
    };
    checkAuth();
  }, []);

  const handleLogin = async (user) => {
    setCurrentUser(user);
    try { await window.storage.set('dd:auth:current', user.id, false); } catch (e) {}
  };

  const handleLogout = async () => {
    if (!window.confirm('ออกจากระบบ?')) return;
    setCurrentUser(null);
    try { await window.storage.delete('dd:auth:current', false); } catch (e) {}
  };

  if (checkingAuth) {
    return (
      <div className="min-h-screen bg-stone-100 flex items-center justify-center">
        <Sun className="w-16 h-16 text-amber-500 animate-spin" />
      </div>
    );
  }

  if (!currentUser) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return <DDSolutionManager currentUser={currentUser} onLogout={handleLogout} />;
}

function LoginScreen({ onLogin }) {
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const [shake, setShake] = useState(false);

  const tryLogin = (newPin) => {
    if (newPin.length === 4) {
      const user = USERS[newPin];
      if (user) {
        onLogin({ pin: newPin, ...user });
      } else {
        setError('PIN ไม่ถูกต้อง');
        setShake(true);
        setTimeout(() => { setShake(false); setPin(''); setError(''); }, 1000);
      }
    }
  };

  const addDigit = (d) => {
    if (pin.length < 4) {
      const newPin = pin + d;
      setPin(newPin);
      setError('');
      tryLogin(newPin);
    }
  };

  const removeDigit = () => {
    setPin(pin.slice(0, -1));
    setError('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{fontFamily: "'Sarabun', system-ui, sans-serif", background: 'linear-gradient(135deg, #0d1f43 0%, #1e3a5f 50%, #0d1f43 100%)'}}>
      <style>{`
        
        .display-font { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.04em; }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
        .animate-shake { animation: shake 0.4s ease-in-out 2; }
      `}</style>
      <div className={`bg-white rounded-3xl shadow-2xl p-8 w-full max-w-sm ${shake ? 'animate-shake' : ''}`}>
        <div className="text-center mb-6">
          <img src="icons/icon-192.png" alt="DD Logo" className="w-24 h-24 mx-auto mb-3 rounded-2xl shadow-md" />
          <h1 className="display-font text-3xl text-stone-900">D.D. SOLUTION</h1>
          <p className="text-sm text-stone-500 mt-1">ใส่ PIN 4 หลักเพื่อเข้าใช้งาน</p>
        </div>

        {/* PIN dots */}
        <div className="flex justify-center gap-3 mb-3">
          {[0,1,2,3].map(i => (
            <div key={i} className={`w-4 h-4 rounded-full border-2 transition-all ${
              i < pin.length ? 'bg-amber-500 border-amber-500 scale-110' : 'border-stone-300'
            }`} />
          ))}
        </div>

        {error && <p className="text-center text-red-500 text-sm mb-3">{error}</p>}

        {/* Number pad */}
        <div className="grid grid-cols-3 gap-3">
          {[1,2,3,4,5,6,7,8,9].map(n => (
            <button key={n} onClick={() => addDigit(String(n))}
              className="aspect-square rounded-2xl bg-stone-100 hover:bg-amber-100 active:bg-amber-200 text-2xl font-bold text-stone-700 transition-colors">
              {n}
            </button>
          ))}
          <div></div>
          <button onClick={() => addDigit('0')}
            className="aspect-square rounded-2xl bg-stone-100 hover:bg-amber-100 active:bg-amber-200 text-2xl font-bold text-stone-700 transition-colors">
            0
          </button>
          <button onClick={removeDigit}
            className="aspect-square rounded-2xl bg-rose-100 hover:bg-rose-200 active:bg-rose-300 text-stone-700 transition-colors flex items-center justify-center">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="mt-6 pt-4 border-t border-stone-200">
          <p className="text-xs text-stone-400 text-center">
            👨 พ่อ · 💼 โฟน · 📱 อาม
          </p>
        </div>
      </div>
    </div>
  );
}

// ============== MAIN APP ==============
function DDSolutionManager({ currentUser, onLogout }) {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [stock, setStock] = useState([]);
  const [partners, setPartners] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [activityLog, setActivityLog] = useState([]);
  const [showJobModal, setShowJobModal] = useState(false);
  const [showStockModal, setShowStockModal] = useState(false);
  const [showPartnerModal, setShowPartnerModal] = useState(false);
  const [showTransactionModal, setShowTransactionModal] = useState(false);
  const [showCustomerModal, setShowCustomerModal] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const [j, s, p, t, c, a] = await Promise.all([
          window.storage.get('dd5:jobs', true).catch(() => null),
          window.storage.get('dd5:stock', true).catch(() => null),
          window.storage.get('dd5:partners', true).catch(() => null),
          window.storage.get('dd5:transactions', true).catch(() => null),
          window.storage.get('dd5:customers', true).catch(() => null),
          window.storage.get('dd5:activity', true).catch(() => null),
        ]);
        setJobs(j ? JSON.parse(j.value) : DEFAULT_JOBS);
        setStock(s ? JSON.parse(s.value) : DEFAULT_STOCK);
        setPartners(p ? JSON.parse(p.value) : DEFAULT_PARTNERS);
        setTransactions(t ? JSON.parse(t.value) : DEFAULT_TRANSACTIONS);
        setCustomers(c ? JSON.parse(c.value) : DEFAULT_CUSTOMERS);
        setActivityLog(a ? JSON.parse(a.value) : []);
        if (!j) await window.storage.set('dd5:jobs', JSON.stringify(DEFAULT_JOBS), true);
        if (!s) await window.storage.set('dd5:stock', JSON.stringify(DEFAULT_STOCK), true);
        if (!p) await window.storage.set('dd5:partners', JSON.stringify(DEFAULT_PARTNERS), true);
        if (!t) await window.storage.set('dd5:transactions', JSON.stringify(DEFAULT_TRANSACTIONS), true);
        if (!c) await window.storage.set('dd5:customers', JSON.stringify(DEFAULT_CUSTOMERS), true);
      } catch (e) { console.error(e); }
      finally { setLoading(false); }
    };
    load();
  }, []);

  // === Activity Log Helper ===
  const logActivity = async (action, target, details = '') => {
    const entry = {
      id: `log-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,
      timestamp: new Date().toISOString(),
      userId: currentUser.id,
      userName: currentUser.name,
      action,  // 'add' | 'edit' | 'delete'
      target,  // 'งาน' | 'สต๊อก' | 'ลูกค้า' | 'การเงิน' | 'ผู้ลงทุน'
      details,
    };
    const newLog = [entry, ...activityLog].slice(0, 500); // เก็บแค่ 500 รายการล่าสุด
    setActivityLog(newLog);
    try { await window.storage.set('dd5:activity', JSON.stringify(newLog), true); } catch (e) {}
  };

  const saveJobs = async (data, action, details) => {
    setJobs(data);
    try { await window.storage.set('dd5:jobs', JSON.stringify(data), true); } catch(e){}
    if (action) await logActivity(action, 'งาน', details);
  };
  const saveStock = async (data, action, details) => {
    setStock(data);
    try { await window.storage.set('dd5:stock', JSON.stringify(data), true); } catch(e){}
    if (action) await logActivity(action, 'สต๊อก', details);
  };
  const savePartners = async (data, action, details) => {
    setPartners(data);
    try { await window.storage.set('dd5:partners', JSON.stringify(data), true); } catch(e){}
    if (action) await logActivity(action, 'ผู้ลงทุน', details);
  };
  const saveTransactions = async (data, action, details) => {
    setTransactions(data);
    try { await window.storage.set('dd5:transactions', JSON.stringify(data), true); } catch(e){}
    if (action) await logActivity(action, 'การเงิน', details);
  };
  const saveCustomers = async (data, action, details) => {
    setCustomers(data);
    try { await window.storage.set('dd5:customers', JSON.stringify(data), true); } catch(e){}
    if (action) await logActivity(action, 'ลูกค้า', details);
  };

  const totalRevenue = jobs.reduce((s, j) => s + (Number(j.salePrice) || 0), 0);
  const totalCost = jobs.reduce((s, j) => s + (Number(j.totalCost) || 0), 0);
  const totalProfit = totalRevenue - totalCost;
  const completedJobs = jobs.filter(j => j.status === 'completed').length;
  const totalStockValue = stock.filter(s => Number(s.qty) > 0).reduce((sum, s) => sum + Number(s.qty || 0) * Number(s.unitCost || 0), 0);

  const actualInvestments = useMemo(() => {
    const inv = {};
    const fromJobs = {};
    const fromStock = {};
    partners.forEach(p => {
      inv[p.id] = 0;
      fromJobs[p.id] = 0;
      fromStock[p.id] = 0;
    });
    
    // 1. เงินลงทุนในแต่ละงาน
    jobs.forEach(job => {
      if (job.investments) {
        Object.entries(job.investments).forEach(([pid, amt]) => {
          fromJobs[pid] = (fromJobs[pid] || 0) + Number(amt || 0);
          inv[pid] = (inv[pid] || 0) + Number(amt || 0);
        });
      }
    });
    
    // 2. มูลค่าสต๊อกที่ตุนไว้ในชื่อตัวเอง (qty > 0)
    stock.forEach(item => {
      if (Number(item.qty) > 0 && item.owner) {
        const partner = partners.find(p => p.name === item.owner);
        if (partner) {
          const stockValue = Number(item.qty) * Number(item.unitCost);
          fromStock[partner.id] = (fromStock[partner.id] || 0) + stockValue;
          inv[partner.id] = (inv[partner.id] || 0) + stockValue;
        }
      }
    });
    
    return { inv, fromJobs, fromStock };
  }, [jobs, partners, stock]);

  const fmt = (n) => new Intl.NumberFormat('th-TH', { maximumFractionDigits: 2 }).format(Number(n) || 0);
  const fmt0 = (n) => new Intl.NumberFormat('th-TH', { maximumFractionDigits: 0 }).format(Math.round(Number(n) || 0));

  const resetData = async () => {
    if (!window.confirm('รีเซ็ตข้อมูลทั้งหมดกลับเป็นค่าเริ่มต้น?')) return;
    try {
      await Promise.all([
        window.storage.delete('dd5:jobs', true),
        window.storage.delete('dd5:stock', true),
        window.storage.delete('dd5:partners', true),
        window.storage.delete('dd5:transactions', true),
        window.storage.delete('dd5:customers', true),
        window.storage.delete('dd5:activity', true),
      ]);
      window.location.reload();
    } catch (e) { console.error(e); }
  };

  // === Export to Excel for Tax ===
  const exportToExcel = () => {
    if (!window.XLSX) {
      alert('ห้องสมุด Excel กำลังโหลด กรุณาลองใหม่อีกครั้งใน 2-3 วินาที');
      return;
    }
    const XLSX = window.XLSX;
    const wb = XLSX.utils.book_new();

    // ============== Helpers ==============
    const partnerName = (id) => (partners.find(p => p.id === id) || {}).name || '';
    
    // Style helpers (xlsx-js-style format)
    const styles = {
      title: { font: { bold: true, sz: 14, color: { rgb: 'FFFFFF' } }, fill: { fgColor: { rgb: 'D97706' } }, alignment: { horizontal: 'center', vertical: 'center' } },
      sectionHeader: { font: { bold: true, sz: 11, color: { rgb: '7B0000' } }, fill: { fgColor: { rgb: 'FCE4D6' } }, alignment: { horizontal: 'left' } },
      tableHeader: { font: { bold: true, sz: 11, color: { rgb: 'FFFFFF' } }, fill: { fgColor: { rgb: '305496' } }, alignment: { horizontal: 'center', vertical: 'center' }, border: { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } } },
      cell: { font: { sz: 10 }, alignment: { vertical: 'center' }, border: { top: { style: 'thin', color: { rgb: 'CCCCCC' } }, bottom: { style: 'thin', color: { rgb: 'CCCCCC' } }, left: { style: 'thin', color: { rgb: 'CCCCCC' } }, right: { style: 'thin', color: { rgb: 'CCCCCC' } } } },
      cellMoney: { font: { sz: 10 }, alignment: { horizontal: 'right', vertical: 'center' }, numFmt: '#,##0.00', border: { top: { style: 'thin', color: { rgb: 'CCCCCC' } }, bottom: { style: 'thin', color: { rgb: 'CCCCCC' } }, left: { style: 'thin', color: { rgb: 'CCCCCC' } }, right: { style: 'thin', color: { rgb: 'CCCCCC' } } } },
      cellCenter: { font: { sz: 10 }, alignment: { horizontal: 'center', vertical: 'center' }, border: { top: { style: 'thin', color: { rgb: 'CCCCCC' } }, bottom: { style: 'thin', color: { rgb: 'CCCCCC' } }, left: { style: 'thin', color: { rgb: 'CCCCCC' } }, right: { style: 'thin', color: { rgb: 'CCCCCC' } } } },
      total: { font: { bold: true, sz: 11 }, fill: { fgColor: { rgb: 'FED7AA' } }, alignment: { horizontal: 'right' }, numFmt: '#,##0.00', border: { top: { style: 'medium' }, bottom: { style: 'medium' }, left: { style: 'medium' }, right: { style: 'medium' } } },
      income: { font: { sz: 10, bold: true, color: { rgb: '065F46' } }, fill: { fgColor: { rgb: 'D1FAE5' } }, alignment: { horizontal: 'right' }, numFmt: '#,##0.00' },
      expense: { font: { sz: 10, bold: true, color: { rgb: '991B1B' } }, fill: { fgColor: { rgb: 'FEE2E2' } }, alignment: { horizontal: 'right' }, numFmt: '#,##0.00' },
      profit: { font: { sz: 12, bold: true, color: { rgb: 'D97706' } }, fill: { fgColor: { rgb: 'FEF3C7' } }, alignment: { horizontal: 'right' }, numFmt: '#,##0.00', border: { top: { style: 'medium' }, bottom: { style: 'medium' }, left: { style: 'medium' }, right: { style: 'medium' } } },
    };

    const setCell = (ws, addr, value, style) => {
      ws[addr] = { v: value, t: typeof value === 'number' ? 'n' : 's', s: style };
    };

    const setRange = (ws, range) => {
      ws['!ref'] = range;
    };

    // ============== Sheet 1: ภาพรวม ==============
    const overview = {};
    overview['B2'] = { v: 'D.D. SOLUTION', t: 's', s: { font: { bold: true, sz: 18, color: { rgb: 'D97706' } } } };
    overview['B3'] = { v: 'รายงานสรุปธุรกิจ - Export โดย ' + currentUser.name + ' · ' + new Date().toLocaleDateString('th-TH'), t: 's', s: { font: { sz: 10, italic: true, color: { rgb: '78716C' } } } };

    // Section: เงินลงทุน
    setCell(overview, 'B5', '💰 เงินลงทุน', styles.sectionHeader);
    setCell(overview, 'C5', '', styles.sectionHeader);
    
    const totalInv = partners.reduce((s, p) => s + (actualInvestments.inv[p.id] || 0), 0);
    let r = 6;
    partners.forEach(p => {
      setCell(overview, `B${r}`, p.name, styles.cell);
      setCell(overview, `C${r}`, actualInvestments.inv[p.id] || 0, styles.cellMoney);
      r++;
    });
    setCell(overview, `B${r}`, 'เงินทุนรวม', { ...styles.total, alignment: { horizontal: 'left' } });
    setCell(overview, `C${r}`, totalInv, styles.total);
    r += 2;

    // Section: ผลประกอบการ
    setCell(overview, `B${r}`, '📊 ผลประกอบการ', styles.sectionHeader);
    setCell(overview, `C${r}`, '', styles.sectionHeader);
    r++;
    setCell(overview, `B${r}`, 'รายได้รวม', styles.cell);
    setCell(overview, `C${r}`, totalRevenue, styles.income);
    r++;
    setCell(overview, `B${r}`, 'รายจ่ายรวม', styles.cell);
    setCell(overview, `C${r}`, totalCost, styles.expense);
    r++;
    setCell(overview, `B${r}`, 'กำไรสุทธิ', { ...styles.profit, alignment: { horizontal: 'left' } });
    setCell(overview, `C${r}`, totalProfit, styles.profit);
    r += 2;

    // Section: สต๊อกคงเหลือ
    const stockRemaining = stock.filter(s => Number(s.qty) > 0);
    if (stockRemaining.length > 0) {
      setCell(overview, `B${r}`, '📦 สต๊อกคงเหลือ', styles.sectionHeader);
      setCell(overview, `C${r}`, '', styles.sectionHeader);
      r++;
      stockRemaining.forEach(s => {
        setCell(overview, `B${r}`, `${s.name} (${s.qty} ${s.unit || 'ชิ้น'})`, styles.cell);
        setCell(overview, `C${r}`, Number(s.qty) * Number(s.unitCost), styles.cellMoney);
        r++;
      });
      const totalStock = stockRemaining.reduce((s, i) => s + Number(i.qty) * Number(i.unitCost), 0);
      setCell(overview, `B${r}`, 'มูลค่าสต๊อกรวม', { ...styles.total, alignment: { horizontal: 'left' } });
      setCell(overview, `C${r}`, totalStock, styles.total);
    }

    overview['!ref'] = 'A1:D' + (r + 2);
    overview['!cols'] = [{ wch: 2 }, { wch: 35 }, { wch: 18 }, { wch: 15 }];
    overview['!rows'] = [{ hpt: 10 }, { hpt: 28 }];
    XLSX.utils.book_append_sheet(wb, overview, 'ภาพรวม');

    // ============== Sheet per Job ==============
    jobs.forEach((job, jobIdx) => {
      const ws = {};
      const sheetName = `งาน ${jobIdx + 1}`;
      const jobLabel = `${job.customer} (${job.date})`;

      // Title
      ws['B2'] = { v: 'D.D. SOLUTION', t: 's', s: { font: { bold: true, sz: 16, color: { rgb: 'D97706' } } } };
      ws['B3'] = { v: jobLabel, t: 's', s: { font: { sz: 11, italic: true } } };
      if (job.location) ws['B4'] = { v: '📍 ' + job.location, t: 's', s: { font: { sz: 9, color: { rgb: '78716C' } } } };

      // Section: รายจ่าย (ต้นทุน)
      setCell(ws, 'B6', 'รายจ่าย (ต้นทุน)', styles.sectionHeader);
      for (let c = 2; c <= 9; c++) setCell(ws, XLSX.utils.encode_cell({ r: 5, c }), '', styles.sectionHeader);

      // Table headers
      const headers = ['#', 'รายการ', 'หมวดหมู่', 'ผู้รับผิดชอบ', 'จำนวน', 'ราคา', 'VAT(7%)', 'จำนวนเงิน (฿)', 'หมายเหตุ'];
      headers.forEach((h, i) => {
        setCell(ws, XLSX.utils.encode_cell({ r: 6, c: i + 1 }), h, styles.tableHeader);
      });

      // Items
      let row = 7;
      let itemNum = 1;
      let totalCostAll = 0;
      const partnerCostMap = { 'อาม': 0, 'โฟน': 0, 'พ่อ': 0, 'สต๊อก': 0 };
      const categoryCostMap = {};

      Object.entries(job.costsByCategory || {}).forEach(([catId, items]) => {
        const catLabel = (COST_CATEGORIES.find(c => c.id === catId) || { label: catId }).label;
        items.forEach(item => {
          const amount = Number(item.amount || 0);
          const isStock = !!item.stockId;
          
          setCell(ws, `B${row}`, itemNum, styles.cellCenter);
          setCell(ws, `C${row}`, item.item || '', styles.cell);
          setCell(ws, `D${row}`, catLabel, styles.cell);
          setCell(ws, `E${row}`, isStock ? 'สต๊อก' : '', styles.cellCenter);
          setCell(ws, `F${row}`, item.qtyUsed || 1, styles.cellCenter);
          setCell(ws, `G${row}`, item.qtyUsed ? amount / item.qtyUsed : amount, styles.cellMoney);
          setCell(ws, `H${row}`, '', styles.cellCenter);
          setCell(ws, `I${row}`, amount, styles.cellMoney);
          setCell(ws, `J${row}`, isStock ? 'เบิกจากสต๊อก' : '', styles.cell);

          totalCostAll += amount;
          if (isStock) partnerCostMap['สต๊อก'] += amount;
          categoryCostMap[catLabel] = (categoryCostMap[catLabel] || 0) + amount;
          itemNum++;
          row++;
        });
      });

      // Investments map (who paid)
      Object.entries(job.investments || {}).forEach(([pid, amt]) => {
        const name = partnerName(pid);
        if (partnerCostMap.hasOwnProperty(name)) {
          partnerCostMap[name] = Number(amt);
        }
      });

      // ต้นทุนรวม row
      row++;
      setCell(ws, `H${row}`, 'ต้นทุนรวม', { ...styles.total, alignment: { horizontal: 'right' } });
      setCell(ws, `I${row}`, totalCostAll, styles.total);
      row += 2;

      // Section: ราคาขาย
      setCell(ws, `C${row}`, 'ราคาขาย', styles.cell);
      setCell(ws, `D${row}`, Number(job.originalPrice || job.salePrice || 0), styles.cellMoney);
      row++;
      if (job.discount) {
        setCell(ws, `C${row}`, 'ส่วนลด', styles.cell);
        setCell(ws, `D${row}`, Number(job.discount), styles.cellMoney);
        row++;
      }
      setCell(ws, `C${row}`, 'รายรับ', { ...styles.cell, font: { bold: true, sz: 10 } });
      setCell(ws, `D${row}`, Number(job.salePrice), { ...styles.income });
      row++;
      setCell(ws, `C${row}`, 'กำไร', { ...styles.profit, alignment: { horizontal: 'left' } });
      setCell(ws, `D${row}`, Number(job.salePrice) - totalCostAll, styles.profit);
      row += 2;

      // Section: แบ่งตามคน
      setCell(ws, `B${row}`, '👥 ผู้รับผิดชอบเงินทุน', styles.sectionHeader);
      setCell(ws, `C${row}`, '', styles.sectionHeader);
      setCell(ws, `D${row}`, '', styles.sectionHeader);
      row++;
      ['อาม', 'โฟน', 'พ่อ', 'สต๊อก'].forEach(name => {
        if (partnerCostMap[name] > 0) {
          setCell(ws, `C${row}`, name, styles.cell);
          setCell(ws, `D${row}`, partnerCostMap[name], styles.cellMoney);
          row++;
        }
      });
      const totalByPerson = Object.values(partnerCostMap).reduce((s, v) => s + v, 0);
      setCell(ws, `C${row}`, 'รวม', { ...styles.total, alignment: { horizontal: 'left' } });
      setCell(ws, `D${row}`, totalByPerson, styles.total);
      row += 2;

      // Section: แบ่งตามหมวด
      setCell(ws, `B${row}`, '📊 แยกตามหมวดหมู่', styles.sectionHeader);
      setCell(ws, `C${row}`, '', styles.sectionHeader);
      setCell(ws, `D${row}`, '', styles.sectionHeader);
      row++;
      Object.entries(categoryCostMap).forEach(([cat, amt]) => {
        setCell(ws, `C${row}`, cat, styles.cell);
        setCell(ws, `D${row}`, amt, styles.cellMoney);
        row++;
      });
      const totalByCat = Object.values(categoryCostMap).reduce((s, v) => s + v, 0);
      setCell(ws, `C${row}`, 'รวม', { ...styles.total, alignment: { horizontal: 'left' } });
      setCell(ws, `D${row}`, totalByCat, styles.total);

      ws['!ref'] = 'A1:K' + (row + 2);
      ws['!cols'] = [
        { wch: 2 },   // A
        { wch: 4 },   // B (#)
        { wch: 50 },  // C (รายการ)
        { wch: 14 },  // D (หมวดหมู่)
        { wch: 12 },  // E (ผู้รับผิดชอบ)
        { wch: 8 },   // F (จำนวน)
        { wch: 12 },  // G (ราคา)
        { wch: 10 },  // H (VAT)
        { wch: 14 },  // I (รวม)
        { wch: 22 },  // J (หมายเหตุ)
      ];
      
      // Merged cells for section headers
      ws['!merges'] = ws['!merges'] || [];
      
      XLSX.utils.book_append_sheet(wb, ws, sheetName);
    });

    // ============== Sheet: สต๊อก ==============
    const stockWs = {};
    stockWs['B2'] = { v: '📦 สต๊อกสินค้า', t: 's', s: { font: { bold: true, sz: 16, color: { rgb: 'D97706' } } } };
    stockWs['B3'] = { v: `อัพเดท: ${new Date().toLocaleDateString('th-TH')}`, t: 's', s: { font: { sz: 9, italic: true, color: { rgb: '78716C' } } } };

    const stockHeaders = ['ผู้รับผิดชอบ', 'รายการ', 'หมวด', 'ซื้อ', 'ใช้ไป', 'เหลือ', 'หน่วย', 'ราคา/หน่วย', 'มูลค่ารวม', 'หมายเหตุ'];
    stockHeaders.forEach((h, i) => {
      setCell(stockWs, XLSX.utils.encode_cell({ r: 4, c: i + 1 }), h, styles.tableHeader);
    });

    let sr = 6;
    let totalStockValue = 0;
    
    // Active stock first
    [...stock].sort((a, b) => Number(b.qty) - Number(a.qty)).forEach(item => {
      const remaining = Number(item.qty);
      const value = remaining * Number(item.unitCost);
      const isHistory = remaining === 0;
      
      const cellStyle = isHistory ? { ...styles.cell, font: { sz: 9, color: { rgb: 'A8A29E' } } } : styles.cell;
      const moneyStyle = isHistory ? { ...styles.cellMoney, font: { sz: 9, color: { rgb: 'A8A29E' } } } : styles.cellMoney;
      
      setCell(stockWs, `B${sr}`, item.owner || '-', cellStyle);
      setCell(stockWs, `C${sr}`, item.name, cellStyle);
      setCell(stockWs, `D${sr}`, (STOCK_CATEGORIES.find(c => c.id === item.category) || { label: item.category }).label, cellStyle);
      // ซื้อ = qty + qtyUsed (rough estimate)
      setCell(stockWs, `E${sr}`, '-', { ...styles.cellCenter, font: { sz: 9 } });
      setCell(stockWs, `F${sr}`, '-', { ...styles.cellCenter, font: { sz: 9 } });
      setCell(stockWs, `G${sr}`, remaining, isHistory ? { ...styles.cellCenter, font: { sz: 9, color: { rgb: 'A8A29E' } } } : { ...styles.cellCenter, font: { bold: true, sz: 10, color: { rgb: '059669' } } });
      setCell(stockWs, `H${sr}`, item.unit || 'ชิ้น', styles.cellCenter);
      setCell(stockWs, `I${sr}`, Number(item.unitCost), moneyStyle);
      setCell(stockWs, `J${sr}`, value, value > 0 ? { ...styles.cellMoney, font: { bold: true, sz: 10, color: { rgb: 'D97706' } } } : moneyStyle);
      setCell(stockWs, `K${sr}`, item.note || '', { ...cellStyle, font: { sz: 9 } });
      
      totalStockValue += value;
      sr++;
    });

    // Total
    sr++;
    setCell(stockWs, `B${sr}`, 'มูลค่าสต๊อกรวม', { ...styles.total, alignment: { horizontal: 'left' } });
    for (let c = 2; c <= 8; c++) setCell(stockWs, XLSX.utils.encode_cell({ r: sr - 1, c }), '', { ...styles.total, alignment: { horizontal: 'left' } });
    setCell(stockWs, `J${sr}`, totalStockValue, styles.total);

    stockWs['!ref'] = 'A1:L' + (sr + 1);
    stockWs['!cols'] = [
      { wch: 2 }, { wch: 14 }, { wch: 30 }, { wch: 12 }, { wch: 8 }, { wch: 8 },
      { wch: 8 }, { wch: 10 }, { wch: 12 }, { wch: 14 }, { wch: 30 },
    ];
    XLSX.utils.book_append_sheet(wb, stockWs, 'สต๊อก');

    // ============== Sheet: ผู้ลงทุน ==============
    const partnerWs = {};
    partnerWs['B2'] = { v: '👥 ผู้ลงทุน', t: 's', s: { font: { bold: true, sz: 16, color: { rgb: 'D97706' } } } };

    const partnerHeaders = ['ชื่อ', 'บทบาท', 'ลงทุนจากงาน', 'ลงทุนจากสต๊อก', 'รวมสะสม', '% สัดส่วน', 'บัญชี'];
    partnerHeaders.forEach((h, i) => {
      setCell(partnerWs, XLSX.utils.encode_cell({ r: 3, c: i + 1 }), h, styles.tableHeader);
    });

    let pr = 5;
    const totalAllInv = partners.reduce((s, p) => s + (actualInvestments.inv[p.id] || 0), 0);
    partners.forEach(p => {
      const fromJobs = actualInvestments.fromJobs[p.id] || 0;
      const fromStock = actualInvestments.fromStock[p.id] || 0;
      const total = actualInvestments.inv[p.id] || 0;
      const pct = totalAllInv > 0 ? (total / totalAllInv * 100) : 0;

      setCell(partnerWs, `B${pr}`, p.name, { ...styles.cell, font: { bold: true, sz: 11 } });
      setCell(partnerWs, `C${pr}`, p.role || '', { ...styles.cell, font: { sz: 9 } });
      setCell(partnerWs, `D${pr}`, fromJobs, styles.cellMoney);
      setCell(partnerWs, `E${pr}`, fromStock, styles.cellMoney);
      setCell(partnerWs, `F${pr}`, total, { ...styles.cellMoney, font: { bold: true, sz: 11, color: { rgb: 'D97706' } } });
      setCell(partnerWs, `G${pr}`, pct / 100, { ...styles.cellMoney, numFmt: '0.0%' });
      setCell(partnerWs, `H${pr}`, p.bankAccount || '-', { ...styles.cell, font: { sz: 9 } });
      pr++;
    });
    setCell(partnerWs, `B${pr}`, 'รวม', { ...styles.total, alignment: { horizontal: 'left' } });
    setCell(partnerWs, `D${pr}`, partners.reduce((s, p) => s + (actualInvestments.fromJobs[p.id] || 0), 0), styles.total);
    setCell(partnerWs, `E${pr}`, partners.reduce((s, p) => s + (actualInvestments.fromStock[p.id] || 0), 0), styles.total);
    setCell(partnerWs, `F${pr}`, totalAllInv, styles.total);
    setCell(partnerWs, `G${pr}`, 1, { ...styles.total, numFmt: '0.0%' });

    partnerWs['!ref'] = 'A1:I' + (pr + 1);
    partnerWs['!cols'] = [
      { wch: 2 }, { wch: 12 }, { wch: 28 }, { wch: 14 }, { wch: 14 }, { wch: 14 }, { wch: 10 }, { wch: 35 },
    ];
    XLSX.utils.book_append_sheet(wb, partnerWs, 'ผู้ลงทุน');

    // ============== Sheet: ลูกค้า ==============
    if (customers.length > 0) {
      const custWs = {};
      custWs['B2'] = { v: '👤 ลูกค้า', t: 's', s: { font: { bold: true, sz: 16, color: { rgb: 'D97706' } } } };

      const custHeaders = ['ชื่อ', 'เบอร์โทร', 'ที่อยู่', 'วันติดตั้ง', 'ระบบที่ติดตั้ง', 'รับประกัน', 'หมายเหตุ'];
      custHeaders.forEach((h, i) => {
        setCell(custWs, XLSX.utils.encode_cell({ r: 3, c: i + 1 }), h, styles.tableHeader);
      });

      let cr = 5;
      customers.forEach(c => {
        setCell(custWs, `B${cr}`, c.name || '', { ...styles.cell, font: { bold: true, sz: 11 } });
        setCell(custWs, `C${cr}`, c.phone || '', styles.cell);
        setCell(custWs, `D${cr}`, c.address || '', { ...styles.cell, alignment: { wrapText: true, vertical: 'top' } });
        setCell(custWs, `E${cr}`, c.installDate || '', styles.cellCenter);
        setCell(custWs, `F${cr}`, c.system || '', { ...styles.cell, font: { sz: 9 } });
        setCell(custWs, `G${cr}`, c.warranty || '', { ...styles.cell, font: { sz: 9 } });
        setCell(custWs, `H${cr}`, c.note || '', { ...styles.cell, font: { sz: 9, italic: true } });
        cr++;
      });

      custWs['!ref'] = 'A1:I' + (cr + 1);
      custWs['!cols'] = [
        { wch: 2 }, { wch: 22 }, { wch: 14 }, { wch: 40 }, { wch: 12 }, { wch: 35 }, { wch: 35 }, { wch: 25 },
      ];
      XLSX.utils.book_append_sheet(wb, custWs, 'ลูกค้า');
    }

    // ============== Sheet: บัญชี (รายรับ-รายจ่าย) ==============
    const txWs = {};
    txWs['B2'] = { v: '💰 บัญชีรายรับ-รายจ่าย', t: 's', s: { font: { bold: true, sz: 16, color: { rgb: 'D97706' } } } };
    txWs['B3'] = { v: 'สำหรับยื่นภาษีประจำปี', t: 's', s: { font: { sz: 10, italic: true, color: { rgb: '78716C' } } } };

    const txHeaders = ['วันที่', 'ประเภท', 'หมวดหมู่', 'รายละเอียด', 'จำนวน (฿)', 'งาน', 'คน'];
    txHeaders.forEach((h, i) => {
      setCell(txWs, XLSX.utils.encode_cell({ r: 4, c: i + 1 }), h, styles.tableHeader);
    });

    let tr = 6;
    const sortedTx = [...transactions].sort((a, b) => (a.date > b.date ? 1 : -1));
    let txIncome = 0, txExpense = 0;
    sortedTx.forEach(t => {
      const isIncome = t.type === 'income';
      setCell(txWs, `B${tr}`, t.date, styles.cellCenter);
      setCell(txWs, `C${tr}`, isIncome ? 'รายรับ' : 'รายจ่าย', { ...styles.cellCenter, font: { bold: true, sz: 10, color: { rgb: isIncome ? '065F46' : '991B1B' } } });
      setCell(txWs, `D${tr}`, t.category || '', styles.cell);
      setCell(txWs, `E${tr}`, t.description || '', { ...styles.cell, font: { sz: 9 } });
      setCell(txWs, `F${tr}`, Number(t.amount), isIncome ? styles.income : styles.expense);
      setCell(txWs, `G${tr}`, jobs.find(j => j.id === t.jobId)?.customer || '-', { ...styles.cellCenter, font: { sz: 9 } });
      setCell(txWs, `H${tr}`, partnerName(t.partnerId) || '-', { ...styles.cellCenter, font: { sz: 9 } });

      if (isIncome) txIncome += Number(t.amount);
      else txExpense += Number(t.amount);
      tr++;
    });

    tr++;
    setCell(txWs, `D${tr}`, 'รายรับรวม', { ...styles.total, alignment: { horizontal: 'right' } });
    setCell(txWs, `F${tr}`, txIncome, { ...styles.income, font: { bold: true, sz: 11, color: { rgb: '065F46' } } });
    tr++;
    setCell(txWs, `D${tr}`, 'รายจ่ายรวม', { ...styles.total, alignment: { horizontal: 'right' } });
    setCell(txWs, `F${tr}`, txExpense, { ...styles.expense, font: { bold: true, sz: 11, color: { rgb: '991B1B' } } });
    tr++;
    setCell(txWs, `D${tr}`, 'คงเหลือ (กระแสเงินสด)', { ...styles.total, alignment: { horizontal: 'right' } });
    setCell(txWs, `F${tr}`, txIncome - txExpense, styles.profit);

    txWs['!ref'] = 'A1:I' + (tr + 1);
    txWs['!cols'] = [
      { wch: 2 }, { wch: 12 }, { wch: 10 }, { wch: 16 }, { wch: 50 }, { wch: 14 }, { wch: 18 }, { wch: 12 },
    ];
    XLSX.utils.book_append_sheet(wb, txWs, 'บัญชี');

    // ============== Save ==============
    const fileName = `DD_Solution_${new Date().toISOString().split('T')[0]}.xlsx`;
    XLSX.writeFile(wb, fileName);
    logActivity('export', 'ระบบ', `ดาวน์โหลด Excel: ${fileName}`);
  };

  if (loading) {
    return <div className="min-h-screen bg-stone-100 flex items-center justify-center"><Sun className="w-16 h-16 text-amber-500 animate-spin" /></div>;
  }

  return (
    <div className="min-h-screen bg-stone-100" style={{fontFamily: "'Sarabun', system-ui, sans-serif"}}>
      <style>{`
        
        .display-font { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.04em; }
        @keyframes slide-up { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .animate-slide-up { animation: slide-up 0.4s ease-out; }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        .animate-fade-in { animation: fade-in 0.3s ease-out; }
      `}</style>

      <header className="text-white sticky top-0 z-40 shadow-lg" style={{background: 'linear-gradient(to right, #0d1f43, #1e3a5f)'}}>
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-2">
          <div className="flex items-center gap-3 min-w-0">
            <img src="icons/icon-192.png" alt="DD" className="w-11 h-11 rounded-xl shadow-md flex-shrink-0" />
            <div className="min-w-0">
              <h1 className="display-font text-xl md:text-3xl">D.D. SOLUTION</h1>
              <p className="text-xs text-amber-200 truncate">{currentUser.icon} {currentUser.name} กำลังใช้งาน</p>
            </div>
          </div>
          <div className="flex items-center gap-1 flex-shrink-0">
            <button onClick={exportToExcel} className="hidden md:flex items-center gap-1 px-3 py-2 bg-emerald-600 hover:bg-emerald-700 rounded-lg text-sm font-medium transition-colors" title="Export Excel สำหรับยื่นภาษี">
              <Download className="w-4 h-4" /> Export
            </button>
            <button onClick={exportToExcel} className="md:hidden p-2 hover:bg-white/10 rounded-lg" title="Export Excel">
              <Download className="w-4 h-4 text-emerald-400" />
            </button>
            <button onClick={onLogout} className="p-2 hover:bg-white/10 rounded-lg" title="ออกจากระบบ">
              <LogOut className="w-4 h-4" />
            </button>
            <button onClick={resetData} className="text-stone-400 hover:text-red-400 p-2" title="รีเซ็ตข้อมูล">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-2 flex overflow-x-auto">
          {[
            { id: 'dashboard', label: 'แดชบอร์ด', icon: BarChart3 },
            { id: 'jobs', label: 'งาน', icon: Briefcase },
            { id: 'customers', label: 'ลูกค้า', icon: UserCircle },
            { id: 'stock', label: 'สต็อก', icon: Package },
            { id: 'partners', label: 'ผู้ลงทุน', icon: Users },
            { id: 'finance', label: 'การเงิน', icon: Wallet },
            { id: 'activity', label: 'ประวัติ', icon: Activity },
          ].map(tab => {
            const Icon = tab.icon;
            return (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === tab.id ? 'border-amber-400 text-amber-300 font-semibold' : 'border-transparent text-stone-300'
                }`}>
                <Icon className="w-4 h-4" /> {tab.label}
              </button>
            );
          })}
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4 md:p-6">
        {activeTab === 'dashboard' && (
          <div className="space-y-5 animate-fade-in">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon={DollarSign} label="รายได้รวม" value={fmt0(totalRevenue)} suffix="฿" color="emerald" />
              <StatCard icon={TrendingDown} label="ต้นทุนรวม" value={fmt0(totalCost)} suffix="฿" color="rose" />
              <StatCard icon={TrendingUp} label="กำไรสุทธิ" value={fmt0(totalProfit)} suffix="฿" color="amber" highlight />
              <StatCard icon={Briefcase} label="งานเสร็จ" value={completedJobs} suffix="งาน" color="blue" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-stone-200">
                <div className="flex items-center gap-2 mb-4"><PieChart className="w-5 h-5 text-amber-600" /><h2 className="display-font text-xl text-stone-800">สัดส่วนการลงทุน</h2></div>
                <div className="space-y-3">
                  {partners.map(p => {
                    const inv = actualInvestments.inv[p.id] || 0;
                    const totalAll = Object.values(actualInvestments.inv).reduce((s, v) => s + v, 0);
                    const pct = totalAll > 0 ? (inv / totalAll * 100) : 0;
                    return (
                      <div key={p.id}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="font-medium">{p.name}</span>
                          <span className="text-stone-500">{fmt(inv)} ฿ ({pct.toFixed(1)}%)</span>
                        </div>
                        <div className="h-2 bg-stone-100 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-500" style={{width: `${pct}%`}} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-stone-200">
                <div className="flex items-center gap-2 mb-4"><Package className="w-5 h-5 text-amber-600" /><h2 className="display-font text-xl text-stone-800">สต็อกคงเหลือ</h2></div>
                <div className="text-3xl font-bold text-amber-600 mb-1">{fmt0(totalStockValue)} ฿</div>
                <div className="text-sm text-stone-500 mb-3">{stock.filter(s => Number(s.qty) > 0).length} รายการมีในมือ · ประวัติ {stock.filter(s => Number(s.qty) === 0).length} รายการ</div>
                <button onClick={() => setActiveTab('stock')} className="text-sm text-amber-600 hover:underline">→ ดูรายละเอียด</button>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-stone-200">
              <h2 className="display-font text-xl text-stone-800 mb-3">งานล่าสุด</h2>
              <div className="space-y-2">
                {jobs.slice(-5).reverse().map(job => (
                  <div key={job.id} className="flex items-center justify-between p-3 bg-stone-50 rounded-xl">
                    <div className="min-w-0 flex-1">
                      <div className="font-medium truncate">{job.customer}</div>
                      <div className="text-xs text-stone-500">{job.date} · {job.type}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-emerald-600">+{fmt0(job.profit)} ฿</div>
                      <div className="text-xs text-stone-400">ขาย {fmt0(job.salePrice)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'jobs' && (
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center justify-between">
              <div><h2 className="display-font text-3xl text-stone-800">รายการงาน</h2><p className="text-sm text-stone-500">{jobs.length} งาน</p></div>
              <button onClick={() => { setEditingItem(null); setShowJobModal(true); }} className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-xl font-medium shadow-sm">
                <Plus className="w-4 h-4" /> เพิ่มงาน
              </button>
            </div>
            <div className="space-y-3">
              {jobs.map(job => (
                <JobCard key={job.id} job={job} partners={partners} fmt={fmt} fmt0={fmt0}
                  onEdit={() => { setEditingItem(job); setShowJobModal(true); }}
                  onDelete={() => { if (window.confirm(`ลบงาน ${job.customer}?`)) saveJobs(jobs.filter(j => j.id !== job.id), 'delete', `ลบงาน: ${job.customer}`); }}
                />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'stock' && (
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div><h2 className="display-font text-3xl text-stone-800">สต็อกสินค้า</h2><p className="text-sm text-stone-500">มูลค่ารวม: <span className="font-semibold text-amber-600">{fmt0(totalStockValue)} ฿</span></p></div>
              <div className="flex gap-2">
                <button onClick={() => setShowHistory(!showHistory)} className={`flex items-center gap-2 px-3 py-2 rounded-xl font-medium border transition-colors ${showHistory ? 'bg-stone-200 border-stone-300' : 'bg-white border-stone-200'}`}>
                  {showHistory ? <EyeOff className="w-4 h-4" /> : <History className="w-4 h-4" />}
                  {showHistory ? 'ซ่อนประวัติ' : 'ดูประวัติ'}
                </button>
                <button onClick={() => { setEditingItem(null); setShowStockModal(true); }} className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-xl font-medium shadow-sm">
                  <Plus className="w-4 h-4" /> เพิ่มสินค้า
                </button>
              </div>
            </div>

            {STOCK_CATEGORIES.map(cat => {
              const itemsInCat = stock.filter(s => s.category === cat.id);
              const activeItems = itemsInCat.filter(s => Number(s.qty) > 0);
              const historyItems = itemsInCat.filter(s => Number(s.qty) === 0);
              const visible = showHistory ? itemsInCat : activeItems;
              if (visible.length === 0) return null;
              return (
                <div key={cat.id} className="bg-white rounded-2xl p-4 shadow-sm border border-stone-200">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="display-font text-lg text-amber-700">{cat.label}</h3>
                    <span className="text-xs text-stone-500">{activeItems.length} รายการ {showHistory && historyItems.length > 0 && `· ประวัติ ${historyItems.length}`}</span>
                  </div>
                  <div className="space-y-2">
                    {visible.map(item => (
                      <StockRow key={item.id} item={item} fmt={fmt} fmt0={fmt0}
                        onEdit={() => { setEditingItem(item); setShowStockModal(true); }}
                        onDelete={() => { if (window.confirm(`ลบ ${item.name} ออกจากระบบ?`)) saveStock(stock.filter(s => s.id !== item.id), 'delete', `ลบสินค้า: ${item.name}`); }}
                      />
                    ))}
                  </div>
                </div>
              );
            })}

            {!showHistory && stock.filter(s => Number(s.qty) > 0).length === 0 && (
              <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-stone-200">
                <Package className="w-12 h-12 text-stone-300 mx-auto mb-2" />
                <p className="text-stone-500">ยังไม่มีของในสต็อก</p>
                <p className="text-xs text-stone-400 mt-1">กดปุ่ม "ดูประวัติ" เพื่อดูของที่เคยซื้อ</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'partners' && (
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="display-font text-3xl text-stone-800">ผู้ลงทุน / ทีม</h2>
                <p className="text-sm text-stone-500">ลงทุนรวม {fmt(Object.values(actualInvestments.inv).reduce((s, v) => s + v, 0))} ฿</p>
              </div>
              <button onClick={() => { setEditingItem(null); setShowPartnerModal(true); }} className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-xl font-medium shadow-sm">
                <Plus className="w-4 h-4" /> เพิ่มสมาชิก
              </button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {partners.map(p => {
                const actualInv = actualInvestments.inv[p.id] || 0;
                const fromJobs = actualInvestments.fromJobs[p.id] || 0;
                const fromStock = actualInvestments.fromStock[p.id] || 0;
                return (
                  <div key={p.id} className="bg-white rounded-2xl p-5 shadow-sm border border-stone-200 animate-slide-up">
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white display-font text-xl">{p.name.charAt(0)}</div>
                      <div className="flex gap-1">
                        <button onClick={() => { setEditingItem(p); setShowPartnerModal(true); }} className="p-1.5 hover:bg-stone-100 rounded-lg"><Edit2 className="w-3.5 h-3.5 text-stone-500" /></button>
                        <button onClick={() => { if (window.confirm(`ลบ ${p.name}?`)) savePartners(partners.filter(x => x.id !== p.id), 'delete', `ลบสมาชิก: ${p.name}`); }} className="p-1.5 hover:bg-red-50 rounded-lg"><Trash2 className="w-3.5 h-3.5 text-red-400" /></button>
                      </div>
                    </div>
                    <h3 className="font-bold text-lg text-stone-800">{p.name}</h3>
                    {p.fullName && <p className="text-sm text-stone-500">{p.fullName}</p>}
                    <p className="text-xs text-amber-600 mt-1 font-medium">{p.role}</p>
                    
                    <div className="mt-3 pt-3 border-t border-stone-100">
                      <div className="bg-rose-50 rounded-lg p-2 mb-2">
                        <div className="text-xs text-rose-600">ลงทุนรวม</div>
                        <div className="font-bold text-rose-700 text-lg">{fmt(actualInv)} ฿</div>
                      </div>
                      <div className="grid grid-cols-2 gap-1 text-xs mb-2">
                        <div className="bg-stone-50 rounded p-1.5">
                          <div className="text-stone-500">จากงาน</div>
                          <div className="font-medium text-stone-700">{fmt(fromJobs)}</div>
                        </div>
                        <div className="bg-amber-50 rounded p-1.5">
                          <div className="text-amber-600">จากสต๊อก</div>
                          <div className="font-medium text-amber-700">{fmt(fromStock)}</div>
                        </div>
                      </div>
                      <div className="bg-emerald-50 rounded-lg p-2">
                        <div className="text-xs text-emerald-600">ปันผล</div>
                        <div className="font-bold text-emerald-700">{fmt0(p.totalReturn)} ฿</div>
                      </div>
                    </div>
                    {p.bankAccount && <div className="mt-3 text-xs bg-stone-50 rounded-lg p-2 font-mono text-stone-600">🏦 {p.bankAccount}</div>}
                    {p.note && <div className="mt-2 text-xs text-stone-500">{p.note}</div>}
                  </div>
                );
              })}
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
              <div className="flex gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-stone-700">
                  <strong>ยอดลงทุน</strong> = (เงินที่ออกในแต่ละงาน) + (มูลค่าสต๊อกที่ตุนไว้ในชื่อตัวเอง)
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'finance' && (
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="display-font text-3xl text-stone-800">รายรับ-รายจ่าย</h2>
                <p className="text-sm text-stone-500">{transactions.length} รายการ</p>
              </div>
              <button onClick={() => { setEditingItem(null); setShowTransactionModal(true); }}
                className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-xl font-medium shadow-sm">
                <Plus className="w-4 h-4" /> เพิ่มรายการ
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="bg-emerald-500 text-white rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-1">
                  <ArrowDownLeft className="w-4 h-4" />
                  <span className="text-xs">รายรับรวม</span>
                </div>
                <div className="display-font text-2xl">{fmt0(transactions.filter(t => t.type === 'income').reduce((s, t) => s + Number(t.amount || 0), 0))}</div>
              </div>
              <div className="bg-rose-500 text-white rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-1">
                  <ArrowUpRight className="w-4 h-4" />
                  <span className="text-xs">รายจ่ายรวม</span>
                </div>
                <div className="display-font text-2xl">{fmt0(transactions.filter(t => t.type === 'expense').reduce((s, t) => s + Number(t.amount || 0), 0))}</div>
              </div>
              <div className="bg-amber-500 text-white rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Wallet className="w-4 h-4" />
                  <span className="text-xs">คงเหลือ</span>
                </div>
                <div className="display-font text-2xl">
                  {fmt0(
                    transactions.filter(t => t.type === 'income').reduce((s, t) => s + Number(t.amount || 0), 0) -
                    transactions.filter(t => t.type === 'expense').reduce((s, t) => s + Number(t.amount || 0), 0)
                  )}
                </div>
              </div>
            </div>

            {transactions.length === 0 ? (
              <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-stone-200">
                <Wallet className="w-12 h-12 text-stone-300 mx-auto mb-2" />
                <p className="text-stone-500">ยังไม่มีรายการ</p>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
                {transactions.slice().sort((a, b) => b.date.localeCompare(a.date)).map(t => {
                  const partner = partners.find(p => p.id === t.partnerId);
                  const job = jobs.find(j => j.id === t.jobId);
                  return (
                    <div key={t.id} className="flex items-center gap-3 p-4 border-b border-stone-100 last:border-0 hover:bg-stone-50 transition-colors">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        t.type === 'income' ? 'bg-emerald-100' : 'bg-rose-100'
                      }`}>
                        {t.type === 'income' 
                          ? <ArrowDownLeft className="w-5 h-5 text-emerald-600" />
                          : <ArrowUpRight className="w-5 h-5 text-rose-600" />
                        }
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-stone-800 truncate">{t.description}</div>
                        <div className="text-xs text-stone-500 flex flex-wrap gap-1">
                          <span>{t.date}</span>
                          <span>·</span>
                          <span>{t.category}</span>
                          {partner && <><span>·</span><span className="text-blue-600">👤 {partner.name}</span></>}
                          {job && <><span>·</span><span className="text-amber-600">📋 {job.customer}</span></>}
                        </div>
                      </div>
                      <div className={`font-bold whitespace-nowrap ${t.type === 'income' ? 'text-emerald-600' : 'text-rose-600'}`}>
                        {t.type === 'income' ? '+' : '-'}{fmt0(t.amount)} ฿
                      </div>
                      <div className="flex gap-1">
                        <button onClick={() => { setEditingItem(t); setShowTransactionModal(true); }}
                          className="p-1.5 hover:bg-stone-100 rounded-lg">
                          <Edit2 className="w-3.5 h-3.5 text-stone-500" />
                        </button>
                        <button onClick={() => {
                          if (window.confirm('ลบรายการนี้?')) saveTransactions(transactions.filter(x => x.id !== t.id), 'delete', `ลบรายการ: ${t.description}`);
                        }} className="p-1.5 hover:bg-red-50 rounded-lg">
                          <Trash2 className="w-3.5 h-3.5 text-red-400" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4">
              <div className="flex gap-3">
                <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-stone-700">
                  <strong>หมวดหมู่ที่แนะนำ:</strong> รายได้จากงาน, ต้นทุนงาน, เงินกู้/ยืม, เงินคืน, ปันผล, ค่าใช้จ่ายทั่วไป (ที่ไม่ได้อยู่ในงาน)
                  <br />💡 รายการที่ผูกกับ "งาน" และ "คน" จะช่วยให้ติดตามว่าใครออกเงินอะไรไปบ้าง
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'customers' && (
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="display-font text-3xl text-stone-800">ลูกค้า</h2>
                <p className="text-sm text-stone-500">{customers.length} ราย · ติดตั้งสะสม {customers.length} ระบบ</p>
              </div>
              <button onClick={() => { setEditingItem(null); setShowCustomerModal(true); }}
                className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-xl font-medium shadow-sm">
                <Plus className="w-4 h-4" /> เพิ่มลูกค้า
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {customers.map(c => {
                const linkedJob = jobs.find(j => j.id === c.jobId);
                return (
                  <div key={c.id} className="bg-white rounded-2xl p-5 shadow-sm border border-stone-200 animate-slide-up">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-lg text-stone-800 truncate">{c.name}</h3>
                        <p className="text-sm text-amber-700 font-medium mt-0.5">{c.system}</p>
                      </div>
                      <div className="flex gap-1 flex-shrink-0">
                        <button onClick={() => { setEditingItem(c); setShowCustomerModal(true); }} className="p-1.5 hover:bg-stone-100 rounded-lg">
                          <Edit2 className="w-3.5 h-3.5 text-stone-500" />
                        </button>
                        <button onClick={() => {
                          if (window.confirm(`ลบลูกค้า ${c.name}?`)) {
                            saveCustomers(customers.filter(x => x.id !== c.id), 'delete', `ลบลูกค้า: ${c.name}`);
                          }
                        }} className="p-1.5 hover:bg-red-50 rounded-lg">
                          <Trash2 className="w-3.5 h-3.5 text-red-400" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      {c.phone && (
                        <a href={`tel:${c.phone}`} className="flex items-center gap-2 text-blue-600 hover:underline">
                          <Phone className="w-4 h-4" /> {c.phone}
                        </a>
                      )}
                      {c.address && (
                        <div className="flex items-start gap-2 text-stone-600">
                          <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span className="text-xs">{c.address}</span>
                        </div>
                      )}
                      {c.mapLink && (
                        <a href={c.mapLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-lg hover:bg-blue-100">
                          🗺️ เปิด Google Maps
                        </a>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-stone-100 text-xs">
                      <div>
                        <div className="text-stone-500">วันติดตั้ง</div>
                        <div className="font-medium">{c.installDate || '-'}</div>
                      </div>
                      {linkedJob && (
                        <div>
                          <div className="text-stone-500">งานเชื่อมโยง</div>
                          <div className="font-medium text-amber-600">{linkedJob.customer}</div>
                        </div>
                      )}
                    </div>

                    {c.warranty && (
                      <div className="mt-3 text-xs bg-emerald-50 text-emerald-700 rounded-lg p-2">
                        🛡️ {c.warranty}
                      </div>
                    )}
                    {c.note && <div className="mt-2 text-xs text-stone-500">💬 {c.note}</div>}
                  </div>
                );
              })}
            </div>

            {customers.length === 0 && (
              <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-stone-200">
                <UserCircle className="w-12 h-12 text-stone-300 mx-auto mb-2" />
                <p className="text-stone-500">ยังไม่มีข้อมูลลูกค้า</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'activity' && (
          <div className="space-y-4 animate-fade-in">
            <div>
              <h2 className="display-font text-3xl text-stone-800">ประวัติการแก้ไข</h2>
              <p className="text-sm text-stone-500">{activityLog.length} รายการ · เก็บล่าสุด 500 รายการ</p>
            </div>

            {activityLog.length === 0 ? (
              <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-stone-200">
                <Activity className="w-12 h-12 text-stone-300 mx-auto mb-2" />
                <p className="text-stone-500">ยังไม่มีประวัติ</p>
                <p className="text-xs text-stone-400 mt-1">ระบบจะบันทึกทุกการเพิ่ม/แก้/ลบ พร้อมชื่อคนทำ</p>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
                {activityLog.map(log => {
                  const user = Object.values(USERS).find(u => u.id === log.userId);
                  const actionColors = {
                    add: 'bg-emerald-100 text-emerald-700',
                    edit: 'bg-blue-100 text-blue-700',
                    delete: 'bg-rose-100 text-rose-700',
                    export: 'bg-purple-100 text-purple-700',
                  };
                  const actionLabels = {
                    add: '+ เพิ่ม',
                    edit: '✎ แก้ไข',
                    delete: '× ลบ',
                    export: '↓ Export',
                  };
                  const date = new Date(log.timestamp);
                  return (
                    <div key={log.id} className="flex items-start gap-3 p-3 border-b border-stone-100 last:border-0 hover:bg-stone-50">
                      <div className="text-2xl flex-shrink-0">{user?.icon || '👤'}</div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-medium">{log.userName}</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${actionColors[log.action] || 'bg-stone-100 text-stone-600'}`}>
                            {actionLabels[log.action] || log.action}
                          </span>
                          <span className="text-xs text-amber-600 font-medium">{log.target}</span>
                        </div>
                        {log.details && <p className="text-sm text-stone-600 mt-0.5">{log.details}</p>}
                        <p className="text-xs text-stone-400 mt-0.5">
                          {date.toLocaleDateString('th-TH')} {date.toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
              <div className="flex gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-stone-700">
                  <strong>ระบบบันทึกอัตโนมัติ:</strong> ทุกการเพิ่ม/แก้/ลบ จะบันทึกพร้อมชื่อคนทำและเวลา
                  <br />💡 ใช้ตรวจสอบเวลาตัวเลขผิด → รู้ว่าใครเป็นคนแก้ตอนไหน
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {showJobModal && (
        <JobModal job={editingItem} partners={partners} stock={stock} onUpdateStock={saveStock}
          onClose={() => { setShowJobModal(false); setEditingItem(null); }}
          onSave={(data) => {
            if (editingItem) {
              saveJobs(jobs.map(j => j.id === editingItem.id ? data : j), 'edit', `แก้ไข: ${data.customer}`);
            } else {
              saveJobs([...jobs, { ...data, id: `job-${Date.now()}` }], 'add', `เพิ่ม: ${data.customer} (${data.salePrice} ฿)`);
            }
            setShowJobModal(false); setEditingItem(null);
          }}
        />
      )}
      {showStockModal && (
        <StockModal item={editingItem}
          onClose={() => { setShowStockModal(false); setEditingItem(null); }}
          onSave={(data) => {
            if (editingItem) {
              saveStock(stock.map(s => s.id === editingItem.id ? data : s), 'edit', `แก้ไข: ${data.name}`);
            } else {
              saveStock([...stock, { ...data, id: `stk-${Date.now()}` }], 'add', `เพิ่ม: ${data.name} (${data.qty} ${data.unit})`);
            }
            setShowStockModal(false); setEditingItem(null);
          }}
        />
      )}
      {showPartnerModal && (
        <PartnerModal partner={editingItem}
          onClose={() => { setShowPartnerModal(false); setEditingItem(null); }}
          onSave={(data) => {
            if (editingItem) {
              savePartners(partners.map(p => p.id === editingItem.id ? data : p), 'edit', `แก้ไข: ${data.name}`);
            } else {
              savePartners([...partners, { ...data, id: `p-${Date.now()}` }], 'add', `เพิ่ม: ${data.name}`);
            }
            setShowPartnerModal(false); setEditingItem(null);
          }}
        />
      )}
      {showTransactionModal && (
        <TransactionModal tx={editingItem} partners={partners} jobs={jobs}
          onClose={() => { setShowTransactionModal(false); setEditingItem(null); }}
          onSave={(data) => {
            if (editingItem) {
              saveTransactions(transactions.map(t => t.id === editingItem.id ? data : t), 'edit', `แก้ไข: ${data.description}`);
            } else {
              saveTransactions([...transactions, { ...data, id: `t-${Date.now()}` }], 'add', `เพิ่ม: ${data.description} (${data.amount} ฿)`);
            }
            setShowTransactionModal(false); setEditingItem(null);
          }}
        />
      )}
      {showCustomerModal && (
        <CustomerModal customer={editingItem} jobs={jobs}
          onClose={() => { setShowCustomerModal(false); setEditingItem(null); }}
          onSave={(data) => {
            if (editingItem) {
              saveCustomers(customers.map(c => c.id === editingItem.id ? data : c), 'edit', `แก้ไข: ${data.name}`);
            } else {
              saveCustomers([...customers, { ...data, id: `cust-${Date.now()}` }], 'add', `เพิ่ม: ${data.name}`);
            }
            setShowCustomerModal(false); setEditingItem(null);
          }}
        />
      )}
    </div>
  );
}

function StatCard({ icon: Icon, label, value, suffix, color, highlight }) {
  const colors = {
    emerald: 'from-emerald-400 to-emerald-600',
    rose: 'from-rose-400 to-rose-600',
    amber: 'from-amber-400 to-orange-500',
    blue: 'from-blue-400 to-blue-600',
  };
  return (
    <div className={`rounded-2xl p-4 shadow-sm ${highlight ? `bg-gradient-to-br ${colors[color]} text-white` : 'bg-white border border-stone-200'}`}>
      <div className="flex items-center gap-2 mb-2">
        <Icon className={`w-4 h-4 ${highlight ? 'text-white' : 'text-stone-500'}`} />
        <span className={`text-xs ${highlight ? 'text-white/80' : 'text-stone-500'}`}>{label}</span>
      </div>
      <div className={`display-font text-2xl md:text-3xl ${highlight ? 'text-white' : 'text-stone-800'}`}>
        {value}<span className="text-sm ml-1 opacity-70">{suffix}</span>
      </div>
    </div>
  );
}

function JobCard({ job, partners, fmt, fmt0, onEdit, onDelete }) {
  const investmentEntries = Object.entries(job.investments || {});
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-stone-200 animate-slide-up">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <h3 className="text-lg font-bold text-stone-800">{job.customer}</h3>
            <span className={`px-2 py-0.5 text-xs rounded-full font-medium ${job.status === 'completed' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
              {job.status === 'completed' ? '✓ เสร็จ' : '⏳ ดำเนินการ'}
            </span>
          </div>
          <p className="text-sm text-stone-500">{job.date} · {job.location}</p>
          <p className="text-sm text-amber-700 font-medium mt-1">{job.type}</p>
        </div>
        <div className="flex gap-1">
          <button onClick={onEdit} className="p-2 hover:bg-stone-100 rounded-lg"><Edit2 className="w-4 h-4 text-stone-500" /></button>
          <button onClick={onDelete} className="p-2 hover:bg-red-50 rounded-lg"><Trash2 className="w-4 h-4 text-red-400" /></button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 mb-3">
        <div className="bg-emerald-50 rounded-lg p-2 text-center"><div className="text-xs text-emerald-600">ยอดขาย</div><div className="font-bold text-emerald-700">{fmt0(job.salePrice)} ฿</div></div>
        <div className="bg-rose-50 rounded-lg p-2 text-center"><div className="text-xs text-rose-600">ต้นทุน</div><div className="font-bold text-rose-700">{fmt0(job.totalCost)} ฿</div></div>
        <div className="bg-amber-50 rounded-lg p-2 text-center"><div className="text-xs text-amber-600">กำไร</div><div className="font-bold text-amber-700">{fmt0(job.profit)} ฿</div></div>
      </div>
      {investmentEntries.length > 0 && (
        <div className="mb-3 p-3 bg-blue-50 rounded-lg border border-blue-100">
          <div className="text-xs font-medium text-blue-700 mb-1">💰 ใครออกเงินทุน</div>
          <div className="flex flex-wrap gap-2">
            {investmentEntries.map(([pid, amt]) => {
              const partner = partners.find(p => p.id === pid);
              return (
                <div key={pid} className="text-xs bg-white px-2 py-1 rounded-md">
                  <span className="font-medium">{partner?.name || pid}</span>: <span className="text-blue-600 font-mono">{fmt(amt)}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {job.costsByCategory && Object.keys(job.costsByCategory).length > 0 && (
        <details className="text-sm">
          <summary className="cursor-pointer text-stone-600 hover:text-amber-600 font-medium">ดูรายละเอียดต้นทุนแยกหมวด</summary>
          <div className="mt-2 space-y-2">
            {Object.entries(job.costsByCategory).map(([catId, items]) => {
              if (!items || items.length === 0) return null;
              const subtotal = items.reduce((s, it) => s + Number(it.amount || 0), 0);
              return (
                <div key={catId} className="bg-stone-50 rounded-lg p-2">
                  <div className="flex justify-between text-xs font-semibold text-amber-700 mb-1">
                    <span>{getCatLabel(catId)}</span><span>{fmt0(subtotal)} ฿</span>
                  </div>
                  <div className="space-y-0.5 pl-3">
                    {items.map((it, i) => (
                      <div key={i} className="flex justify-between text-xs text-stone-600">
                        <span>{it.item}</span><span className="font-mono">{fmt0(it.amount)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </details>
      )}
      {job.note && <div className="mt-3 text-sm text-stone-500 bg-stone-50 rounded-lg p-2">💬 {job.note}</div>}
    </div>
  );
}

function StockRow({ item, fmt, fmt0, onEdit, onDelete }) {
  const isHistory = Number(item.qty) === 0;
  const ownerColors = {
    'อาม': 'bg-blue-100 text-blue-700',
    'โฟน': 'bg-purple-100 text-purple-700',
    'พ่อ': 'bg-green-100 text-green-700',
    'บริษัท': 'bg-amber-100 text-amber-700',
  };
  // คำนวณ low-stock: ถ้าเป็นสายไฟและเหลือ < 20 ม. หรือของอื่นเหลือ < 5 ชิ้น
  const isLowStock = !isHistory && (
    (item.category === 'wire' && Number(item.qty) < 20) ||
    (item.category !== 'wire' && Number(item.qty) > 0 && Number(item.qty) < 3)
  );
  const stockValue = Number(item.qty) * Number(item.unitCost);
  
  return (
    <div className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${isHistory ? 'bg-stone-50 opacity-60' : 'hover:bg-stone-50'}`}>
      <div className="flex-1 min-w-0">
        <div className="font-medium text-stone-800 truncate flex items-center gap-2 flex-wrap">
          {item.name}
          {item.owner && item.owner !== '-' && (
            <span className={`text-xs px-1.5 py-0.5 rounded font-medium ${ownerColors[item.owner] || 'bg-stone-200 text-stone-700'}`}>
              {item.owner}
            </span>
          )}
          {isLowStock && <span className="text-xs bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded font-medium">⚠ เหลือน้อย</span>}
          {isHistory && <span className="text-xs bg-stone-200 px-1.5 py-0.5 rounded">ประวัติ</span>}
        </div>
        <div className="text-xs text-stone-500">
          {item.purchaseDate && <span>📅 {item.purchaseDate} · </span>}
          {item.supplier && `${item.supplier}`}
          {item.note && ` · ${item.note}`}
        </div>
      </div>
      <div className="text-center">
        <div className={`text-lg font-bold ${Number(item.qty) > 0 ? (isLowStock ? 'text-orange-600' : 'text-emerald-600') : 'text-stone-400'}`}>{fmt(item.qty)}</div>
        <div className="text-xs text-stone-400">{item.unit || 'ชิ้น'}</div>
      </div>
      <div className="text-right">
        <div className="font-semibold text-stone-700">{fmt(item.unitCost)} ฿</div>
        <div className="text-xs text-stone-400">/{item.unit || 'ชิ้น'}</div>
        {!isHistory && stockValue > 0 && (
          <div className="text-xs text-amber-600 font-medium mt-0.5">รวม {fmt0(stockValue)} ฿</div>
        )}
      </div>
      <div className="flex gap-1">
        <button onClick={onEdit} className="p-2 hover:bg-stone-200 rounded-lg"><Edit2 className="w-4 h-4 text-stone-500" /></button>
        <button onClick={onDelete} className="p-2 hover:bg-red-50 rounded-lg"><Trash2 className="w-4 h-4 text-red-400" /></button>
      </div>
    </div>
  );
}

function Modal({ title, children, onClose, wide }) {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end md:items-center justify-center p-0 md:p-4 animate-fade-in">
      <div className={`bg-white w-full ${wide ? 'md:max-w-2xl' : 'md:max-w-lg'} md:rounded-2xl rounded-t-2xl shadow-xl max-h-[92vh] overflow-hidden flex flex-col animate-slide-up`}>
        <div className="flex items-center justify-between p-4 border-b border-stone-200">
          <h3 className="display-font text-xl text-stone-800">{title}</h3>
          <button onClick={onClose} className="p-1 hover:bg-stone-100 rounded-lg"><X className="w-5 h-5" /></button>
        </div>
        <div className="overflow-y-auto p-4 flex-1">{children}</div>
      </div>
    </div>
  );
}

function Field({ label, children, hint }) {
  return (
    <div className="mb-3">
      <label className="block text-sm font-medium text-stone-700 mb-1">{label}</label>
      {children}
      {hint && <p className="text-xs text-stone-500 mt-1">{hint}</p>}
    </div>
  );
}

const inputCls = "w-full px-3 py-2 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent";

function JobModal({ job, partners, stock = [], onUpdateStock, onClose, onSave }) {
  const [form, setForm] = useState(job || {
    date: new Date().toISOString().split('T')[0],
    customer: '', location: '', type: '',
    salePrice: 0, originalPrice: 0, discount: 0, discountNote: '',
    status: 'pending', investments: {}, costsByCategory: {},
    totalCost: 0, profit: 0, note: ''
  });
  const [costsByCategory, setCostsByCategory] = useState(form.costsByCategory || {});
  const [investments, setInvestments] = useState(form.investments || {});
  const [stockPicker, setStockPicker] = useState(null); // { catId, mode: 'pick' | 'qty', stockId }
  const [pickQty, setPickQty] = useState('');
  // Track stock movements: { stockId: qtyUsed } - เก็บไว้เพื่อหักสต๊อกตอน save
  const [stockMovements, setStockMovements] = useState(() => {
    // ถ้าเป็นการแก้ไขงาน เริ่มจากของที่เคยเบิกแล้วเป็น 0 (ไม่หักซ้ำ)
    return {};
  });

  const update = (f, v) => setForm({...form, [f]: v});
  
  const addCostItem = (catId) => setCostsByCategory({...costsByCategory, [catId]: [...(costsByCategory[catId] || []), { item: '', amount: 0 }]});
  
  // เพิ่มรายการจากสต๊อก
  const addCostFromStock = (catId, stockItem, qty) => {
    const totalAmount = Number(qty) * Number(stockItem.unitCost);
    const newItem = {
      item: `${stockItem.name} × ${qty} ${stockItem.unit || 'ชิ้น'} (เบิกสต๊อก)`,
      amount: Number(totalAmount.toFixed(2)),
      stockId: stockItem.id,
      qtyUsed: Number(qty),
    };
    setCostsByCategory({
      ...costsByCategory,
      [catId]: [...(costsByCategory[catId] || []), newItem]
    });
    setStockMovements({
      ...stockMovements,
      [stockItem.id]: (stockMovements[stockItem.id] || 0) + Number(qty)
    });
    setStockPicker(null);
    setPickQty('');
  };
  
  const updateCostItem = (catId, i, field, val) => {
    const newItems = [...(costsByCategory[catId] || [])];
    newItems[i] = { ...newItems[i], [field]: val };
    setCostsByCategory({...costsByCategory, [catId]: newItems});
  };
  
  const removeCostItem = (catId, i) => {
    const item = (costsByCategory[catId] || [])[i];
    // ถ้าเป็นรายการเบิกสต๊อก คืนให้สต๊อก
    if (item && item.stockId) {
      setStockMovements({
        ...stockMovements,
        [item.stockId]: Math.max(0, (stockMovements[item.stockId] || 0) - Number(item.qtyUsed || 0))
      });
    }
    const newItems = (costsByCategory[catId] || []).filter((_, idx) => idx !== i);
    if (newItems.length === 0) {
      const { [catId]: _, ...rest } = costsByCategory;
      setCostsByCategory(rest);
    } else setCostsByCategory({...costsByCategory, [catId]: newItems});
  };

  const totalCost = useMemo(() => {
    return Object.values(costsByCategory).reduce((sum, items) => sum + (items || []).reduce((s, it) => s + Number(it.amount || 0), 0), 0);
  }, [costsByCategory]);

  const totalInvestment = Object.values(investments).reduce((s, v) => s + Number(v || 0), 0);
  const investmentBalance = totalCost - totalInvestment;

  const handleSave = () => {
    const profit = Number(form.salePrice || 0) - totalCost;
    const cleanInv = Object.entries(investments).reduce((acc, [k, v]) => {
      if (Number(v) > 0) acc[k] = Number(v);
      return acc;
    }, {});
    
    // หักสต๊อกตามที่เบิก
    if (Object.keys(stockMovements).length > 0 && onUpdateStock) {
      const newStock = stock.map(s => {
        if (stockMovements[s.id]) {
          return { ...s, qty: Math.max(0, Number(s.qty) - stockMovements[s.id]) };
        }
        return s;
      });
      onUpdateStock(newStock);
    }
    
    onSave({...form, costsByCategory, investments: cleanInv, totalCost, profit});
  };

  return (
    <Modal title={job ? 'แก้ไขงาน' : 'เพิ่มงานใหม่'} onClose={onClose} wide>
      <Field label="วันที่"><input type="date" value={form.date} onChange={e => update('date', e.target.value)} className={inputCls} /></Field>
      <Field label="ลูกค้า"><input value={form.customer} onChange={e => update('customer', e.target.value)} className={inputCls} placeholder="ชื่อลูกค้า" /></Field>
      <Field label="สถานที่"><input value={form.location} onChange={e => update('location', e.target.value)} className={inputCls} /></Field>
      <Field label="ประเภทงาน"><input value={form.type} onChange={e => update('type', e.target.value)} className={inputCls} placeholder="เช่น 5kW Hybrid" /></Field>
      <div className="grid grid-cols-2 gap-3">
        <Field label="ราคาขาย (฿)"><input type="number" value={form.salePrice} onChange={e => update('salePrice', Number(e.target.value))} className={inputCls} /></Field>
        <Field label="สถานะ">
          <select value={form.status} onChange={e => update('status', e.target.value)} className={inputCls}>
            <option value="pending">กำลังดำเนินการ</option>
            <option value="completed">เสร็จแล้ว</option>
          </select>
        </Field>
      </div>

      <div className="mt-4 mb-2 bg-blue-50 border border-blue-200 rounded-xl p-3">
        <label className="text-sm font-bold text-blue-800 mb-2 block">💰 ใครออกเงินทุนเท่าไหร่</label>
        <div className="space-y-2">
          {partners.map(p => (
            <div key={p.id} className="flex items-center gap-2">
              <span className="text-sm w-24 text-stone-700">{p.name}</span>
              <input type="number" step="0.01" value={investments[p.id] || ''} onChange={e => setInvestments({...investments, [p.id]: e.target.value})} className={inputCls + " flex-1"} placeholder="0" />
              <span className="text-xs text-stone-500">฿</span>
            </div>
          ))}
        </div>
        <div className="mt-2 pt-2 border-t border-blue-200 flex justify-between text-sm">
          <span>รวม: <span className="font-bold">{new Intl.NumberFormat('th-TH', {maximumFractionDigits: 2}).format(totalInvestment)} ฿</span></span>
          <span className={Math.abs(investmentBalance) < 0.01 ? 'text-emerald-600 font-medium' : 'text-orange-600'}>
            {Math.abs(investmentBalance) < 0.01 ? '✓ ตรงกับต้นทุน' : `ส่วนต่าง ${investmentBalance.toFixed(2)} ฿`}
          </span>
        </div>
      </div>

      <div className="mt-4 mb-2">
        <label className="text-sm font-bold text-stone-700 mb-2 block">📋 ต้นทุนแยกหมวด</label>
        {COST_CATEGORIES.map(cat => {
          const items = costsByCategory[cat.id] || [];
          const subtotal = items.reduce((s, it) => s + Number(it.amount || 0), 0);
          // เช็คว่าหมวดนี้มีของในสต๊อกไหม
          const stockInCat = stock.filter(s => s.category === cat.id && Number(s.qty) > 0);
          
          if (items.length === 0) {
            return (
              <button key={cat.id} onClick={() => addCostItem(cat.id)} className="text-xs bg-stone-100 hover:bg-amber-100 px-3 py-1.5 rounded-full mr-2 mb-2 inline-flex items-center gap-1 transition-colors">
                <Plus className="w-3 h-3" /> {cat.label}
                {stockInCat.length > 0 && <span className="ml-1 text-emerald-600">📦{stockInCat.length}</span>}
              </button>
            );
          }
          return (
            <div key={cat.id} className="border border-stone-200 rounded-xl p-3 mb-2">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-amber-700">{cat.label}</span>
                <span className="text-sm font-mono">{subtotal.toFixed(2)} ฿</span>
              </div>
              {items.map((item, i) => (
                <div key={i} className={`flex gap-2 mb-2 ${item.stockId ? 'bg-emerald-50 p-2 rounded-lg' : ''}`}>
                  {item.stockId && <span className="text-emerald-600 self-center" title="เบิกจากสต๊อก">📦</span>}
                  <input value={item.item} onChange={e => updateCostItem(cat.id, i, 'item', e.target.value)} className={inputCls + " flex-1"} placeholder="ชื่อรายการ" disabled={!!item.stockId} />
                  <input type="number" step="0.01" value={item.amount} onChange={e => updateCostItem(cat.id, i, 'amount', Number(e.target.value))} className={inputCls + " w-28"} placeholder="0" disabled={!!item.stockId} />
                  <button onClick={() => removeCostItem(cat.id, i)} className="p-2 hover:bg-red-50 rounded-lg"><Trash2 className="w-4 h-4 text-red-400" /></button>
                </div>
              ))}
              <div className="flex gap-2 flex-wrap">
                <button onClick={() => addCostItem(cat.id)} className="text-xs text-amber-600 font-medium flex items-center gap-1 hover:bg-amber-50 px-2 py-1 rounded">
                  <Plus className="w-3 h-3" /> เพิ่มรายการ
                </button>
                {stockInCat.length > 0 && (
                  <button onClick={() => setStockPicker({ catId: cat.id, mode: 'pick' })} className="text-xs text-emerald-600 font-medium flex items-center gap-1 hover:bg-emerald-50 px-2 py-1 rounded">
                    📦 เบิกจากสต๊อก ({stockInCat.length})
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Stock Picker Modal */}
      {stockPicker && (
        <div className="fixed inset-0 bg-black/60 z-[60] flex items-center justify-center p-4" onClick={() => setStockPicker(null)}>
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md max-h-[80vh] overflow-hidden flex flex-col" onClick={e => e.stopPropagation()}>
            <div className="p-4 border-b border-stone-200 flex items-center justify-between">
              <div>
                <h3 className="display-font text-lg text-stone-800">📦 เบิกจากสต๊อก</h3>
                <p className="text-xs text-stone-500">{getCatLabel(stockPicker.catId)}</p>
              </div>
              <button onClick={() => setStockPicker(null)} className="p-1 hover:bg-stone-100 rounded-lg"><X className="w-5 h-5" /></button>
            </div>
            <div className="overflow-y-auto p-4 flex-1">
              {stockPicker.mode === 'pick' && (
                <div className="space-y-2">
                  {stock.filter(s => s.category === stockPicker.catId && Number(s.qty) > 0).map(s => {
                    const usedAlready = stockMovements[s.id] || 0;
                    const available = Number(s.qty) - usedAlready;
                    return (
                      <button key={s.id} 
                        onClick={() => available > 0 && setStockPicker({ ...stockPicker, mode: 'qty', stockItem: s, available })}
                        disabled={available <= 0}
                        className={`w-full text-left p-3 rounded-xl border transition-colors ${available > 0 ? 'border-stone-200 hover:border-emerald-400 hover:bg-emerald-50' : 'border-stone-100 opacity-50 cursor-not-allowed'}`}>
                        <div className="font-medium text-stone-800">{s.name}</div>
                        <div className="text-xs text-stone-500 mt-1 flex justify-between">
                          <span>{s.unitCost.toFixed(2)} ฿/{s.unit || 'ชิ้น'}</span>
                          <span className={available > 0 ? 'text-emerald-600 font-medium' : 'text-stone-400'}>
                            เหลือ {available.toFixed(s.category === 'wire' ? 1 : 0)} {s.unit || 'ชิ้น'}
                            {usedAlready > 0 && <span className="text-amber-600"> (เบิกแล้ว {usedAlready})</span>}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
              {stockPicker.mode === 'qty' && stockPicker.stockItem && (
                <div>
                  <div className="bg-stone-50 rounded-xl p-3 mb-3">
                    <div className="font-medium">{stockPicker.stockItem.name}</div>
                    <div className="text-xs text-stone-500 mt-1">
                      ราคา: {stockPicker.stockItem.unitCost.toFixed(2)} ฿/{stockPicker.stockItem.unit || 'ชิ้น'} ·
                      เหลือ {stockPicker.available.toFixed(stockPicker.stockItem.category === 'wire' ? 1 : 0)} {stockPicker.stockItem.unit || 'ชิ้น'}
                    </div>
                  </div>
                  <Field label={`จำนวนที่เบิก (${stockPicker.stockItem.unit || 'ชิ้น'})`}>
                    <input type="number" step="0.1" autoFocus value={pickQty}
                      onChange={e => setPickQty(e.target.value)}
                      max={stockPicker.available}
                      className={inputCls} placeholder={`สูงสุด ${stockPicker.available}`} />
                  </Field>
                  {Number(pickQty) > 0 && (
                    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 mb-3">
                      <div className="flex justify-between text-sm">
                        <span>คำนวณราคา:</span>
                        <span className="font-bold text-emerald-700">
                          {(Number(pickQty) * stockPicker.stockItem.unitCost).toFixed(2)} ฿
                        </span>
                      </div>
                      <div className="text-xs text-stone-500 mt-1">
                        {pickQty} × {stockPicker.stockItem.unitCost.toFixed(2)}
                      </div>
                    </div>
                  )}
                  <div className="flex gap-2">
                    <button onClick={() => setStockPicker({ ...stockPicker, mode: 'pick' })}
                      className="flex-1 py-2 border border-stone-300 rounded-xl text-stone-600">
                      ← กลับ
                    </button>
                    <button 
                      onClick={() => {
                        if (Number(pickQty) > 0 && Number(pickQty) <= stockPicker.available) {
                          addCostFromStock(stockPicker.catId, stockPicker.stockItem, Number(pickQty));
                        }
                      }}
                      disabled={!(Number(pickQty) > 0 && Number(pickQty) <= stockPicker.available)}
                      className="flex-1 py-2 bg-emerald-500 hover:bg-emerald-600 disabled:bg-stone-300 text-white rounded-xl font-medium">
                      เบิก
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-3 mb-3">
        <div className="flex justify-between text-sm mb-1">
          <span>ยอดขาย:</span>
          <span className="font-bold">{new Intl.NumberFormat('th-TH').format(form.salePrice)} ฿</span>
        </div>
        <div className="flex justify-between text-sm mb-1">
          <span>ต้นทุนรวม:</span>
          <span className="font-bold text-rose-600">{totalCost.toFixed(2)} ฿</span>
        </div>
        <div className="flex justify-between text-base pt-1 border-t border-amber-300">
          <span className="font-bold">กำไร:</span>
          <span className="font-bold text-amber-700">{(Number(form.salePrice || 0) - totalCost).toFixed(2)} ฿</span>
        </div>
      </div>

      <Field label="หมายเหตุ"><textarea value={form.note} onChange={e => update('note', e.target.value)} className={inputCls} rows={2} /></Field>
      <button onClick={handleSave} className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-xl font-medium mt-4 flex items-center justify-center gap-2">
        <Save className="w-4 h-4" /> บันทึกงาน
      </button>
    </Modal>
  );
}

function StockModal({ item, onClose, onSave }) {
  const [form, setForm] = useState(item || {
    name: '', category: 'panel', qty: 0, unitCost: 0, supplier: '', owner: 'บริษัท', note: '',
    purchaseDate: new Date().toISOString().split('T')[0],
    unit: 'ชิ้น', perRoll: 0, rollPrice: 0
  });
  const update = (f, v) => setForm({...form, [f]: v});
  const isWire = form.category === 'wire';

  const handleRollChange = (perRoll, rollPrice) => {
    const updated = { ...form, perRoll, rollPrice };
    if (Number(perRoll) > 0 && Number(rollPrice) > 0) {
      updated.unitCost = Number(rollPrice) / Number(perRoll);
    }
    setForm(updated);
  };

  return (
    <Modal title={item ? 'แก้ไขสินค้า' : 'เพิ่มสินค้า'} onClose={onClose}>
      <Field label="ชื่อสินค้า"><input value={form.name} onChange={e => update('name', e.target.value)} className={inputCls} /></Field>
      <Field label="หมวดหมู่">
        <select value={form.category} onChange={e => {
          const cat = e.target.value;
          update('category', cat);
          if (cat === 'wire' && form.unit !== 'เมตร') update('unit', 'เมตร');
        }} className={inputCls}>
          {STOCK_CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.label}</option>)}
        </select>
      </Field>
      <Field label="วันที่ซื้อ"><input type="date" value={form.purchaseDate || ''} onChange={e => update('purchaseDate', e.target.value)} className={inputCls} /></Field>

      {isWire ? (
        <>
          <Field label="ซื้อเป็นม้วน" hint="กรอกข้อมูลม้วนแล้วระบบจะคำนวณราคาต่อเมตรให้">
            <div className="grid grid-cols-2 gap-2">
              <input type="number" value={form.perRoll || ''} onChange={e => handleRollChange(Number(e.target.value), form.rollPrice)} className={inputCls} placeholder="ม้วนละกี่เมตร" />
              <input type="number" value={form.rollPrice || ''} onChange={e => handleRollChange(form.perRoll, Number(e.target.value))} className={inputCls} placeholder="ราคา/ม้วน (฿)" />
            </div>
          </Field>
          <Field label="คงเหลือ (เมตร)"><input type="number" step="0.1" value={form.qty} onChange={e => update('qty', Number(e.target.value))} className={inputCls} /></Field>
          <Field label="ราคา/เมตร (คำนวณอัตโนมัติ)"><input type="number" step="0.01" value={Number(form.unitCost).toFixed(2)} onChange={e => update('unitCost', Number(e.target.value))} className={inputCls} /></Field>
        </>
      ) : (
        <>
          <Field label="หน่วย">
            <select value={form.unit || 'ชิ้น'} onChange={e => update('unit', e.target.value)} className={inputCls}>
              <option>ชิ้น</option><option>แผ่น</option><option>เครื่อง</option><option>ลูก</option><option>ตู้</option><option>อัน</option><option>ชุด</option>
            </select>
          </Field>
          <div className="grid grid-cols-2 gap-3">
            <Field label="จำนวนคงเหลือ"><input type="number" value={form.qty} onChange={e => update('qty', Number(e.target.value))} className={inputCls} /></Field>
            <Field label="ราคา/หน่วย (฿)"><input type="number" step="0.01" value={form.unitCost} onChange={e => update('unitCost', Number(e.target.value))} className={inputCls} /></Field>
          </div>
        </>
      )}

      <Field label="Supplier"><input value={form.supplier} onChange={e => update('supplier', e.target.value)} className={inputCls} /></Field>
      <Field label="ผู้รับผิดชอบ (เจ้าของเงิน)" hint="ใครเป็นคนออกเงินซื้อ - บริษัทคือใช้กำไร/เงินทุนรวม">
        <select value={form.owner || 'บริษัท'} onChange={e => update('owner', e.target.value)} className={inputCls}>
          <option>บริษัท</option>
          <option>อาม</option>
          <option>โฟน</option>
          <option>พ่อ</option>
          <option>-</option>
        </select>
      </Field>
      <Field label="หมายเหตุ"><input value={form.note} onChange={e => update('note', e.target.value)} className={inputCls} /></Field>
      <button onClick={() => onSave(form)} className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-xl font-medium mt-4 flex items-center justify-center gap-2">
        <Save className="w-4 h-4" /> บันทึก
      </button>
    </Modal>
  );
}

function PartnerModal({ partner, onClose, onSave }) {
  const [form, setForm] = useState(partner || {
    name: '', fullName: '', role: '', bankAccount: '', totalReturn: 0, note: ''
  });
  const update = (f, v) => setForm({...form, [f]: v});
  return (
    <Modal title={partner ? 'แก้ไขสมาชิก' : 'เพิ่มสมาชิก'} onClose={onClose}>
      <Field label="ชื่อเล่น"><input value={form.name} onChange={e => update('name', e.target.value)} className={inputCls} /></Field>
      <Field label="ชื่อ-นามสกุล"><input value={form.fullName} onChange={e => update('fullName', e.target.value)} className={inputCls} /></Field>
      <Field label="บทบาท"><input value={form.role} onChange={e => update('role', e.target.value)} className={inputCls} /></Field>
      <Field label="เลขบัญชีธนาคาร"><input value={form.bankAccount} onChange={e => update('bankAccount', e.target.value)} className={inputCls} /></Field>
      <Field label="ปันผลสะสม (฿)" hint="ยอดลงทุนคำนวณจากงานอัตโนมัติ ไม่ต้องกรอก"><input type="number" value={form.totalReturn} onChange={e => update('totalReturn', Number(e.target.value))} className={inputCls} /></Field>
      <Field label="หมายเหตุ"><textarea value={form.note} onChange={e => update('note', e.target.value)} className={inputCls} rows={2} /></Field>
      <button onClick={() => onSave(form)} className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-xl font-medium mt-4 flex items-center justify-center gap-2">
        <Save className="w-4 h-4" /> บันทึก
      </button>
    </Modal>
  );
}

function TransactionModal({ tx, partners, jobs, onClose, onSave }) {
  const [form, setForm] = useState(tx || {
    date: new Date().toISOString().split('T')[0],
    type: 'income', category: '', amount: 0, description: '',
    jobId: '', partnerId: ''
  });
  const update = (f, v) => setForm({...form, [f]: v});

  const incomeCategories = ['รายได้จากงาน', 'เงินกู้/ยืม', 'เงินคืน', 'อื่นๆ (รายรับ)'];
  const expenseCategories = ['ต้นทุนงาน', 'ปันผล', 'ค่าใช้จ่ายทั่วไป', 'จ่ายคืนเงินกู้', 'อื่นๆ (รายจ่าย)'];
  const categories = form.type === 'income' ? incomeCategories : expenseCategories;

  return (
    <Modal title={tx ? 'แก้ไขรายการ' : 'เพิ่มรายการ'} onClose={onClose}>
      <Field label="วันที่"><input type="date" value={form.date} onChange={e => update('date', e.target.value)} className={inputCls} /></Field>
      
      <Field label="ประเภท">
        <div className="grid grid-cols-2 gap-2">
          <button onClick={() => update('type', 'income')}
            className={`py-2 rounded-xl font-medium transition-colors ${form.type === 'income' ? 'bg-emerald-500 text-white' : 'bg-stone-100'}`}>
            ↙ รายรับ
          </button>
          <button onClick={() => update('type', 'expense')}
            className={`py-2 rounded-xl font-medium transition-colors ${form.type === 'expense' ? 'bg-rose-500 text-white' : 'bg-stone-100'}`}>
            ↗ รายจ่าย
          </button>
        </div>
      </Field>

      <Field label="หมวดหมู่">
        <select value={form.category} onChange={e => update('category', e.target.value)} className={inputCls}>
          <option value="">-- เลือกหมวด --</option>
          {categories.map(c => <option key={c}>{c}</option>)}
        </select>
      </Field>

      <Field label="จำนวนเงิน (฿)"><input type="number" step="0.01" value={form.amount} onChange={e => update('amount', Number(e.target.value))} className={inputCls} /></Field>

      <Field label="รายละเอียด"><textarea value={form.description} onChange={e => update('description', e.target.value)} className={inputCls} rows={2} placeholder="เช่น โอนทุนให้พ่อ, ค่าน้ำมันลงเสนอราคา" /></Field>

      <Field label="ผูกกับคน (optional)" hint="ใครเป็นเจ้าของรายการนี้">
        <select value={form.partnerId} onChange={e => update('partnerId', e.target.value)} className={inputCls}>
          <option value="">-- ไม่ระบุ --</option>
          {partners.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
        </select>
      </Field>

      <Field label="ผูกกับงาน (optional)" hint="ถ้าเป็นรายการของงานใดงานหนึ่ง">
        <select value={form.jobId} onChange={e => update('jobId', e.target.value)} className={inputCls}>
          <option value="">-- ไม่ระบุ --</option>
          {jobs.map(j => <option key={j.id} value={j.id}>{j.customer} ({j.date})</option>)}
        </select>
      </Field>

      <button onClick={() => onSave(form)} className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-xl font-medium mt-4 flex items-center justify-center gap-2">
        <Save className="w-4 h-4" /> บันทึก
      </button>
    </Modal>
  );
}

function CustomerModal({ customer, jobs, onClose, onSave }) {
  const [form, setForm] = useState(customer || {
    name: '', phone: '', address: '', mapLink: '',
    installDate: new Date().toISOString().split('T')[0],
    system: '', warranty: '', jobId: '', note: ''
  });
  const update = (f, v) => setForm({...form, [f]: v});

  return (
    <Modal title={customer ? 'แก้ไขลูกค้า' : 'เพิ่มลูกค้า'} onClose={onClose}>
      <Field label="ชื่อ-สกุล / ชื่อบริษัท">
        <input value={form.name} onChange={e => update('name', e.target.value)} className={inputCls} placeholder="พี่เกรียงศักดิ์" />
      </Field>
      <Field label="เบอร์โทร">
        <input value={form.phone} onChange={e => update('phone', e.target.value)} className={inputCls} placeholder="08x-xxx-xxxx" type="tel" />
      </Field>
      <Field label="ที่อยู่">
        <textarea value={form.address} onChange={e => update('address', e.target.value)} className={inputCls} rows={2} />
      </Field>
      <Field label="ลิงก์ Google Maps" hint="คัดลอกลิงก์จาก Google Maps มาวางได้เลย">
        <input value={form.mapLink} onChange={e => update('mapLink', e.target.value)} className={inputCls} placeholder="https://maps.google.com/..." />
      </Field>
      <Field label="วันติดตั้ง">
        <input type="date" value={form.installDate || ''} onChange={e => update('installDate', e.target.value)} className={inputCls} />
      </Field>
      <Field label="ระบบที่ติดตั้ง">
        <input value={form.system} onChange={e => update('system', e.target.value)} className={inputCls} placeholder="5kW Hybrid + แบต 16kW" />
      </Field>
      <Field label="การรับประกัน">
        <input value={form.warranty} onChange={e => update('warranty', e.target.value)} className={inputCls} placeholder="แผง 30 ปี · Inverter 10 ปี · ติดตั้ง 5 ปี" />
      </Field>
      <Field label="ผูกกับงาน (optional)">
        <select value={form.jobId} onChange={e => update('jobId', e.target.value)} className={inputCls}>
          <option value="">-- ไม่ระบุ --</option>
          {jobs.map(j => <option key={j.id} value={j.id}>{j.customer} ({j.date})</option>)}
        </select>
      </Field>
      <Field label="หมายเหตุ">
        <textarea value={form.note} onChange={e => update('note', e.target.value)} className={inputCls} rows={2} />
      </Field>
      <button onClick={() => onSave(form)} className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-xl font-medium mt-4 flex items-center justify-center gap-2">
        <Save className="w-4 h-4" /> บันทึก
      </button>
    </Modal>
  );
}


// ============== RENDER APP ==============
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
