import { CategorySectionMenuSearchInput } from "../CategorySectionHeadline/CategorySectionHeadlineMenuSearchInput";
import { IconButton } from "../../IconButton";

export const CategorySectionMenuSearch = () => {
    return (
        <div className="flex gap-[18px] rounded-[10px] pl-5 bg-darken-white w-full md:w-[463px] xl:pl-8 xl:w-[349px]">
            <IconButton icon={
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.389 19.278C15.2982 19.278 19.278 15.2982 19.278 10.389C19.278 5.47973 15.2982 1.5 10.389 1.5C5.47973 1.5 1.5 5.47973 1.5 10.389C1.5 15.2982 5.47973 19.278 10.389 19.278Z" stroke="#6E757E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21.4999 21.4999L16.6665 16.6665" stroke="#6E757E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            } handleClick={() => 1} />
            <CategorySectionMenuSearchInput />
        </div>
    )
}