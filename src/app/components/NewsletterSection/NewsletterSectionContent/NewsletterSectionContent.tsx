import { Button } from '@/core/Button/Button';
import { NewsletterSectionContentHeadline } from '@/NewsletterSection/NewsletterSectionContent/NewsletterSectionContentHeadline';
import { Text } from '@/core/Text/Text';

export const NewsletterSectionContent = () => {
    return (
        <div className="flex flex-col px-el-sm py-el-5xl gap-4xl bg-lite-green items-center w-full md:px-el-3xl md:py-el-8xl md:items-start lg:w-half xl:p-0 xl:px-el-10xl xl:justify-center">
            <NewsletterSectionContentHeadline />
            <form
                action="/example"
                method="post"
                className="flex flex-col gap-4xl w-full items-center md:items-start"
            >
                <input
                    type="email"
                    placeholder="Enter your email"
                    name="newsletter-email"
                    className="border-b-sm border-black placeholder:text-center placeholder:text-clay placeholder:text-placegolder-sm placeholder:font-roboto bg-transparent w-full py-el-sm text-center outline-none font-roboto md:text-start md:text-placegolder-md md:placeholder:text-start md:placeholder:text-placegolder-md"
                />
                <div className="md:hidden">
                    <Button
                        buttonSize={'md'}
                        borderRadius={'sm'}
                        variant={'contained'}
                        backgroundColor={'mint'}
                    >
                        <Text
                            fontSize={'3xl'}
                            fontFamily={'roboto'}
                            color={'white'}
                            content={'Subscribe'}
                        />
                    </Button>
                </div>

                <div className="hidden md:block">
                    <Button
                        buttonSize={'lg'}
                        borderRadius={'sm'}
                        variant={'contained'}
                        backgroundColor={'mint'}
                    >
                        <Text
                            fontSize={'3xl'}
                            fontFamily={'roboto'}
                            color={'white'}
                            content={'Subscribe'}
                        />
                    </Button>
                </div>
            </form>
        </div>
    );
};
