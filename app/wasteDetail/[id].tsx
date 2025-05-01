// app/wasteDetail/[id].tsx

import { wasteCategories } from '@/data/wastes';
import { Stack, useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function WasteDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  // Atık ve kategori bilgisini bulma (daha modern yöntem)
  const selectedWaste = wasteCategories
    .flatMap(category => 
      category.wastes.map(waste => ({ ...waste, categoryName: category.name }))
    )
    .find(item => item.id === id);

  if (!selectedWaste) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Atık Bulunamadı</Text>
      </View>
    );
  }

  return (
    <>
      {/* Dinamik başlık ayarı - Artık navigasyon çubuğunda atık adı gözükecek */}
      <Stack.Screen 
        options={{ 
          title: selectedWaste.name,
          headerStyle: {
            backgroundColor: '#e8f5e9',
          },
          headerTintColor: '#2e7d32',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 18,
          }
        }} 
      />

      <ScrollView 
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        {/* Kategori bilgisi */}
        <Text style={styles.category}>Kategori: {selectedWaste.categoryName}</Text>
        
        {/* Atık resmi - Sonraki adımda gerçek resim ekleyeceğiz */}
        <View style={styles.imagePlaceholder}>
          <Text style={styles.imagePlaceholderText}>Resim Yükleniyor</Text>
        </View>
        
        {/* Bilgi bölümleri */}
        <WasteInfoSection 
          title="Bu Atık Nedir?"
          content={selectedWaste.description}
        />
        
        <WasteInfoSection 
          title="Nasıl Geri Dönüştürülür?"
          content={selectedWaste.recycleInfo}
        />
        
        <WasteInfoSection 
          title="Çevresel Etkisi"
          content={selectedWaste.environmentalImpact}
        />
      </ScrollView>
    </>
  );
}

// Yardımcı bileşen: Atık bilgi bölümü
function WasteInfoSection({ title, content }: { title: string; content: string }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.sectionContent}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8f5e9',
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 30,
  },
  category: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#4b4b4b',
    fontWeight: '500',
  },
  imagePlaceholder: {
    width: '100%',
    height: 200,
    backgroundColor: '#c8e6c9',
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePlaceholderText: {
    color: '#2e7d32',
    fontSize: 16,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1b5e20',
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#c62828',
    marginTop: 40,
  },
  
});