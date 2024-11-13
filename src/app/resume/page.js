import ResumeForm from "@/components/ResumeForm";
import { db } from "@/utils/dbconnection";

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
    

    // console.log(formData);
    // await db.query(`INSERT INTO personaldetails(first_name,last_name,email,position)
    //     VALUES ($1,$2,$3,$4)`,
    // [formData.firstName,formData.lastName,formData.email,formData.position]
    // );

    await db.query(`select save_details1($1::JSON)`, [formData]);
  }

  return (
    <>
      <ResumeForm handleSubmit={handleResume} />
    </>
  );
}
