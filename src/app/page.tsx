'use client';

import { BenefitsSection } from '@/BenefitsSection/BenefitsSection';
import { CategorySection } from '@/CategorySection/CategorySection';
import { Header } from '@/Header/Header';
import { HeroSection } from '@/HeroSection/HeroSection';
import { OwnProductsSection } from '@/OwnProductsSection/OwnProductsSection';
import { PopularProductsSection } from '@/PopularProductsSection/PopularProductsSection';

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
    );
}
