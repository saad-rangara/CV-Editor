import Image from "next/image";
export function Loading() {
  return (
    <div className="loading">
      <Image src="https://liveblocks.io/loading.svg" alt="Loading" />
    </div>
  );
}
