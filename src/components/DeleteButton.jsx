"use client";
export default function DeleteButton({handleDeleteComp, cvId}){

    return (<>
                <button
                onClick={() => handleDeleteComp(cvId)}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-6"
                >Delete
                </button>
    </>);
}