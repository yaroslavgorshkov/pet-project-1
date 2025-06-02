import { ReactNode } from "react"

type IconButtonProps = {
    icon: ReactNode;
    handleClick: () => void;
    className?: string;
}

export const IconButton = ({
    icon,
    handleClick,
    className = ""
}: IconButtonProps) => {
    return (
        <button className={`flex justify-center items-center cursor-pointer ${className}`} onClick={handleClick}>
            {icon}
        </button>
    )
}