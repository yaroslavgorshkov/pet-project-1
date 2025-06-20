import { IconButton } from '@/app/components/Button/IconButton';

export const CategorySectionMenuNavigationListDesktopArrows = () => {
    const handleCategorySectionMenuNavigationListDesktopArrowsButtonClick =
        () => {
            // TODO: add CategorySectionMenuNavigationListDesktopArrowsButton click function
        };

    return (
        <div className="flex flex-col gap-lg">
            <div className="rounded-xl bg-white-blue w-el-sm h-el-sm flex items-center justify-center">
                <IconButton
                    iconType={'arrow-up'}
                    iconFillColor={'lapis'}
                    iconSize={'sm'}
                    onClick={
                        handleCategorySectionMenuNavigationListDesktopArrowsButtonClick
                    }
                />
            </div>
            <div className="rounded-xl bg-rose w-el-sm h-el-sm flex items-center justify-center">
                <IconButton
                    iconType={'arrow-down'}
                    iconFillColor={'lapis'}
                    iconSize={'sm'}
                    onClick={
                        handleCategorySectionMenuNavigationListDesktopArrowsButtonClick
                    }
                />
            </div>
        </div>
    );
};
