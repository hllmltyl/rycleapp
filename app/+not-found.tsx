import { Link, Stack } from 'expo-router'; // Expo Router'dan Link ve Stack bileşenleri import ediliyor
import { StyleSheet } from 'react-native'; // React Native stil bileşeni import ediliyor

import { ThemedText } from '@/components/ThemedText'; // ThemedText bileşeni, tema uyumlu yazı için import ediliyor
import { ThemedView } from '@/components/ThemedView'; // ThemedView bileşeni, tema uyumlu görünüm için import ediliyor

export default function NotFoundScreen() { 
  // Bulunamayan sayfa ekranı fonksiyonu
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} /> 
      {/* Stack navigasyonunda başlık olarak 'Oops!' görüntüleniyor */}
      <ThemedView style={styles.container}> 
        {/* Tema uyumlu görünüm bileşeni kullanılıyor ve stil uygulanıyor */}
        <ThemedText type="title">This screen does not exist.</ThemedText> 
        {/* Tema uyumlu başlık yazısı, 'Bu ekran mevcut değil.' mesajını gösteriyor */}
        <Link href="/" style={styles.link}> 
          {/* Ana sayfaya yönlendiren bir link, stil uygulanıyor */}
          <ThemedText type="link">Go to home screen!</ThemedText> 
          {/* Tema uyumlu link yazısı, 'Ana sayfaya git' mesajını gösteriyor */}
        </Link>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    // Ekranın tamamını kapsayacak şekilde esnek düzen
    alignItems: 'center', 
    // Elemanları yatayda ortalamak için
    justifyContent: 'center', 
    // Elemanları dikeyde ortalamak için
    padding: 20, 
    // İçerideki öğelere 20 birimlik boşluk ekleniyor
  },
  link: {
    marginTop: 15, 
    // Linkin üstüne 15 birimlik boşluk ekleniyor
    paddingVertical: 15, 
    // Linkin üst ve altına 15 birimlik iç boşluk ekleniyor
  },
});
