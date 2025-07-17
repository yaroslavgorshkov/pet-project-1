import { IconButton } from '@/core/Button/IconButton';
import { footerSocialMediaContent } from '@/Footer/footerMockData';

export const FooterContentSocialMediaList = () => {
    const handleFooterContentSocialMediaListItemLinkClick = (
        e: React.MouseEvent<HTMLAnchorElement>
    ) => e.preventDefault();

    const footerContentSocialMediaList = footerSocialMediaContent.map(
        ({ id, buttonType, href }) => {
            return (
                <a
                    key={id}
                    onClick={handleFooterContentSocialMediaListItemLinkClick}
                    href={href}
                >
                    <IconButton
                        iconType={buttonType}
                        iconFillColor={'lapis'}
                        iconSize={'5xl'}
                    />
                </a>
            );
        }
    );

    return (
        <div className="flex gap-2xl w-full">
            {footerContentSocialMediaList}
        </div>
    );
};
