import { BenefitsSectionContentItemDescription } from './BenefitsSectionContentItemDescription';
import { BenefitsSectionContentItemText } from './BenefitsSectionContentItemText';
import {
    BenefitsSectionContentItemIconBackgroundColor,
    BenefitsSectionContentItemIconName,
} from '../../benefitsSectionMockData';
import { BenefitsSectionContentItemIcon } from './BenefitsSectionContentItemIcon';

export type BenefitsSectionContentItemProps = {
    text: string;
    descriptionTopText: string;
    descriptionBottomText: string;
    iconBackgroundColor: BenefitsSectionContentItemIconBackgroundColor;
    iconName: BenefitsSectionContentItemIconName;
};

export const BenefitsSectionContentItem = ({
    text,
    descriptionTopText,
    descriptionBottomText,
    iconBackgroundColor,
    iconName,
}: BenefitsSectionContentItemProps) => {
    return (
        <div className="flex flex-col gap-2xl items-center w-full">
            <BenefitsSectionContentItemIcon
                iconName={iconName}
                iconBackgroundColor={iconBackgroundColor}
            />
            <BenefitsSectionContentItemText text={text} />
            <BenefitsSectionContentItemDescription
                descriptionTop={descriptionTopText}
                descriptionBottom={descriptionBottomText}
            />
        </div>
    );
};
