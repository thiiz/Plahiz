import type { V2_MetaFunction } from "@remix-run/node";
import { Hero } from "~/components/hero";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Plahiz" },
    { name: "description", content: "Welcome to Remix!" },

  ];
};

export default function Index() {
  return (
    <Hero />
  );
}
