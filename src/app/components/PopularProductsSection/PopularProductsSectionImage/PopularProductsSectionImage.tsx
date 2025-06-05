import Image from "next/image"

export const PopularProductsSectionImage = () => {
    return (
        <>
            <div className="absolute top-[96px] left-0 -z-10 md:hidden">
                <Image src={"/img/popular-products-bgi.png"} alt={"Popular Products Section image"} height={434} width={178} />
            </div>
            <div className="absolute top-[56px] left-0 -z-10 hidden md:block xl:hidden">
                <Image src={"/img/popular-products-bgi.png"} alt={"Popular Products Section image"} height={909} width={374} />
            </div>
            <div className="absolute top-[-24px] left-0 -z-10 hidden xl:block">
                <Image src={"/img/popular-products-bgi.png"} alt={"Popular Products Section image"} height={1098} width={452} />
            </div>
        </>
    )
}