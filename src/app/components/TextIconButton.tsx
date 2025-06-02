import { ReactNode } from "react"

type TextIconButtonProps = {
    text: ReactNode;
    icon: ReactNode;
    px: string;
    py: string;
    bgc: string;
    rounded: string;
    className?: string;
}

export const TextIconButton = ({
    text,
    icon,
    px,
    py,
    bgc,
    rounded,
    className = ""
}: TextIconButtonProps) => {
    return (
        <button className={`flex gap-[18px] ${px} ${py} ${bgc} ${rounded} ${className}`}>
            {text}
            <div className="flex justify-center items-center">
                {icon}
            </div>
        </button>
    )
}