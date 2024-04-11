import Card from "./components/Card";
import Logo from "./components/Logo";

const App = () => {
  return (
    <div className="bg-[#5CB9FF] h-screen">
      <Logo />
      <div className="w-[1350px] my-0 mx-auto flex items-center justify-between flex-wrap gap-4">
        <Card/>
      </div>
    </div>
  );
};

export default App;
