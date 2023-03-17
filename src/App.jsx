import Section from "./components/Section";
function App() {
  const toggle = (i) => {};

  return (
    <>
      <div className="flex flex-1 h-max">
        <Section title="Recruter" color="bg-third-color-light-blue" i={1} />
        <Section
          title="Se faire recruter"
          color="bg-second-color-orange"
          className="border-r-4 border-l-4 border-black"
          i={2}
        />
        {/* <Section title="Notre histoire" color="bg-sixt-color-green" /> */}
      </div>
    </>
  );
}

export default App;
