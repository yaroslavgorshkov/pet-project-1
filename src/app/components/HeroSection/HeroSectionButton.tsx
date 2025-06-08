import { Text } from "../Text"
import { Button } from "../Button/Button";

export const HeroSectionButton = () => {
    const handleLeftClick = () => {
        // TODO: add left click function
    }

    return (
        <>
            <div className="md:hidden">
                <Button variant={"contained"} backgroundColor={"mint"} paddingInline={"lg"} paddingBlock={"md"}
                    borderRadius={"md"} onClick={handleLeftClick} >
                    <Text fontSize={"lg"} fontFamily={"opensans"} color={"white"} fontWeight={"bold"}
                        content={"Shop Now"} />
                </Button>
            </div>
            <div className="hidden md:block">
                <Button variant={"contained"} backgroundColor={"mint"} paddingInline={"3xl"} paddingBlock={"xl"}
                    borderRadius={"md"} onClick={handleLeftClick} >
                    <Text fontSize={"3xl"} fontFamily={"opensans"} color={"white"} fontWeight={"bold"}
                        content={"Shop Now"} />
                </Button>
            </div>
        </>
    )
}