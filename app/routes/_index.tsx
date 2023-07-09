import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Plahiz" },
    { name: "description", content: "Welcome to Remix!" },

  ];
};

export default function Index() {
  return (
    <div className="flex justify-center items-center">
      Home
    </div>
  );
}
