type FooterSocialMediaButtonType =
    | 'twitter'
    | 'basketball'
    | 'linked-in'
    | 'instagram'
    | 'facebook';

type FooterSocialMediaContentItem = {
    id: number;
    buttonType: FooterSocialMediaButtonType;
    href: string;
};

type FooterMainBlockContentItemName =
    | 'My Account'
    | 'Help'
    | 'Shop'
    | 'Legal Stuff';

type FooterMainBlockContentItemLink =
    | 'Sign in'
    | 'Register'
    | 'Order status'
    | 'Shipping'
    | 'Returns'
    | 'Sizing'
    | 'All Products'
    | 'Bedroom'
    | 'Dinning Room'
    | 'Shipping & Delivery'
    | 'Terms & Conditions'
    | 'Privacy & Policy';

type FooterMainBlockContentItemLinkHref =
    | '#sign-in'
    | '#register'
    | '#order-status'
    | '#shipping'
    | '#returns'
    | '#sizing'
    | '#all-products'
    | '#bedroom'
    | '#dinning-room'
    | '#shipping-delivery'
    | '#terms-conditions'
    | '#privacy-policy';

type FooterMainBlockContentItem = {
    id: number;
    name: FooterMainBlockContentItemName;
    content: FooterMainBlockContentItemLink[];
    hrefs: FooterMainBlockContentItemLinkHref[];
};

export const footerSocialMediaContent: FooterSocialMediaContentItem[] = [
    { id: 0, buttonType: 'facebook', href: '#home' },
    { id: 1, buttonType: 'instagram', href: '#products' },
    { id: 2, buttonType: 'linked-in', href: '#categories' },
    { id: 3, buttonType: 'basketball', href: '#about' },
    { id: 4, buttonType: 'twitter', href: '#contact-us' },
];

export const footerMainBlockContent: FooterMainBlockContentItem[] = [
    {
        id: 0,
        name: 'My Account',
        hrefs: ['#sign-in', '#register', '#order-status'],
        content: ['Sign in', 'Register', 'Order status'],
    },
    {
        id: 1,
        name: 'Help',
        hrefs: ['#shipping', '#returns', '#sizing'],
        content: ['Shipping', 'Returns', 'Sizing'],
    },
    {
        id: 2,
        name: 'Shop',
        hrefs: ['#all-products', '#bedroom', '#dinning-room'],
        content: ['All Products', 'Bedroom', 'Dinning Room'],
    },
    {
        id: 3,
        name: 'Legal Stuff',
        hrefs: ['#shipping-delivery', '#terms-conditions', '#privacy-policy'],
        content: [
            'Shipping & Delivery',
            'Terms & Conditions',
            'Privacy & Policy',
        ],
    },
];
