import { Text } from "../../Text/Text"

export const HeroSectionTitleText = () => {
    return (
        <>
            <div className="text-center md:hidden">
                <Text fontSize='5xl' fontFamily='playfair' color='lapis' fontWeight='bold'
                    content={"Exclusive Deals of Furniture Collection"} />
            </div>
            <div className="hidden text-start w-[67%] md:block xl:hidden">
                <Text fontSize='6xl' fontFamily='playfair' color='lapis' fontWeight='bold'
                    content={"Exclusive Deals of Furniture Collection"} />
            </div>
            <div className="hidden text-start w-[67%] xl:block">
                <Text fontSize='7xl' fontFamily='playfair' color='lapis' fontWeight='bold'
                    content={"Exclusive Deals of Furniture Collection"} />
            </div>
        </>
    )
}