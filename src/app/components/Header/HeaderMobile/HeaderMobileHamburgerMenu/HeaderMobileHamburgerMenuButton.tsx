import { IconButton } from '@/app/components/Button/IconButton';

type HeaderMobileHamburgerMenuButtonProps = {
    onClick: () => void;
};

export const HeaderMobileHamburgerMenuButton = ({
    onClick,
}: HeaderMobileHamburgerMenuButtonProps) => {
    return (
        <>
            <div className="md:hidden">
                <IconButton
                    iconType={'hamburger-menu'}
                    iconFillColor={'lapis'}
                    iconSize={'4xl'}
                    onClick={onClick}
                />
            </div>
            <div className="hidden md:block xl:hidden">
                <IconButton
                    iconType={'hamburger-menu'}
                    iconFillColor={'lapis'}
                    iconSize={'7xl'}
                    onClick={onClick}
                />
            </div>
        </>
    );
};
