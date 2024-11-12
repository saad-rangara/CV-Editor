import { LiveblocksProvider } from "@liveblocks/react";
// import "../styles/globals.css"; // Adjust path to your CSS

function MyApp({ Component, pageProps }) {
  return (
    <LiveblocksProvider
      publicApiKey={process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY}
    >
      <Component {...pageProps} />
    </LiveblocksProvider>
  );
}

export default MyApp;
