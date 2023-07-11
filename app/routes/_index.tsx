import type { V2_MetaFunction } from "@remix-run/node";
import { Content } from "~/components/content";
import { Hero } from "~/components/hero";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "ZihtFlix" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {

  return (
    <>
      <Hero />
      <Content/>
    </>
  );
}