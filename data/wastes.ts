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
  wastes: WasteItem[];
};

// Kategoriler ve atıklar
export const wasteCategories: WasteCategory[] = [
  {
    id: "plastik",
    name: "Plastik",
    description: "Plastikler doğada 400 yılda yok olur ve çevre kirliliğine neden olur.",
    icon: "plastic-icon",
    wastes: [
      {
        id: "1",
        name: "Plastik Şişe",
        description: "PET malzemeden yapılan su ve meşrubat şişeleri.",
        recycleInfo: "1. Temizleyin 2. Kapağını çıkarın 3. Sıkıştırın 4. Sarı kutuya atın",
        environmentalImpact: "Doğada 450 yılda parçalanır, deniz canlılarını öldürür.",
        image: "plastic-bottle"
      },
    ],
  },
  {
    id: "cam",
    name: "Cam",
    description: "Cam %100 geri dönüştürülebilir ve doğaya zararsızdır.",
    icon: "glass-icon",
    wastes: [
      {
        id: "2",
        name: "Cam Şişe",
        description: "Şarap, meyve suyu vb. içeceklerin cam şişeleri.",
        recycleInfo: "1. Temizleyin 2. Yeşil kutuya atın 3. Kırık camları ayrı atın",
        environmentalImpact: "Doğada 1 milyon yılda parçalanır ama zararsızdır.",
        image: "glass-bottle"
      }
    ],
  },
  {
    id: "kagit",
    name: "Kağıt",
    description: "Kağıt geri dönüşümü ormanları korur ve enerji tasarrufu sağlar.",
    icon: "paper-icon",
    wastes: [
      {
        id: "3",
        name: "Defter",
        description: "Kullanılmış okul veya ofis defterleri.",
        recycleInfo: "1. Plastik spiralleri çıkarın 2. Mavi kutuya atın",
        environmentalImpact: "1 ton kağıt 17 ağacın kesilmesini önler.",
        image: "notebook"
      }
    ],
  },
];