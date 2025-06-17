import { JSX } from "react";
import { IconFillColor, IconProps, IconSize, DynamicIconType, StaticIconType } from "../../types";
import { AccountIcon } from "../IconComponents/AccountIcon";
import { ShoppingCartIcon } from "../IconComponents/ShoppingCartIcon";
import { SearchIcon } from "../IconComponents/SearchIcon";
import { SearchSmallIcon } from "../IconComponents/SearchSmallIcon";
import { HamburgerMenuIcon } from "../IconComponents/HamburgerMenuIcon";
import { ArrowUpIcon } from "../IconComponents/ArrowUpIcon";
import { ArrowDownIcon } from "../IconComponents/ArrowDownIcon";
import { ArrowLeftIcon } from "../IconComponents/ArrowLeftIcon";
import { ArrowRightIcon } from "../IconComponents/ArrowRightIcon";
import { SeeMoreIcon } from "../IconComponents/SeeMoreIcon";
import { ZoomIcon } from "../IconComponents/ZoomIcon";
import { ZoomOutIcon } from "../IconComponents/ZoomOutIcon";
import { TwitterIcon } from "../IconComponents/TwitterIcon";
import { BasketballIcon } from "../IconComponents/BasketballIcon";
import { LinkedInIcon } from "../IconComponents/LinkedInIcon";
import { InstagramIcon } from "../IconComponents/InstagramIcon";
import { FacebookIcon } from "../IconComponents/FacebookIcon";
import { BenefitsSectionPaymentMethodIcon } from "../IconComponents/BenefitsSectionPaymentMethodIcon";
import { BenefitsSectionReturnPolicyIcon } from "../IconComponents/BenefitsSectionReturnPolicyIcon";
import { BenefitsSectionCustomerSupportIcon } from "../IconComponents/BenefitsSectionCustomerSupportIcon";

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
