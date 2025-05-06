import { wasteCategories } from '@/data/wastes'; // Geri dönüşüm kategorilerini içeren verileri içe aktarır
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router'; // Route parametrelerini almak ve sayfalar arasında gezinmek için gerekli hook'lar
import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'; // React Native bileşenlerini içe aktarır

// Ana bileşen: Kategori detay sayfası
export default function CategoryDetailScreen() {
  const { categoryId } = useLocalSearchParams();
  const router = useRouter();
  const navigation = useNavigation();

  const category = wasteCategories.find(cat => cat.id === categoryId);

  useEffect(() => {
    if (category) {
      navigation.setOptions({ title: category.name });
    }
  }, [category]);

  if (!category) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Kategori bulunamadı</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: category.color || '#e8f5e9' }]}>
      <Text style={[styles.description, { color: category.textColor || '#4b4b4b' }]}>{category.description}</Text>

      <FlatList
        data={category.wastes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.card, { backgroundColor: category.cardColor || '#c8e6c9' }]}
            onPress={() => router.push(`/wastedetail/${item.id}`)}
          >
            <Text style={[styles.name, { color: category.textColor || '#1b5e20' }]}>{item.name}</Text>
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
    textAlign: 'center',
    marginBottom: 12,
    color: '#2e7d32',
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 20,
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  wasteImagePlaceholder: {
    width: 60,
    height: 60,
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
    marginBottom: 4,
  },
  recycleInfo: {
    fontSize: 14,
    color: '#388e3c',
  },
});
