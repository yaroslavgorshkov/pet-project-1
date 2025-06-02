import { ReactNode } from "react"

type TextButtonProps = {
    text: ReactNode;
    px: string;
    py: string;
    bgc: string;
    rounded: string;
    className?: string;
}

export const TextButton = ({
    text,
    px,
    py,
    bgc,
    rounded,
    className = ""
}: TextButtonProps) => {
    return (
        <button className={`${px} ${py} ${bgc} ${rounded} ${className}`}>
            {text}
        </button>
    )
}