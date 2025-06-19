"use client"

import { BenefitsSection } from "./components/BenefitsSection/BenefitsSection"
import { CategorySection } from "./components/CategorySection/CategorySection"
import { Header } from "./components/Header/Header"
import { HeroSection } from "./components/HeroSection/HeroSection"
import { OwnProductsSection } from "./components/OwnProductsSection/OwnProductsSection"
import { PopularProductsSection } from "./components/PopularProductsSection/PopularProductsSection"


export default function App() {
    return (
        <>
            <Header />
            <HeroSection />
            <CategorySection />
            <PopularProductsSection />
            <OwnProductsSection />
            <BenefitsSection />
        </>
    )
}