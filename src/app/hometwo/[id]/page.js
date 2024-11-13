// // // /app/posts/[id]/page.jsx
// // export default function ResumePage({ params }) {
// //   console.log(params); // Output: { id: 1 }
// //   return <h1>Resume Page {params.id}</h1>; // Output: Post Page 1
// // }

// // ice cream one - saad
// import { db } from "@/utils/dbconnection";
// export default async function IdPost({ params, searchParams }) {
//   const { id } = params;
//   let post;

//   const result = await db.query("SELECT * FROM personaldetails WHERE id = $1", [
//     id,
//   ]);
//   post = result.rows[0];

//   if (!post) {
//     return <p>CV not found.</p>;
//   }

//   return (
//     <div>
//       {/* <main className="max-w-3xl bg-custom-white rounded-custom shadow-custom p-6">
//         <p className="text-gray-700">{post.content}</p>{" "}
//         <section className="mt-8 bg-gray-50 p-4 rounded-custom shadow-custom">
//           <h2 className="text-2xl text-custom-pink font-bold mb-4">Comments</h2>
//           {commentsArray.length > 0 ? (
//             <ul className="space-y-4">
//               {commentsArray.map((comment, index) => (
//                 <li
//                   key={index}
//                   className="bg-white p-4 rounded-custom shadow-custom"
//                 >
//                   <p>
//                     <strong>{users[comment.user_id] || "Unknown User"}</strong>:{" "}
//                     {comment.content}
//                   </p>{" "}
//                   <form action={`/hometwo/${id}`} method="get">
//                     <input type="hidden" name="action" value="delete-comment" />
//                     <input type="hidden" name="commentIndex" value={index} />
//                     <button type="submit" className="text-red-500 text-sm mt-2">
//                       Delete
//                     </button>
//                   </form>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p className="text-gray-500">No comments yet.</p>
//           )}

//           <form
//             action={`/posts/${id}`}
//             method="get"
//             className="mt-4 bg-gray-50 p-4 rounded-custom shadow-custom"
//           >
//             <textarea
//               className="w-full p-2 text-gray-600 border border-pink-300 rounded-custom mb-2"
//               name="comment"
//               placeholder="Add your comment"
//             />
//             <input
//               type="email"
//               className="w-full p-2 text-gray-600 border border-pink-300 rounded-custom mb-2"
//               name="email"
//               placeholder="Your email"
//               required
//             />
//             <input type="hidden" name="action" value="add-comment" />
//             <button
//               type="submit"
//               className="bg-custom-pink text-white px-4 py-2 rounded-custom"
//             >
//               Add Comment
//             </button>
//           </form>
//         </section>
//       </main>

//       <footer className="mt-8 text-center">
//         <Link href="/posts" className="text-custom-pink font-bold">
//           Back to Posts
//         </Link>{" "}
//       </footer>
//       <h1>hello</h1> */}
//     </div>
//   );
// }

import { db } from "@/utils/dbconnection";
export default async function IdPost({ params }) {
  const { id } = params;

  // Fetch the main person details
  const personDetails = await db.query(
    `SELECT * FROM personaldetails WHERE id = $1`,
    [id]
  );
  const post = personDetails.rows[0];

  if (!post) {
    return <p>CV not found.</p>;
  }

  // Fetch data from related tables
  const additionalDetails = await db.query(
    `SELECT * FROM additionaldetail WHERE person_id = $1`,
    [id]
  );
  const personalProfile = await db.query(
    `SELECT * FROM personal_profile WHERE person_id = $1`,
    [id]
  );
  const workExperience = await db.query(
    `SELECT * FROM work_expirience WHERE person_id = $1`,
    [id]
  );
  const skills = await db.query(`SELECT * FROM skills WHERE person_id = $1`, [
    id,
  ]);
  const education = await db.query(
    `SELECT * FROM education WHERE person_id = $1`,
    [id]
  );

  return (
    <div>
      <h1>
        {post.first_name} {post.last_name}
      </h1>
      <p>{post.position}</p>
      <p>Email: {post.email}</p>

      <h2>Additional Details</h2>
      {additionalDetails.rows.length > 0 && (
        <div>
          <p>Phone: {additionalDetails.rows[0].phonenumber}</p>
          <p>Address: {additionalDetails.rows[0].address}</p>
          <p>City: {additionalDetails.rows[0].city}</p>
          {/* Other fields as needed */}
        </div>
      )}

      <h2>Personal Profile</h2>
      {personalProfile.rows.length > 0 && (
        <p>{personalProfile.rows[0].detail}</p>
      )}

      <h2>Work Experience</h2>
      {workExperience.rows.length > 0 ? (
        workExperience.rows.map((job) => (
          <div key={job.work_id}>
            <h3>
              {job.job_title} at {job.company}
            </h3>
            <p>
              {job.start_date} - {job.end_date}
            </p>
            <p>{job.summary}</p>
          </div>
        ))
      ) : (
        <p>No work experience listed.</p>
      )}

      <h2>Skills</h2>
      {skills.rows.length > 0 ? (
        skills.rows.map((skill) => (
          <p key={skill.skill_id}>
            {skill.skill} - {skill.level}
          </p>
        ))
      ) : (
        <p>No skills listed.</p>
      )}

      <h2>Education</h2>
      {education.rows.length > 0 ? (
        education.rows.map((edu) => (
          <div key={edu.edu_id}>
            <h3>
              {edu.degree} at {edu.institution}
            </h3>
            <p>
              {edu.start_date} - {edu.end_date}
            </p>
            <p>{edu.summary}</p>
          </div>
        ))
      ) : (
        <p>No education listed.</p>
      )}
    </div>
  );
}
