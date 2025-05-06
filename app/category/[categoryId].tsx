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
    <View style={[styles.container, { backgroundColor: category.color || '#f5f5f5' }]}>
      <Text style={[styles.description, { color: category.textColor || '#555' }]}>
        {category.description}
      </Text>

      <FlatList
        data={category.wastes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.card, { backgroundColor: category.cardColor || '#c8e6c9' }]}
            onPress={() => router.push(`/wastedetail/${item.id}`)}
          >
            <View style={styles.cardContent}>
              <View style={[styles.icon, { backgroundColor: category.color || '#81c784' }]}>
                {/* Placeholder for Waste Image */}
              </View>
              <Text style={[styles.name, { color: category.textColor || '#388e3c' }]}>{item.name}</Text>
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
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
    color: '#2e7d32',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#666',
    lineHeight: 22,
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 5, // Modern shadow effect
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: '500',
    flex: 1,
  },
  recycleInfo: {
    fontSize: 14,
    color: '#388e3c',
  },
});
