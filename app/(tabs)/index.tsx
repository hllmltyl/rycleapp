import { WasteCategory, WasteItem, wasteCategories } from '@/data/wastes';
import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Index() {
  const router = useRouter();

  const categories = wasteCategories.map((cat: WasteCategory) => ({
    id: cat.id,
    name: cat.name,
    icon: cat.icon
  }));

  const allWastes = wasteCategories.flatMap((category: WasteCategory) => 
    category.wastes.map((waste: WasteItem) => ({
      ...waste,
      categoryName: category.name
    }))
  );

  return (
    <View style={styles.container}>
      {/* Arama Butonu */}
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
            style={styles.categoryCard}
            onPress={() => router.push(`/category/${item.id}`)}
          >
            {/* Kategori İkonu */}
            <View style={styles.iconWrapper}>
              <Text style={styles.iconText}>{item.icon}</Text>
            </View>
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
        data={allWastes.slice(0, 5)} // İlk 5 atık
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push(`/wastedetail/${item.id}`)}
          >
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
    backgroundColor: '#f1f8e9', // Daha açık yeşil tonlarında modern bir arka plan
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#388e3c', // Orta yeşil ton
    textAlign: 'center',
  },
  categoryList: {
    paddingVertical: 10,
  },
  categoryCard: {
    backgroundColor: '#ffffff', // Beyaz kart arka planı
    borderRadius: 12,
    padding: 20,
    marginRight: 15,
    alignItems: 'center',
    width: 120,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  iconWrapper: {
    backgroundColor: '#388e3c', // Kategori ikon arka planı
    borderRadius: 25,
    padding: 12,
    marginBottom: 10,
  },
  iconText: {
    color: '#fff',
    fontSize: 20,
  },
  categoryText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#388e3c', // Koyu yeşil
    textAlign: 'center',
  },
  searchButton: {
    backgroundColor: '#388e3c', // Buton yeşili
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 50,
    marginBottom: 25,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
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
    backgroundColor: '#ffffff', // Beyaz kart
    borderRadius: 12,
    padding: 18,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  wasteImagePlaceholder: {
    width: 55,
    height: 55,
    backgroundColor: '#c8e6c9',
    borderRadius: 10,
    marginRight: 15,
  },
  wasteInfo: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: '500',
    color: '#388e3c', // Koyu yeşil
    marginBottom: 5,
  },
  category: {
    fontSize: 14,
    color: '#607d8b', // Gri-mavi ton
  },
});
