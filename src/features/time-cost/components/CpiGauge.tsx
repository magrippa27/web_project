import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

type CpiGaugeProps = {
  value: number;
};

const SEGMENT_COLORS = [
  "#fef9c3",
  "#fef08a",
  "#fde047",
  "#facc15",
  "#eab308",
  "#f97316",
  "#ea580c",
  "#dc2626",
];

const strokeColor = "var(--color-text-default-default)";
const inactiveFill = "var(--color-background-default-default)";
const innerStroke = "var(--color-border-default-default)";

export default function CpiGauge({ value }: CpiGaugeProps) {
  const safeValue = Number.isFinite(value) ? Math.min(Math.max(value, 0), 100) : 0;
  const segments = SEGMENT_COLORS.length;
  const segmentSize = 100 / segments;
  const activeSegments = Math.max(1, Math.round(safeValue / segmentSize));

  const data = Array.from({ length: segments }, (_, index) => ({
    name: `${index}`,
    value: segmentSize,
    active: index < activeSegments,
  }));

  return (
    <div className="relative w-full max-w-[260px] h-[220px]">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            startAngle={210}
            endAngle={-30}
            innerRadius={55}
            outerRadius={95}
            stroke={strokeColor}
            strokeWidth={0.8}
          >
            {data.map((entry, index) => (
              <Cell
                key={entry.name}
                fill={entry.active ? SEGMENT_COLORS[index] : inactiveFill}
                stroke={strokeColor}
                strokeWidth={0.8}
              />
            ))}
          </Pie>
          <Pie
            data={[{ value: 100 }]}
            dataKey="value"
            startAngle={0}
            endAngle={360}
            innerRadius={40}
            outerRadius={54}
            fill={inactiveFill}
            stroke={innerStroke}
            strokeWidth={1}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="pointer-events-none absolute left-[15%] top-[18%] -translate-x-1/2 text-[10px] text-text-default-default">
        100
      </div>
      <div className="pointer-events-none absolute right-[5%] top-1/2 -translate-y-1/2 text-[10px] text-text-default-default">
        0
      </div>
    </div>
  );
}
