import cn from "classnames";
import ContactForm from "./ContactFormComponent";
import signatureOrange from "../img/signature_orange.svg";

function ContactSection({
  title,
  subtitle,
  content,
  signature,
  classname,
  id,
  buttonColor,
}) {
  return (
    <div
      className={cn(
        "h-[91vh] scroll-mt-16 flex flex-row items-center justify-between space-y-4 px-4 z-0",
        classname
      )}
      id={id}
    >
      <div className="w-4/6 space-y-4 m-4">
        <h1 className="text-6xl text-white text-bold">{title}</h1>
        <h2 className="text-2xl">{subtitle}</h2>
        <p className="text-lg">{content}</p>
        <div className="flex justify-end">
          <img src={signatureOrange} alt="logo" className="w-64 h-12"></img>
        </div>
      </div>
      <ContactForm buttonColor={buttonColor} />
    </div>
  );
}

export default ContactSection;
