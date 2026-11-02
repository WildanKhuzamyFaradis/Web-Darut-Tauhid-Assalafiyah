export interface SiteSettings {
  name: string;
  tagline: string;
  description: string;
  address: string;
  city: string;
  phone: string;
  whatsapp: string;
  whatsappUrl: string;
  email: string;
  establishedYear: string;
  stats: { label: string; value: string }[];
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  kind: 'news' | 'article';
  excerpt: string;
  body: string;
  cover: string;
  category: string;
  author: string;
  publishedAt: string;
  isFeatured?: boolean;
}

export interface EventItem {
  id: string;
  slug: string;
  title: string;
  kind: 'kajian' | 'majelis-shalawat' | 'kegiatan' | 'lainnya';
  kindLabel: string;
  description: string;
  startAt: string;
  timeText: string;
  locationText: string;
  poster: string;
  isUpcoming: boolean;
}

export interface ProgramItem {
  id: string;
  slug: string;
  name: string;
  arabicName?: string;
  level: string;
  summary: string;
  description: string;
  features: string[];
  image: string;
}

export interface AnnouncementItem {
  id: string;
  slug: string;
  title: string;
  summary: string;
  date: string;
  isPinned: boolean;
  category: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'kegiatan' | 'fasilitas' | 'santri' | 'majelis';
  imageUrl: string;
  date: string;
  caption: string;
}

export interface StaffItem {
  id: string;
  name: string;
  role: string;
  quote?: string;
  imageUrl: string;
}

export const siteData: SiteSettings = {
  name: "Pondok Pesantren Darut Tauhid Assalafiyah",
  tagline: "Menjaga Tradisi, Menebar Cahaya Ilmu",
  description: "Lembaga pendidikan Islam berhaluan Ahlussunnah wal Jama'ah yang mengakar pada tradisi keilmuan salafiyah, pembinaan akhlaqul karimah, serta pendalaman kitab-kitab mu'tabarah.",
  address: "Jl. Pesantren No. 45, Kompleks Darut Tauhid",
  city: "Indonesia",
  phone: "+62 812-3456-7890",
  whatsapp: "+62 812-3456-7890",
  whatsappUrl: "https://wa.me/6281234567890?text=Assalamu'alaikum%20Warahmatullahi%20Wabarakatuh,%20saya%20ingin%20bertanya%20mengenai%20Pondok%20Pesantren%20Darut%20Tauhid%20Assalafiyah",
  email: "sekretariat@daruttauhid-assalafiyah.id",
  establishedYear: "1988",
  stats: [
    { label: "Santri Mukim", value: "850+" },
    { label: "Dewan Asatidz & Masyayikh", value: "45" },
    { label: "Kitab Turots Dikaji", value: "60+" },
    { label: "Tahun Berkhidmah", value: "35+" },
  ]
};

