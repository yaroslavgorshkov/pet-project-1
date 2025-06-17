import { getStaticIconComponent } from "@/app/components/Icons/helpers/getIconComponent";
import { BenefitsSectionContentItemIconBackgroundColor, BenefitsSectionContentItemIconType } from "../../benefitsSectionMockData";
import { getBenefitsSectionContentItemIconBackgroundColor } from "../../helpers/getBenefitsSectionContentItemIconBackgroundColor";
import { twMerge } from "tailwind-merge";

type BenefitsSectionContentItemIconProps = {
    iconName: BenefitsSectionContentItemIconType;
    iconBackgroundColor: BenefitsSectionContentItemIconBackgroundColor;
}

export const BenefitsSectionContentItemIcon = ({
    iconName,
    iconBackgroundColor
}: BenefitsSectionContentItemIconProps) => {
    const iconComponent = getStaticIconComponent(iconName);
    const iconBackgroundColorClass = getBenefitsSectionContentItemIconBackgroundColor(iconBackgroundColor);
    const benefitsSectionContentItemIconCombinedClassName = twMerge("flex justify-center items-center rounded-[24px] p-[20px]", iconBackgroundColorClass);

    return (
        <div className={benefitsSectionContentItemIconCombinedClassName} >
            {iconComponent}
        </div>
    )
}