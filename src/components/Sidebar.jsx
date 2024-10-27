import PersonalDetails from "./PersonalDetails";
import EducationalBackground from "./EducationalBackground";
import Experience from "./Experience";
export default function Sidebar() {
  return (
    <>
      <aside className="text-center p-4 bg-red-300 col-span-1">
        <div className="">CV Generator</div>
        <PersonalDetails />
        <EducationalBackground />
        <Experience />
      </aside>
    </>
  );
}
