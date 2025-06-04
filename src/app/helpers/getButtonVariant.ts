import { ButtonVariantTypes } from "../components/types";

const buttonVariantMap: Record<ButtonVariantTypes, string> = {
    secondary: "bg-transparent",
    contained: ""
}

export const getButtonVariant = (buttonVariant: ButtonVariantTypes) => buttonVariantMap[buttonVariant];