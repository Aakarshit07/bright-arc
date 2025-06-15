interface IStepsHeaderSectionProps {
  title: string;
  description: string;
  className?: string;
}

export function StepsHeaderSection({
  title,
  description,
  className = "",
}: IStepsHeaderSectionProps) {
  return (
    <div className={`mb-8 xl:mb-12 ${className}`}>
      <div className="grid xl:grid-cols-2 gap-6 xl:gap-8 items-start">
        <div>
          <h2 className="text-2xl xl:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 xl:mb-4 leading-tight">
            {title}
          </h2>
        </div>
        <div>
          <p className="text-sm xl:text-right xl:text-base text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
