export type NavigationListContentItem = {
    id: number;
    text: string;
    href: string;
};

export type IconFillColor = 'lapis' | 'gray' | 'white' | 'absolute-white';
export type IconSize =
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | '8xl'
    | '9xl';
export type DynamicIconType =
    | 'account'
    | 'shopping-cart'
    | 'search'
    | 'search-small'
    | 'hamburger-menu'
    | 'arrow-up'
    | 'arrow-down'
    | 'arrow-left'
    | 'arrow-right'
    | 'see-more'
    | 'zoom'
    | 'zoom-out'
    | 'twitter'
    | 'basketball'
    | 'linked-in'
    | 'instagram'
    | 'facebook';
export type StaticIconType =
    | 'payment-method'
    | 'return-policy'
    | 'customer-support';
export type IconProps = {
    color: IconFillColor;
    size: IconSize;
};

export type EndIconType = {
    iconType: DynamicIconType;
    iconSize: IconSize;
    iconFillColor: IconFillColor;
};
