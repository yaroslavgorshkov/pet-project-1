import { Text } from "../Text"
import { Button } from "../Button/Button";

export const HeroSectionButton = () => {
    const heroSectionButtonComponentSm = (
        <Text fontSize={"lg"} fontFamily={"opensans"} color={"white"} fontWeight={"bold"}
            content={"Shop Now"} />
    )

    const heroSectionButtonComponentMd = (
        <Text fontSize={"3xl"} fontFamily={"opensans"} color={"white"} fontWeight={"bold"}
            content={"Shop Now"} />
    )
    return (
        <>
            <div className="md:hidden">
                <Button variant={"contained"} backgroundColor={"mint"} paddingInline={"lg"} paddingBlock={"md"} borderRadius={"md"}
                    textConponent={heroSectionButtonComponentSm} onClick={() => 1} />
            </div>
            <div className="hidden md:block">
                <Button variant={"contained"} backgroundColor={"mint"} paddingInline={"3xl"} paddingBlock={"xl"} borderRadius={"md"}
                    textConponent={heroSectionButtonComponentMd} onClick={() => 1} />
            </div>
        </>
    )
}