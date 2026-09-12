import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "navy" | "outline" | "whatsapp";
};

const variants = {
  primary: "btn-primary",
  navy: "btn-navy",
  outline: "btn-outline",
  whatsapp: "btn-whatsapp",
} as const;

export function ButtonLink({
  href,
  children,
  className = "",
  variant = "primary",
}: Props) {
  const isExternal = href.startsWith("http") || href.startsWith("tel:");
  const classes = `${variants[variant]} ${className}`;

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
