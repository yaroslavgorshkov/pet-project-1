import { SpecialPackageSectionContentMainElement } from '@/SpecialPackageSection/SpecialPackageSectionContent/SpecialPackageSectionContentMainElement/SpecialPackageSectionContentMainElement';
import {
    specialPackageSectionMainElementMockData,
    specialPackageSectionMockData,
} from '@/SpecialPackageSection/SpecialPackageSectionContent/specialPackageSectionMockData';
import { SpecialPackageSectionContentElement } from '@/SpecialPackageSection/SpecialPackageSectionContent/SpecialPackageSectionContentElement/SpecialPackageSectionContentElement';
import { SpecialPackageSectionContentHighlightedElement } from '@/SpecialPackageSection/SpecialPackageSectionContent/SpecialPackageSectionContentHighlightedElement/SpecialPackageSectionContentHighlightedElement';
import { SpecialPackageSectionContentSlider } from '@/SpecialPackageSection/SpecialPackageSectionContent/SpecialPackageSectionContentSlider';
import { SpecialPackageSectionContentMainElementImage } from '@/SpecialPackageSection/SpecialPackageSectionContent/SpecialPackageSectionContentMainElement/SpecialPackageSectionContentMainElementImage';
import { SpecialPackageSectionContentMainElementDetails } from '@/SpecialPackageSection/SpecialPackageSectionContent/SpecialPackageSectionContentMainElement/SpecialPackageSectionContentMainElementDetails';
import { SpecialPackageSectionContentMainElementButton } from '@/SpecialPackageSection/SpecialPackageSectionContent/SpecialPackageSectionContentMainElement/SpecialPackageSectionContentMainElementButton';
import { SpecialPackageSectionContentMainElementDescription } from '@/SpecialPackageSection/SpecialPackageSectionContent/SpecialPackageSectionContentMainElement/SpecialPackageSectionContentMainElementDescription';

export const SpecialPackageSectionContent = () => {
    const {
        alt: mainElementAlt,
        description: mainElementDescription,
        imageSrc: mainElementImageSrc,
        name: mainElementName,
        price: mainElementPrice,
    } = specialPackageSectionMainElementMockData;

    const dataList = specialPackageSectionMockData.map(
        ({ alt, description, id, imageSrc, name, price }) => {
            return (
                <SpecialPackageSectionContentElement
                    key={id}
                    name={name}
                    price={price}
                    imageSrc={imageSrc}
                    alt={alt}
                    description={description}
                />
            );
        }
    );

    return (
        <>
            <div className="flex flex-col gap-10xl md:hidden">
                <div className="special-package-section__content flex overflow-auto gap-2xl -mx-special-package-sm px-el-sm">
                    <SpecialPackageSectionContentMainElement />
                    <SpecialPackageSectionContentHighlightedElement />
                    {dataList}
                </div>
                <SpecialPackageSectionContentSlider />
            </div>
            <div className="hidden md:flex flex-col gap-10xl lg:gap-12xl 2xl:hidden">
                <SpecialPackageSectionContentMainElement />
                <div className="special-package-section__content flex overflow-auto gap-3xl -mx-special-package-md lg:-mx-special-package-lg px-el-md lg:px-el-3xl xl:-mx-special-package-xl xl:px-el-10xl">
                    <SpecialPackageSectionContentHighlightedElement />
                    {dataList}
                </div>
                <SpecialPackageSectionContentSlider />
            </div>
            <div className="hidden 2xl:flex gap-12xl">
                <div className="flex flex-col gap-2xl w-full">
                    <div className="flex flex-col gap-2xl">
                        <SpecialPackageSectionContentMainElementImage
                            alt={mainElementAlt}
                            imageSrc={mainElementImageSrc}
                        />
                    </div>
                    <div className="flex justify-between">
                        <SpecialPackageSectionContentMainElementDetails
                            name={mainElementName}
                            price={mainElementPrice}
                        />
                        <SpecialPackageSectionContentMainElementButton />
                    </div>
                </div>
                <div className="flex flex-col justify-between w-special-package-lg">
                    <SpecialPackageSectionContentMainElementDescription
                        description={mainElementDescription}
                    />
                    <SpecialPackageSectionContentHighlightedElement />
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-2xl special-package-section__content overflow-auto h-special-package-el-md">
                            {dataList}
                        </div>
                        <SpecialPackageSectionContentSlider />
                    </div>
                </div>
            </div>
        </>
    );
};
