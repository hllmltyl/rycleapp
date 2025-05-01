// app/category/[categoryId].tsx

import { wasteCategories } from '@/data/wastes';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CategoryDetailScreen() {
  // URL'den kategori ID'sini alıyoruz
  const { categoryId } = useLocalSearchParams();
  const router = useRouter();

  // Kategoriyi veri kaynağından buluyoruz
  const category = wasteCategories.find(cat => cat.id === categoryId);

  // Kategori bulunamazsa hata mesajı göster
  if (!category) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Kategori bulunamadı</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Kategori başlığı */}
      <Text style={styles.header}>{category.name} Atıkları</Text>
      
      {/* Kategori açıklaması */}
      <Text style={styles.description}>{category.description}</Text>

      {/* Kategoriye ait atık listesi */}
      <FlatList
        data={category.wastes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push(`/wastedetail/${item.id}`)}
          >
            {/* Atık resmi için placeholder */}
            <View style={styles.wasteImagePlaceholder} />
            <View style={styles.wasteInfo}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.recycleInfo} numberOfLines={1}>
                {item.recycleInfo}
              </Text>
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