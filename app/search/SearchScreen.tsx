// app/search/SearchScreen.tsx

import { wasteCategories } from '@/data/wastes';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function SearchScreen() {
  const [searchText, setSearchText] = useState('');
  const router = useRouter();

  // Tüm atıkları birleştiriyoruz
  const allWastes = wasteCategories.flatMap(category => 
    category.wastes.map(waste => ({
      ...waste,
      categoryName: category.name
    }))
  );

  // Arama metnine göre filtreleme yapıyoruz
  const filteredItems = allWastes.filter(item => 
    item.name.toLowerCase().includes(searchText.toLowerCase()) ||
    item.categoryName.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Arama çubuğu */}
      <TextInput
        style={styles.searchBar}
        placeholder="Atık veya kategori ara..."
        placeholderTextColor="#888"
        value={searchText}
        onChangeText={setSearchText}
        autoFocus={true}
      />
      
      {/* Sonuç başlığı */}
      <Text style={styles.header}>
        {searchText ? `"${searchText}" için sonuçlar` : "Tüm Atıklar"}
      </Text>
      
      {/* Sonuç listesi */}
      <FlatList
        data={filteredItems}
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
              <Text style={styles.category}>{item.categoryName}</Text>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <Text style={styles.noResults}>Sonuç bulunamadı</Text>
        }
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
    height: 50,
    borderColor: '#a5d6a7',
    borderWidth: 2,
    borderRadius: 10,
    paddingLeft: 15,
    marginBottom: 20,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#2e7d32',
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
    color: '#1b5e20',
    marginBottom: 4,
  },
  category: {
    fontSize: 14,
    color: '#388e3c',
  },
  noResults: {
    textAlign: 'center',
    fontSize: 16,
    color: '#888',
    marginTop: 20,
  },
});