import { IconButton } from "@/app/components/Button/IconButton"

export const CategorySectionMenuHamburgerButton = () => {
    const handleLeftClick = () => {
        // TODO: add left click function
    }

    return (
        <IconButton iconType={"hamburger-menu"} iconFillColor={"lapis"} iconSize={"9xl"} onClick={handleLeftClick} />
    )
}