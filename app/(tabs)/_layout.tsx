// app/(tabs)/_layout.tsx

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

// Geri dönüşüm teması için özel renk paleti
const RecyclingColors = {
  light: {
    tint: '#2e7d32', // Koyu yeşil
    tabBarBackground: '#e8f5e9', // Açık yeşil arkaplan
    icon: '#1b5e20', // İkon rengi
  },
  dark: {
    tint: '#81c784', // Açık yeşil (karanlık mod)
    tabBarBackground: '#1b5e20', // Koyu yeşil arkaplan
    icon: '#e8f5e9', // İkon rengi
  },
};

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const colors = RecyclingColors[colorScheme ?? 'light'];

  return (
    <Tabs
      screenOptions={{
        // Temel ayarlar
        tabBarActiveTintColor: colors.tint,
        tabBarInactiveTintColor: '#a5d6a7', // Pasif ikon rengi
        headerShown: false, // Üst başlığı gizle (özel başlık kullanacağız)
        
        // Haptic feedback ayarları
        tabBarButton: HapticTab,
        
        // TabBar görünüm ayarları
        tabBarBackground: () => (
          <TabBarBackground 
            color={colors.tabBarBackground} 
            opacity={0.95}
          />
        ),
        tabBarStyle: {
          ...Platform.select({
            ios: {
              position: 'absolute',
              borderTopWidth: 0, // Üst çizgiyi kaldır
              elevation: 0, // Android gölgesini kaldır
            },
            android: {
              elevation: 0,
              borderTopWidth: 0,
            },
          }),
          height: Platform.OS === 'ios' ? 80 : 60, // Platforma göre yükseklik
          paddingBottom: Platform.OS === 'ios' ? 20 : 10, // iPhone çentikleri için
        },
        
        // İkon ve label ayarları
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          marginBottom: Platform.OS === 'ios' ? 15 : 5,
        },
        tabBarItemStyle: {
          paddingVertical: 5,
        },
      }}
    >
      {/* Ana Sayfa Sekmesi */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Keşfet',
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol 
              size={28} 
              name={focused ? 'leaf.fill' : 'leaf'} 
              color={color} 
            />
          ),
        }}
      />

      {/* Kategoriler Sekmesi (opsiyonel) */}
      <Tabs.Screen
        name="categories"
        options={{
          title: 'Kategoriler',
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol 
              size={28} 
              name={focused ? 'square.grid.2x2.fill' : 'square.grid.2x2'} 
              color={color} 
            />
          ),
        }}
      />

      {/* Favoriler Sekmesi (opsiyonel) */}
      <Tabs.Screen
        name="favorites"
        options={{
          title: 'Favoriler',
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol 
              size={28} 
              name={focused ? 'heart.fill' : 'heart'} 
              color={color} 
            />
          ),
        }}
      />
    </Tabs>
  );
}