import { HeroSectionButton } from '../HeroSectionButton';
import { HeroSectionTitle } from './HeroSectionTitle';

export const HeroSectionContent = () => {
    return (
        <div className="flex w-full flex-col gap-7xl items-center md:items-start xl:gap-8xl">
            <HeroSectionTitle />
            <HeroSectionButton />
        </div>
    );
};
