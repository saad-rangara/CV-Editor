import ResumeForm from "@/components/ResumeForm";
import { db } from "@/utils/dbconnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

export async function generateMetadata({ params }) {
  const { id } = await params;

  const cvTitle = `Resume ${id}`;

  return {
    title: `${cvTitle} - CV Editor`,
    description: `View and edit the details of your resume (ID: ${id}). Make changes to improve and update your professional CV.`,
    keywords: ["resume", "CV editor", `resume ${id}`, "edit CV", "CV history"],
  };
}

export default async function EditResumePage({ params }) {
  const personDetails = (
    await db.query(
      `SELECT pd.first_name,
                                                pd.last_name,
                                                pd.email,
                                                pd.position,
                                                ad.phonenumber,
                                                ad.address,
                                                ad.postcode,
                                                ad.city,
                                                ad.driving_licence,
                                                ad.gender,
                                                ad.date_of_birth,
                                                ad.nationality,
                                                ad.birth_place,
                                                pp.detail AS details,
                                                we.job_title,
                                                we.company,
                                                we.location,
                                                we.startdate_work,
                                                we.end_date AS enddate_work,
                                                we.summary AS worksummary,
                                                ss.skill AS skills,
                                                en.institution,
                                                en.degree,
                                                en.location AS edu_location,
                                                en.stratdate_edu,
                                                en.enddate_edu,
                                                en.edu_summary
                                            FROM personaldetails pd
                                            JOIN additionaldetail ad on pd.id = ad.person_id
                                            JOIN personal_profile pp on pd.id = pp.person_id
                                            JOIN work_expirience we on pd.id = we.person_id
                                            JOIN skills ss on pd.id = ss.person_id
                                            JOIN education en on pd.id = en.person_id
                                            WHERE pd.id = $1`,
      [params.id]
    )
  ).rows[0];

  const dbFormData = {
    first_name: personDetails.first_name,
    last_name: personDetails.last_name,
    email: personDetails.email,
    position: personDetails.position,
    phonenumber: personDetails.phonenumber,
    address: personDetails.address,
    postcode: personDetails.postcode,
    city: personDetails.city,
    driving_licence: personDetails.driving_licence,
    gender: personDetails.gender,
    date_of_birth: personDetails.date_of_birth.toISOString().split("T")[0],
    nationality: personDetails.nationality,
    birth_place: personDetails.birth_place,
    details: personDetails.details,
    jobtitle: personDetails.job_title,
    company: personDetails.company,
    location: personDetails.location,
    startdate_work: personDetails.startdate_work.toISOString().split("T")[0],
    enddate_work: personDetails.enddate_work.toISOString().split("T")[0],
    work_summary: personDetails.worksummary,
    skills: personDetails.skills,
    institute: personDetails.institution,
    degree: personDetails.degree,
    edu_location: personDetails.edu_location,
    startdate_edu: personDetails.stratdate_edu.toISOString().split("T")[0],
    enddate_edu: personDetails.enddate_edu.toISOString().split("T")[0],
    edu_summary: personDetails.edu_summary,
  };

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
      worksummary: formValues.get("work_summary"),
      skills: formValues.get("skills"),
      institute: formValues.get("institute"),
      degree: formValues.get("degree"),
      eduLocation: formValues.get("edu_location"),
      startDateEdu: formValues.get("startdate_edu"),
      endDateEdu: formValues.get("enddate_edu"),
      enuSummary: formValues.get("edu_summary"),
    };

    await db.query(`select update_details($1::JSON,$2::INT)`, [
      formData,
      params.id,
    ]);
    revalidatePath("/previous-cv");
    redirect("/previous-cv");
  }

  return (
    <>
      <ResumeForm handleSubmit={handleResume} dbData={dbFormData} />
    </>
  );
}
