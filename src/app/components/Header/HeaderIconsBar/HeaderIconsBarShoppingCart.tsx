import { IconButton } from "../../Button/IconButton"

export const HeaderIconsBarShoppingCart = () => {
    const handleLeftClick = () => {
        // TODO: add left click function
    }

    return (
        <>
            <div className="md:hidden">
                <IconButton iconType={"shopping-cart"} iconFillColor={"lapis"} iconSize={"3xl"} onClick={handleLeftClick} />
            </div>
            <div className="hidden md:block">
                <IconButton iconType={"shopping-cart"} iconFillColor={"lapis"} iconSize={"5xl"} onClick={handleLeftClick} />
            </div>
        </>
    )
}