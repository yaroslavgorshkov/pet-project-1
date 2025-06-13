import { ownProductsSectionContentMockData } from "../ownProductsSectionMockData";
import { OwnProductsSectionContentItem } from "./OwnProductsSectionContentItem";
import { OwnProductsSectionContentItemHighlighted } from "./OwnProductsSectionContentItemHighlighted";

export const OwnProductsSectionContent = () => {
    const ownProductsSectionContent = ownProductsSectionContentMockData;
    const ownProductsSectionContentList = ownProductsSectionContent.map(({ id, href, imgRef, alt }) => {
        return <OwnProductsSectionContentItem key={id} href={href} imgRef={imgRef} alt={alt} />
    })

    return (
        <div className="flex gap-[26px] items-center">
            <OwnProductsSectionContentItemHighlighted href={"#own-living-room"} imgRef={"/img/own-prod-4.jpg"} alt={"Own Living room"} />
            {ownProductsSectionContentList}
        </div>
    )
}