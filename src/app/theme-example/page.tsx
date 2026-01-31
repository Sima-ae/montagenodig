'use client'

import React from 'react'
import { constructionAnimations } from '@/lib/construction-theme'

export default function ThemeExamplePage() {
    return (
        <div className="min-h-screen bg-construction-brown-50 dark:bg-construction-brown-900">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-construction-brown-500 to-construction-brown-700 opacity-90" />
                <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
                    <div className={`text-center space-y-6 ${constructionAnimations.fadeIn}`}>
                        <h1 className="text-5xl md:text-7xl font-bold text-white">
                            Construction Theme
                        </h1>
                        <p className="text-xl md:text-2xl text-construction-brown-100 max-w-3xl mx-auto">
                            A premium design system built for construction and industrial applications
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 pt-8">
                            <button className="px-8 py-4 bg-construction-accent-gold text-construction-brown-900 font-bold rounded-lg hover:bg-construction-brown-400 transition-all duration-300 shadow-xl animate-glow">
                                Get Started
                            </button>
                            <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center text-construction-brown-900 dark:text-construction-brown-50 mb-12">
                    Key Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="bg-white dark:bg-construction-brown-800 p-8 rounded-xl shadow-xl border-l-4 border-construction-accent-gold hover:shadow-2xl transition-shadow duration-300 animate-slide-in">
                        <div className="w-12 h-12 bg-construction-accent-gold rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-construction-brown-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-construction-brown-900 dark:text-construction-brown-50 mb-3">
                            Premium Design
                        </h3>
                        <p className="text-construction-brown-600 dark:text-construction-brown-300">
                            Carefully crafted color palette and animations for a professional look
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="bg-white dark:bg-construction-brown-800 p-8 rounded-xl shadow-xl border-l-4 border-construction-accent-steel hover:shadow-2xl transition-shadow duration-300 animate-slide-in" style={{ animationDelay: '0.1s' }}>
                        <div className="w-12 h-12 bg-construction-accent-steel rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-construction-brown-900 dark:text-construction-brown-50 mb-3">
                            Fast Performance
                        </h3>
                        <p className="text-construction-brown-600 dark:text-construction-brown-300">
                            Optimized CSS animations and efficient color system
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="bg-white dark:bg-construction-brown-800 p-8 rounded-xl shadow-xl border-l-4 border-construction-accent-success hover:shadow-2xl transition-shadow duration-300 animate-slide-in" style={{ animationDelay: '0.2s' }}>
                        <div className="w-12 h-12 bg-construction-accent-success rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-construction-brown-900 dark:text-construction-brown-50 mb-3">
                            Fully Customizable
                        </h3>
                        <p className="text-construction-brown-600 dark:text-construction-brown-300">
                            Easy to extend and adapt to your specific needs
                        </p>
                    </div>
                </div>
            </section>

            {/* Animated Cards Section */}
            <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center text-construction-brown-900 dark:text-construction-brown-50 mb-12">
                    Interactive Elements
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Floating Card */}
                    <div className="bg-gradient-to-br from-construction-accent-gold to-construction-brown-400 p-8 rounded-2xl shadow-2xl animate-float">
                        <h3 className="text-2xl font-bold text-construction-brown-900 mb-4">
                            Floating Animation
                        </h3>
                        <p className="text-construction-brown-800">
                            This card gently floats up and down, creating a dynamic and engaging user experience.
                        </p>
                    </div>

                    {/* Glassmorphism Card */}
                    <div className="relative overflow-hidden rounded-2xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-construction-accent-steel to-construction-accent-gold opacity-50" />
                        <div className="relative bg-white/10 backdrop-blur-xl p-8 border border-white/20">
                            <h3 className="text-2xl font-bold text-construction-brown-900 dark:text-white mb-4">
                                Glassmorphism
                            </h3>
                            <p className="text-construction-brown-800 dark:text-construction-brown-100">
                                Modern glass effect with backdrop blur for a premium feel.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-construction-brown-800 dark:bg-construction-brown-950 py-16">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Ready to Build Something Amazing?
                    </h2>
                    <p className="text-xl text-construction-brown-200 mb-8">
                        Start using the construction theme in your project today
                    </p>
                    <button className="px-10 py-5 bg-construction-accent-gold text-construction-brown-900 font-bold text-lg rounded-lg hover:bg-construction-brown-400 transition-all duration-300 shadow-2xl animate-glow">
                        Start Building
                    </button>
                </div>
            </section>
        </div>
    )
}
