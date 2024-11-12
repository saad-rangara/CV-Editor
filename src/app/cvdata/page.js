// export default function CVData() {
//   async function handleSubmit() {
//     "use server";
//   }
//   return (
//     <div>
//       <form action={handleSubmit}>
//         <h2>Personal Details</h2>
//         <label htmlFor="firstname">First Name:</label>
//         <input type="text" name="firstname" id="firstname" />
//         <label htmlFor="lastname">Last Name:</label>
//         <input type="text" name="lastname" id="lastname" />
//         <label htmlFor="image">Image:</label>
//         <input type="text" name="image" id="image" />
//         <label htmlFor="email">E-Mail:</label>
//         <input type="email" name="email" id="email" />
//         <label htmlFor="position">Position :</label>
//         <input type="text" name="position" id="position" />
//         <h2>Personal Profile</h2>
//         <label htmlFor="details"></label>
//         <textarea type="text" name="details" id="details" />
//         <h2>Work experience</h2>
//         <label htmlFor="jobtitle">Job title</label>
//         <input type="text" name="jobtitle" id="jobtitle" />
//         <label htmlFor="company">Company</label>
//         <input type="text" name="company" id="company" />
//         <label htmlFor="location">Location</label>
//         <input type="text" name="location" id="location" />
//         <label htmlFor="startdate">Start date</label>
//         <input type="month" name="startdate" id="startdate" />
//         <label htmlFor="enddate">end date</label>
//         <input type="month" name="enddate" id="enddate" />
//         <label htmlFor="summary"></label>
//         <textarea type="text" name="summary" id="summary" />
//         <h2>Skills</h2>
//         <label htmlFor="skills"></label>
//         <input type="text" name="skills" id="skills" />
//         <h2>Education</h2>
//         <label htmlFor="institute">Instituation</label>
//         <input type="text" name="institute" id="institute" />
//         <label htmlFor="degree">Degree</label>
//         <input type="text" name="degree" id="degree" />
//         <label htmlFor="location">Location</label>
//         <input type="text" name="location" id="location" />
//         <label htmlFor="startdate">Start date</label>
//         <input type="date" name="startdate" id="startdate" />
//         <label htmlFor="enddate">end date</label>
//         <input type="date" name="enddate" id="enddate" />
//         <label htmlFor="summary"></label>
//         <textarea type="text" name="summary" id="summary" />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }
"use client";
export default function CVData() {
  // Handle form submission
  async function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(event.target);

    // You can process the form data here, e.g., sending it to a server
    const formValues = Object.fromEntries(formData.entries());

    console.log(formValues); // For debugging, see the form data in console

    // You might want to handle the form submission, e.g., make an API request
    // Example: await fetch('/api/submit', { method: 'POST', body: JSON.stringify(formValues) });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Personal Details</h2>
        <label htmlFor="firstname">First Name:</label>
        <input type="text" name="firstname" id="firstname" required />

        <label htmlFor="lastname">Last Name:</label>
        <input type="text" name="lastname" id="lastname" required />

        <label htmlFor="image">Image:</label>
        <input type="text" name="image" id="image" />

        <label htmlFor="email">E-Mail:</label>
        <input type="email" name="email" id="email" required />

        <label htmlFor="position">Position:</label>
        <input type="text" name="position" id="position" required />

        <h2>Personal Profile</h2>
        <label htmlFor="details">Personal Profile:</label>
        <textarea name="details" id="details" required></textarea>

        <h2>Work Experience</h2>
        <label htmlFor="jobtitle">Job Title:</label>
        <input type="text" name="jobtitle" id="jobtitle" required />

        <label htmlFor="company">Company:</label>
        <input type="text" name="company" id="company" required />

        <label htmlFor="location">Location:</label>
        <input type="text" name="location" id="location" required />

        <label htmlFor="startdate-work">Start Date:</label>
        <input type="date" name="startdate-work" id="startdate-work" required />

        <label htmlFor="enddate-work">End Date:</label>
        <input type="date" name="enddate-work" id="enddate-work" />

        <label htmlFor="work-summary">Summary:</label>
        <textarea name="work-summary" id="work-summary"></textarea>

        <h2>Skills</h2>
        <label htmlFor="skills">Skills:</label>
        <input type="text" name="skills" id="skills" required />

        <h2>Education</h2>
        <label htmlFor="institute">Institution:</label>
        <input type="text" name="institute" id="institute" required />

        <label htmlFor="degree">Degree:</label>
        <input type="text" name="degree" id="degree" required />

        <label htmlFor="edu-location">Location:</label>
        <input type="text" name="edu-location" id="edu-location" required />

        <label htmlFor="startdate-edu">Start Date:</label>
        <input type="date" name="startdate-edu" id="startdate-edu" required />

        <label htmlFor="enddate-edu">End Date:</label>
        <input type="date" name="enddate-edu" id="enddate-edu" />

        <label htmlFor="edu-summary">Summary:</label>
        <textarea name="edu-summary" id="edu-summary"></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
