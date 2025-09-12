import React from "react";
export const metadata = {
  title: "Project | PortFolio",
  description: "Project Page",
};
function project() {
  return (
    <div className="dark:bg-[#323232] mx-auto max-w-7xl dark:text-white bg-white text-black pt-30 px-3">
      <div
        className="container mx-auto mt-5
      "
      >
        {" "}
        <div className="lg:text-9xl md:text-8xl text-6xl uppercase font-bold">
          projects
        </div>
      </div>
    </div>
  );
}

export default project;
