import { WasteCategory, WasteItem, wasteCategories } from '@/data/wastes'; // Yeni import
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Index() {
  const router = useRouter();
  const [selectedCategoryColor, setSelectedCategoryColor] = useState<string>('#e8f5e9'); // Varsayılan renk (geri dönüşüm yeşili)

  // Kategorileri veri kaynağından alıyoruz (artık tipler belli)
  const categories = wasteCategories.map((cat: WasteCategory) => ({
    id: cat.id,
    name: cat.name,
    icon: cat.icon,
    color: cat.color, // Her kategoriye özel renk
  }));

  // Tüm atıkları birleştiriyoruz (tipler belli)
  const allWastes = wasteCategories.flatMap((category: WasteCategory) => 
    category.wastes.map((waste: WasteItem) => ({
      ...waste,
      categoryName: category.name
    }))
  );

  return (
    <View style={[styles.container, { backgroundColor: selectedCategoryColor }]}> {/* Arka plan rengini kategoriye göre ayarlıyoruz */}
      {/* Arama Butonu - SearchScreen'e yönlendirir */}
      <TouchableOpacity
        style={styles.searchButton}
        onPress={() => router.push('/search/SearchScreen')}
      >
        <Text style={styles.searchButtonText}>Arama Yap</Text>
      </TouchableOpacity>

      {/* Kategoriler Başlığı */}
      <Text style={styles.header}>Kategoriler</Text>
      
      {/* Yatay Kategori Listesi */}
      <FlatList
        horizontal
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.categoryCard, { backgroundColor: item.color }]} // Kategoriye özel renk
            onPress={() => {
              setSelectedCategoryColor(item.color);  // Kategoriye tıklayınca seçilen rengini duruma ekliyoruz
              router.push(`/category/${item.id}`);
            }}
          >
            {/* Kategori ikonunu ekleyeceğiz - şimdilik placeholder */}
            <View style={styles.iconPlaceholder} />
            <Text style={styles.categoryText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.categoryList}
        showsHorizontalScrollIndicator={false}
      />

      {/* Popüler Atıklar Başlığı */}
      <Text style={styles.header}>Popüler Atıklar</Text>
      
      {/* Dikey Atık Listesi */}
      <FlatList
        data={allWastes.slice(0, 5)} // Sadece ilk 5 atığı göster
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push(`/wastedetail/${item.id}`)}
          >
            {/* Atık resmini ekleyeceğiz - şimdilik placeholder */}
            <View style={styles.wasteImagePlaceholder} />
            <View style={styles.wasteInfo}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.category}>{item.categoryName}</Text>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2e7d32', // Koyu yeşil
  },
  categoryList: {
    paddingVertical: 10,
  },
  categoryCard: {
    backgroundColor: '#c8e6c9', // Kategori kartının varsayılan rengi
    borderRadius: 10,
    padding: 16,
    marginRight: 10,
    alignItems: 'center',
    width: 100,
  },
  iconPlaceholder: {
    width: 40,
    height: 40,
    backgroundColor: '#a5d6a7',
    borderRadius: 20,
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1b5e20', // Koyu yeşil
    textAlign: 'center',
  },
  searchButton: {
    backgroundColor: '#2e7d32', // Koyu yeşil
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 20,
    alignSelf: 'center',
  },
  searchButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#c8e6c9', // Kategori kartı için varsayılan renk
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  wasteImagePlaceholder: {
    width: 50,
    height: 50,
    backgroundColor: '#a5d6a7',
    borderRadius: 8,
    marginRight: 12,
  },
  wasteInfo: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1b5e20', // Koyu yeşil
    marginBottom: 4,
  },
  category: {
    fontSize: 14,
    color: '#388e3c', // Orta yeşil
  },
});
