import { HapticTab } from '@/components/HapticTab'; // Haptic geri bildirimli sekme bileşeni
import { IconSymbol } from '@/components/ui/IconSymbol'; // İkon bileşeni
import TabBarBackground from '@/components/ui/TabBarBackground'; // Tab bar arka plan bileşeni
import { useColorScheme } from '@/hooks/useColorScheme'; // Renk şeması yönetimi
import { Tabs } from 'expo-router'; // Expo Router için Tabs bileşeni
import React from 'react'; // React kütüphanesini içe aktarır
import { Platform } from 'react-native'; // Platform özelliklerini kullanmak için React Native'den import edilir

// Geri dönüşüm temalı renk paletini tanımlar
const RecyclingColors = {
  light: {
    tint: '#2e7d32', // Koyu yeşil renk (aktif sekme rengi)
    tabBarBackground: '#e8f5e9', // Açık yeşil renk (tab bar arka planı)
    icon: '#1b5e20', // Koyu yeşil ikon rengi
  },
  dark: {
    tint: '#81c784', // Açık yeşil (karanlık mod)
    tabBarBackground: '#1b5e20', // Koyu yeşil (karanlık mod tab bar arka planı)
    icon: '#e8f5e9', // Açık yeşil ikon rengi (karanlık mod)
  },
};

export default function TabLayout() {
  const colorScheme = useColorScheme(); // Renk şemasını alır (light veya dark)
  const colors = RecyclingColors[colorScheme ?? 'light']; // Aktif renk paletini seçer (light veya dark)

  return (
    <Tabs
      screenOptions={{
        // Tab bar renkleri ve stilleri
        tabBarActiveTintColor: colors.tint, // Aktif sekme rengi
        tabBarInactiveTintColor: '#a5d6a7', // Pasif sekme rengi
        headerShown: false, // Üst başlığı gizler, özel başlık kullanılacak
        
        // Sekme tıklama geri bildirimi (HapticFeedback)
        tabBarButton: HapticTab,
        
        // Tab bar arka plan bileşeni
        tabBarBackground: () => (
          <TabBarBackground 
            color={colors.tabBarBackground} // Tab bar'ın arka plan rengi
            opacity={0.95} // Arka plan opaklık değeri
          />
        ),
        
        // Tab bar stili
        tabBarStyle: {
          ...Platform.select({
            ios: {
              position: 'absolute', // Tab bar'ın konumunu mutlak yapar (iOS)
              borderTopWidth: 0, // Üst çizgiyi kaldırır (iOS)
              elevation: 0, // Android için gölgeyi kaldırır
            },
            android: {
              elevation: 0, // Android'teki gölgeyi kaldırır
              borderTopWidth: 0, // Üst çizgiyi kaldırır (Android)
            },
          }),
          height: Platform.OS === 'ios' ? 80 : 60, // Yükseklik, iOS ve Android için farklı
          paddingBottom: Platform.OS === 'ios' ? 20 : 10, // iOS için çentiklere uyum sağlamak için alt boşluk
        },
        
        // Tab bar etiketi (label) stil ayarları
        tabBarLabelStyle: {
          fontSize: 14, // Etiket yazı boyutu arttırıldı
          fontWeight: '600', // Orta kalınlıkta yazı
          marginBottom: Platform.OS === 'ios' ? 15 : 5, // iOS için alt boşluk
          color: colors.icon, // Etiket rengi, renk şemasına göre ayarlandı
        },
        
        // Tab bar öğe stili
        tabBarItemStyle: {
          paddingVertical: 5, // Dikeyde iç boşluk
        },
      }}
    >
      {/* Ana Sayfa Sekmesi */}
      <Tabs.Screen
        name="index" // Ekran adı
        options={{
          title: 'Keşfet', // Sekme başlığı
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol 
              size={28} 
              name={focused ? 'leaf.fill' : 'leaf'} // İkon değişir: aktifse dolu yaprak, değilse boş yaprak
              color={color} // Sekme ikonunun rengi
            />
          ),
        }}
      />

      {/* Kategoriler Sekmesi */}
      <Tabs.Screen
        name="categories" // Ekran adı
        options={{
          title: 'Kategoriler', // Sekme başlığı
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol 
              size={28} 
              name={focused ? 'square.grid.2x2.fill' : 'square.grid.2x2'} // İkon değişir: aktifse dolu kare ızgara, değilse boş
              color={color} // Sekme ikonunun rengi
            />
          ),
        }}
      />

      {/* Favoriler Sekmesi */}
      <Tabs.Screen
        name="favorites" // Ekran adı
        options={{
          title: 'Favoriler', // Sekme başlığı
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol 
              size={28} 
              name={focused ? 'heart.fill' : 'heart'} // İkon değişir: aktifse dolu kalp, değilse boş
              color={color} // Sekme ikonunun rengi
            />
          ),
        }}
      />
    </Tabs>
  );
}
