import type { LinksFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import stylesheet from "./styles/globals.css";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { Header } from "./components/header";

declare global {
  interface Window {
    ENV: {
      TMDB_JWT_AUTHORIZATION_TOKEN: string;
    };
  }
}

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export async function loader() {
  return json({
    ENV: {
      TMDB_JWT_AUTHORIZATION_TOKEN: process.env.TMDB_JWT_AUTHORIZATION_TOKEN,
      TMDB_IMG: process.env.TMDB_IMG,
    },
  });
}

export default function App() {
  const data = useLoaderData<typeof loader>();
  return (
    <html lang="pt-br">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-grey-900 text-grey-50">
        <main className="container mx-auto">
          <Header />
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </main>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(
              data.ENV
            )}`,
          }}
        />
      </body>
    </html>
  );
}
