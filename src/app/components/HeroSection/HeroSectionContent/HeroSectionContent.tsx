import { HeroSectionContentButton } from './HeroSectionContentButton';
import { HeroSectionContentTitle } from './HeroSectionContentTitle/HeroSectionContentTitle';

export const HeroSectionContent = () => {
    return (
        <div className="flex w-full flex-col gap-7xl items-center md:items-start xl:gap-8xl">
            <HeroSectionContentTitle />
            <HeroSectionContentButton />
        </div>
    );
};
