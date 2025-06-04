import { IconButton } from "@/app/components/Button/IconButton"


type HeaderIconsBarAccountButtonProps = {
    onClick: () => void
}

export const HeaderIconsBarAccountButton = ({
    onClick
}: HeaderIconsBarAccountButtonProps) => {
    return (
        <>
            <div className="md:hidden">
                <IconButton iconType={"account"} iconFillColor={"lapis"} iconSize={"3xl"} onClick={onClick} />
            </div>
            <div className="hidden md:block">
                <IconButton iconType={"account"} iconFillColor={"lapis"} iconSize={"5xl"} onClick={onClick} />
            </div>
        </>
    )
}