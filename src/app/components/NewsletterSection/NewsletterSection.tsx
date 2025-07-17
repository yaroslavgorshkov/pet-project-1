import Image from 'next/image';
import { NewsletterSectionContent } from '@/NewsletterSection/NewsletterSectionContent/NewsletterSectionContent';

export const NewsletterSection = () => {
    return (
        <section className="pt-section-3xl md:pt-section-5xl">
            <div className="flex flex-col lg:flex-row">
                <div className="relative h-el-lg w-full md:h-el-4xl lg:w-half">
                    <Image
                        src={'/img/newsletter.jpg'}
                        alt={'Newsletter Section Main Image'}
                        fill
                        className="object-cover"
                    />
                </div>
                <NewsletterSectionContent />
            </div>
        </section>
    );
};
