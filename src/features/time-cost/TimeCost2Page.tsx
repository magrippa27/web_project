import TextareaField from "../../shared/components/TextareaField";
import TextSubheading from "../../shared/components/TextSubheading";
import TextTitleHero from "../../shared/components/TextTitleHero";
import SelectField from "../../shared/components/SelectField";
import Star from "../../shared/components/Star";
import HeroImage from "../../assets/coins.jpg";

const HEADER_HEIGHT = 64;

export default function TimeCost2Page() {
  return (
    <div className="w-full min-h-[1258px] relative bg-background-default-default overflow-x-auto">
      <div className="relative min-h-[1258px] mx-auto" style={{ width: 1440, minWidth: 1440 }}>
        <section
          className="absolute left-0 top-0 w-full flex flex-col items-center justify-center gap-space-200 px-space-600 py-[160px]"
          style={{ height: 535 }}
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

        <TextTitleHero
          text="Calculate how much here"
          className="!top-[626px] !left-[323px]"
        />
        <TextSubheading
          text="(No need to include real data)"
          className="!top-[716px] !left-[576px]"
        />
        <SelectField
          state="Default"
          valueType="Default"
          value="Value"
          description="Description"
          label="Country"
          hasDescription={false}
          open1={false}
          hasLabel
          className="!top-[816px] !left-[206px]"
        />
        <TextareaField
          state="Default"
          valueType="Default"
          error="Hint"
          description="Description"
          label="Age"
          hasDescription={false}
          hasError={false}
          hasLabel
          textareaFieldTop={`${990 - HEADER_HEIGHT}px`}
          textareaFieldLeft="202px"
        />
        <TextareaField
          state="Default"
          valueType="Default"
          error="Hint"
          description="Description"
          label="Monthly Income (Gross)"
          hasDescription={false}
          hasError={false}
          hasLabel
          textareaFieldTop={`${880 - HEADER_HEIGHT}px`}
          textareaFieldLeft="870px"
          textareaFieldHeight="78px"
        />
        <TextareaField
          state="Default"
          valueType="Default"
          error="Hint"
          description="Description"
          label="Monthly Income (Gross)"
          hasDescription={false}
          hasError={false}
          hasLabel
          textareaFieldTop={`${1005 - HEADER_HEIGHT}px`}
          textareaFieldLeft="870px"
          textareaFieldHeight="104px"
        />
        <Star
          size="Medium"
          state="Default"
          variant="Primary"
          label="Proceed"
          hasIconEnd={false}
          hasIconStart={false}
          starPosition="absolute"
          starTop={`${1218 - HEADER_HEIGHT}px`}
          starLeft="636px"
          starWidth="192px"
          starHeight="44px"
        />
      </div>
    </div>
  );
}
