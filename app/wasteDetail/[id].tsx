// app/wasteDetail/[id].tsx

import { wasteCategories } from '@/data/wastes';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function WasteDetailScreen() {
  // URL'den atık ID'sini alıyoruz
  const { id } = useLocalSearchParams();

  // Tüm atıkları birleştirip ilgili atığı buluyoruz
  let selectedWaste = null;
  let categoryName = '';
  
  for (const category of wasteCategories) {
    const found = category.wastes.find(item => item.id === id);
    if (found) {
      selectedWaste = found;
      categoryName = category.name;
      break;
    }
  }

  // Atık bulunamazsa hata mesajı göster
  if (!selectedWaste) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Atık Bulunamadı</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {/* Atık adı */}
      <Text style={styles.header}>{selectedWaste.name}</Text>
      
      {/* Kategori bilgisi */}
      <Text style={styles.category}>Kategori: {categoryName}</Text>
      
      {/* Atık resmi için placeholder */}
      <View style={styles.imagePlaceholder} />
      
      {/* Atık açıklaması */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Bu Atık Nedir?</Text>
        <Text style={styles.sectionContent}>{selectedWaste.description}</Text>
      </View>
      
      {/* Geri dönüşüm bilgileri */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Nasıl Geri Dönüştürülür?</Text>
        <Text style={styles.sectionContent}>{selectedWaste.recycleInfo}</Text>
      </View>
      
      {/* Çevresel etki */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Çevresel Etkisi</Text>
        <Text style={styles.sectionContent}>{selectedWaste.environmentalImpact}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8f5e9',
    paddingTop: 30,
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    color: '#2e7d32',
  },
  category: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#4b4b4b',
  },
  imagePlaceholder: {
    width: '100%',
    height: 200,
    backgroundColor: '#a5d6a7',
    borderRadius: 10,
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1b5e20',
    marginBottom: 8,
  },
  sectionContent: {
    fontSize: 16,
    color: '#4b4b4b',
    lineHeight: 22,
  },
});