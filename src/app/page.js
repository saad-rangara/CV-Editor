import Link from "next/link";

export const metadata = {
  title: "CV Editor - Create Your Professional Resume",
  description:
    "Easily create, edit, and manage your professional resume with CV Editor. Start building your future today.",
  keywords: [
    "CV editor",
    "resume builder",
    "create CV",
    "edit resume",
    "CV Editor home",
  ],
};

export default function HomePage() {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome to CV Maker!</h1>
            <p className="mb-5">get started on making your very first CV</p>
            <Link href="/editor">
              <button className="btn">Create CV</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
