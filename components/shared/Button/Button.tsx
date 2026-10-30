import Link from "next/link";
import clsx from "clsx";
import type { ReactNode } from "react";
import styles from "./Button.module.css";

type Variant = "primary" | "ghost";
type Size = "md" | "sm";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  className?: string;
  "aria-label"?: string;
}

interface LinkProps extends BaseProps {
  href: string;
  external?: boolean;
  download?: string;
}

interface ActionProps extends BaseProps {
  href?: undefined;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function Button(props: LinkProps | ActionProps) {
  const { children, variant = "primary", size = "md", icon, className } = props;
  const classes = clsx(styles.button, styles[variant], styles[size], className);
  const content = (
    <>
      <span>{children}</span>
      {icon ? <span className={styles.icon}>{icon}</span> : null}
    </>
  );

  if (props.href !== undefined) {
    const isExternal = props.external ?? /^(https?:|mailto:)/.test(props.href);
    if (isExternal || props.download) {
      return (
        <a
          href={props.href}
          className={classes}
          aria-label={props["aria-label"]}
          download={props.download}
          {...(isExternal && !props.href.startsWith("mailto:") ? { target: "_blank", rel: "noreferrer" } : {})}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes} aria-label={props["aria-label"]}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      className={classes}
      aria-label={props["aria-label"]}
    >
      {content}
    </button>
  );
}
