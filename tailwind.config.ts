import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: 'class',
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                // CONSTRUCTION THEME COLORS
                construction: {
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
                    }
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            backdropBlur: {
                xs: '2px',
                sm: '4px',
                md: '8px',
                lg: '12px',
                xl: '16px',
                '2xl': '24px',
            },
            animation: {
                "float": "float 6s ease-in-out infinite",
                "glow": "glow 2s ease-in-out infinite alternate",
                "slide-in": "slideIn 0.3s ease-out",
                "fade-in": "fadeIn 0.5s ease-out",
                "pulse-slow": "pulse 3s ease-in-out infinite",
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 5px rgba(212, 167, 106, 0.5)' },
                    '100%': { boxShadow: '0 0 20px rgba(212, 167, 106, 0.8)' },
                },
                slideIn: {
                    '0%': { opacity: '0', transform: 'translateX(-10px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
}
export default config
