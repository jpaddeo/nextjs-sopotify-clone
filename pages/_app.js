import 'tailwindcss/tailwind.css';
import { SessionProvider } from 'next-auth/react';

function NextJsSpotifyClone({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default NextJsSpotifyClone;
