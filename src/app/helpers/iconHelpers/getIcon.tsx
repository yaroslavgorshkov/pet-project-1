import { JSX } from "react";
import { IconFillColor, IconProps, IconSize, IconType } from "../../components/types";
import { AccountIcon, ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon, ArrowUpIcon, BasketballIcon, FacebookIcon, HamburgerMenuIcon, InstagramIcon, LinkedInIcon, SearchIcon, SearchSmallIcon, SeeMoreIcon, ShoppingCartIcon, TwitterIcon, ZoomIcon, ZoomOutIcon } from "../../components/icons";

const iconMap: Record<IconType, ({
    color,
    size
}: IconProps) => JSX.Element> = {
    account: AccountIcon,
    "shopping-cart": ShoppingCartIcon,
    search: SearchIcon,
    "search-small": SearchSmallIcon,
    "hamburger-menu": HamburgerMenuIcon,
    "arrow-up": ArrowUpIcon,
    "arrow-down": ArrowDownIcon,
    "arrow-left": ArrowLeftIcon,
    "arrow-right": ArrowRightIcon,
    "see-more": SeeMoreIcon,
    zoom: ZoomIcon,
    "zoom-out": ZoomOutIcon,
    twitter: TwitterIcon,
    basketball: BasketballIcon,
    "linked-in": LinkedInIcon,
    instagram: InstagramIcon,
    facebook: FacebookIcon,
}

export const getIconComponent = (
    icon: IconType,
    iconFill: IconFillColor,
    iconSize: IconSize
): JSX.Element => {
    const IconComponent = iconMap[icon];
    return <IconComponent color={iconFill} size={iconSize} />;
};
