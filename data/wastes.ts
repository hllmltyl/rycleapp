// data/wastes.ts

// Atık öğesi için tip tanımı
export type WasteItem = {
  id: string;
  name: string;
  description: string;
  recycleInfo: string;
  environmentalImpact: string;
  image: string;
};

// Atık kategorisi için tip tanımı
export type WasteCategory = {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  cardColor: string;
  textColor: string;
  wastes: WasteItem[];
};

// Türkiye'ye göre düzenlenmiş atık kategorileri ve atıklar
export const wasteCategories: WasteCategory[] = [
  {
    id: "plastik",
    name: "Plastik",
    description: "Plastik atıklar doğada 400 yıl boyunca çözünmeden kalabilir ve çevreye ciddi zarar verir.",
    icon: "plastic-icon",
    color: 'rgb(255, 255, 0)',
    cardColor: 'rgb(207, 207, 0)',
    textColor: 'rgb(0, 0, 0)',
    wastes: [
      {
        id: "001",
        name: "Plastik Şişe",
        description: "Su veya meşrubat gibi sıvılar için kullanılan tek kullanımlık plastik şişeler.",
        recycleInfo: "1. Şişeyi boşaltın ve durulayın 2. Sarı kutuya (plastik) atın",
        environmentalImpact: "Deniz canlıları tarafından yutulabilir, mikroplastiklere dönüşerek ekosistemi kirletir.",
        image: "plastic_bottle"
      },
      {
        id: "002",
        name: "Plastik Poşet",
        description: "Market alışverişlerinde kullanılan plastik torbalar.",
        recycleInfo: "1. Temiz ve kuru olduğundan emin olun 2. Sarı kutuya (plastik) atın",
        environmentalImpact: "Toprakta çözünmez, doğaya karıştığında hayvanlar için ölümcül olabilir.",
        image: "plastic_bag"
      },
      {
        id: "003",
        name: "Plastik Kap",
        description: "Yoğurt, margarin gibi ürünlerin plastik ambalajları.",
        recycleInfo: "1. Yiyecek artıklarını temizleyin 2. Sarı kutuya atın",
        environmentalImpact: "Kirli plastik, diğer atıkların da geri dönüşümünü engeller.",
        image: "plastic_container"
      },
      {
        id: "004",
        name: "Plastik Oyuncak",
        description: "Elektronik olmayan eski plastik oyuncaklar.",
        recycleInfo: "1. Metal parçaları ayırın 2. Sarı kutuya atın",
        environmentalImpact: "Geri dönüştürülmediğinde uzun yıllar doğada kalır.",
        image: "plastic_toy"
      },
      {
        id: "005",
        name: "Pet Şişe Kapağı",
        description: "Plastik içecek kapakları.",
        recycleInfo: "1. Şişeden ayırın 2. Sarı kutuya atın",
        environmentalImpact: "Küçük boyutu nedeniyle hayvanlar tarafından yutulabilir.",
        image: "bottle_cap"
      },
    ],
  },
  {
    id: "cam",
    name: "Cam",
    description: "Cam atıklar %100 geri dönüştürülebilir ve tekrar tekrar kullanılabilir.",
    icon: "glass-icon",
    color: 'rgb(99, 169, 14)',
    cardColor: 'rgb(182, 175, 42)',
    textColor: 'rgb(0, 0, 0)',
    wastes: [
      {
        id: "101",
        name: "Cam Şişe",
        description: "İçeceklerin saklandığı cam şişeler.",
        recycleInfo: "1. İçini boşaltın 2. Yeşil kutuya (cam) atın",
        environmentalImpact: "Doğada çözünmez, geri dönüştürülmezse çevre kirliliğine neden olur.",
        image: "glass_bottle"
      },
      {
        id: "102",
        name: "Cam Kavanoz",
        description: "Reçel, turşu gibi ürünlerin cam kapları.",
        recycleInfo: "1. Metal kapağı çıkarın 2. Yeşil kutuya atın",
        environmentalImpact: "Geri dönüştürülmezse üretimi için yüksek enerji harcanır.",
        image: "glass_jar"
      },
      {
        id: "103",
        name: "Pencere Camı",
        description: "Kırılmış veya eski pencere camları.",
        recycleInfo: "1. Belediyeye ait atık getirme merkezine teslim edin 2. Cam kutusuna atmayın",
        environmentalImpact: "Farklı cam türleri geri dönüşüm sistemini bozabilir.",
        image: "window_glass"
      },
      {
        id: "104",
        name: "Cam Bardak",
        description: "Kırılmış veya artık kullanılmayan cam bardaklar.",
        recycleInfo: "1. Cam bardaklar özel atık olarak değerlendirilir 2. Atık merkezine teslim edilmelidir",
        environmentalImpact: "Sokaklara atıldığında tehlike yaratır ve doğada uzun süre kalır.",
        image: "glass_cup"
      },
      {
        id: "105",
        name: "Ampul",
        description: "Kullanılmış veya yanmış ampuller.",
        recycleInfo: "1. Elektronik atık kutularına atılmalı veya belediyeye teslim edilmeli",
        environmentalImpact: "İçerdiği kimyasallar doğaya zarar verir, cam atıklarla karıştırılmamalı.",
        image: "light_bulb"
      },
    ],
  },
  {
    id: "kagit",
    name: "Kağıt",
    description: "Kağıt atıkların geri dönüşümü ormanların korunmasına ve enerji tasarrufuna katkı sağlar.",
    icon: "paper-icon",
    color: 'rgb(255, 255, 255)',
    cardColor: 'rgb(182, 175, 42)',
    textColor: 'rgb(0, 0, 0)',
    wastes: [
      {
        id: "201",
        name: "Defter",
        description: "Kullanılmış okul veya ofis defterleri.",
        recycleInfo: "1. Plastik spiralleri çıkarın 2. Mavi kutuya (kağıt) atın",
        environmentalImpact: "1 ton kağıt geri dönüştürülürse 17 ağaç kesilmekten kurtarılır.",
        image: "notebook"
      },
      {
        id: "202",
        name: "Gazete",
        description: "Okunmuş eski gazeteler.",
        recycleInfo: "1. Temiz ve kuru olmasına dikkat edin 2. Mavi kutuya atın",
        environmentalImpact: "Çöp haline geldiğinde kağıt, geri dönüşemeyen atık olur.",
        image: "newspaper"
      },
      {
        id: "203",
        name: "Karton Kutu",
        description: "Ayakkabı, kargo gibi ürünlerin kutuları.",
        recycleInfo: "1. Bant ve plastik parçaları çıkarın 2. Mavi kutuya atın",
        environmentalImpact: "Çöpe giderse 2 ila 5 ayda ancak doğada kaybolur.",
        image: "cardboard_box"
      },
      {
        id: "204",
        name: "Dergi",
        description: "Eski moda, magazin dergileri.",
        recycleInfo: "1. Plastik kapaklıysa ayırın 2. Mavi kutuya atın",
        environmentalImpact: "Parlak kaplamalar geri dönüşümü zorlaştırır.",
        image: "magazine"
      },
      {
        id: "205",
        name: "Kağıt Poşet",
        description: "Alışverişlerde kullanılan kağıt torbalar.",
        recycleInfo: "1. Yağlıysa atmayın 2. Temizse mavi kutuya atın",
        environmentalImpact: "Plastiğe göre çevre dostudur ama üretimi için ağaç kesilir.",
        image: "paper_bag"
      },
    ],
  },
  {
    id: "metal",
    name: "Metal",
    description: "Alüminyum, çelik ve teneke gibi metaller geri dönüştürülebilir ve kaynak tasarrufu sağlar.",
    icon: "metal-icon",
    color: 'rgb(153, 153, 153)',
    cardColor: 'rgb(182, 175, 42)',
    textColor: 'rgb(0, 0, 0)',
    wastes: [
      {
        id: "301",
        name: "Kola Kutusu",
        description: "Boş alüminyum içecek kutusu.",
        recycleInfo: "1. Yıkayın 2. Sarı kutuya atın",
        environmentalImpact: "Alüminyum geri dönüşümü %95 enerji tasarrufu sağlar.",
        image: "cola-can"
      },
      {
        id: "302",
        name: "Konserve Kutusu",
        description: "Boş metal konserve kutuları.",
        recycleInfo: "1. Yıkayın 2. Etiketini çıkarın 3. Sarı kutuya atın",
        environmentalImpact: "Çelik geri dönüşümüyle kaynak tüketimi azalır.",
        image: "tin-can"
      },
      {
        id: "303",
        name: "Metal Kapak",
        description: "Cam şişe kapakları gibi küçük metal parçalar.",
        recycleInfo: "Sarı kutuya atılabilir.",
        environmentalImpact: "Küçük parça da olsa geri dönüşüme katkı sağlar.",
        image: "metal-cap"
      },
      {
        id: "304",
        name: "Sprey Kutusu",
        description: "Boş metal sprey kutuları (saç spreyi vb).",
        recycleInfo: "Tamamen boş olduğundan emin olun, sonra sarı kutuya atın.",
        environmentalImpact: "Aerosol kutular tehlike arz eder, dikkatli toplanmalı.",
        image: "spray-can"
      },
      {
        id: "305",
        name: "Alüminyum Folyo",
        description: "Temiz alüminyum folyolar.",
        recycleInfo: "Temizse sarı kutuya atılabilir.",
        environmentalImpact: "Doğada çözünmesi uzun sürer, geri dönüşüm önemlidir.",
        image: "aluminum-foil"
      }
    ]
  },
  {
    id: "elektronik",
    name: "Elektronik Atık",
    description: "Elektrikli ve elektronik cihazlar uygun şekilde toplanmalıdır.",
    icon: "e-waste-icon",
    color: 'rgb(9, 73, 141)',
    cardColor: 'rgb(182, 175, 42)',
    textColor: 'rgb(0, 0, 0)',
    wastes: [
      {
        id: "401",
        name: "Eski Telefon",
        description: "Kullanılmayan akıllı telefonlar.",
        recycleInfo: "Belediye e-atık merkezlerine teslim edin.",
        environmentalImpact: "Değerli metaller geri kazanılabilir.",
        image: "old-phone"
      },
      {
        id: "402",
        name: "Bilgisayar",
        description: "Kullanılmayan masaüstü veya dizüstü bilgisayarlar.",
        recycleInfo: "Yetkili elektronik atık noktalarına teslim edin.",
        environmentalImpact: "E-atıklar çevreye toksik madde salabilir.",
        image: "computer"
      },
      {
        id: "403",
        name: "Kablolar",
        description: "Bozuk veya işe yaramayan şarj ve bağlantı kabloları.",
        recycleInfo: "E-atık kutularına bırakın.",
        environmentalImpact: "Kablolarda bakır ve plastik geri kazanılabilir.",
        image: "cable"
      },
      {
        id: "404",
        name: "Televizyon",
        description: "Kullanılmayan televizyonlar.",
        recycleInfo: "Yetkili geri dönüşüm noktalarına götürülmeli.",
        environmentalImpact: "CRT ekranlar toksik içerik barındırabilir.",
        image: "tv"
      },
      {
        id: "405",
        name: "Kulaklık",
        description: "Bozuk veya kullanılmayan kulaklıklar.",
        recycleInfo: "E-atık kutularına bırakılmalı.",
        environmentalImpact: "Plastik ve elektronik devre içerir.",
        image: "headphones"
      }
    ]
  },
  {
    id: "tehlikeli",
    name: "Tehlikeli Atık",
    description: "İnsan sağlığına veya çevreye zararlı maddeler özel olarak toplanmalıdır.",
    icon: "hazard-icon",
    color: 'rgb(168, 12, 12)',
    cardColor: 'rgb(182, 175, 42)',
    textColor: 'rgb(0, 0, 0)',
    wastes: [
      {
        id: "501",
        name: "İlaç",
        description: "Süresi geçmiş veya kullanılmayan ilaçlar.",
        recycleInfo: "Eczanelere teslim edin.",
        environmentalImpact: "Su yollarına karışırsa ciddi zarar verebilir.",
        image: "medicine"
      },
      {
        id: "502",
        name: "Boya Kutusu",
        description: "Kullanılmış boya kutuları ve kalıntıları.",
        recycleInfo: "Tehlikeli atık merkezlerine bırakılmalı.",
        environmentalImpact: "Toprak ve su kirliliğine neden olur.",
        image: "paint-can"
      },
      {
        id: "503",
        name: "Pil",
        description: "Kullanılmış piller.",
        recycleInfo: "Pil toplama kutularına bırakılmalı.",
        environmentalImpact: "Civa, kurşun gibi ağır metaller içerir.",
        image: "battery"
      },
      {
        id: "504",
        name: "Temizlik Maddesi",
        description: "Boş çamaşır suyu, deterjan kutuları.",
        recycleInfo: "Tamamen boşsa plastik kutuya; değilse tehlikeli atık.",
        environmentalImpact: "Zehirli kimyasallar doğaya zarar verir.",
        image: "cleaner"
      },
      {
        id: "505",
        name: "Civa Termometre",
        description: "Eski tip termometreler.",
        recycleInfo: "Belediyelerin tehlikeli atık noktalarına teslim edin.",
        environmentalImpact: "Civa son derece zehirlidir.",
        image: "thermometer"
      }
    ]
  },
  {
    id: "organik",
    name: "Organik Atık",
    description: "Biyolojik olarak parçalanabilir atıklar doğaya kazandırılabilir.",
    icon: "organic-icon",
    color: 'rgb(131, 83, 20)',
    cardColor: 'rgb(182, 175, 42)',
    textColor: 'rgb(0, 0, 0)',
    wastes: [
      {
        id: "601",
        name: "Sebze Kabukları",
        description: "Mutfakta oluşan sebze artıkları.",
        recycleInfo: "Kompost kutusuna atılmalı.",
        environmentalImpact: "Komposta dönüştürülerek toprağı zenginleştirir.",
        image: "veggie-peels"
      },
      {
        id: "602",
        name: "Meyve Kabukları",
        description: "Muz, elma, portakal kabukları.",
        recycleInfo: "Komposta uygun.",
        environmentalImpact: "Çöp yerine kompost yapılırsa faydalı hale gelir.",
        image: "fruit-peels"
      },
      {
        id: "603",
        name: "Yumurta Kabuğu",
        description: "Haşlanmış veya çiğ yumurta kabukları.",
        recycleInfo: "Kompost kutusuna atın.",
        environmentalImpact: "Kalsiyum yönünden toprağa fayda sağlar.",
        image: "egg-shell"
      },
      {
        id: "604",
        name: "Kahve Telvesi",
        description: "Demlenmiş kahve artığı.",
        recycleInfo: "Kurutup kompost kutusuna atın.",
        environmentalImpact: "Komposta fayda sağlar, koku giderici etkisi vardır.",
        image: "coffee-grounds"
      },
      {
        id: "605",
        name: "Çay Posası",
        description: "Kullanılmış çay yaprakları veya poşetleri.",
        recycleInfo: "Poşet naylon değilse kompost yapılabilir.",
        environmentalImpact: "Toprağa organik madde katar.",
        image: "tea-leaves"
      }
    ]
  },
  {
    id: "tekstil",
    name: "Tekstil Atığı",
    description: "Giysi, kumaş ve ayakkabılar geri kazanılabilir.",
    icon: "textile-icon",
    color: 'rgb(107, 74, 132)',
    cardColor: 'rgb(182, 175, 42)',
    textColor: 'rgb(0, 0, 0)',
    wastes: [
      {
        id: "701",
        name: "Tişört",
        description: "Kullanılmayan pamuklu tişört.",
        recycleInfo: "Tekstil kutusuna bırakın.",
        environmentalImpact: "Yeniden kullanım tekstil atığını azaltır.",
        image: "tshirt"
      },
      {
        id: "702",
        name: "Çorap",
        description: "Tek kalmış veya yırtılmış çoraplar.",
        recycleInfo: "Temizse tekstil kutusuna atılabilir.",
        environmentalImpact: "Atık azaltımı sağlar.",
        image: "socks"
      },
      {
        id: "703",
        name: "Ayakkabı",
        description: "Kullanılmayan ayakkabılar.",
        recycleInfo: "Temiz ve sağlamsa bağışlanabilir, değilse tekstil kutusuna.",
        environmentalImpact: "Yeniden kullanımla kaynak tüketimi azalır.",
        image: "shoes"
      },
      {
        id: "704",
        name: "Çanta",
        description: "Kumaş veya deri çantalar.",
        recycleInfo: "Tekstil atık kutusuna atılabilir.",
        environmentalImpact: "Geri dönüşümle malzeme yeniden kullanılabilir.",
        image: "bag"
      },
      {
        id: "705",
        name: "Kot Pantolon",
        description: "Eskiyen veya yırtılmış kotlar.",
        recycleInfo: "Temizse tekstil kutusuna atılabilir.",
        environmentalImpact: "Kumaş geri kazanımı mümkündür.",
        image: "jeans"
      }
    ]
  },
  {
    id: "kompozit",
    name: "Kompozit Ambalaj",
    description: "Birden fazla malzemeden oluşan ambalajlar (kağıt-plastik-metal karışımı).",
    icon: "composite-icon",
    color: 'rgb(233, 138, 14)',
    cardColor: 'rgb(182, 175, 42)',
    textColor: 'rgb(0, 0, 0)',
    wastes: [
      {
        id: "801",
        name: "Süt Kutusu",
        description: "TetraPak tarzı süt kutuları.",
        recycleInfo: "Sarı kutuya atılabilir.",
        environmentalImpact: "Geri dönüşümü zordur ama değerlidir.",
        image: "milk-box"
      },
      {
        id: "802",
        name: "Meyve Suyu Kutusu",
        description: "TetraPak meyve suyu kutuları.",
        recycleInfo: "Yıkanıp sarı kutuya atılabilir.",
        environmentalImpact: "Kağıt ve alüminyum karışımıdır.",
        image: "juice-box"
      },
      {
        id: "803",
        name: "Cips Poşeti",
        description: "Alüminyum kaplı plastik poşetler.",
        recycleInfo: "Bazı belediyelerde sarı kutuya atılabilir.",
        environmentalImpact: "Doğada çözünmesi çok uzun sürer.",
        image: "chips-bag"
      },
      {
        id: "804",
        name: "Dondurma Kutusu",
        description: "Plastik ve karton karışımı kaplar.",
        recycleInfo: "Yıkandıktan sonra sarı kutuya atılabilir.",
        environmentalImpact: "Karışık yapısı geri dönüşümü zorlaştırır.",
        image: "icecream-box"
      },
      {
        id: "805",
        name: "Hazır Yemek Kabı",
        description: "Alüminyum/plastik/kağıt birleşik ambalajlar.",
        recycleInfo: "Boş ve temizse sarı kutuya atılabilir.",
        environmentalImpact: "Malzeme ayrıştırması gerekir.",
        image: "readymeal-pack"
      }
    ]
  },
  {
    id: "yag",
    name: "Bitkisel Atık Yağ",
    description: "Evsel kızartmalık yağlar çevreye zarar vermeden toplanmalıdır.",
    icon: "oil-icon",
    color: 'rgba(141, 180, 23, 0.64)',
    cardColor: 'rgb(182, 175, 42)',
    textColor: 'rgb(0, 0, 0)',
    wastes: [
      {
        id: "901",
        name: "Kızartma Yağı",
        description: "Kullanılmış sıvı yağlar.",
        recycleInfo: "Belediyenin atık yağ toplama noktalarına dökün.",
        environmentalImpact: "1 litre atık yağ 1 milyon litre suyu kirletir.",
        image: "frying-oil"
      },
      {
        id: "902",
        name: "Margarin Artığı",
        description: "Kullanılmayan margarin kalıntıları.",
        recycleInfo: "Atık yağla birlikte toplanabilir.",
        environmentalImpact: "Doğada çözünmez, zararlıdır.",
        image: "margarine"
      },
      {
        id: "903",
        name: "Zeytinyağı Tortusu",
        description: "Tortulu kalan zeytinyağı kalıntıları.",
        recycleInfo: "Toplama kabına eklenebilir.",
        environmentalImpact: "Lavaboya dökülmemeli, su yollarını kirletir.",
        image: "olive-residue"
      },
      {
        id: "904",
        name: "Kızartma Artığı",
        description: "Yağda kalan küçük yiyecek parçaları.",
        recycleInfo: "Yağla birlikte özel kaba konulmalı.",
        environmentalImpact: "Bozulduğunda kokar ve çevreye zarar verir.",
        image: "fry-parts"
      },
      {
        id: "905",
        name: "Eski Yağ Şişesi",
        description: "Boş bitkisel yağ şişeleri.",
        recycleInfo: "Şişe plastik kutusuna, kalan yağ atık toplama noktasına.",
        environmentalImpact: "Yanlış atılırsa geri dönüşü zorlaşır.",
        image: "oil-bottle"
      }
    ]
  },
  {
    id: "",
    name: "",
    description: "",
    icon: "",
    color: 'rgb(0, 0, 0)',
    cardColor: 'rgb(0, 0, 0)',
    textColor: 'rgb(0, 0, 0)',
    wastes: [
      {
        id: "",
        name: "",
        description: "",
        recycleInfo: "",
        environmentalImpact: "",
        image: ""
      },
    ],
  },
];
