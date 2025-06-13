import { ReactNode } from "react";
import { BenefitsSectionContentItemDescription } from "./BenefitsSectionContentItemDescription";
import { BenefitsSectionContentItemText } from "./BenefitsSectionContentItemText";

type BenefitsSectionContentItemProps = {
    text: string;
    descriptionTop: string;
    descriptionBottom: string;
    svgBackgroundColor: string;
    svg: ReactNode;
}

export const BenefitsSectionContentItem = ({
    text,
    descriptionTop,
    descriptionBottom,
    svgBackgroundColor,
    svg
}: BenefitsSectionContentItemProps) => {
    return (
        <div className="flex flex-col gap-[32px] items-center w-full">
            <div className={`flex justify-center items-center rounded-[24px] p-[20px] ${svgBackgroundColor}`} >
                {svg}
            </div>
            <BenefitsSectionContentItemText text={text} />
            <BenefitsSectionContentItemDescription descriptionTop={descriptionTop} descriptionBottom={descriptionBottom} />
        </div>
    )
}