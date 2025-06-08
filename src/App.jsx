import Sections from "./components/Sections";
import Selector from "./components/Selector";

const App = () => {
  return (
    <main className="w-full min-h-screen flex flex-col scroller overflow-auto">
      <Sections emoji="🍈" bgColor="bg-blue-200" />
      <Sections emoji="🍇" bgColor="bg-red-200" />
      <Sections emoji="🍌" bgColor="bg-neutral-200" />
      <Sections emoji="🍉" bgColor="bg-green-200" />
      <Sections emoji="🍏" bgColor="bg-violet-200" />

      <Selector />
    </main>
  );
};

export default App;
