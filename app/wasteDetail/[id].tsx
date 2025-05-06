import { wasteCategories } from '@/data/wastes';
import { Stack, useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function WasteDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  // Seçilen kategori ve atığı buluyoruz
  const selectedCategory = wasteCategories.find(cat =>
    cat.wastes.some(waste => waste.id === id)
  );

  const selectedWaste = selectedCategory?.wastes.find(waste => waste.id === id);

  if (!selectedWaste || !selectedCategory) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Atık Bulunamadı</Text>
      </View>
    );
  }

  // Kategoriye özel arka plan rengi veya varsayılan renk
  const backgroundColor = selectedCategory.color || '#e8f5e9';

  return (
    <>
      <Stack.Screen 
        options={{ 
          title: selectedWaste.name,
          headerStyle: {
            backgroundColor: backgroundColor,
          },
          headerTintColor: '#2e7d32',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 18,
          }
        }} 
      />

      <ScrollView 
        style={{ backgroundColor }}
        contentContainerStyle={styles.contentContainer}
      >
        <Text style={styles.category}>Kategori: {selectedCategory.name}</Text>

        <View style={styles.imagePlaceholder}>
          <Text style={styles.imagePlaceholderText}>Resim Yükleniyor</Text>
        </View>

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
    justifyContent: 'center',
    alignItems: 'center',
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
