import { PopularProductsSectionButton } from './PopularProductsSectionButton/PopularProductsSectionButton';
import { PopularProductsSectionContent } from './PopularProductsSectionContent/PopularProductsSectionContent';
import { PopularProductsSectionContentFallback } from './PopularProductsSectionContentFallback';
import { PopularProductsSectionHeadline } from './PopularProductsSectionHeadline/PopularProductsSectionHeadline';
import { PopularProductsSectionImage } from './PopularProductsSectionImage/PopularProductsSectionImage';
import { popularProductsSectionMockData } from './popularProductsSectionMockData';
import { PopularProductsSectionSlider } from './PopularProductsSectionSlider/PopularProductsSectionSlider';

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
