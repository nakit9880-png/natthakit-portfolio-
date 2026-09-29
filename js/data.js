// Initial Portfolio Data Store for นายณัฏฐกิตติ์ ขวาลา (Natthakit Khwala)
const DEFAULT_PORTFOLIO_DATA = {
  profile: {
    fullName: "นายณัฏฐกิตติ์ ขวาลา",
    englishName: "Natthakit Khwala",
    nickname: "กิต",
    studentId: "69322110062-0",
    university: "มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน วิทยาเขตขอนแก่น",
    universityShort: "RMUTI Khon Kaen Campus",
    faculty: "คณะครุศาสตร์อุตสาหกรรม",
    major: "สาขาครุศาสตร์อุตสาหกรรมไฟฟ้า",
    phone: "0838585241",
    email: "nakit9880@gmail.com",
    birthdate: "04 พฤศจิกายน 2550",
    birthdateIso: "2007-11-04",
    age: 18,
    nationality: "ไทย",
    ethnicity: "ไทย",
    headline: "BUILD WITH PRECISION & PASSION",
    subheadline: "ครุศาสตร์อุตสาหกรรมไฟฟ้า • RMUTI KKC",
    tagline: "มุ่งมั่นพัฒนาระบบไฟฟ้า เทคโนโลยีอุตสาหกรรม และการถ่ายทอดองค์ความรู้ด้วยตรรกะ ความคิดสร้างสรรค์ และสมาธิที่แน่วแน่",
    avatarUrl: "assets/profile.png",
    skills: [
      {
        id: "focus",
        title: "DEEP FOCUS / สมาธิจดจ่อ",
        description: "มีสมาธิสูง สามารถจดจ่อกับงานที่ซับซ้อน งานคำนวณ หรืองานประดิษฐ์ได้ต่อเนื่องเป็นเวลานาน",
        icon: "zap"
      },
      {
        id: "drawing",
        title: "TECHNICAL ART / ศิลปะและดรออิ้ง",
        description: "ชอบวาดรูป มีทักษะด้านงานเขียนแบบ ไดอะแกรมวงจรไฟฟ้า และ Visual Design ถ่ายทอดภาพได้ชัดเจน",
        icon: "pen-tool"
      },
      {
        id: "electrical",
        title: "ELECTRICAL SKILLS / ช่างไฟฟ้าอุตสาหกรรม",
        description: "พื้นฐานงานติดตั้งระบบไฟฟ้า การต่อวงจรควบคุม และหลักความปลอดภัยทางวิศวกรรม",
        icon: "cpu"
      },
      {
        id: "pedagogy",
        title: "PEDAGOGICAL MIND / จิตวิญญาณครูช่าง",
        description: "มุ่งมั่นในการเรียนรู้วิธีการสอน การจัดทำสื่อ และการถ่ายทอดองค์ความรู้ช่างสู่นักเรียน",
        icon: "book-open"
      }
    ],
    stats: [
      { label: "GPA ม.ต้น", value: "3.50", unit: "เกรดเฉลี่ย" },
      { label: "อายุ", value: "18", unit: "ปีบริบูรณ์" },
      { label: "รหัสนักศึกษา", value: "69322110062-0", unit: "RMUTI" },
      { label: "ความจดจ่อ", value: "100%", unit: "Deep Focus" }
    ]
  },

  education: [
    {
      id: "bachelor",
      level: "ระดับปริญญาตรี (ป.ตรี)",
      degree: "ครุศาสตร์อุตสาหกรรมบัณฑิต (ค.อ.บ.)",
      major: "สาขาครุศาสตร์อุตสาหกรรมไฟฟ้า",
      faculty: "คณะครุศาสตร์อุตสาหกรรม",
      institution: "มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน วิทยาเขตขอนแก่น",
      status: "กำลังศึกษา (Current Student)",
      period: "2567 - ปัจจุบัน",
      gpa: "กำลังศึกษา",
      highlights: [
        "ศึกษาทฤษฎีวงจรไฟฟ้า ระบบไฟฟ้ากำลัง และอิเล็กทรอนิกส์อุตสาหกรรม",
        "ศึกษาจิตวิทยาและเทคนิควิธีการสอนทางวิศวกรรมศาสตร์และอาชีวศึกษา",
        "ปฏิบัติการทดลองในห้องแล็บไฟฟ้ากำลังและการออกแบบระบบควบคุม"
      ]
    },
    {
      id: "vocational",
      level: "ระดับประกาศนียบัตรวิชาชีพ (ปวช.)",
      degree: "ประกาศนียบัตรวิชาชีพ",
      major: "ช่างอุตสาหกรรม",
      faculty: "คณะครุศาสตร์อุตสาหกรรม",
      institution: "มหาวิทยาลัยเทคโนโลยีราชมงคลอีสาน วิทยาเขตขอนแก่น",
      status: "สำเร็จการศึกษา",
      period: "2564 - 2566",
      gpa: "2.50",
      highlights: [
        "ฝึกทักษะงานฝีมือช่าง งานกล งานเชื่อม และการเดินสายไฟฟ้าพื้นฐาน",
        "เรียนรู้กฎและมาตรฐานความปลอดภัยในโรงงานอุตสาหกรรม",
        "ปฏิบัติงานโครงการสิ่งประดิษฐ์และงานช่างเทคนิค"
      ]
    },
    {
      id: "secondary",
      level: "ระดับมัธยมศึกษาตอนต้น",
      degree: "มัธยมศึกษาปีที่ 1 - 3",
      major: "สายการเรียนทั่วไป",
      faculty: "-",
      institution: "โรงเรียนมหาไถ่ศึกษาภาคตะวันออกเฉียงเหนือ",
      status: "สำเร็จการศึกษา",
      period: "2561 - 2563",
      gpa: "3.50",
      highlights: [
        "สำเร็จการศึกษาด้วยผลการเรียนดีเด่น (GPAX 3.50)",
        "พัฒนาความถนัดด้านคณิตศาสตร์ วิทยาศาสตร์ และการคิดเชิงตรรกะ",
        "ร่วมกิจกรรมกลุ่ม ชุมนุมศิลปะ และการแข่งขันวิชาการ"
      ]
    }
  ],

  courses: [
    {
      id: "c-circuit-1",
      code: "04-031-101",
      name: "วงจรไฟฟ้า 1 (Electrical Circuits I)",
      credits: "3 (2-3-5)",
      term: "ภาคเรียนที่ 1/2567",
      instructor: "อ.ประจำสาขาวิชาไฟฟ้า",
      description: "กฎของโอห์ม กฎของเคิร์ชฮอฟฟ์ ทฤษฎีบทของเทเวนิน นอร์ตัน การวิเคราะห์ตาข่ายและโนด วงจรกระแสตรงและกระแสสลับ",
      workpieces: [
        {
          id: "w1",
          title: "รายงานผลการทดลอง: การพิสูจน์ Kirchhoff's Current & Voltage Law",
          type: "Lab Report / PDF",
          date: "สิงหาคม 2567",
          summary: "การต่อวงจรทดสอบในบอร์ดทดลองจริง เปรียบเทียบกับค่าการคำนวณทางทฤษฎี",
          fileUrl: "",
          tag: "LAB WORK"
        },
        {
          id: "w2",
          title: "วงจรจำลอง Multisim: Mesh & Nodal Analysis",
          type: "Simulation Schematic",
          date: "กันยายน 2567",
          summary: "การจำลองวงจรบริดจ์และวัดค่าแรงดันตกคร่อมด้วยเครื่องมือเสมือน",
          fileUrl: "",
          tag: "SOFTWARE"
        }
      ]
    },
    {
      id: "c-cad",
      code: "04-031-105",
      name: "การเขียนแบบวิศวกรรมไฟฟ้า (Electrical CAD)",
      credits: "3 (1-4-4)",
      term: "ภาคเรียนที่ 1/2567",
      instructor: "อ.ประจำสาขาวิชาไฟฟ้า",
      description: "สัญลักษณ์ทางไฟฟ้าตามมาตรฐานสากล การเขียนแบบระบบไฟฟ้าบ้านพักอาศัย Single-line diagram และ Schematics",
      workpieces: [
        {
          id: "w3",
          title: "แบบแปลนไฟฟ้าบ้านพักอาศัย 2 ชั้น พร้อมตารางโหลดคำนวณ",
          type: "Blueprints / CAD",
          date: "ตุลาคม 2567",
          summary: "การจัดสรรโหลดแยกวงจรย่อยแสงสว่างและเต้ารับ ออกแบบตำแหน่งสวิตช์และตู้ MDB",
          fileUrl: "",
          tag: "BLUEPRINT"
        }
      ]
    },
    {
      id: "c-pedagogy",
      code: "04-001-102",
      name: "นวัตกรรมและเทคโนโลยีสารสนเทศทางการศึกษา (EdTech)",
      credits: "2 (1-2-3)",
      term: "ภาคเรียนที่ 1/2567",
      instructor: "คณาจารย์คณะครุศาสตร์ฯ",
      description: "การประยุกต์ใช้สื่อดิจิทัล AI และนวัตกรรมการสอนเพื่อพัฒนาการเรียนรู้วิชาชีพช่างอุตสาหกรรม",
      workpieces: [
        {
          id: "w4",
          title: "สื่อการสอนอินโฟกราฟิก: ระบบความปลอดภัยทางไฟฟ้าและการต่อลงดิน",
          type: "Teaching Media / Design",
          date: "พฤศจิกายน 2567",
          summary: "การใช้ทักษะการวาดภาพสื่อความหมาย ผสานหลักการสอนเพื่อให้นักเรียนเข้าใจได้รวดเร็ว",
          fileUrl: "",
          tag: "MEDIA"
        }
      ]
    },
    {
      id: "c-measure",
      code: "04-031-102",
      name: "เครื่องมือวัดและการวัดทางไฟฟ้า (Electrical Measurements)",
      credits: "3 (2-3-5)",
      term: "ภาคเรียนที่ 2/2567",
      instructor: "อ.ประจำสาขาวิชาไฟฟ้า",
      description: "หลักการทำงานของมัลติมิเตอร์ ออสซิลโลสโคป วัตต์มิเตอร์ และการวัดค่าพารามิเตอร์ทางไฟฟ้าอย่างแม่นยำ",
      workpieces: [
        {
          id: "w5",
          title: "คู่มือปฏิบัติการวัดสัญญาณ Sine Wave & Square Wave ด้วย Oscilloscope",
          type: "Lab Manual / Document",
          date: "ธันวาคม 2567",
          summary: "การปรับ Time/Div, Volt/Div และการวัดคาบเวลาความถี่",
          fileUrl: "",
          tag: "MANUAL"
        }
      ]
    }
  ],

  projects: [
    {
      id: "p1",
      title: "ชุดบอร์ดฝึกทักษะการต่อวงจรไฟฟ้าควบคุมมอเตอร์เบื้องต้น",
      category: "electrical",
      categoryLabel: "งานไฟฟ้าและวิศวกรรม",
      date: "2567",
      description: "การออกแบบและประกอบชุดทดลองสำหรับใช้ฝึกปฏิบัติการต่อสายวงจรกำลังและวงจรควบคุมแมกเนติกคอนแทกเตอร์ พร้อมระบบอินเตอร์ล็อกป้องกันไฟฟ้าลัดวงจร",
      imageUrl: "assets/reference-grid.webp",
      tags: ["Motor Control", "Wiring", "Safety"],
      details: "มุ่งเน้นการจัดวางตำแหน่งอุปกรณ์ให้ง่ายต่อการสังเกตสำหรับผู้เรียน ติดตั้งฟิวส์และเบรกเกอร์กันดูด ELCB อย่างครบถ้วน",
      metrics: "มาตรฐานอุตสาหกรรม • 100% ปลอดภัย"
    },
    {
      id: "p2",
      title: "ชุดผลงานภาพวาดลายเส้นสถาปัตยกรรมและไดอะแกรมเทคนิค",
      category: "art",
      categoryLabel: "ศิลปะและดรออิ้ง",
      date: "2566 - 2567",
      description: "คอลเลกชันภาพวาดดรออิ้งลายเส้นปากกาและงานสเก็ตช์ ซึ่งสะท้อนความสามารถพิเศษในการจดจ่อสมาธิและสายตาอันเฉียบคมในการจับสัดส่วนเชิงโครงสร้าง",
      imageUrl: "assets/reference-grid.webp",
      tags: ["Drawing", "Perspective", "Technical Sketch"],
      details: "ใช้เทคนิค Cross-hatching และ Stippling เพื่อสร้างมิติเงา แสดงให้เห็นถึงความประณีตและความอดทนสูง",
      metrics: "ผลงานวาดลายเส้นมือ • สมาธิจดจ่อ"
    },
    {
      id: "p3",
      title: "กิจกรรมบริการวิชาการ: ตรวจเช็กระบบไฟฟ้าและบำรุงรักษาชุมชน",
      category: "teaching",
      categoryLabel: "กิจกรรมและการสอน",
      date: "2567",
      description: "เข้าร่วมกับคณะครุศาสตร์อุตสาหกรรม มทร.อีสาน ขอนแก่น ในการลงพื้นที่บริการประชาชน ตรวจสอบระบบสายดิน และให้ความรู้เรื่องการใช้ไฟฟ้าอย่างปลอดภัย",
      imageUrl: "assets/reference-grid.webp",
      tags: ["Community Service", "Teaching", "RMUTI"],
      details: "ได้รับคำชมเชยในเรื่องความสุภาพ ความรอบคอบ และความตั้งใจในการให้คำแนะนำแก่ชุมชน",
      metrics: "จิตอาสาชุมชน • จรรยาบรรณวิชาชีพ"
    },
    {
      id: "p4",
      title: "แบบจำลองระบบ Smart Home & Automation ด้วย IoT เบื้องต้น",
      category: "electrical",
      categoryLabel: "งานไฟฟ้าและวิศวกรรม",
      date: "2567",
      description: "การทดลองเชื่อมต่อไมโครคอนโทรลเลอร์สั่งงานเปิด-ปิดรีเลย์ควบคุมหลอดไฟผ่านสัญญาณอินเทอร์เน็ต เพื่อเตรียมต่อยอดเป็นสื่อการสอนในระดับอาชีวศึกษา",
      imageUrl: "assets/reference-grid.webp",
      tags: ["IoT", "Microcontroller", "Relay Control"],
      details: "เขียนโปรแกรมจำลองตรรกะเงื่อนไขเซนเซอร์แสงและเวลาเพื่อประหยัดพลังงาน",
      metrics: "Smart Energy • Automation"
    }
  ],

  settings: {
    theme: "blueprint",
    gridPattern: true,
    dotMatrix: true,
    cornerCross: true,
    scanlines: false,
    fontSize: "normal",
    adminUsername: "Natthakit",
    adminPassword: "69322110062-0"
  }
};
