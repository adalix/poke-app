const Card = () => {
  return (
    <div className=" flex flex-col items-center mb-5 w-[220px] rounded-lg shadow-xl">
      <div className="top-info w-full flex items-center justify-between text-white capitalize">
        <p className="name my-1 mx-5 font-semibold">name</p>
        <p className="type my-1 mx-5">type</p>
      </div>
      <div className="imgParent">
        <img
          src=""
          className="rounded-md bg-white w-[180px] h-[180px]"
          alt=""
        />
      </div>
      <div className="bottom-info my-5">Pokemon Info</div>
    </div>
  );
};

export default Card;
