import { Section } from "../Section";

export function PlanSection({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <>
      <Section className="flex-col">
        <div className="flex text-4xl sm:justify-center">
          Our Plan
        </div>
        <br/><br/>
        <div className="flex flex-col gap-y-4 md:flex-row md:justify-center">
          <div className="flex flex-col text-lg">
            <p className="mb-4">
              We plan to take our knowledge from working on the Honda Insight
              to the broader market, beginning with the Toyota Prius. There are
              1.2 million hybrid cars with failing batteries, and that's in
              the United States Alone. <b>Think you can help? </b>
              Reach out to us at our 
              email or discord.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
