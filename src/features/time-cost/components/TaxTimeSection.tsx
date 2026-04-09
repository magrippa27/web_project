type TaxTimeSectionProps = {
  taxPortionOfYear?: number;
};

const defaultTaxPortion = 7 / 12;

function getTaxSectorPath(portion: number) {
  const safePortion = portion > 0 && portion < 1 ? portion : defaultTaxPortion;
  const startAngle = 0;
  const endAngle = 2 * Math.PI * safePortion;
  const radius = 48;
  const cx = 50;
  const cy = 50;

  const x1 = cx + radius * Math.sin(startAngle);
  const y1 = cy - radius * Math.cos(startAngle);
  const x2 = cx + radius * Math.sin(endAngle);
  const y2 = cy - radius * Math.cos(endAngle);

  const largeArcFlag = endAngle - startAngle > Math.PI ? 1 : 0;

  return `M ${cx} ${cy} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
}

export default function TaxTimeSection({ taxPortionOfYear }: TaxTimeSectionProps) {
  const portion = taxPortionOfYear && taxPortionOfYear > 0 && taxPortionOfYear < 1 ? taxPortionOfYear : defaultTaxPortion;

  const workdayBlocks = 12;
  const taxedBlocksDay = Math.round(workdayBlocks * portion);

  const weekDays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  const taxedDaysWeek = 3;

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const taxedMonthsYear = 3;

  const taxSectorPath = getTaxSectorPath(portion);

  return (
    <div className="flex flex-col gap-16">
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-10 items-center">
        <p className="text-base md:text-lg leading-relaxed text-text-default-default">
          On a typical workday, you spend part of your time working only to pay taxes. It is similar to working from 8:00 am
          until 3:00 pm for taxes, and the rest of the day for yourself.
        </p>
        <div className="flex items-center justify-center">
          <div className="relative h-32 w-32 rounded-full border-[6px] border-border-default-default shadow-md bg-background-default-default flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="h-28 w-28 text-text-default-default">
              <circle
                cx="50"
                cy="50"
                r="48"
                fill="var(--color-background-default-secondary)"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path d={taxSectorPath} fill="#fecaca" fillOpacity="0.7" />
              {Array.from({ length: 12 }).map((_, index) => {
                const angle = (index / 12) * 2 * Math.PI;
                const innerRadius = index % 3 === 0 ? 38 : 42;
                const outerRadius = 46;
                const x1 = 50 + innerRadius * Math.sin(angle);
                const y1 = 50 - innerRadius * Math.cos(angle);
                const x2 = 50 + outerRadius * Math.sin(angle);
                const y2 = 50 - outerRadius * Math.cos(angle);
                const tickStroke = index < taxedBlocksDay ? "#ef4444" : "var(--color-text-default-default)";
                return (
                  <g key={index}>
                    <line
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke={tickStroke}
                      strokeWidth={index % 3 === 0 ? 2 : 1}
                    />
                    <text
                      x={50 + 32 * Math.sin(angle)}
                      y={50 - 32 * Math.cos(angle) + 2}
                      textAnchor="middle"
                      fontSize="6"
                      fill="var(--color-text-default-default)"
                    >
                      {index === 0 ? 12 : index}
                    </text>
                  </g>
                );
              })}
              <line x1="50" y1="50" x2="50" y2="22" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
              <line
                x1="50"
                y1="50"
                x2="78"
                y2="50"
                stroke="var(--color-text-default-default)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="50" cy="50" r="3" fill="var(--color-text-default-default)" />
            </svg>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1.2fr)] gap-10 items-center">
        <p className="text-base md:text-lg leading-relaxed text-text-default-default">
          Over a full week, this becomes clearer. It is like working from Monday to Wednesday just to pay taxes, before you
          start working for your own needs.
        </p>
        <div className="flex justify-center">
          <div className="rounded-2xl border border-border-default-default bg-background-default-default px-6 py-4 shadow-sm">
            <div className="mb-3 text-sm font-medium text-text-default-default text-center">This week</div>
            <div className="grid grid-cols-7 gap-2 text-xs">
              {weekDays.map((day, index) => (
                <div
                  key={day}
                  className={`flex h-10 flex-col items-center justify-center rounded-md border text-[11px] ${
                    index < taxedDaysWeek
                      ? "border-red-500/35 bg-red-500/[0.1] text-red-700 dark:text-red-300"
                      : "border-border-default-default bg-background-default-secondary text-text-default-default"
                  }`}
                >
                  <span className="font-medium">{day}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1.2fr)] gap-10 items-center">
        <p className="text-base md:text-lg leading-relaxed text-text-default-default">
          Across an entire year, the effect is even stronger. It is comparable to working from January to March only to pay
          taxes.
        </p>
        <div className="flex justify-center">
          <div className="rounded-2xl border border-border-default-default bg-background-default-default px-6 py-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between text-xs text-text-default-default">
              <span>Year overview</span>
            </div>
            <div className="grid grid-cols-4 gap-2 text-[11px]">
              {months.map((month, index) => (
                <div
                  key={month}
                  className={`flex h-9 items-center justify-center rounded-md border ${
                    index < taxedMonthsYear
                      ? "border-red-500/35 bg-red-500/[0.1] text-red-700 dark:text-red-300"
                      : "border-border-default-default bg-background-default-secondary text-text-default-default"
                  }`}
                >
                  <span>{month}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

