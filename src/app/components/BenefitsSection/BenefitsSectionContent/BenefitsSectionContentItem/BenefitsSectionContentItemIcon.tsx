import { getStaticIconComponent } from '@/app/components/core/Icons/helpers/getIconComponent';
import {
    BenefitsSectionContentItemIconBackgroundColor,
    BenefitsSectionContentItemIconName,
} from '../../benefitsSectionMockData';
import { getBenefitsSectionContentItemIconBackgroundColor } from '../../helpers/getBenefitsSectionContentItemIconBackgroundColor';
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
