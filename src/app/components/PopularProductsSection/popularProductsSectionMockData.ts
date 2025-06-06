type PopularProductsSectionItem = {
    id: number;
    ref: string;
    imgRef: string;
    name: string;
    description: string;
    price: number;
    backgroundColor: string;
    alt: string
}

export const popularProductsSectionContent: PopularProductsSectionItem[] = [
    {
        id: 0,
        ref: "#popular-products-armchair",
        imgRef: "/img/popular-products-1-item.png",
        name: "Armchair",
        description: "Light single chair",
        price: 145,
        backgroundColor: "bg-lazuli-green",
        alt: "Popular Products Section Armchair"
    }, 
    {
        id: 1,
        ref: "#popular-products-premium-sofa",
        imgRef: "/img/popular-products-2-item.png",
        name: "Premium Sofa",
        description: "Light single chair",
        price: 145,
        backgroundColor: "bg-white-blue",
        alt: "Popular Products Section Premium Sofa"
    },
    {
        id: 2,
        ref: "#popular-products-minimal-sofa",
        imgRef: "/img/popular-products-3-item.png",
        name: "Minimal Sofa",
        description: "Light single chair",
        price: 145,
        backgroundColor: "bg-purple",
        alt: "Popular Products Section Minimal Sofa"
    },
    {
        id: 3,
        ref: "#popular-products-dining-chair",
        imgRef: "/img/popular-products-4-item.png",
        name: "Dining Chair",
        description: "Light single chair",
        price: 145,
        backgroundColor: "bg-skin",
        alt: "Popular Products Section Dining Chair"
    }
]