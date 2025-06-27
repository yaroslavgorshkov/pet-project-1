import { PopularProductsSectionButton } from '@/PopularProductsSection/PopularProductsSectionButton';
import { PopularProductsSectionContent } from '@/PopularProductsSection/PopularProductsSectionContent/PopularProductsSectionContent';
import { PopularProductsSectionContentFallback } from '@/PopularProductsSection/PopularProductsSectionContentFallback';
import { PopularProductsSectionHeadline } from '@/PopularProductsSection/PopularProductsSectionHeadline';
import { PopularProductsSectionImage } from '@/PopularProductsSection/PopularProductsSectionImage';
import { popularProductsSectionMockData } from '@/PopularProductsSection/popularProductsSectionMockData';
import { PopularProductsSectionSlider } from '@/PopularProductsSection/PopularProductsSectionSlider';

export const PopularProductsSection = () => {
    const content = popularProductsSectionMockData;
    const isPopularProductsSectionMockDataEmpty =
        !content || content.length === 0;
    if (isPopularProductsSectionMockDataEmpty) {
        return (
            <section className="py-section-3xl md:py-section-5xl">
                <div className="relative flex flex-col items-center gap-10xl md:gap-12xl xl:gap-8xl">
                    <PopularProductsSectionHeadline />
                    <PopularProductsSectionContentFallback />
                </div>
            </section>
        );
    }

    return (
        <section className="py-section-3xl md:py-section-5xl">
            <div className="relative flex flex-col items-center gap-10xl md:gap-12xl xl:gap-8xl">
                <PopularProductsSectionHeadline />
                <PopularProductsSectionContent />
                <PopularProductsSectionSlider />
                <PopularProductsSectionButton />
                <PopularProductsSectionImage />
            </div>
        </section>
    );
};
