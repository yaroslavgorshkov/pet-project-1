import { IconButton } from "../../Button/IconButton"

export const HeaderIconsBarShoppingCart = () => {
    return (
        <>
            <div className="md:hidden">
                <IconButton iconType={"shopping-cart"} iconFillColor={"lapis"} iconSize={"3xl"} onClick={() => 1} />
            </div>
            <div className="hidden md:block">
                <IconButton iconType={"shopping-cart"} iconFillColor={"lapis"} iconSize={"5xl"} onClick={() => 1} />
            </div>
        </>
    )
}