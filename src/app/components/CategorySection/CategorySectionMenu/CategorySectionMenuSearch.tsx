import { CategorySectionMenuSearchInput } from '../CategorySectionHeadline/CategorySectionHeadlineMenuSearchInput';
import { IconButton } from '../../Button/IconButton';

export const CategorySectionMenuSearch = () => {
    const handleCategorySectionMenuSearchButtonClick = () => {
        // TODO: add CategorySectionMenuSearchButton click function
    };

    return (
        <div className="flex gap-md rounded-md pl-el-md xl:pl-el-xl bg-darken-white w-full md:w-el-2xl xl:w-el-xl">
            <IconButton
                iconType={'search-small'}
                iconFillColor={'gray'}
                iconSize={'2xl'}
                onClick={handleCategorySectionMenuSearchButtonClick}
            />
            <CategorySectionMenuSearchInput />
        </div>
    );
};
