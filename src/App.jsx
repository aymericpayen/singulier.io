import cn from "classnames";
import { useState } from "react";
import "./App.css";
import YoutubeEmbedded from "./components/YoutubeEmbdedComponent";
import { motion } from "framer-motion";
import ContactSection from "./components/ContactSectionComponent";

function App() {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div className="snap-y snap-mandatory overflow-scroll">
      <div
        className="snap-start flex flex-1 h-[80vh] border-t-4 border-black"
        id="history"
      >
        {data.map((item, i) => (
          <motion.div
            transition={{ layout: { duration: 0.3 } }}
            layout
            className={cn("cursor-pointer space-y-4 px-4", item.color, {
              "w-5/6": selected === i,
              "w-1/2": selected !== i,
              "w-4/12": selected === null,
              "border-l-4 border-r-4 border-black": item.innerBorder === true,
            })}
            onClick={() => toggle(i)}
          >
            <motion.div className="flex justify-between items-center text-3xl text-black [font-family: 'Familjen Grotesk', sans-serif; font-weight:700;]">
              <motion.h1 layout="position">{item.title}</motion.h1>
              <motion.span layout="position">
                {selected === i ? "-" : "+"}
              </motion.span>
            </motion.div>

            <motion.div
              className={cn("space-y-4 px-4", {
                block: selected === i,
                hidden: selected !== i,
              })}
            >
              <motion.p
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="[font-family: 'Familjen Grotesk', sans-serif;] text-base"
              >
                {item.content}
              </motion.p>
              <YoutubeEmbedded embedId="rokGy0huYEA" />
            </motion.div>
            <motion.div
              className="box"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            />
          </motion.div>
        ))}
      </div>
      <ContactSection
        title="Entreprise"
        subtitle="Notre rôle est de mettre en avant les singularités de votre entreprise pour créer des collaborations d’avenir."
        content="Partenaire de votre croissance, nous personnalisons vos recrutements avec une approche sur-mesure."
        signature={true}
        className="snap-start"
      />
    </div>
  );
}

const data = [
  {
    title: "Recruter",
    content:
      "Est in laborum in excepteur proident aute aliquip dolore commodo ex culpa commodo.",
    color: "bg-third-color-light-blue",
  },
  {
    title: "Se faire recruter",
    content:
      "Est in laborum in excepteur proident aute aliquip dolore commodo ex culpa commodo.",
    color: "bg-second-color-orange",
    innerBorder: true,
  },
  {
    title: "Notre histoire",
    content:
      "Est in laborum in excepteur proident aute aliquip dolore commodo ex culpa commodo.",
    color: "bg-sixt-color-green",
    youtube: true,
  },
];
export default App;

{
  /* <div className="App">
  <motion.h1
    animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
    transition={{
      duration: 5,
      delay: 0.3,
      ease: [0.5, 0.71, 1, 1.5],
    }}
    initial={{ opacity: 0, scale: 0.5 }}
    whileHover={{ scale: 1.2 }}
  >
    Animation made easy with Framer Motion
  </motion.h1>
</div>; */
}
