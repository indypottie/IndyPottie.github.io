import type {
    ButtonHTMLAttributes,
    ReactNode,
} from "react";

export type ButtonVariant =
    | "filled"
    | "outlined"
    | "ghost";

export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {

    children: ReactNode;

    variant?: ButtonVariant;

    icon?: ReactNode;
}