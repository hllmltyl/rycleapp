import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { wasteCategories } from '../../data/wastes'; // Yeni veri kaynağı

export default function CategoryDetailScreen() {
  const { categoryId } = useLocalSearchParams();
  const router = useRouter();

  // Kategori nesnesini bul
  const category = wasteCategories.find(cat => cat.id === categoryId);

  if (!category) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Kategori bulunamadı</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{category.name} Atıkları</Text>
      <Text style={styles.description}>{category.description}</Text>

      <FlatList
        data={category.wastes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push(`/wasteDetail/${item.id}`)}
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
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#c8e6c9',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1b5e20',
  },
});
