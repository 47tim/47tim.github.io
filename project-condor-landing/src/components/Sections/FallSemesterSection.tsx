import { Section } from "../Section";

export function FallSemesterSection({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <>
      <Section className="flex-col">
        <div className="flex flex-col gap-y-4 md:flex-row md:justify-center">
          <div className="flex text-3xl max-w-sm leading-snug">
            650% MPG increase. Limitless potential.
          </div>
          <div className="flex flex-col text-lg">
            <p className="mb-4">
              Lithium-ion batteries are the bridge between the present and a
              fully electric future.
            </p>
            We aim to replace an old NiMH Honda Insight battery with a newer
            Lithium Ion battery.
          </div>
        </div>
      </Section>
    </>
  );
}
