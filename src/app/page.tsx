"use client"

import { CategorySection } from "./components/CategorySection/CategorySection"
import { Header } from "./components/Header/Header"
import { HeroSection } from "./components/HeroSection/HeroSection"


export default function App() {
    return (
        <>
            <Header />
            <HeroSection />
            <CategorySection />
        </>
    )
}