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
    content: {
        firstItem: FooterMainBlockContentItemLink;
        secondItem: FooterMainBlockContentItemLink;
        thirdItem: FooterMainBlockContentItemLink;
    };
    hrefs: {
        firstItem: FooterMainBlockContentItemLinkHref;
        secondItem: FooterMainBlockContentItemLinkHref;
        thirdItem: FooterMainBlockContentItemLinkHref;
    };
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
        hrefs: {
            firstItem: '#sign-in',
            secondItem: '#register',
            thirdItem: '#order-status',
        },
        content: {
            firstItem: 'Sign in',
            secondItem: 'Register',
            thirdItem: 'Order status',
        },
    },
    {
        id: 1,
        name: 'Help',
        hrefs: {
            firstItem: '#shipping',
            secondItem: '#returns',
            thirdItem: '#sizing',
        },
        content: {
            firstItem: 'Shipping',
            secondItem: 'Returns',
            thirdItem: 'Sizing',
        },
    },
    {
        id: 2,
        name: 'Shop',
        hrefs: {
            firstItem: '#all-products',
            secondItem: '#bedroom',
            thirdItem: '#dinning-room',
        },
        content: {
            firstItem: 'All Products',
            secondItem: 'Bedroom',
            thirdItem: 'Dinning Room',
        },
    },
    {
        id: 3,
        name: 'Legal Stuff',
        hrefs: {
            firstItem: '#shipping-delivery',
            secondItem: '#terms-conditions',
            thirdItem: '#privacy-policy',
        },
        content: {
            firstItem: 'Shipping & Delivery',
            secondItem: 'Terms & Conditions',
            thirdItem: 'Privacy & Policy',
        },
    },
];
