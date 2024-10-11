import React from "react";
import '../Css/Home.css';
import Services from "./Services";

function Home() {
  return (
    <>
      <header className="jumbotron jumbotron-fluid text-center text-white">
        <div className="container">
          <div className="headHolder">
            <h1 className="display-4">Welcome to Pristine Housing Solutions</h1>
            <p className="leadTitle">Professional HMO & Short Stay Solutions For Working Professionals.</p>
          </div>
        </div>
      </header>
      <Services />
    </>
  );
}

export default Home;
