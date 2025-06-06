import { IconButton } from "@/app/components/Button/IconButton"


type HeaderIconsBarSearchButtonProps = {
    onClick: () => void
}

export const HeaderIconsBarSearchButton = ({
    onClick
}: HeaderIconsBarSearchButtonProps) => {
    return (
        <>
            <div className="md:hidden">
                <IconButton iconType={"search"} iconFillColor={"lapis"} iconSize={"3xl"} onClick={onClick} />
            </div>
            <div className="hidden md:block">
                <IconButton iconType={"search"} iconFillColor={"lapis"} iconSize={"5xl"} onClick={onClick} />
            </div>
        </>
    )
}