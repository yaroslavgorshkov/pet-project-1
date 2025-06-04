import { Text } from "../../Text"
import { Button } from "../../Button/Button";

export const CategorySectionMenuButton = () => {
    const categorySectionMenuButtonText = <Text fontSize='lg' fontFamily='opensans' color='white' fontWeight='bold'
        content={"All Categories"} />

    return (
        <Button variant={"contained"} backgroundColor={"mint"} paddingInline={"2xl"} paddingBlock={"2xl"}
            borderRadius={"md"} text={categorySectionMenuButtonText} onClick={() => 1}
            endIcon={{ iconType: "arrow-right", iconFillColor: "absolute-white", iconSize: "2xl" }} />
    )
}