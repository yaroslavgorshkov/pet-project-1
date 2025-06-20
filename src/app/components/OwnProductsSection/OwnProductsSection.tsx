import { OwnProductsSectionContent } from "./OwnProductsSectionContent/OwnProductsSectionContent"
import { OwnProductsSectionHeadline } from "./OwnProductsSectionHeadline/OwnProductsSectionHeadline"
import { ownProductsSectionContentMockData } from "./ownProductsSectionMockData"
import { Text } from "../Text/Text"
import { OwnProductsSectionContentFallback } from "./OwnProductsSectionContentFallback"

export const OwnProductsSection = () => {
    const content = ownProductsSectionContentMockData;
    const isOwnProductsSectionContentMockDataEmpty = !content || content.length === 0;
    if (isOwnProductsSectionContentMockDataEmpty) {
        return (
            <section className="py-section-2xl md:py-section-4xl">
                <div className="flex flex-col gap-3xl items-center">
                    <div className="text-center md:hidden">
                        <Text fontSize={"4xl"} fontFamily={"playfair"} color={"lapis"} content={"Our Own Creation"}
                            fontWeight={"bold"} />
                    </div>
                    <div className="text-center hidden md:block">
                        <Text fontSize={"7xl"} fontFamily={"playfair"} color={"lapis"} content={"Our Own Creation"}
                            fontWeight={"bold"} />
                    </div>
                    <OwnProductsSectionContentFallback />
                </div>
            </section>
        )
    }

    return (
        <section className="py-section-2xl md:py-section-4xl">
            <div className="own-products-section-wrapper flex items-center gap-2xl w-full overflow-x-scroll pr-el-lg py-el-sm">
                <OwnProductsSectionHeadline />
                <OwnProductsSectionContent />
            </div>
        </section>
    )
}