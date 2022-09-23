import { Section } from "../Section";

export function HeroSection({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <Section className="flex-col content-end sm:justify-center">
        <div className="flex text-4xl mb-6 sm:justify-center">
          Yesterday's car.
        </div>
        <div className="flex text-4xl text-light-green font-bold sm:justify-center">
          Today's batteries.
        </div>
      </Section>
    </>
  );
}
