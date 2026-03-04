import { useRef, useState } from "react";
import HeroImage from "../../assets/coins.jpg";
import CountrySelect, { getCountryName } from "../../shared/components/CountrySelect";
import Star from "../../shared/components/Star";
import { Card, CardContent, CardHeader } from "../../shared/components/ui";
import { Input } from "../../shared/components/ui";

export default function TimeInflationPage() {
  const resultsRef = useRef<HTMLDivElement>(null);
  const [country, setCountry] = useState("");
  const [age, setAge] = useState("");
  const [monthlyIncome1, setMonthlyIncome1] = useState("");
  const [monthlyIncome2, setMonthlyIncome2] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState<{ countryCode: string; age: string; monthlyIncome1: string; monthlyIncome2: string } | null>(null);

  function handleProceed() {
    setIsSubmitting(true);
    setSubmitted({
      countryCode: country,
      age: age || "—",
      monthlyIncome1: monthlyIncome1 || "—",
      monthlyIncome2: monthlyIncome2 || "—",
    });
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsSubmitting(false);
    }, 1600);
  }

  return (
    <div className="w-full min-h-screen bg-background-default-default">
      <section
        className="w-full flex flex-col items-center justify-center gap-space-200 px-space-600 py-[160px] relative"
        style={{ minHeight: 535 }}
        aria-label="Hero"
      >
        <div className="absolute inset-0 pointer-events-none">
          <img
            src={HeroImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-background-utilities-scrim" />
        </div>
        <div className="relative z-10 flex flex-col items-center gap-4 text-center leading-[1.2] text-text-utilities-text-on-overlay font-title-hero-font-family max-w-[900px]">
          <h1 className="m-0 font-title-hero-font-weight text-[clamp(4rem,10vw,7rem)] tracking-[-2.16px]">
            Inflation-Cost
          </h1>
          <div className="flex flex-col items-center text-[clamp(1.75rem,4vw,3rem)] font-subtitle-font-family font-normal">
            <p className="m-0">Inflation doesn’t just eats your salary.</p>
            <p className="m-0">It eats your time.</p>
          </div>
        </div>
      </section>

      <div className="max-w-[900px] mx-auto px-6 pb-8 pt-4">
        <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold text-text-default-default mb-1">
          Calculate how much here
        </h2>
        <p className="text-subheading-size-medium text-text-default-secondary mb-8">
          (No need to include real data)
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <CountrySelect
            value={country}
            onChange={setCountry}
            placeholder="Select country"
          />
          <Input
            label="Age"
            type="text"
            placeholder="e.g. 30"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="rounded-lg border-2 border-neutral-300 bg-white"
          />
          <Input
            label="Monthly Income (Gross)"
            type="text"
            placeholder="e.g. 2000"
            value={monthlyIncome1}
            onChange={(e) => setMonthlyIncome1(e.target.value)}
            className="rounded-lg border-2 border-neutral-300 bg-white"
          />
          <Input
            label="Monthly Income (Gross)"
            type="text"
            placeholder="e.g. 2500"
            value={monthlyIncome2}
            onChange={(e) => setMonthlyIncome2(e.target.value)}
            className="rounded-lg border-2 border-neutral-300 bg-white"
          />
        </div>

        <div className="flex justify-center mb-24">
          <Star
            label="Proceed"
            loading={isSubmitting}
            onClick={handleProceed}
            className="!relative !top-auto !left-auto min-w-[192px]"
          />
        </div>

        {submitted && (
          <div
            ref={resultsRef}
            className="scroll-mt-8 transition-all duration-500"
          >
            <Card className="rounded-xl border-2 border-neutral-200 bg-white shadow-lg overflow-hidden">
              <CardHeader className="text-xl font-semibold text-neutral-900 pb-2">
                These are your information
              </CardHeader>
              <CardContent className="pt-0">
                <div className="max-h-[min(60vh,400px)] overflow-y-auto pr-2 space-y-4 text-[var(--color-text)]">
                  <div className="flex flex-wrap gap-x-4 gap-y-1 py-2 border-b border-neutral-100">
                    <span className="text-neutral-500 font-medium min-w-[140px]">Country</span>
                    <span>{getCountryName(submitted.countryCode)}</span>
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 py-2 border-b border-neutral-100">
                    <span className="text-neutral-500 font-medium min-w-[140px]">Age</span>
                    <span>{submitted.age}</span>
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 py-2 border-b border-neutral-100">
                    <span className="text-neutral-500 font-medium min-w-[140px]">Monthly Income (Gross)</span>
                    <span>{submitted.monthlyIncome1}</span>
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 py-2">
                    <span className="text-neutral-500 font-medium min-w-[140px]">Monthly Income (Gross)</span>
                    <span>{submitted.monthlyIncome2}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
