import PersonalDetails from "./PersonalDetails";
import EducationalBackground from "./EducationalBackground";
import Experience from "./Experience";
export default function Sidebar() {
  return (
    <>
      <aside className="text-center bg-red-300 col-span-1">
        <h1>CV Generator</h1>
        <PersonalDetails />
        <EducationalBackground />
        <Experience />
      </aside>
    </>
  );
}
