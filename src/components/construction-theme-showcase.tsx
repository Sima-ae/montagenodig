'use client'

import React from 'react'

export function ConstructionThemeShowcase() {
    return (
        <div className="min-h-screen bg-construction-brown-50 dark:bg-construction-brown-900 p-8">
            <div className="max-w-7xl mx-auto space-y-12">
                {/* Header */}
                <div className="text-center space-y-4 animate-fade-in">
                    <h1 className="text-5xl font-bold text-construction-brown-900 dark:text-construction-brown-50">
                        Construction Theme Showcase
                    </h1>
                    <p className="text-xl text-construction-brown-600 dark:text-construction-brown-300">
                        Premium construction-themed design system
                    </p>
                </div>

                {/* Color Palette - Browns */}
                <section className="space-y-4 animate-slide-in">
                    <h2 className="text-3xl font-semibold text-construction-brown-800 dark:text-construction-brown-100">
                        Brown Palette
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
                            <div
                                key={shade}
                                className={`bg-construction-brown-${shade} p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300`}
                            >
                                <div className="text-center">
                                    <p className={`font-semibold ${shade >= 500 ? 'text-white' : 'text-construction-brown-900'}`}>
                                        {shade}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Color Palette - Grays */}
                <section className="space-y-4">
                    <h2 className="text-3xl font-semibold text-construction-brown-800 dark:text-construction-brown-100">
                        Gray Palette
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
                            <div
                                key={shade}
                                className={`bg-construction-gray-${shade} p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300`}
                            >
                                <div className="text-center">
                                    <p className={`font-semibold ${shade >= 500 ? 'text-white' : 'text-construction-gray-900'}`}>
                                        {shade}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Accent Colors */}
                <section className="space-y-4">
                    <h2 className="text-3xl font-semibold text-construction-brown-800 dark:text-construction-brown-100">
                        Accent Colors
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        <div className="bg-construction-accent-gold p-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                            <p className="text-center font-semibold text-construction-brown-900">Gold</p>
                        </div>
                        <div className="bg-construction-accent-steel p-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                            <p className="text-center font-semibold text-white">Steel</p>
                        </div>
                        <div className="bg-construction-accent-safety p-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                            <p className="text-center font-semibold text-white">Safety</p>
                        </div>
                        <div className="bg-construction-accent-concrete p-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                            <p className="text-center font-semibold text-white">Concrete</p>
                        </div>
                        <div className="bg-construction-accent-success p-8 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                            <p className="text-center font-semibold text-white">Success</p>
                        </div>
                    </div>
                </section>

                {/* Animations Demo */}
                <section className="space-y-4">
                    <h2 className="text-3xl font-semibold text-construction-brown-800 dark:text-construction-brown-100">
                        Custom Animations
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white dark:bg-construction-brown-800 p-8 rounded-lg shadow-lg animate-float">
                            <p className="text-center font-semibold text-construction-brown-900 dark:text-construction-brown-50">
                                Float Animation
                            </p>
                        </div>
                        <div className="bg-construction-accent-gold p-8 rounded-lg animate-glow">
                            <p className="text-center font-semibold text-construction-brown-900">
                                Glow Animation
                            </p>
                        </div>
                        <div className="bg-white dark:bg-construction-brown-800 p-8 rounded-lg shadow-lg animate-slide-in">
                            <p className="text-center font-semibold text-construction-brown-900 dark:text-construction-brown-50">
                                Slide In
                            </p>
                        </div>
                        <div className="bg-white dark:bg-construction-brown-800 p-8 rounded-lg shadow-lg animate-pulse-slow">
                            <p className="text-center font-semibold text-construction-brown-900 dark:text-construction-brown-50">
                                Pulse Slow
                            </p>
                        </div>
                    </div>
                </section>

                {/* Card Examples */}
                <section className="space-y-4">
                    <h2 className="text-3xl font-semibold text-construction-brown-800 dark:text-construction-brown-100">
                        Card Components
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white dark:bg-construction-brown-800 p-6 rounded-lg shadow-xl border-2 border-construction-accent-gold hover:shadow-2xl transition-shadow duration-300">
                            <h3 className="text-xl font-bold text-construction-brown-900 dark:text-construction-brown-50 mb-2">
                                Premium Card
                            </h3>
                            <p className="text-construction-brown-600 dark:text-construction-brown-300">
                                A beautiful card with gold accent border and smooth hover effects.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-construction-brown-500 to-construction-brown-700 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
                            <h3 className="text-xl font-bold text-white mb-2">
                                Gradient Card
                            </h3>
                            <p className="text-construction-brown-100">
                                Featuring a smooth brown gradient for visual depth.
                            </p>
                        </div>
                        <div className="bg-construction-accent-steel/20 backdrop-blur-md p-6 rounded-lg shadow-xl border border-construction-accent-steel hover:shadow-2xl transition-shadow duration-300">
                            <h3 className="text-xl font-bold text-construction-brown-900 dark:text-construction-brown-50 mb-2">
                                Glass Card
                            </h3>
                            <p className="text-construction-brown-600 dark:text-construction-brown-300">
                                Modern glassmorphism effect with backdrop blur.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Buttons */}
                <section className="space-y-4">
                    <h2 className="text-3xl font-semibold text-construction-brown-800 dark:text-construction-brown-100">
                        Button Styles
                    </h2>
                    <div className="flex flex-wrap gap-4">
                        <button className="px-6 py-3 bg-construction-accent-gold text-construction-brown-900 font-semibold rounded-lg hover:bg-construction-brown-400 transition-colors duration-300 shadow-lg">
                            Gold Button
                        </button>
                        <button className="px-6 py-3 bg-construction-brown-600 text-white font-semibold rounded-lg hover:bg-construction-brown-700 transition-colors duration-300 shadow-lg">
                            Brown Button
                        </button>
                        <button className="px-6 py-3 bg-construction-accent-safety text-white font-semibold rounded-lg hover:bg-construction-accent-safety/80 transition-colors duration-300 shadow-lg">
                            Safety Button
                        </button>
                        <button className="px-6 py-3 bg-construction-accent-success text-white font-semibold rounded-lg hover:bg-construction-accent-success/80 transition-colors duration-300 shadow-lg">
                            Success Button
                        </button>
                        <button className="px-6 py-3 border-2 border-construction-accent-gold text-construction-brown-900 dark:text-construction-brown-50 font-semibold rounded-lg hover:bg-construction-accent-gold hover:text-construction-brown-900 transition-all duration-300">
                            Outline Button
                        </button>
                    </div>
                </section>
            </div>
        </div>
    )
}
