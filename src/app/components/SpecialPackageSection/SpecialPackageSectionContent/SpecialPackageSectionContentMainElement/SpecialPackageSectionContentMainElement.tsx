import { specialPackageSectionMainElementMockData } from '@/SpecialPackageSection/SpecialPackageSectionContent/specialPackageSectionMockData';
import { SpecialPackageSectionContentMainElementButton } from '@/SpecialPackageSection/SpecialPackageSectionContent/SpecialPackageSectionContentMainElement/SpecialPackageSectionContentMainElementButton';
import { SpecialPackageSectionContentMainElementDescription } from '@/SpecialPackageSection/SpecialPackageSectionContent/SpecialPackageSectionContentMainElement/SpecialPackageSectionContentMainElementDescription';
import { SpecialPackageSectionContentMainElementDetails } from '@/SpecialPackageSection/SpecialPackageSectionContent/SpecialPackageSectionContentMainElement/SpecialPackageSectionContentMainElementDetails';
import { SpecialPackageSectionContentMainElementImage } from '@/SpecialPackageSection/SpecialPackageSectionContent/SpecialPackageSectionContentMainElement/SpecialPackageSectionContentMainElementImage';

export const SpecialPackageSectionContentMainElement = () => {
    const { alt, description, imageSrc, name, price } =
        specialPackageSectionMainElementMockData;

    return (
        <>
            <article className="flex flex-col gap-2xl md:hidden">
                <SpecialPackageSectionContentMainElementDetails
                    name={name}
                    price={price}
                />
                <SpecialPackageSectionContentMainElementButton />
                <SpecialPackageSectionContentMainElementImage
                    alt={alt}
                    imageSrc={imageSrc}
                />
                <SpecialPackageSectionContentMainElementDescription
                    description={description}
                />
            </article>
            <article className="hidden md:flex flex-col gap-2xl lg:hidden">
                <SpecialPackageSectionContentMainElementImage
                    alt={alt}
                    imageSrc={imageSrc}
                />
                <SpecialPackageSectionContentMainElementDetails
                    name={name}
                    price={price}
                />
                <SpecialPackageSectionContentMainElementButton />
                <SpecialPackageSectionContentMainElementDescription
                    description={description}
                />
            </article>
            <article className="hidden lg:flex gap-md">
                <SpecialPackageSectionContentMainElementImage
                    alt={alt}
                    imageSrc={imageSrc}
                />
                <div className="flex flex-col justify-between">
                    <SpecialPackageSectionContentMainElementDetails
                        name={name}
                        price={price}
                    />
                    <SpecialPackageSectionContentMainElementButton />
                    <SpecialPackageSectionContentMainElementDescription
                        description={description}
                    />
                </div>
            </article>
        </>
    );
};
