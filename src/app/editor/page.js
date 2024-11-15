import ResumeForm from "@/components/ResumeForm";
import { db } from "@/utils/dbconnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

export const metadata = {
  title: "Create or Edit Resume - CV Editor",
  description:
    "Start creating or editing your resume with our easy-to-use CV Editor. Customize your resume to stand out.",
  keywords: [
    "create resume",
    "edit resume",
    "CV Editor",
    "resume editor",
    "resume customization",
  ],
};

export default function resumePage() {
  async function handleResume(formValues) {
    "use server";
    // console.log("Hello");
    const formData = {
      firstName: formValues.get("first_name"),
      lastName: formValues.get("last_name"),
      email: formValues.get("email"),
      position: formValues.get("position"),
      phonenumber: formValues.get("phonenumber"),
      address: formValues.get("address"),
      postcode: formValues.get("postcode"),
      city: formValues.get("city"),
      drivingLicence: formValues.get("driving_licence"),
      gender: formValues.get("gender"),
      dateOfBirth: formValues.get("date_of_birth"),
      nationality: formValues.get("nationality"),
      birthPlace: formValues.get("birth_place"),
      details: formValues.get("details"),
      jobTitle: formValues.get("jobtitle"),
      company: formValues.get("company"),
      location: formValues.get("location"),
      startDateWork: formValues.get("startdate_work"),
      endDateWork: formValues.get("enddate_work"),
      workSummary: formValues.get("work_summary"),
      skills: formValues.get("skills"),
      institute: formValues.get("institute"),
      degree: formValues.get("degree"),
      eduLocation: formValues.get("edu_location"),
      startDateEdu: formValues.get("startdate_edu"),
      endDateEdu: formValues.get("enddate_edu"),
      enuSummary: formValues.get("edu_summary"),
    };

    const { userId } = await auth();

    await db.query(`select save_details2($1::JSON,$2::TEXT)`, [
      formData,
      userId,
    ]);
    revalidatePath("/previous-cv");
    redirect("/previous-cv");
  }

  return (
    <>
      <ResumeForm handleSubmit={handleResume} />
    </>
  );
}
