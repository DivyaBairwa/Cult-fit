import { useState, useEffect } from "react";

export const Timer = ({ timeData }) => {
  const [time, setTime] = useState({
    hour: 0,
    minute: 0,
    second: 0,
  });

  const style = {
    width: "1200px",
  };

  useEffect(() => {
    let id = setInterval(() => {
      let date = new Date().toTimeString().split(" ")[0].split(":");
      setTime({
        hour: 24 - date[0],
        minute: 59 - date[1],
        second: 59 - date[2],
      });
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);
  return (
    <div className="mt-20 mx-auto" style={style}>
      <img src={timeData.img} width="100%" alt="" />
      <div
        style={{ height: "80px" }}
        className="w-full flex justify-center items-center relative "
      >
        <div className="flex w-1/6 justify-between ">
          <h1 className="flex flex-col text-3xl">
            {time.hour} <span className="text-gray-500">Hr</span>
          </h1>
          <p className="font-bold text-3xl text-gray-500">:</p>
          <h1 className="flex flex-col text-3xl">
            {time.minute} <span className="text-gray-500">Min</span>
          </h1>
          <p className="font-bold text-3xl text-gray-500">:</p>
          <h1 className="flex flex-col text-3xl">
            {time.second} <span className="text-gray-500">Sec</span>
          </h1>
        </div>
        <img
          src={timeData.arrow}
          style={{
            transform: "rotate(180deg) translateY(50%)",
            position: "absolute",
            top: "50%",
            right: "1%",
          }}
          alt=""
        />
      </div>
    </div>
  );
};
