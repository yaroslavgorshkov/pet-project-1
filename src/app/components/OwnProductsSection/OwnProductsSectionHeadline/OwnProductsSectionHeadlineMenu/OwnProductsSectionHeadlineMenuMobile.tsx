import { Text } from '@/app/components/Text/Text';

export const OwnProductsSectionHeadlineMenuMobile = () => {
    return (
        <div className="md:hidden">
            <Text
                fontSize={'lg'}
                fontFamily={'roboto'}
                color={'white'}
                content={'More'}
                fontWeight="bold"
            />
        </div>
    );
};