export const programsData: ProgramItem[] = [
  {
    id: "1",
    slug: "madrasah-diniyah-salafiyah",
    name: "Madrasah Diniyah Salafiyah",
    arabicName: "المدرسة الدينية السلفية",
    level: "Tingkat Ula, Wustho, & Ulya",
    summary: "Pendidikan berjenjang berfokus pada pendalaman kaidah gramatika Arab (Nahwu, Sharaf), Fiqih madzhab Syafi'i, Ushul Fiqih, Tauhid, dan Hadits.",
    description: "Kurikulum komprehensif mengkaji kitab-kitab standar salafiyah mulai dari Jurumiyyah, Imrithi, Alfiyyah Ibnu Malik, Fathul Qorib, Fathul Mu'in hingga Minhajut Tholibin.",
    features: [
      "Metode Sorogan dan Bandongan intensif",
      "Kajian Bahtsul Masa'il mingguan",
      "Ujian lisan dan baca kitab turots gundul",
      "Ijazah sanad keilmuan tersambung"
    ],
    image: "/images/kitab-turots.svg"
  },
  {
    id: "2",
    slug: "tahfidzul-quran",
    name: "Tahfidzul Qur'an & Tartil",
    arabicName: "تحفيظ القرآن الكريم",
    level: "30 Juz Mutqin",
    summary: "Program intensif menghafal Al-Qur'an dengan bimbingan huffadz bersanad, memperhatikan makharijul huruf, tajwid, dan adab penghafal Al-Qur'an.",
    description: "Santri dibimbing menyetorkan hafalan harian (ziyadah) dan menjaga hafalan lama (muroja'ah) dengan pengawasan ketat dan target terukur serta tartil tilawah.",
    features: [
      "Bimbingan setoran ba'da Subuh dan Ashar",
      "Muroja'ah mandiri dan sima'an berkala",
      "Kajian ilmu tajwid Jazariyyah dan Tuhfatul Athfal",
      "Sertifikasi tasmi' 5, 10, 20, dan 30 juz"
    ],
    image: "/images/tahfidz-quran.svg"
  },
  {
    id: "3",
    slug: "pengajian-wetonan-kilatan",
    name: "Majelis Ta'lim & Kitab Kilatan",
    arabicName: "مجلس التعليم ودروس التراث",
    level: "Terbuka Santri & Masyarakat",
    summary: "Pengajian kitab turots pilihan yang diasuh langsung oleh Pengasuh Pondok setiap malam dan program pasaran khusus bulan Ramadhan.",
    description: "Tradisi keilmuan khas pesantren salaf untuk menimba berkah ilmu, adab, dan wirid dzikir dari para Masyayikh yang istiqamah membina santri dan jama'ah.",
    features: [
      "Kajian Ihya Ulumiddin & Shahih Bukhari",
      "Rutinan Majelis Shalawat Burdah & Simtudduror",
      "Pendalaman tasawuf dan tarbiyatun nufus",
      "Terbuka untuk jama'ah alumni dan masyarakat"
    ],
    image: "/images/hero-pondok.svg"
  },
  {
    id: "4",
    slug: "kemandirian-dakwah",
    name: "Pelatihan Dakwah & Kemandirian Santri",
    arabicName: "تربية الدعوة وتأهيل المهارات",
    level: "Ekstrakurikuler Wajib Santri",
    summary: "Pengembangan kecakapan khithabah (pidato), kepemimpinan jam'iyyah, jurnalistik santri, administrasi kesekretariatan, dan kewirausahaan berbasis pesantren.",
    description: "Mempersiapkan santri agar mampu terjun berdakwah di tengah masyarakat dengan bekal keilmuan yang kokoh, berakhlak mulia, dan berwawasan luas.",
    features: [
      "Muhadharah (latihan khithabah) 3 bahasa",
      "Pelatihan kepenulisan dan kaligrafi Islam",
      "Manajemen organisasi santri mandiri",
      "Kewirausahaan dan keterampilan aplikatif"
    ],
    image: "/images/santri-belajar.svg"
  }
];

