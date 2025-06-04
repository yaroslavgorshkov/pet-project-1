import { Text } from "../../Text"

export const HeroSectionTitleDescription = () => {
    return (
        <>
            <div className="text-center md:hidden">
                <Text fontSize='lg' fontFamily='opensans' color='lapis' fontWeight='normal'
                    content={"Explore different categories. Find the best deals."} />
            </div>
            <div className="text-center hidden md:block">
                <Text fontSize='3xl' fontFamily='opensans' color='lapis' fontWeight='normal'
                    content={"Explore different categories. Find the best deals."} />
            </div>
        </>
    )
}