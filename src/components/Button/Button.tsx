import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

export type ButtonType = "Main" | "Alternative" | "Outlined";
export type ButtonSize = "Large" | "Medium" | "Small";

type SharedButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "type"> & {
  /** Figma: Label */
  label?: string;
  /** Figma: Show Leading Icon */
  showLeadingIcon?: boolean;
  /** Figma: Leading Icon (Instance Swap) */
  leadingIcon?: ReactNode;
  /** Figma: Show Trailing Icon */
  showTrailingIcon?: boolean;
  /** Figma: Trailing Icon (Instance Swap) */
  trailingIcon?: ReactNode;
  /** Native HTML button type; separate from Figma's Type property. */
  htmlType?: "button" | "submit" | "reset";
};

type MainOrAlternativeButtonProps = SharedButtonProps & {
  /** Figma: Type */
  type?: "Main" | "Alternative";
  /** Figma: Size */
  size?: "Large" | "Medium";
};

type OutlinedButtonProps = SharedButtonProps & {
  /** Figma: Type */
  type: "Outlined";
  /** Figma: Size */
  size?: "Large" | "Medium" | "Small";
};

export type ButtonProps = MainOrAlternativeButtonProps | OutlinedButtonProps;

const typeClass: Record<ButtonType, string> = {
  Main: styles.typeMain,
  Alternative: styles.typeAlternative,
  Outlined: styles.typeOutlined,
};

const sizeClass: Record<ButtonSize, string> = {
  Large: styles.sizeLarge,
  Medium: styles.sizeMedium,
  Small: styles.sizeSmall,
};

export function Button({
  label = "버튼",
  type = "Main",
  size = "Large",
  showLeadingIcon = false,
  leadingIcon,
  showTrailingIcon = false,
  trailingIcon,
  htmlType = "button",
  className,
  ...buttonProps
}: ButtonProps) {
  const classes = [
    styles.button,
    typeClass[type],
    sizeClass[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} type={htmlType} {...buttonProps}>
      {showLeadingIcon && leadingIcon ? (
        <span className={styles.icon} aria-hidden="true">
          {leadingIcon}
        </span>
      ) : null}
      <span>{label}</span>
      {showTrailingIcon && trailingIcon ? (
        <span className={styles.icon} aria-hidden="true">
          {trailingIcon}
        </span>
      ) : null}
    </button>
  );
}
