import { benefitsSectionContent } from "../benefitsSectionMockData";
import { BenefitsSectionContentItem } from "./BenefitsSectionContentItem/BenefitsSectionContentItem";


export const BenefitsSectionContent = () => {
    const benefitsSectionContentList =
        benefitsSectionContent.map(({ id, text, descriptionTopText, descriptionBottomText, iconBackgroundColor, iconName }) => {
            return <BenefitsSectionContentItem
                key={id}
                text={text}
                descriptionTopText={descriptionTopText}
                descriptionBottomText={descriptionBottomText}
                iconBackgroundColor={iconBackgroundColor}
                iconName={iconName} />
        });

    return (
        <div className="flex flex-col md:flex-row gap-[60px] md:gap-0">
            {benefitsSectionContentList}
        </div>
    )
}