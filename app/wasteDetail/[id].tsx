// app/wasteDetail/[id].tsx

import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Örnek atık verileri
const wasteItems = [
  {
    id: '1',
    name: 'Plastik Şişe',
    category: 'Plastik',
    description: 'Plastik şişeler, geri dönüşümle tekrar kullanılabilir.',
    recyclingInfo: 'Plastik şişeler %100 geri dönüştürülebilir.',
  },
  {
    id: '2',
    name: 'Cam Şişe',
    category: 'Cam',
    description: 'Cam şişeler, geri dönüşümle tekrar kullanılabilir.',
    recyclingInfo: 'Cam %100 geri dönüştürülebilir.',
  },
  {
    id: '3',
    name: 'Defter',
    category: 'Kağıt',
    description: 'Kağıt defterler geri dönüşümle yeniden kağıt üretilebilir.',
    recyclingInfo: 'Kağıt geri dönüştürülerek tekrar kullanılabilir.',
  },
];

export default function WasteDetailScreen() {
  // URL parametrelerinden atık id'sini alıyoruz
  const { id } = useLocalSearchParams();

  // Atık verilerini id'ye göre filtrele
  const selectedWaste = wasteItems.find(item => item.id === id);

  if (!selectedWaste) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Atık Bulunamadı</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{selectedWaste.name}</Text>
      <Text style={styles.description}>{selectedWaste.description}</Text>
      <Text style={styles.recyclingInfo}>{selectedWaste.recyclingInfo}</Text>
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
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#2e7d32',
  },
  description: {
    fontSize: 18,
    marginBottom: 10,
    color: '#1b5e20',
  },
  recyclingInfo: {
    fontSize: 16,
    color: '#388e3c',
  },
});
