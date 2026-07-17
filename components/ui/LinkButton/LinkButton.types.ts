import type {
    AnchorHTMLAttributes,
    ReactNode,
} from "react";

import type { ButtonVariant } from "../Button/Button.types";

export interface LinkButtonProps
    extends AnchorHTMLAttributes<HTMLAnchorElement> {

    children: ReactNode;

    variant?: ButtonVariant;

    icon?: ReactNode;

    external?: boolean;
}