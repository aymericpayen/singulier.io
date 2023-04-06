import cn from "classnames";
import { useState } from "react";

function Section({ title, color, className = "", i }) {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div
      className={cn(
        "h-[80vh] text-black space-y-4 px-4 cursor-pointer",
        color,
        className,
        { "w-5/6": selected === i, "w-1/2": selected !== i }
      )}
    >
      <div
        className={cn("flex justify-between items-center text-3xl font-bold")}
        onClick={() => toggle(i)}
      >
        <h1>{title}</h1>
        <span>{selected === i ? "-" : "+"}</span>
      </div>
      <p
        className={cn({
          "block duration-500 ease-in": selected === i,
          "hidden duration-100": selected !== i,
        })}
      >
        Anim occaecat culpa ut nostrud do aliquip. Esse officia id consectetur
        aute velit et veniam officia commodo. Non minim qui consectetur esse ea.
        Velit velit esse quis veniam eu sunt. Cillum ex aliqua ipsum mollit
        Lorem. Quis dolore eiusmod eu cillum. Sit incididunt dolor esse esse
        commodo sit occaecat esse. Ea commodo voluptate nostrud pariatur dolor
        in. Lorem consequat in deserunt sit tempor sit occaecat duis cupidatat.
        In labore esse elit ullamco non dolore. Fugiat aute nulla sunt cillum
        duis dolor ut aliquip. Magna eu non occaecat reprehenderit cupidatat
        occaecat esse esse pariatur. Culpa mollit veniam labore exercitation
        reprehenderit in aute ut duis sunt excepteur. Ea ea laboris aliqua
        officia consequat deserunt deserunt velit reprehenderit. Sint nostrud
        consequat reprehenderit consectetur. Deserunt quis ex fugiat quis ex qui
        exercitation officia dolore magna elit quis magna. Consectetur eu esse
        irure labore. Laboris aliqua officia anim officia nulla ad do magna
        voluptate dolor. Velit Lorem aute ea ut quis eiusmod cillum nulla enim
        ullamco. Fugiat ullamco velit pariatur sint aliquip.
      </p>
    </div>
  );
}

export default Section;
