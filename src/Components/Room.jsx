import { RoomProvider, ClientSideSuspense } from "@liveblocks/react/suspense";
import { Loading } from "./Loading"; // Create this component or replace it with your own

export function Room({ children, roomId }) {
  return (
    <LiveblocksProvider
      publicApiKey={process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY}
    >
      <RoomProvider id={roomId}>
        <ClientSideSuspense fallback={<Loading />}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}
