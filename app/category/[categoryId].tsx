import { wasteCategories } from '@/data/wastes';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Bu satırı ekliyoruz - başlık ayarı için
import { useNavigation } from 'expo-router';
import { useEffect } from 'react';

export default function CategoryDetailScreen() {
  const { categoryId } = useLocalSearchParams();
  const router = useRouter();
  const navigation = useNavigation(); // Navigation hook'unu ekliyoruz

  // Kategori nesnesini bul
  const category = wasteCategories.find(cat => cat.id === categoryId);

  // Başlığı güncellemek için useEffect ekliyoruz
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
    <View style={styles.container}>
      {/* Eski başlık satırını siliyoruz - artık navigation header'da gözükecek */}
      <Text style={styles.description}>{category.description}</Text>

      <FlatList
        data={category.wastes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push(`/wastedetail/${item.id}`)}
          >
            <Text style={styles.name}>{item.name}</Text>
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
    backgroundColor: '#e8f5e9',
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
    color: '#4b4b4b',
    lineHeight: 20,
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#c8e6c9',
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
    color: '#1b5e20',
    marginBottom: 4,
  },
  recycleInfo: {
    fontSize: 14,
    color: '#388e3c',
  },
});