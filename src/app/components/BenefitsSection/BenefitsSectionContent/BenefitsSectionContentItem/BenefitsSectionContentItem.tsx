import { twMerge } from "tailwind-merge";
import { BenefitsSectionContentItemDescription } from "./BenefitsSectionContentItemDescription";
import { BenefitsSectionContentItemText } from "./BenefitsSectionContentItemText";
import { getStaticIconComponent } from "@/app/helpers/iconHelpers/getIconComponent";
import { BenefitsSectionContentItemIconBackgroundColor, BenefitsSectionContentItemIconType } from "../../benefitsSectionMockData";
import { getBenefitsSectionContentItemIconBackgroundColor } from "../../helpers/getBenefitsSectionContentItemIconBackgroundColor";

type BenefitsSectionContentItemProps = {
    text: string;
    descriptionTopText: string;
    descriptionBottomText: string;
    iconBackgroundColor: BenefitsSectionContentItemIconBackgroundColor;
    iconName: BenefitsSectionContentItemIconType;
}

export const BenefitsSectionContentItem = ({
    text,
    descriptionTopText,
    descriptionBottomText,
    iconBackgroundColor,
    iconName
}: BenefitsSectionContentItemProps) => {
    const iconComponent = getStaticIconComponent(iconName);
    const iconBackgroundColorClass = getBenefitsSectionContentItemIconBackgroundColor(iconBackgroundColor);
    const benefitsSectionContentItemIconCombinedClassName = twMerge("flex justify-center items-center rounded-[24px] p-[20px]", iconBackgroundColorClass);

    return (
        <div className="flex flex-col gap-[32px] items-center w-full">
            <div className={benefitsSectionContentItemIconCombinedClassName} >
                {iconComponent}
            </div>
            <BenefitsSectionContentItemText text={text} />
            <BenefitsSectionContentItemDescription descriptionTop={descriptionTopText} descriptionBottom={descriptionBottomText} />
        </div>
    )
}