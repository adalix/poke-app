import Logo from "./components/Logo";

const App = () => {
  return (
    <div className="bg-[#5CB9FF] h-screen">
      <Logo />
      <div className="w-[1350px] my-0 mx-auto flex items-center justify-between flex-wrap gap-4">
        <div className=" flex flex-col items-center mb-5 w-[220px] rounded-lg shadow-xl">
          <div className="top-info w-full flex items-center justify-between text-white capitalize">
            <p className="name my-1 mx-5 font-semibold">name</p>
            <p className="type my-1 mx-5">type</p>
          </div>
          <div className="imgParent">
              <img src="" className="rounded-md bg-white w-[180px] h-[180px]" alt="" />
          </div>
          <div className="bottom-info my-5">
            Pokemon Info
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
