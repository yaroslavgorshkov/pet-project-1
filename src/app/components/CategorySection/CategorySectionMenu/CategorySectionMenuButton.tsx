import { Text } from "../../Text"
import { Button } from "../../Button/Button";
import { EndIconType } from "../../types";

export const CategorySectionMenuButton = () => {
    const categorySectionMenuButtonEndIcon: EndIconType = { iconType: "arrow-right", iconFillColor: "absolute-white", iconSize: "2xl" };
    const handleCategorySectionMenuButtonClick = () => {
        // TODO: add CategorySectionMenuButton click function
    }

    return (
        <Button variant={"contained"} backgroundColor={"mint"} paddingInline={"2xl"} paddingBlock={"2xl"}
            borderRadius={"md"} onClick={handleCategorySectionMenuButtonClick}
            endIcon={categorySectionMenuButtonEndIcon} >
            <Text fontSize='lg' fontFamily='opensans' color='white' fontWeight='bold'
                content={"All Categories"} />
        </Button>
    )
}