export const postsData: Post[] = [
  {
    id: "1",
    slug: "peringatan-maulid-nabi-dan-khataman-kitab",
    title: "Khidmat Peringatan Maulid Nabi Muhammad SAW dan Khataman Kitab Fathul Qorib",
    kind: "news",
    excerpt: "Ratusan santri dan jama'ah memadati serambi masjid utama dalam gelaran doa bersama, pembacaan Maulid Simtudduror, serta prosesi khataman santri wustho.",
    body: "Pondok Pesantren Darut Tauhid Assalafiyah menyelenggarakan peringatan agung Maulid Nabi Muhammad SAW sekaligus wisuda khataman kitab Fathul Qorib Al-Mujib. Acara diawali dengan lantunan shalawat yang dipimpin oleh tim hadrah santri, dilanjutkan dengan tausiyah dari Pengasuh Pondok mengenai pentingnya meneladani kelembutan dan keteguhan Rasulullah SAW dalam menuntut ilmu.\n\nDalam nasehatnya, Pengasuh menekankan bahwa keberkahan ilmu santri terletak pada ta'dhim kepada guru, kecintaan pada kitab turots, serta kesungguhan mengamalkan ilmu dalam keseharian di tengah masyarakat.",
    cover: "/images/majelis-shalawat.svg",
    category: "Kegiatan Pesantren",
    author: "Sekretariat Pondok",
    publishedAt: "24 Oktober 2026",
    isFeatured: true
  },
  {
    id: "2",
    slug: "pentingnya-adab-sebelum-ilmu-pesan-pengasuh",
    title: "Menyelami Nasehat Salaf: Mengapa Adab Wajib Mendahului Ilmu?",
    kind: "article",
    excerpt: "Imam Malik rahimahullah berpesan: 'Pelajarilah adab sebelum engkau mempelajari suatu ilmu.' Sebuah renungan mendalam tentang esensi pendidikan akhlak santri.",
    body: "Di zaman yang serba cepat dan banjir informasi, tantangan terbesar penuntut ilmu bukanlah langkanya ilmu, melainkan rapuhnya adab dan ketawadhuan. Kitab Ta'limul Muta'allim mengajarkan bahwa ilmu adalah cahaya suci yang tidak akan bersemayam pada hati yang sombong.\n\nSantri di Darut Tauhid Assalafiyah dididik sejak dini untuk menghargai mushaf, memuliakan waktu shalat berjamaah, berbakti kepada orang tua, serta mendoakan para masyaikh setiap usai wirid ba'da shalat.",
    cover: "/images/kitab-turots.svg",
    category: "Artikel Dakwah",
    author: "Ustadz M. Syukron",
    publishedAt: "18 Oktober 2026",
    isFeatured: true
  },
  {
    id: "3",
    slug: "pembukaan-semester-genap-sorogan-kitab-turots",
    title: "Pembukaan Semester Baru dan Ijazahan Sanad Kitab Hadits Al-Arba'in An-Nawawiyyah",
    kind: "news",
    excerpt: "Memasuki awal bulan pembelajaran baru, seluruh santri mengikuti majelis pembukaan pengajian kilat dan penerimaan ijazah sanad hadits bersambung.",
    body: "Majelis berlangsung khusyuk di ruang aula pesantren. Tradisi sanad keilmuan yang bersambung hingga Rasulullah SAW merupakan salah satu pilar autentisitas ajaran Islam yang senantiasa dijaga oleh pondok pesantren salafiyah.",
    cover: "/images/santri-belajar.svg",
    category: "Akademik Salaf",
    author: "Bagian Pengajaran",
    publishedAt: "10 Oktober 2026",
    isFeatured: false
  },
  {
    id: "4",
    slug: "keutamaan-sholat-berjamaah-dan-wirid-rutin",
    title: "Menjaga Istiqamah: Keutamaan Shalat Berjamaah dan Wirid di Pesantren",
    kind: "article",
    excerpt: "Kebiasaan shalat tepat waktu secara berjamaah menjadi tiang pembentukan disiplin spiritual dan ketenangan batin bagi setiap santri.",
    body: "Shalat berjamaah lima waktu bukan sekadar rutinitas wajib, melainkan sarana tarbiyah ruhaniyah yang membentuk rasa persaudaraan dan solidaritas antar santri dari berbagai pelosok nusantara.",
    cover: "/images/hero-pondok.svg",
    category: "Kajian Tasawuf",
    author: "Redaksi Majalah Santri",
    publishedAt: "04 Oktober 2026",
    isFeatured: false
  }
];

export const eventsData: EventItem[] = [
  {
    id: "1",
    slug: "majelis-diba-dan-kajian-ihya",
    title: "Majelis Ratib Al-Haddad & Kajian Kitab Ihya Ulumiddin",
    kind: "kajian",
    kindLabel: "Pengajian Rutin",
    description: "Kajian mendalam bab Adab Pergaulan dan Tazkiyatun Nafs karya Hujjatul Islam Imam Al-Ghazali, dilanjutkan pembacaan Ratib Al-Haddad.",
    startAt: "Setiap Kamis Malam (Malam Jum'at)",
    timeText: "Pukul 19.45 WIB - Selesai (Ba'da Isya)",
    locationText: "Masjid Jami' Darut Tauhid",
    poster: "/images/kitab-turots.svg",
    isUpcoming: true
  },
  {
    id: "2",
    slug: "majelis-shalawat-ahbabul-musthofa",
    title: "Gema Shalawat Bersama & Peringatan Maulid Bulanan",
    kind: "majelis-shalawat",
    kindLabel: "Majelis Shalawat",
    description: "Lantunan kasidah maulid dan doa keselamatan bangsa bersama para santri dan jama'ah masyarakat sekitar.",
    startAt: "Ahad Kliwon Malam Senin",
    timeText: "Pukul 20.00 WIB - 22.30 WIB",
    locationText: "Halaman Utama Kompleks Pesantren",
    poster: "/images/majelis-shalawat.svg",
    isUpcoming: true
  },
  {
    id: "3",
    slug: "bahtsul-masail-santri-tingkat-ulya",
    title: "Forum Bahtsul Masa'il Fiqhiyyah Kontemporer",
    kind: "kegiatan",
    kindLabel: "Bahtsul Masa'il",
    description: "Musyawarah ilmiah santri tingkat Ulya membedah persoalan hukum Islam terkini berlandaskan ibarat kitab-kitab mu'tabarah madzhab Syafi'i.",
    startAt: "Setiap Sabtu Malam Ahad",
    timeText: "Pukul 20.30 WIB - 23.00 WIB",
    locationText: "Gedung Aula Perpustakaan Turots",
    poster: "/images/santri-belajar.svg",
    isUpcoming: true
  }
];

