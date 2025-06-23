import { HeroSectionContentTitleDescription } from './HeroSectionContentTitleDescription';
import { HeroSectionContentTitleText } from './HeroSectionContentTitleText';

export const HeroSectionContentTitle = () => {
    return (
        <div className="flex flex-col items-center gap-md md:items-start xl:gap-8xl">
            <HeroSectionContentTitleText />
            <HeroSectionContentTitleDescription />
        </div>
    );
};
