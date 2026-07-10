import Link from "next/link";

type Props = {
  title: string;
  subtitle: string;
  cta: string;
  href: string;
  variant?: "amber" | "purple";
};

export function ConversionBanner({
  title,
  subtitle,
  cta,
  href,
  variant = "amber",
}: Props) {
  const bg =
    variant === "amber"
      ? "bg-gradient-to-r from-wax-amber/20 to-wax-purple/20 border-wax-amber/30"
      : "bg-wax-purple-deep border-wax-purple-light/30";

  return (
    <div className={`rounded-2xl border p-8 md:p-12 ${bg}`}>
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <h3 className="font-display text-2xl font-semibold text-wax-cream md:text-3xl">
            {title}
          </h3>
          <p className="mt-2 max-w-lg text-sm leading-relaxed text-wax-cream/60">
            {subtitle}
          </p>
        </div>
        <Link href={href} className="btn-primary shrink-0">
          {cta}
        </Link>
      </div>
    </div>
  );
}