export const announcementsData: AnnouncementItem[] = [
  {
    id: "1",
    slug: "informasi-penerimaan-santri-baru",
    title: "Informasi Pendaftaran dan Penerimaan Santri Baru (PSB) Tahun Ajaran Mendatang",
    summary: "Pendaftaran santri putra dan putri jenjang Madrasah Diniyah dan Tahfidzul Qur'an dibuka secara berkala. Simak prosedur dan persyaratan administratif.",
    date: "28 Oktober 2026",
    isPinned: true,
    category: "Penerimaan Santri"
  },
  {
    id: "2",
    slug: "jadwal-sambangan-dan-kunjungan-wali-santri",
    title: "Tata Tertib dan Jadwal Kunjungan (Sambangan) Wali Santri",
    summary: "Diberitahukan kepada seluruh wali santri bahwa jadwal sambangan dilaksanakan setiap hari Ahad pekan kedua dan keempat dengan tetap mematuhi tata tertib pesantren.",
    date: "15 Oktober 2026",
    isPinned: false,
    category: "Kewalisantrian"
  },
  {
    id: "3",
    slug: "kegiatan-libur-semester-dan-perpulangan",
    title: "Maklumat Perpulangan dan Masuk Kembali Santri Pasca Ujian",
    summary: "Pemberitahuan resmi mengenai batas akhir penjemputan dan kewajiban kembali ke asrama tepat waktu bagi seluruh santri mukim.",
    date: "02 Oktober 2026",
    isPinned: false,
    category: "Pengumuman"
  }
];

export const galleryData: GalleryItem[] = [
  {
    id: "1",
    title: "Suasana Pengajian Sorogan Kitab Kuning",
    category: "kegiatan",
    imageUrl: "/images/kitab-turots.svg",
    date: "Oktober 2026",
    caption: "Santri dengan khidmat menyimak penjelasan lafadz dan makna murad dari ustadz pembimbing."
  },
  {
    id: "2",
    title: "Gema Maulid dan Shalawat Santri",
    category: "majelis",
    imageUrl: "/images/majelis-shalawat.svg",
    date: "Oktober 2026",
    caption: "Kekompakan rebana dan lantunan qasidah pujian kepada baginda Nabi SAW."
  },
  {
    id: "3",
    title: "Perpustakaan Kitab Turots Klasik",
    category: "fasilitas",
    imageUrl: "/images/perpustakaan-kitab.svg",
    date: "September 2026",
    caption: "Koleksi rujukan kitab fiqih, tafsir, hadits, dan ushul fiqih yang menjadi sumber belajar harian."
  },
  {
    id: "4",
    title: "Muroja'ah Hafalan Al-Qur'an Pagi Hari",
    category: "santri",
    imageUrl: "/images/tahfidz-quran.svg",
    date: "Oktober 2026",
    caption: "Menjaga ayat-ayat suci dalam dada di serambi asrama selepas waktu Subuh."
  },
  {
    id: "5",
    title: "Masjid Jami' Kompleks Pesantren",
    category: "fasilitas",
    imageUrl: "/images/kompleks-pesantren.svg",
    date: "September 2026",
    caption: "Pusat kegiatan ibadah jama'ah 5 waktu, dzikir bersama, dan pengajian wetonan."
  },
  {
    id: "6",
    title: "Latihan Khithabah dan Muhadharah Santri",
    category: "kegiatan",
    imageUrl: "/images/santri-belajar.svg",
    date: "Agustus 2026",
    caption: "Membina mental keberanian berorasi dan berdakwah dengan santun di hadapan publik."
  }
];

export const leadershipData: StaffItem[] = [
  {
    id: "1",
    name: "K.H. Ahmad Dahlan Ash-Shiddiq",
    role: "Pengasuh Pondok Pesantren",
    quote: "Pesantren salafiyah adalah benteng moral dan nurani bangsa. Di sini, santri tidak hanya ditempa akalnya untuk pintar membaca kitab, tetapi dibersihkan hatinya agar senantiasa takut kepada Allah dan berbakti kepada umat.",
    imageUrl: "/images/pengasuh.svg"
  },
  {
    id: "2",
    name: "K.H. Muhammad Zainuddin, M.Pd.",
    role: "Lurah Pondok & Kepala Madrasah Diniyah",
    imageUrl: "/images/pengasuh.svg"
  },
  {
    id: "3",
    name: "Ustadz H. Abdul Mu'thi, Al-Hafidz",
    role: "Koordinator Program Tahfidzul Qur'an",
    imageUrl: "/images/pengasuh.svg"
  }
];
