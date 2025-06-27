import { getStaticIconComponent } from '@/core/Icons/helpers/getIconComponent';
import {
    BenefitsSectionContentItemIconBackgroundColor,
    BenefitsSectionContentItemIconName,
} from '@/BenefitsSection/benefitsSectionMockData';
import { getBenefitsSectionContentItemIconBackgroundColor } from '@/BenefitsSection/helpers/getBenefitsSectionContentItemIconBackgroundColor';
import { twMerge } from 'tailwind-merge';

type BenefitsSectionContentItemIconProps = {
    iconName: BenefitsSectionContentItemIconName;
    iconBackgroundColor: BenefitsSectionContentItemIconBackgroundColor;
};

export const BenefitsSectionContentItemIcon = ({
    iconName,
    iconBackgroundColor,
}: BenefitsSectionContentItemIconProps) => {
    const iconComponent = getStaticIconComponent(iconName);
    const iconBackgroundColorClass =
        getBenefitsSectionContentItemIconBackgroundColor(iconBackgroundColor);
    const benefitsSectionContentItemIconCombinedClassName = twMerge(
        'flex justify-center items-center rounded-2xl p-el-md',
        iconBackgroundColorClass
    );

    return (
        <div className={benefitsSectionContentItemIconCombinedClassName}>
            {iconComponent}
        </div>
    );
};
