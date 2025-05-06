import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'; // React Navigation'dan tema desteği sağlanıyor (dark ve default temalar)
import { useFonts } from 'expo-font'; // Fontları yüklemek için kullanılır
import { Stack } from 'expo-router'; // Stack navigasyonu için expo-router kullanılıyor
import { StatusBar } from 'expo-status-bar'; // Durum çubuğunun stilini yönetmek için kullanılır
import 'react-native-reanimated'; // React Native animasyonları için reanimated kütüphanesi dahil ediliyor

import { useColorScheme } from '@/hooks/useColorScheme'; // Kullanıcının renk tercihine göre tema seçimini sağlayan hook

export default function RootLayout() {
  const colorScheme = useColorScheme(); // Kullanıcının renk şeması tercihini alıyoruz (dark veya light)
  const [loaded] = useFonts({ // Özel font yükleme işlemi başlatılıyor
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'), // SpaceMono adlı font dosyası yükleniyor
  });

  if (!loaded) { // Eğer font yüklenmediyse, UI'da hiçbir şey render edilmesin
    return null; // Yüklenme tamamlanana kadar bir şey göstermemek için null dönüyoruz
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}> 
      {/* Kullanıcının tercihine göre dark veya default tema seçiliyor */}
      <Stack>
        {/* Stack navigasyonu için ekranlar tanımlanıyor */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> 
        {/* Tabs ekranı açılıyor ve header (üst başlık) gizleniyor */}
        <Stack.Screen name="+not-found" /> 
        {/* Bulunamayan sayfa için bir ekran daha ekleniyor */}
      </Stack>
      <StatusBar style="auto" /> 
      {/* Durum çubuğu stili otomatik olarak belirleniyor */}
    </ThemeProvider>
  );
}
