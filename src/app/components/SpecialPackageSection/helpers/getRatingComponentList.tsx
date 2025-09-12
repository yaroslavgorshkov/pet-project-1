/* eslint-disable unicorn/filename-case */
import { getDynamicIconComponent } from '@/core/Icons/helpers/getIconComponent';
import { IconSize } from '@/types';
import { Fragment } from 'react';
import { Rating } from '../SpecialPackageSectionContent/specialPackageSectionMockData';

export const getRatingComponentList = (iconSize: IconSize, rating: Rating) => {
    const ratingList = Array.from({ length: rating }).map((_, i) => {
        const ratingIcon = getDynamicIconComponent(
            'rating',
            'orange',
            iconSize
        );
        return <Fragment key={i}>{ratingIcon}</Fragment>;
    });

    const emptyRatingList = Array.from({ length: 5 - rating }).map((_, i) => {
        const emptyRatingIcon = getDynamicIconComponent(
            'rating',
            'transparent',
            iconSize
        );
        return <Fragment key={i}>{emptyRatingIcon}</Fragment>;
    });

    return (
        <>
            {ratingList}
            {emptyRatingList}
        </>
    );
};
