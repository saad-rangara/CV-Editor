import Link from "next/link";
import { db } from "@/utils/dbconnection";
import { auth } from "@clerk/nextjs/server";
import DeleteButton from "@/components/DeleteButton";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function HomeTwo() {
  const { userId } = await auth();

  // Fetch all CVs from the database
  const result = await db.query(
    `SELECT id, first_name, last_name, position FROM personaldetails where clerk_user_id = $1`,
    [userId]
  );
  const cvList = result.rows;

  async function handleDelete(cvId){
    "use server"
    await db.query(`select delete_details($1::INT)`, [cvId]);
    revalidatePath("/previous-cv");
    redirect("/previous-cv");
  }

  return (
    <>
      <h1 className="text-center mt-5 text-5xl font-bold">
        Previous CV&apos;s
      </h1>

      <div className="hero min-h-screen bg-base-100">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <div className="flex flex-wrap gap-4 justify-center">
              {" "}
              {/* Updated to flex layout */}
              {cvList.map((cv) => (
                <div>
                  <Link
                    key={cv.id}
                    href={`/previous-cv/${cv.id}`}
                    className="border-base-content card bg-base-100 w-36 border text-center"
                  >
                    <div className="card-body" key={cv.id+"div"}>
                      <p className="text-lg font-bold" key={cv.id+"p1"}>
                        {cv.first_name} {cv.last_name}
                      </p>
                      <p className="text-sm" key={cv.id+"p2"}>{cv.position}</p>
                    </div>
                  </Link>
                  <DeleteButton key={cv.id+"delComp"} handleDeleteComp={handleDelete} cvId={cv.id}/>
                  
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
