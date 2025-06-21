import { Text } from '@/app/components/Text/Text';
import { OwnProductsSectionHeadlineMenuSlider } from './OwnProductsSectionHeadlineMenuSlider';

export const OwnProductsSectionHeadlineMenu = () => {
    return (
        <div className="md:flex md:gap-4xl items-center">
            <Text
                fontSize={'lg'}
                fontFamily={'roboto'}
                color={'white'}
                content={'More'}
                fontWeight="bold"
            />
            <div className="hidden md:block">
                <OwnProductsSectionHeadlineMenuSlider />
            </div>
        </div>
    );
};
