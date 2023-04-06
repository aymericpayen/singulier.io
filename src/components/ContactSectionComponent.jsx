import cn from "classnames";
import { useState } from "react";
import ContactForm from "./ContactFormComponent";

function ContactSection({ title, subtitle, content }) {
  return (
    <div
      className="snap-start h-[80vh] flex flex-row bg-third-color-light-blue border-t-4 border-black items-center justify-between space-y-4 px-4"
      id="company"
    >
      <div className="w-4/6 space-y-4">
        <h1 className="text-6xl text-white text-bold">{title}</h1>
        <h2 className="text-2xl">{subtitle}</h2>
        <p className="text-lg">{content}</p>
      </div>
      <ContactForm className="w-2/6" />
    </div>
  );
}

export default ContactSection;
