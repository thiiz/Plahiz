import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "About" },
  ]
}

const About = () => {
  return (
    <div className="flex justify-center items-center">
      Sobre
    </div>
  )
}

export default About