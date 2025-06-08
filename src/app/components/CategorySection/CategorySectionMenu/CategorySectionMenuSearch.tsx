import { CategorySectionMenuSearchInput } from "../CategorySectionHeadline/CategorySectionHeadlineMenuSearchInput";
import { IconButton } from "../../Button/IconButton";

export const CategorySectionMenuSearch = () => {
    const handleLeftClick = () => {
        // TODO: add left click function
    }

    return (
        <div className="flex gap-[18px] rounded-[10px] pl-5 xl:pl-8 bg-darken-white w-full md:w-[463px] xl:w-[349px]">
            <IconButton iconType={"search-small"} iconFillColor={"gray"} iconSize={"2xl"} onClick={handleLeftClick} />
            <CategorySectionMenuSearchInput />
        </div>
    )
}