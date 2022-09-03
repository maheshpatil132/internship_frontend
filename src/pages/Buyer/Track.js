import React from "react";
import Content from "../../components/Buyer/Track_shipemt/Content";
import Navbar from "../Navbar";

const Home = () => {
  return (
    <div>
      <header className="p-3 border header absolute w-full bg-white">
        Navigation will be here...
      </header>
      <div className="main flex">
        <Navbar />
        <Content />
      </div>
    </div>
  );
};

export default Home;
