// "use client";

// import { useThreads } from "@liveblocks/react/suspense";
// import { Composer, Thread } from "@liveblocks/react-ui";

// export function CollaborativeApp() {
//   const { threads } = useThreads();

//   return (
//     <div>
//       {threads.map((thread) => (
//         <Thread key={thread.id} thread={thread} />
//       ))}
//       <Composer />
//     </div>
//   );
// }

import { useThreads } from "@liveblocks/react/suspense";
import { Composer, Thread } from "@liveblocks/react-ui";

export function CollaborativeApp() {
  // Fetch threads using the Liveblocks hook
  const { threads } = useThreads(); // Assuming useThreads is correctly set up to fetch threads

  // Handle the case where threads might not be loaded yet
  if (!threads) {
    return <div>Loading threads...</div>;
  }

  return (
    <div>
      {/* Map over threads and display each one */}
      {threads.map((thread) => (
        <Thread key={thread.id} thread={thread} className="thread" />
      ))}

      {/* Composer for creating new threads */}
      <Composer className="composer" />
    </div>
  );
}
