import foto from '../assets/fitri2.jpg';

import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa6";

export const profile = {
  name : 'Fitrianingsih',
  initials : 'AF',
  role : "",
  tagline : "",
  cvUrl : "https://drive.google.com/file/d/1NrXhcr9lppPYOnYWf0x0DSTFIeiCzF2i/view?usp=sharing",
  photo : foto,
  about : [
      "Saya Fitrianingsih, seorang guru produktif PPLG di SMK Marhas Kabupaten Bandung dengan pengalaman mengajar lebih dari 10 tahun.",
      "Saya merupakan lulusan Teknik Informatika dari Universitas Komputer Indonesia dan saat ini mengampu mata pelajaran Basis Data serta Pengembangan Perangkat Lunak.",
      "Saya adalah pribadi yang bertanggung jawab, memiliki jiwa kepemimpinan, dan siap bekerja sama dalam tim untuk mendukung kemajuan pendidikan."
  ], 
stats : [
    {value: "10+", label: "Years of Experience"},
    {value: "10+", label: "Project Completed"},
  ],
focusAreas: [
  {
    title: "Database Educator",
    description: "Membimbing siswa menguasai konsep perancangan, pengelolaan, dan optimasi sistem basis data. Memiliki keahlian dalam SQL, pemodelan data (ERD), serta manajemen basis data relasional (RDBMS) dan Non-Relational. Berkomitmen mencetak talenta muda yang siap bersaing di industri teknologi melalui pendekatan pembelajaran berbasis proyek nyata (project-based learning)."
  },
  {
    title: "Software Engineering Teacher",
    description: "Membimbing siswa dalam merancang, membangun, dan menyempurnakan aplikasi perangkat lunak dari nol. Saya mengombinasikan logika pemograman, pemecahan masalah (problem-solving), dan kolaborasi tim untuk menyiapkan lulusan yang siap kerja dan bernilai tinggi di industri IT."
  }
],
domains: [
    "Teacher",
    "Database",
    "Pengembangan Perangkat Lunak",
],
};

export const skills = [
  {
    title : "Education",
    description: "Designing and delivering learning tht works in real classrooms.",
    items: [
      "Teacher Training",
      "Facilitation",
    ],
  }, 
  {
    title : "Technology",
    description: "Hands-on with the technologies i teach and build learning around.",
    items: [
      "JavaScript","Java", "SQL"
    ],
  }, 
  {
    title : "Tools",
    description: "Everyday tools for creating content, analyzing data and collaborating.",
    items: [
      "Canva",
      "Google Drive",
      "Laragon",
      "Draw.io"
    ],
  }, 
]

export const projects = [
  {
    id: 1,
    title: "Bahan Ajar Basis Data",
    description:
      "Modul ajar yang digunakan dalam pembelajaran",
    category: "Education",
    tags: ["Basis Data", "ERD", "SQL", "Data", "Tipe Data", "Skema Relasi", "Kamus Data", "XI PPLG"],
    link: "https://drive.google.com/file/d/1fXFTP4RmwIz3Azchr8snRGgDjD4GjVgY/view?usp=drive_link",
    image: "/COVERBASISDATA.jpg",
    color: "from-blue-500 to-cyan-400",
  },
  {
    id: 2,
    title: "Bahan Ajar DPPLG 4",
    description:
      "Modul ajar yang digunakan dalam pembelajaran",
    category: "Education",
    tags: ["Sistem Komputer", "Sistem Bilangan", "Biner", "Heksadesimal", "Desimal", "Oktal", "Flowchart", "Algoritma", "X PPLG"],
    link: "https://drive.google.com/file/d/1gGAaVf5eta8LGDpG1gScKsf7vK1pSLZK/view?usp=drive_link",
    image: "/COVERDPPLG4.jpg",
    color: "from-blue-500 to-cyan-400",
  },
   {
    id: 3,
    title: "Bahan Ajar PPL",
    description:
      "Modul ajar yang digunakan dalam pembelajaran",
    category: "Education",
    tags: ["Flowmap", "Activity Diagram", "Usecase", "Usecase Skenario", "XI PPLG"],
    link: "https://drive.google.com/file/d/1aCOlOVDZt9MmGt18u-9WuB4hcLkOWdGx/view?usp=drive_link",
    image: "/COVERPPL.jpg",
    color: "from-blue-500 to-cyan-400",
  },
]

export const socials = [
  {
    label: "Instagram",
    handle: "@sakahiyafitri",
    // URL Instagram ditulis TANPA tanda @
    url: "https://instagram.com/sakhiyafitri",
    icon: FaInstagram,
    color: "group-hover:bg-pink-600",
  },
  {
    label: "WhatsApp",
    handle: "0896-5524-3344",
    // Format wa.me: kode negara 62 + nomor TANPA angka 0 di depan, TANPA tanda hubung
    // 081323664628 → 6281323664628
    url: "https://wa.me/089655243344",
    icon: FaWhatsapp,
    color: "group-hover:bg-green-600",
  },
  {
    label: "GitHub",
    handle: "fitrianingsih78",
    url: "https://github.com/fitrianingsih78",
    icon: FaGithub,
    color: "group-hover:bg-slate-900",
  },
  {
    label: "Email",
    handle: "fitrianingsih54@guru.smk.belajar.id",
    // mailto: → membuka aplikasi email pengunjung dengan alamat tujuan terisi otomatis
    url: "mailto:fitrianingsih54@guru.smk.belajar.id",
    icon: FaEnvelope,
    color: "group-hover:bg-brand",
  },
   {
    label: "Facebook",
    handle: "Fitria Ningsih",
    // mailto: → membuka aplikasi email pengunjung dengan alamat tujuan terisi otomatis
    url: "https://www.facebook.com/fitria.ciku/",
    icon: FaFacebook,
    color: "group-hover:bg-brand",
  },
];
