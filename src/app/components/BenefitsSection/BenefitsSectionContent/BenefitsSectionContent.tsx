import { benefitsSectionContent } from "../benefitsSectionMockData";
import { BenefitsSectionContentItem } from "./BenefitsSectionContentItem/BenefitsSectionContentItem";


export const BenefitsSectionContent = () => {
    const benefitsSectionContentList = benefitsSectionContent.map(({ id, text, descriptionTop, descriptionBottom, svgBackgroundColor, svg }) => {
        return <BenefitsSectionContentItem
            key={id}
            text={text}
            descriptionTop={descriptionTop}
            descriptionBottom={descriptionBottom}
            svgBackgroundColor={svgBackgroundColor}
            svg={svg} />
    });

    return (
        <div className="flex flex-col md:flex-row gap-[60px] md:gap-0">
            {benefitsSectionContentList}
        </div>
    )
}