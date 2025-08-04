import { Text } from '@/core/Text/Text';
import { footerMainBlockContent } from '@/Footer/footerMockData';

export const FooterContentMainBlock = () => {
    const handleFooterContentMainBlockItemLinkClick = (
        e: React.MouseEvent<HTMLAnchorElement>
    ) => e.preventDefault();

    const footerContentMainBlockList = footerMainBlockContent.map(
        ({ id, content, hrefs, name }) => {
            return (
                <div key={id} className="flex flex-col gap-2xl">
                    <Text
                        fontSize={'lg'}
                        fontFamily={'opensans'}
                        color={'lapis'}
                        content={name}
                        fontWeight={'bold'}
                    />
                    <div className="flex flex-col md:hidden">
                        <a
                            href={hrefs.firstItem}
                            onClick={handleFooterContentMainBlockItemLinkClick}
                        >
                            <Text
                                fontSize={'sm'}
                                fontFamily={'opensans'}
                                color={'lapis'}
                                content={content.firstItem}
                            />
                        </a>
                        <a
                            href={hrefs.secondItem}
                            onClick={handleFooterContentMainBlockItemLinkClick}
                        >
                            <Text
                                fontSize={'sm'}
                                fontFamily={'opensans'}
                                color={'lapis'}
                                content={content.secondItem}
                            />
                        </a>
                        <a
                            href={hrefs.thirdItem}
                            onClick={handleFooterContentMainBlockItemLinkClick}
                        >
                            <Text
                                fontSize={'sm'}
                                fontFamily={'opensans'}
                                color={'lapis'}
                                content={content.thirdItem}
                            />
                        </a>
                    </div>

                    <div className="hidden md:flex gap-sm flex-col">
                        <a
                            href={hrefs.firstItem}
                            onClick={handleFooterContentMainBlockItemLinkClick}
                        >
                            <Text
                                fontSize={'lg'}
                                fontFamily={'opensans'}
                                color={'lapis'}
                                content={content.firstItem}
                            />
                        </a>
                        <a
                            href={hrefs.secondItem}
                            onClick={handleFooterContentMainBlockItemLinkClick}
                        >
                            <Text
                                fontSize={'lg'}
                                fontFamily={'opensans'}
                                color={'lapis'}
                                content={content.secondItem}
                            />
                        </a>
                        <a
                            href={hrefs.thirdItem}
                            onClick={handleFooterContentMainBlockItemLinkClick}
                        >
                            <Text
                                fontSize={'lg'}
                                fontFamily={'opensans'}
                                color={'lapis'}
                                content={content.thirdItem}
                            />
                        </a>
                    </div>
                </div>
            );
        }
    );

    return (
        <div className="grid grid-cols-2 gap-x-2xl gap-y-12xl w-full md:gap-12xl lg:flex lg:justify-between lg:gap-0">
            {footerContentMainBlockList}
        </div>
    );
};
