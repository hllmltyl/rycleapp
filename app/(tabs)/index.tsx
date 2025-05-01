// app/index.tsx

import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Atık verisini ve kategorileri ekliyoruz
const wasteItems = [
  { id: '1', name: 'Plastik Şişe', category: 'Plastik' },
  { id: '2', name: 'Cam Şişe', category: 'Cam' },
  { id: '3', name: 'Defter', category: 'Kağıt' },
];

const categories = ['Plastik', 'Cam', 'Kağıt'];

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.searchButton}
        onPress={() => router.push('/search/SearchScreen')} // SearchScreen sayfasına yönlendir
      >
        <Text style={styles.searchButtonText}>Arama Yap</Text>
      </TouchableOpacity>

      <Text style={styles.header}>Kategoriler</Text>
      <FlatList
        horizontal
        data={categories}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.categoryCard}
            onPress={() => router.push(`/category/${item}`)}
          >
            <Text style={styles.categoryText}>{item}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.categoryList}
      />

      <Text style={styles.header}>Atıklar</Text>
      <FlatList
        data={wasteItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push(`/wasteDetail/${item.id}`)} // Detay sayfasına yönlendirme
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
    marginBottom: 10,
    color: '#2e7d32',
  },
  categoryList: {
    paddingVertical: 10,
  },
  categoryCard: {
    backgroundColor: '#c8e6c9',
    borderRadius: 10,
    padding: 16,
    marginRight: 10,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1b5e20',
  },
  searchButton: {
    backgroundColor: '#2e7d32',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 20,
  },
  searchButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  list: {
    paddingHorizontal: 16,
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
