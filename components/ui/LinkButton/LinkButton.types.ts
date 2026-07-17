import type {
    AnchorHTMLAttributes,
    ReactNode,
} from "react";

import type { ButtonVariant } from "../Button/Button.types";

export interface LinkButtonProps
    extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {

    children: ReactNode;

    variant?: ButtonVariant;

    icon?: ReactNode;

    external?: boolean;

    /**
     * Used for internal navigation.
     */
    to?: string;

    /**
     * Used for external links.
     */
    href?: string;
}