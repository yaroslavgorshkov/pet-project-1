"use client"

import { CategorySection } from "./components/CategorySection/CategorySection"
import { Header } from "./components/Header/Header"
import { HeroSection } from "./components/HeroSection/HeroSection"
import { PopularProductsSection } from "./components/PopularProductsSection/PopularProductsSection"


export default function App() {
    return (
        <>
            <Header />
            <HeroSection />
            <CategorySection />
            <PopularProductsSection />
        </>
    )
}