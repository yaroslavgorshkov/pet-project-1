import { IconButton } from "../../../IconButton"

export const CategorySectionMenuHamburgerButton = () => {
    return (
        <IconButton icon={
            <svg width="36" height="29" viewBox="0 0 36 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M35 4.5H1C0.447715 4.5 0 4.05228 0 3.5V1.5C0 0.947715 0.447715 0.5 1 0.5H35C35.5523 0.5 36 0.947715 36 1.5V3.5C36 4.05228 35.5523 4.5 35 4.5ZM36 15.5001V13.5001C36 12.9478 35.5523 12.5001 35 12.5001H1C0.447715 12.5001 0 12.9478 0 13.5001V15.5001C0 16.0524 0.447715 16.5001 1 16.5001H35C35.5523 16.5001 36 16.0524 36 15.5001ZM36 25.5001V27.5001C36 28.0523 35.5523 28.5001 35 28.5001H1C0.447715 28.5001 0 28.0523 0 27.5001V25.5001C0 24.9478 0.447715 24.5001 1 24.5001H35C35.5523 24.5001 36 24.9478 36 25.5001Z" fill="#07484A" />
            </svg>
        } handleClick={() => 1} />
    )
}