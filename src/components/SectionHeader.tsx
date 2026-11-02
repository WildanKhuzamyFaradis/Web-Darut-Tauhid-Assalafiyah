interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  arabic?: string;
  centered?: boolean;
  dark?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  arabic,
  centered = true,
  dark = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : "text-left"}`}>
      {arabic && (
        <p className="text-xl sm:text-2xl text-[#C6A15B] font-serif mb-2 tracking-wide font-medium">
          {arabic}
        </p>
      )}
      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight font-serif-title ${
          dark ? "text-white" : "text-[#0B2E22]"
        }`}
      >
        {title}
      </h2>
      <div
        className={`w-20 h-1 bg-[#C6A15B] my-3 rounded-full ${
          centered ? "mx-auto" : ""
        }`}
      />
      {subtitle && (
        <p
          className={`max-w-2xl text-sm sm:text-base ${
            centered ? "mx-auto" : ""
          } ${dark ? "text-emerald-100/80" : "text-gray-600"} leading-relaxed`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
