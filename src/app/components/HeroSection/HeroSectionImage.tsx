import Image from "next/image"

export const HeroSectionImage = () => {
    return (
        <div className="absolute inset-0 z-[-10] rounded-b-[50px]">
            <Image src={"/img/hero-section-image.jpg"} alt={"Hero section image"} fill objectFit="cover" className="opacity-50 rounded-b-[50px]" />
        </div>
    )
}