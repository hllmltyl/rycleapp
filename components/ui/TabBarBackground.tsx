// components/ui/TabBarBackground.tsx

import React from 'react';
import { View } from 'react-native';

type TabBarBackgroundProps = {
  color: string;
  opacity?: number;
};

export default function TabBarBackground({ color, opacity = 1 }: TabBarBackgroundProps) {
  return (
    <View
      style={{
        backgroundColor: color,
        opacity,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    />
  );
}

// Android ve web için shim fonksiyonu
export function useBottomTabOverflow() {
  return 0;
}