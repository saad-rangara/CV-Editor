// export default function hometwo() {
//   return (
//     <>
//       <div classname="bg-base-100 min-h-screen">
//         <h1 className="mb-5 text-5xl font-bold text-center bg-base-100">
//           Previous CV's
//         </h1>
//         <div className="hero min-h-screen">
//           <div className="hero-overlay bg-opacity-60"></div>
//           <div className="hero-content text-neutral-content text-center">
//             <div className="max-w-md">
//               <div className="stack">
//                 <div className="border-base-content card bg-base-100 w-36 border text-center">
//                   <div className="card-body">+</div>
//                 </div>
//                 <div className="border-base-content card bg-base-100 w-36 border text-center">
//                   <div className="card-body">B</div>
//                 </div>
//                 <div className="border-base-content card bg-base-100 w-36 border text-center">
//                   <div className="card-body">C</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="join">
//         <button className="join-item btn">1</button>
//         <button className="join-item btn btn-active">2</button>
//         <button className="join-item btn">3</button>
//         <button className="join-item btn">4</button>
//       </div>
//     </>
//   );
// }

import Link from "next/link";
import { db } from "@/utils/dbconnection";

export default async function HomeTwo() {
  // Fetch all CVs from the database
  const result = await db.query(
    "SELECT id, first_name, last_name, position FROM personaldetails ORDER BY id"
  );
  const cvList = result.rows;

  return (
    <>
      <h1 className="text-center mt-5 text-5xl font-bold">Previous CV's</h1>

      <div className="hero min-h-screen bg-base-100">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <div className="flex flex-wrap gap-4 justify-center">
              {" "}
              {/* Updated to flex layout */}
              {cvList.map((cv) => (
                <Link
                  key={cv.id}
                  href={`/hometwo/${cv.id}`}
                  className="border-base-content card bg-base-100 w-36 border text-center"
                >
                  <div className="card-body">
                    <p className="text-lg font-bold">
                      {cv.first_name} {cv.last_name}
                    </p>
                    <p className="text-sm">{cv.position}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
