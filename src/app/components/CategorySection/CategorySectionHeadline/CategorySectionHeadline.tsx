import { CategorySectionHeadlineDesktop } from './CategorySectionHeadlineDesktop';
import { CategorySectionHeadlineMobile } from './CategorySectionHeadlineMobile';

export const CategorySectionHeadline = () => {
    return (
        <>
            <CategorySectionHeadlineMobile />
            <CategorySectionHeadlineDesktop />
        </>
    );
};
