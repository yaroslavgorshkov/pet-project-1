import { JSX } from "react";
import { IconFillColor, IconProps, IconSize, DynamicIconType, StaticIconType } from "../../components/types";
import { AccountIcon, ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon, ArrowUpIcon, BasketballIcon, BenefitsSectionCustomerSupportIcon, BenefitsSectionPaymentMethodIcon, BenefitsSectionReturnPolicyIcon, FacebookIcon, HamburgerMenuIcon, InstagramIcon, LinkedInIcon, SearchIcon, SearchSmallIcon, SeeMoreIcon, ShoppingCartIcon, TwitterIcon, ZoomIcon, ZoomOutIcon } from "../../components/icons";

const dynamicIconMap: Record<DynamicIconType, ({
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
    facebook: FacebookIcon
}

const staticIconMap: Record<StaticIconType, () => JSX.Element> = {
    "payment-method": BenefitsSectionPaymentMethodIcon,
    "return-policy": BenefitsSectionReturnPolicyIcon,
    "customer-support": BenefitsSectionCustomerSupportIcon,
}


export const getDynamicIconComponent = (
    icon: DynamicIconType,
    iconFill: IconFillColor,
    iconSize: IconSize
): JSX.Element => {
    const IconComponent = dynamicIconMap[icon];
    return <IconComponent color={iconFill} size={iconSize} />;
};

export const getStaticIconComponent = (icon: StaticIconType) => {
    const IconComponent = staticIconMap[icon];
    return <IconComponent />;
}
