export type NavigationListContentItem = {id: number, text: string, ref: string};
export type CategorySectionItem = {id: number, text: string, ref: string, imgRef: string, alt: string};
export type FontSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl';
export type PaddingInlineSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
export type PaddingBlockSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type FontFamily = 'playfair' | 'opensans' | 'roboto';
export type Color = 'lapis' | 'white' | 'mint' | 'absolute-black';
export type FontWeight = 'normal' | 'bold';
export type TextAlign = 'center' | 'left';
export type ButtonBackgroundColor = 'mint' | 'white' | 'white-blue';
export type BorderRadius = 'md' | 'sm';

export type ButtonVariantTypes = "contained" | "secondary";

export type IconFillColor = 'lapis' | 'gray' | 'white' | 'absolute-white';
export type IconSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
export type IconType = 'account' | 'shopping-cart' | 'search' | 'search-small' | 'hamburger-menu' 
    | 'arrow-up' | 'arrow-down' | 'arrow-left' | 'arrow-right' | 'see-more' | 'zoom' | 'zoom-out'
    | 'twitter' | 'basketball' | 'linked-in' | 'instagram' | 'facebook';
export type IconProps = {
    color: IconFillColor;
    size: IconSize;
}



