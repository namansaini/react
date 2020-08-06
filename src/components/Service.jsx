import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

function Service() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center mb-5">Our Services</h1>
        <div className="container-fluid">
          <div className="row mb-5">
            <div className="col-10 mx-auto">
              <div className="row gy-5">
                  {Sdata.map((elem,index) => <Card key={index} imgsrc={elem.imgsrc} title={elem.title} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
