import { Text } from '@/core/Text/Text';

type SpecialPackageSectionContentElementDescriptionProps = {
    description: string;
};

export const SpecialPackageSectionContentElementDescription = ({
    description,
}: SpecialPackageSectionContentElementDescriptionProps) => {
    return (
        <>
            <div className="md:hidden flex flex-col gap-2xl">
                <Text
                    fontSize={'3xl'}
                    fontFamily={'opensans'}
                    color={'lapis'}
                    content={'Description'}
                    fontWeight={'bold'}
                />
                <Text
                    fontSize={'lg'}
                    fontFamily={'opensans'}
                    color={'lapis'}
                    content={description}
                />
            </div>
            <div className="hidden md:block">
                <Text
                    fontSize={'sm'}
                    fontFamily={'opensans'}
                    color={'lapis'}
                    content={description}
                />
            </div>
        </>
    );
};
