import ResumeForm from "@/Components/ResumeForm";

export default function resumePage(){
    async function handleResume() {
        "use server";
      }
    return(
        <>
        
        <ResumeForm  handleSubmit={handleResume}/>
        </>
    )
}