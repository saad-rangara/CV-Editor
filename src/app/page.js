import Link from "next/link";
export default function () {
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
