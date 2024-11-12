export default function hometwo() {
  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Previous CV's</h1>
            <div className="stack">
              <div className="border-base-content card bg-base-100 w-36 border text-center">
                <div className="card-body">+</div>
              </div>
              <div className="border-base-content card bg-base-100 w-36 border text-center">
                <div className="card-body">B</div>
              </div>
              <div className="border-base-content card bg-base-100 w-36 border text-center">
                <div className="card-body">C</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="join">
        <button className="join-item btn">1</button>
        <button className="join-item btn btn-active">2</button>
        <button className="join-item btn">3</button>
        <button className="join-item btn">4</button>
      </div>
    </>
  );
}
