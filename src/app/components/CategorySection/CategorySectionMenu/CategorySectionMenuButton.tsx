import { Text } from "../../Text"
import { Button } from "../../Button/Button";

export const CategorySectionMenuButton = () => {
    return (
        <Button variant={"contained"} backgroundColor={"mint"} paddingInline={"2xl"} paddingBlock={"2xl"}
            borderRadius={"md"} onClick={() => 1}
            endIcon={{ iconType: "arrow-right", iconFillColor: "absolute-white", iconSize: "2xl" }} >
            <Text fontSize='lg' fontFamily='opensans' color='white' fontWeight='bold'
                content={"All Categories"} />
        </Button>
    )
}