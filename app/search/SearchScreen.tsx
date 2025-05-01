// app/search/SearchScreen.tsx

import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// Atık verisini burada tanımlıyoruz
const wasteItems = [
  { id: '1', name: 'Plastik Şişe', category: 'Plastik' },
  { id: '2', name: 'Cam Şişe', category: 'Cam' },
  { id: '3', name: 'Defter', category: 'Kağıt' },
];

export default function SearchScreen() {
  const [searchText, setSearchText] = useState('');
  const router = useRouter();

  // Arama metnine göre filtreleme yapıyoruz
  const filteredItems = wasteItems.filter(item => 
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Atık arayın..."
        value={searchText}
        onChangeText={setSearchText}
      />
      
      <Text style={styles.header}>Arama Sonuçları</Text>
      <FlatList
        data={filteredItems}
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
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 8,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2e7d32',
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
