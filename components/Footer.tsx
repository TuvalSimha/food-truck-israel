import React from "react";
import SocialIcon from "./Soical-icon";

const ICON = [
  {
    name: "facebook",
    link: "https://www.facebook.com/foodtruckisrael",
  },
  {
    name: "instagram",
    link: "https://www.instagram.com/foodtruckisrael",
  },
  {
    name: "twitter",
    link: "https://twitter.com/foodtruckisrael",
  },
];

export default function Footer() {
  return (
    <div className=" bottom-0 absolute w-full">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          {ICON.map((icon) => (
            <SocialIcon key={icon.name} name={icon.name} link={icon.link} />
          ))}
        </span>
      </div>
    </div>
  );
}
