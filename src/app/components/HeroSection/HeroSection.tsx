import { HeroSectionContent } from '@/HeroSection/HeroSectionContent/HeroSectionContent';
import { HeroSectionImage } from '@/HeroSection/HeroSectionImage';

export const HeroSection = () => {
    return (
        <section className="h-dvh relative box-content flex justify-center items-center px-section-sm py-section-5xl md:py-section-3xl md:px-section-md lg:px-section-xl xl:px-section-7xl xl:pb-section-5xl">
            <HeroSectionContent />
            <HeroSectionImage />
        </section>
    );
};
