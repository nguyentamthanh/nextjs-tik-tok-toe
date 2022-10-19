const Box = () => {
  const check = true;

  return (
    <div className="bg-white border rounded-sm shadow-sm w-28 h-28 text-center font-semibold leading-normal">
      {check ? <div>true</div> : <div>false</div>}
    </div>
  );
};

export default Box;
