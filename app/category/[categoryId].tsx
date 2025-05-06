// Geri dönüşüm kategorilerini içeren verileri içe aktarır
import { wasteCategories } from '@/data/wastes';

// Route parametrelerini almak ve sayfalar arasında gezinmek için gerekli hook'lar
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';

// React Native bileşenlerini içe aktarır
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Navigasyon başlığı gibi özellikleri değiştirmek için kullanılır
import { useNavigation } from 'expo-router';

// useEffect hook'u, component lifecycle işlemleri için kullanılır
import { useEffect } from 'react';

// Ana bileşen: Kategori detay sayfası
export default function CategoryDetailScreen() {
  // URL'den gelen categoryId parametresini alır
  const { categoryId } = useLocalSearchParams();

  // Sayfalar arası yönlendirme için kullanılır
  const router = useRouter();

  // Sayfanın navigasyon başlığı gibi özelliklerini değiştirmek için kullanılır
  const navigation = useNavigation();

  // wasteCategories içinden ilgili kategoriyi ID'ye göre bulur
  const category = wasteCategories.find(cat => cat.id === categoryId);

  // Sayfa yüklendiğinde başlığı kategori adıyla günceller
  useEffect(() => {
    if (category) {
      navigation.setOptions({ title: category.name }); // Başlığı ayarla
    }
  }, [category]); // category değiştiğinde tekrar çalışır

  // Eğer kategori bulunamazsa, kullanıcıya bilgi mesajı gösterilir
  if (!category) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Kategori bulunamadı</Text>
      </View>
    );
  }

  // Kategori bulunduğunda, açıklama ve atık listesi ekranda gösterilir
  return (
    <View style={styles.container}>
      {/* Kategoriye ait açıklama metni */}
      <Text style={styles.description}>{category.description}</Text>

      {/* Atık listesini düz bir liste olarak gösterir */}
      <FlatList
        data={category.wastes} // Kategorinin atıkları
        keyExtractor={(item) => item.id} // Her bir atık için benzersiz anahtar
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card} // Kart görünümü
            onPress={() => router.push(`/wastedetail/${item.id}`)} // Tıklanınca atık detayına gider
          >
            <Text style={styles.name}>{item.name}</Text> {/* Atık adı */}
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.list} // Listeye padding ekler
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
  header: {
    fontSize: 22, // Yazı boyutu
    fontWeight: 'bold', // Kalın yazı
    textAlign: 'center', // Ortalanmış metin
    marginBottom: 12, // Alt boşluk
    color: '#2e7d32', // Yeşil renk
  },
  description: {
    fontSize: 14, // Açıklama yazısı boyutu
    textAlign: 'center', // Ortalanmış metin
    marginBottom: 20, // Alt boşluk
    color: '#4b4b4b', // Koyu gri renk
    lineHeight: 20, // Satır aralığı
  },
  list: {
    paddingBottom: 20, // Liste altına boşluk
  },
  card: {
    backgroundColor: '#c8e6c9', // Kart arka planı
    borderRadius: 10, // Köşe yuvarlaklığı
    padding: 12, // İç boşluk
    marginBottom: 12, // Kartlar arası boşluk
    flexDirection: 'row', // Yatay düzen
    alignItems: 'center', // Dikey ortalama
  },
  wasteImagePlaceholder: {
    width: 60, // Görsel yeri genişlik
    height: 60, // Görsel yeri yükseklik
    backgroundColor: '#a5d6a7', // Görsel yerinin rengi
    borderRadius: 8, // Görsel yeri köşe yuvarlaklığı
    marginRight: 12, // Sağ boşluk
  },
  wasteInfo: {
    flex: 1, // Genişliği doldur
  },
  name: {
    fontSize: 16, // Atık adı boyutu
    fontWeight: '500', // Yarı kalın yazı
    color: '#1b5e20', // Koyu yeşil renk
    marginBottom: 4, // Alt boşluk
  },
  recycleInfo: {
    fontSize: 14, // Geri dönüşüm bilgisi yazı boyutu
    color: '#388e3c', // Açık yeşil renk
  },
});
