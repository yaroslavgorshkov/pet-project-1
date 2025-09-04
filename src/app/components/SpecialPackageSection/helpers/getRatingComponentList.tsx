/* eslint-disable unicorn/filename-case */
import { getDynamicIconComponent } from '@/core/Icons/helpers/getIconComponent';
import { IconSize } from '@/types';
import { Fragment } from 'react';

export const getRatingComponentList = (iconSize: IconSize) => {
    return Array.from({ length: 5 }).map((_, i) => {
        const specialPackageSectionContentMainItemDetailsRatingIconSm =
            getDynamicIconComponent('rating', 'orange', iconSize);
        return (
            <Fragment key={i}>
                {specialPackageSectionContentMainItemDetailsRatingIconSm}
            </Fragment>
        );
    });
};
