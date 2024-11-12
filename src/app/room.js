"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";

export function Room({ children }) {
  return (
    <LiveblocksProvider
      publicApiKey={
        "pk_dev_ASHR7t5oTZiKV6dHSleuJxwJmjsvXlhYSXdATfxY3qeOTHN0JzpPxsYhpuNn3XDi"
      }
    >
      <RoomProvider id="my-room">
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}
