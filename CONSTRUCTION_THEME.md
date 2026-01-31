# Construction Theme Integration Guide

This document explains how to use the construction-themed Tailwind CSS configuration in your Next.js project.

## 🎨 Color Palette

### Brown Tones
The primary color palette for construction-themed elements:

- `construction-brown-50` - Lightest (#FAF6F0)
- `construction-brown-100` - (#F0E6D6)
- `construction-brown-200` - (#E0CDB2)
- `construction-brown-300` - (#D0B48E)
- `construction-brown-400` - (#C09B6A)
- `construction-brown-500` - Mid-tone (#8B7355)
- `construction-brown-600` - (#6B5A43)
- `construction-brown-700` - (#4A3F2F)
- `construction-brown-800` - (#2A251B)
- `construction-brown-900` - Darkest (#0A0906)

### Gray Tones
Neutral colors for backgrounds and text:

- `construction-gray-50` through `construction-gray-900`

### Accent Colors
Special purpose colors:

- `construction-accent-gold` - Premium gold accent (#D4A76A)
- `construction-accent-steel` - Steel blue (#A3B1C6)
- `construction-accent-safety` - Safety orange (#FF6B35)
- `construction-accent-concrete` - Concrete gray (#A9A9A9)
- `construction-accent-success` - Success green (#4CAF50)

## 🎭 Usage Examples

### Basic Colors

```tsx
// Background colors
<div className="bg-construction-brown-500">
  <p className="text-construction-brown-50">Light text on dark background</p>
</div>

// Accent colors
<button className="bg-construction-accent-gold text-construction-brown-900">
  Premium Button
</button>
```

### Gradients

```tsx
<div className="bg-gradient-to-br from-construction-brown-500 to-construction-brown-700">
  Gradient background
</div>
```

### Borders and Shadows

```tsx
<div className="border-2 border-construction-accent-gold shadow-lg">
  Card with gold border
</div>
```

## ✨ Custom Animations

### Available Animations

1. **Float** - Gentle up and down movement
   ```tsx
   <div className="animate-float">Floating element</div>
   ```

2. **Glow** - Pulsing glow effect (perfect for gold accents)
   ```tsx
   <div className="bg-construction-accent-gold animate-glow">Glowing element</div>
   ```

3. **Slide In** - Slides in from the left
   ```tsx
   <div className="animate-slide-in">Sliding element</div>
   ```

4. **Fade In** - Smooth fade in
   ```tsx
   <div className="animate-fade-in">Fading element</div>
   ```

5. **Pulse Slow** - Slow pulsing effect
   ```tsx
   <div className="animate-pulse-slow">Pulsing element</div>
   ```

## 🛠️ TypeScript Utilities

Import the construction theme utilities:

```tsx
import { 
  constructionTheme, 
  constructionAnimations,
  getConstructionColor,
  getConstructionAccent 
} from '@/lib/construction-theme'

// Use in your components
const goldColor = constructionTheme.accent.gold
const floatAnimation = constructionAnimations.float

// Helper functions
const brownClass = getConstructionColor('brown', 500) // 'construction-brown-500'
const goldClass = getConstructionAccent('gold') // 'construction-accent-gold'
```

## 🎯 Component Examples

### Premium Card

```tsx
<div className="bg-white dark:bg-construction-brown-800 p-6 rounded-lg shadow-xl border-2 border-construction-accent-gold hover:shadow-2xl transition-shadow duration-300">
  <h3 className="text-xl font-bold text-construction-brown-900 dark:text-construction-brown-50">
    Card Title
  </h3>
  <p className="text-construction-brown-600 dark:text-construction-brown-300">
    Card content with proper contrast
  </p>
</div>
```

### Glassmorphism Card

```tsx
<div className="bg-construction-accent-steel/20 backdrop-blur-md p-6 rounded-lg shadow-xl border border-construction-accent-steel">
  Glass effect card
</div>
```

### Animated Button

```tsx
<button className="px-6 py-3 bg-construction-accent-gold text-construction-brown-900 font-semibold rounded-lg hover:bg-construction-brown-400 transition-colors duration-300 shadow-lg animate-glow">
  Glowing Button
</button>
```

## 🌓 Dark Mode Support

All construction colors work seamlessly with dark mode:

```tsx
<div className="bg-construction-brown-50 dark:bg-construction-brown-900">
  <p className="text-construction-brown-900 dark:text-construction-brown-50">
    Adapts to dark mode
  </p>
</div>
```

## 📦 Backdrop Blur Utilities

Extended backdrop blur options:

- `backdrop-blur-xs` - 2px
- `backdrop-blur-sm` - 4px
- `backdrop-blur-md` - 8px
- `backdrop-blur-lg` - 12px
- `backdrop-blur-xl` - 16px
- `backdrop-blur-2xl` - 24px

## 🎨 Design Principles

1. **Use brown tones** for primary UI elements
2. **Use gold accents** for premium features and CTAs
3. **Use safety orange** for warnings and important actions
4. **Use steel blue** for secondary actions and info
5. **Combine animations** sparingly for emphasis
6. **Maintain contrast** for accessibility

## 🚀 Demo Component

Check out the full showcase:

```tsx
import { ConstructionThemeShowcase } from '@/components/construction-theme-showcase'

export default function DemoPage() {
  return <ConstructionThemeShowcase />
}
```

## 📝 Notes

- All colors are defined in both `tailwind.config.ts` and `globals.css`
- Tailwind v4 uses CSS variables for maximum flexibility
- The theme is fully compatible with shadcn/ui components
- Custom animations use CSS keyframes for optimal performance
