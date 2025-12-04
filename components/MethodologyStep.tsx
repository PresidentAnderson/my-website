export interface MethodologyStepProps {
  step: number;
  title: string;
  description: string;
}

const MethodologyStep = ({ step, title, description }: MethodologyStepProps) => {
  return (
    <div className="relative flex items-start space-x-6 group">
      {/* Step Number Circle */}
      <div className="flex-shrink-0 relative">
        <div className="w-16 h-16 rounded-full bg-investigation flex items-center justify-center border-4 border-investigation-200 group-hover:border-investigation-50 transition-colors">
          <span className="text-smoke font-display font-bold text-2xl">
            {step}
          </span>
        </div>
        {/* Connecting Line (hidden for last step via parent logic if needed) */}
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-investigation-200" />
      </div>

      {/* Content */}
      <div className="flex-grow pt-3 pb-12">
        {/* Title */}
        <h3 className="text-2xl font-display font-semibold text-smoke mb-3 group-hover:text-investigation-50 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-smoke/70 text-base leading-relaxed max-w-2xl">
          {description}
        </p>

        {/* Accent Line */}
        <div className="mt-4 w-16 h-1 bg-investigation-200 group-hover:w-24 group-hover:bg-investigation-50 transition-all duration-300" />
      </div>
    </div>
  );
};

export default MethodologyStep;
