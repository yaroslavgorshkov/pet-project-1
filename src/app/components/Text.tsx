type TextProps = {
    fontSize: string;
    fontFamily: string;
    color: string;
    fontWeight: string;
    content: string;
    className?: string
}

export const Text = ({
    fontSize,
    fontFamily,
    color,
    fontWeight,
    content,
    className = ""
}: TextProps) => {
    return (
        <span className={`${fontSize} ${fontFamily} ${color} ${fontWeight} ${className}`}>
            {content}
        </span>
    )
}