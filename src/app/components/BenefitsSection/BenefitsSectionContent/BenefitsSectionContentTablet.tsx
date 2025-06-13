import { benefitsSectionContent } from "../benefitsSectionMockData";
import { BenefitsSectionContentItem } from "./BenefitsSectionContentItem/BenefitsSectionContentItem";

export const BenefitsSectionContentTablet = () => {
    const benefitsSectionContentList = benefitsSectionContent.map(({ id, text, description, svgBackgroundColor, svg }) => {
        return <BenefitsSectionContentItem
            key={id}
            text={text}
            description={description}
            svgBackgroundColor={svgBackgroundColor}
            svg={svg} />
    });

    return (
        <div className="flex gap-[60px]">
            {benefitsSectionContentList}
        </div>
    )
}