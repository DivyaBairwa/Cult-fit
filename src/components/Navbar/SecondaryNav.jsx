import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export const SecondaryNav = ({ change, scrollPosition }) => {
  const { pathname } = useLocation();
  const [subNav, setSubNav] = useState([]);

  const CULT = [
    { name: "Cult Center", path: "/gym" },
    { name: "Gyms", path: "/cult-pass" },
    { name: "Online PT", path: "/online-personal-training" },
    { name: "cultsport", path: "/gear" },
    { name: "Luxury Gyms", path: "/othergyms" },
  ];
  const LIVE = [{ name: "Fitness", path: "/fitness" }];
  const CARE = [{ name: "Online Consult", path: "/doctor-consultation" }];
  const EAT = [{ name: "Order", path: "/eatordernow" }];
  const MIND = [{ name: "Therapy", path: "/therapy" }];
  const STORE = [{ name: "cultsport", path: "/gear" }];
  useEffect(() => {
    changeCats();
  }, [change]);

   const getPathMatch=(routes)=>{
    let find = false
   routes.forEach((route)=>{
  if(pathname.startsWith(route.path)){
    find = true
  }
   })
   return find
  }


  if (pathname === "/") {
    return null;
  }
 

  function changeCats() {
    setSubNav(
     getPathMatch(CULT)
        ? CULT
        :  getPathMatch(LIVE)
        ? LIVE
        :  getPathMatch(CARE)
        ? CARE
        :  getPathMatch(EAT)
        ? EAT
        :  getPathMatch(MIND)
        ? MIND
        :  getPathMatch(STORE)
        ? STORE
        : []
    );
  }
  const button = {
    cursor: "pointer",
    marginRight: " 20px",
  };
  const activeButton = {
    background: "#1D1D21",
    marginRight: " 20px",
  };

  return (
    <div
      style={{
        background: "#393A3B",
        position: scrollPosition > 35 ? "fixed" : "static",
        transition: "all 2s ease",
        zIndex: "999",
      }}
      className="w-full flex justify-center  top-0"
    >
      <div className="justify-between flex mr-20">
        {subNav.map((N, i) => {
          return (
            <Link key={i + 1} to={N.path}>
              <button
                style={pathname === N.path ? activeButton : button}
                className=" px-6 py-4  my-3 rounded-xl main-font text-gray-300 text-2xl space-x-11 "
              >
                {N.name}
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
