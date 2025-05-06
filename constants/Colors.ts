/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

// Açık mod için kullanılan ana renk tanımlanıyor
const tintColorLight = '#0a7ea4'; 
// Koyu mod için kullanılan ana renk tanımlanıyor
const tintColorDark = '#fff'; 

// Uygulamanın renklerini light (açık) ve dark (koyu) modlara göre tanımlayan obje
export const Colors = {
  light: { 
    // Açık modda metin rengi
    text: '#11181C', 
    // Açık modda arka plan rengi
    background: '#fff', 
    // Açık modda ana renk (tint) 
    tint: tintColorLight, 
    // Açık modda ikon rengi
    icon: '#687076', 
    // Sekme ikonları için varsayılan renk
    tabIconDefault: '#687076', 
    // Sekme ikonları için seçilen renk
    tabIconSelected: tintColorLight, 
  },
  dark: { 
    // Koyu modda metin rengi
    text: '#ECEDEE', 
    // Koyu modda arka plan rengi
    background: '#151718', 
    // Koyu modda ana renk (tint)
    tint: tintColorDark, 
    // Koyu modda ikon rengi
    icon: '#9BA1A6', 
    // Sekme ikonları için varsayılan renk
    tabIconDefault: '#9BA1A6', 
    // Sekme ikonları için seçilen renk
    tabIconSelected: tintColorDark, 
  },
};
