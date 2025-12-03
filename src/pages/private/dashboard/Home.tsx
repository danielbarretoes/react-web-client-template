import Section from "@/components/layout/section/section";
import SectionBody from "@/components/layout/section/section-body";
import SectionToolbar from "@/components/layout/section/section-toolbar";

function Home() {
  return (
    <div className="flex w-full h-full gap-2">
      {/* Left Section */}
      <Section className="flex-1">
        <SectionToolbar>
          <h1 className="m-0 text-sm font-semibold">Home Toolbar</h1>
        </SectionToolbar>
        <SectionBody className="p-4">
          <h2>Home Body</h2>
        </SectionBody>
      </Section>
    </div>
  );
}

export default Home;
