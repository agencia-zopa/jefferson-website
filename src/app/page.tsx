import { AdressesBar } from "@/components/adresses-bar/adresses-bar.component";
import { InitialSection } from "@/components/initial-section/initial-section.component";
import { PresentationSection } from "@/components/presentation-section/presentation-section.component";
import { PathologySection } from "@/components/pathology-section/pathology-section.component";

export default function Home() {
  return (
    <>
      <AdressesBar />
      <InitialSection />
      <PresentationSection />
      <PathologySection />
    </>
  );
}
