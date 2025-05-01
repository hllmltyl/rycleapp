// data/wastes.ts

export type WasteItem = {
    id: string;
    name: string;
    description: string;
    recycleInfo: string;
  };
  
  export type WasteCategory = {
    id: string;
    name: string;
    description: string;
    wastes: WasteItem[];
  };
  
  // Kategoriler
  export const wasteCategories: WasteCategory[] = [
    {
      id: "Plastik",
      name: "Plastik",
      description: "Plastikler genellikle su, meyve suyu, deterjan, şampuan gibi sıvıları taşımak için kullanılır. Plastiklerin doğaya etkisi oldukça yüksektir.",
      wastes: [
        {
          id: "1",
          name: "Plastik Şişe",
          description: "Plastik şişeler genellikle PET maddesinden yapılır.",
          recycleInfo: "Sarı geri dönüşüm kutusuna atılmalıdır.",
        },
        // Diğer plastik atıklar
      ],
    },
    {
      id: "Cam",
      name: "Cam",
      description: "Cam ürünler geri dönüştürülebilir ve doğada doğal olarak bozulur. Cam geri dönüşümü enerji tasarrufu sağlar.",
      wastes: [
        {
          id: "2",
          name: "Cam Şişe",
          description: "Cam şişeler tekrar kullanılabilir ve geri dönüştürülebilir.",
          recycleInfo: "Yeşil geri dönüşüm kutusuna atılmalıdır.",
        },
        // Diğer cam atıklar
      ],
    },
    {
      id: "Kağıt",
      name: "Kağıt",
      description: "Kağıt atıkları, geri dönüşümü kolay olan atıklardır ve çoğunlukla defter, gazete gibi ürünlerden elde edilir.",
      wastes: [
        {
          id: "3",
          name: "Defter",
          description: "Kullanılmış defterler kağıt olarak geri dönüştürülebilir.",
          recycleInfo: "Mavi geri dönüşüm kutusuna atılmalıdır.",
        },
        // Diğer kağıt atıklar
      ],
    },
  ];
  