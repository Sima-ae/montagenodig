/**
 * Construction Theme Colors
 * Centralized color palette for the construction-themed application
 */

export const constructionTheme = {
    brown: {
        50: '#FAF6F0',
        100: '#F0E6D6',
        200: '#E0CDB2',
        300: '#D0B48E',
        400: '#C09B6A',
        500: '#8B7355',
        600: '#6B5A43',
        700: '#4A3F2F',
        800: '#2A251B',
        900: '#0A0906',
    },
    gray: {
        50: '#FAFAFA',
        100: '#F5F5F5',
        200: '#EEEEEE',
        300: '#E0E0E0',
        400: '#BDBDBD',
        500: '#9E9E9E',
        600: '#757575',
        700: '#616161',
        800: '#424242',
        900: '#212121',
    },
    accent: {
        gold: '#D4A76A',
        steel: '#A3B1C6',
        safety: '#FF6B35',
        concrete: '#A9A9A9',
        success: '#4CAF50',
    },
} as const

/**
 * Animation class names for easy use in components
 */
export const constructionAnimations = {
    float: 'animate-float',
    glow: 'animate-glow',
    slideIn: 'animate-slide-in',
    fadeIn: 'animate-fade-in',
    pulseSlow: 'animate-pulse-slow',
} as const

/**
 * Helper function to get construction color classes
 */
export const getConstructionColor = (
    color: 'brown' | 'gray',
    shade: 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
) => {
    return `construction-${color}-${shade}`
}

/**
 * Helper function to get construction accent color classes
 */
export const getConstructionAccent = (
    accent: 'gold' | 'steel' | 'safety' | 'concrete' | 'success'
) => {
    return `construction-accent-${accent}`
}

/**
 * Type definitions for construction theme
 */
export type ConstructionBrownShade = keyof typeof constructionTheme.brown
export type ConstructionGrayShade = keyof typeof constructionTheme.gray
export type ConstructionAccent = keyof typeof constructionTheme.accent
export type ConstructionAnimation = keyof typeof constructionAnimations
