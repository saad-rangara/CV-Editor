import Link from "next/link";
export default function About() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://gdoc.io/uploads/job-winning-cv-free-google-docs-template-t.webp"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">About</h1>
          <p className="py-6">
            CV maker was born in 2024 due to demand for a CV maker that beats
            all cv makers
          </p>
          <Link href="/editor">
            <button className="btn btn-primary">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
