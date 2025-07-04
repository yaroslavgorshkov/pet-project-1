import { getStaticIconComponent } from '@/core/Icons/helpers/getIconComponent';
import {
    BenefitsSectionContentItemIconBackgroundColor,
    BenefitsSectionContentItemIconName,
} from '@/BenefitsSection/benefitsSectionMockData';
import { getBenefitsSectionContentItemIconBackgroundColor } from '@/BenefitsSection/helpers/getBenefitsSectionContentItemIconBackgroundColor';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

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
    const benefitsSectionContentItemIconClass = twMerge(
        clsx(
            'flex',
            'justify-center',
            'items-center',
            'rounded-2xl',
            'p-el-md',
            iconBackgroundColorClass
        )
    );

    return (
        <div className={benefitsSectionContentItemIconClass}>
            {iconComponent}
        </div>
    );
};
