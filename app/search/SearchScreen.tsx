// Geri dönüşüm kategorilerini içeren verileri içe aktarır
import { wasteCategories } from '@/data/wastes';

// Sayfalar arası yönlendirme için kullanılan hook'u içe aktarır
import { useRouter } from 'expo-router';
import React, { useState } from 'react';

// React Native bileşenlerini içe aktarır
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// Ana bileşen: Arama ekranı
export default function SearchScreen() {
  // Arama metnini yönetmek için state kullanır
  const [searchText, setSearchText] = useState('');
  
  // Sayfalar arası yönlendirme için router hook'u
  const router = useRouter();

  // Kategorilere ait tüm atıkları birleştirir ve her bir atığa kategori adını ekler
  const allWastes = wasteCategories.flatMap(category => 
    category.wastes.map(waste => ({
      ...waste,
      categoryName: category.name // Kategori ismini atıkla birleştirir
    }))
  );

  // Arama metnine göre atıkları filtreler
  const filteredItems = allWastes.filter(item => 
    item.name.toLowerCase().includes(searchText.toLowerCase()) || // Atık adı ile eşleşenler
    item.categoryName.toLowerCase().includes(searchText.toLowerCase()) // Kategori adı ile eşleşenler
  );

  return (
    <View style={styles.container}>
      {/* Arama çubuğu */}
      <TextInput
        style={styles.searchBar} // Arama çubuğu stili
        placeholder="Atık veya kategori ara..." // Placeholder metni
        placeholderTextColor="#888" // Placeholder metninin rengi
        value={searchText} // Arama metni
        onChangeText={setSearchText} // Metin değiştiğinde arama metnini günceller
        autoFocus={true} // Arama çubuğuna odaklanmayı otomatikleştirir
      />
      
      {/* Sonuç başlığı */}
      <Text style={styles.header}>
        {searchText ? `"${searchText}" için sonuçlar` : "Tüm Atıklar"} 
        {/* Arama metni varsa arama başlığını gösterir, yoksa "Tüm Atıklar" gösterir */}
      </Text>
      
      {/* Sonuç listesi */}
      <FlatList
        data={filteredItems} // Filtrelenmiş atıklar
        keyExtractor={(item) => item.id} // Her bir atık için benzersiz anahtar
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card} // Kart görünümü
            onPress={() => router.push(`/wastedetail/${item.id}`)} // Tıklanınca atık detayına gider
          >
            {/* Atık resmi için placeholder */}
            <View style={styles.wasteImagePlaceholder} />
            <View style={styles.wasteInfo}>
              <Text style={styles.name}>{item.name}</Text> {/* Atık adı */}
              <Text style={styles.category}>{item.categoryName}</Text> {/* Kategori adı */}
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.list} // Listeye padding ekler
        ListEmptyComponent={ // Eğer liste boşsa, "Sonuç bulunamadı" mesajı gösterilir
          <Text style={styles.noResults}>Sonuç bulunamadı</Text>
        }
      />
    </View>
  );
}

// Sayfa içi stiller tanımlanıyor
const styles = StyleSheet.create({
  container: {
    flex: 1, // Sayfayı tamamen kaplasın
    backgroundColor: '#e8f5e9', // Açık yeşil arka plan
    paddingTop: 50, // Yukarıdan boşluk
    paddingHorizontal: 16, // Yatayda iç boşluk
  },
  searchBar: {
    height: 50, // Yükseklik
    borderColor: '#a5d6a7', // Kenar rengi
    borderWidth: 2, // Kenar kalınlığı
    borderRadius: 10, // Köşe yuvarlaklığı
    paddingLeft: 15, // Soldan iç boşluk
    marginBottom: 20, // Alt boşluk
    backgroundColor: '#fff', // Beyaz arka plan
    fontSize: 16, // Yazı boyutu
  },
  header: {
    fontSize: 20, // Başlık yazı boyutu
    fontWeight: 'bold', // Kalın yazı
    marginBottom: 15, // Alt boşluk
    color: '#2e7d32', // Yeşil renk
  },
  list: {
    paddingBottom: 20, // Liste altına boşluk ekler
  },
  card: {
    backgroundColor: '#c8e6c9', // Kart arka plan rengi
    borderRadius: 10, // Köşe yuvarlaklığı
    padding: 12, // İç boşluk
    marginBottom: 12, // Kartlar arası boşluk
    flexDirection: 'row', // Yatay düzen
    alignItems: 'center', // Dikey ortalama
  },
  wasteImagePlaceholder: {
    width: 50, // Görsel yeri genişlik
    height: 50, // Görsel yeri yükseklik
    backgroundColor: '#a5d6a7', // Görsel yerinin rengi
    borderRadius: 8, // Görsel yeri köşe yuvarlaklığı
    marginRight: 12, // Sağ boşluk
  },
  wasteInfo: {
    flex: 1, // Genişliği doldur
  },
  name: {
    fontSize: 16, // Atık adı yazı boyutu
    fontWeight: '500', // Yarı kalın yazı
    color: '#1b5e20', // Koyu yeşil renk
    marginBottom: 4, // Alt boşluk
  },
  category: {
    fontSize: 14, // Kategori yazı boyutu
    color: '#388e3c', // Açık yeşil renk
  },
  noResults: {
    textAlign: 'center', // Ortalanmış metin
    fontSize: 16, // Yazı boyutu
    color: '#888', // Gri renk
    marginTop: 20, // Üst boşluk
  },
});
