import ResumeForm from "@/Components/ResumeForm";
// import Tiptap from "@/components/Tiptap";

export default function resumePage() {
  async function handleResume(event) {
    "use server";
    event.prventDefault();
    console.log("Form submitted", state);
    ("use server");
  }
  return (
    <>
      <ResumeForm handleSubmit={handleResume} />
    </>
  );
}
