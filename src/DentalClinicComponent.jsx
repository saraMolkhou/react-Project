import React from "react";

const DentalClinicComponent = () => {
  return (
    <div>
      <h1 style={{ color: "#DC5E3C", fontFamily: "FbKanuba-Bold", fontSize: "31px", fontWeight: 600, lineHeight: "1.6em", letterSpacing: "-0.5px" }}>
        Start enjoying your dental treatments
      </h1>
      
      <div>
        <video autoPlay loop muted style={{ height: "300px" }}>
          <source src="https://americansmile.co.il/wp-content/uploads/2019/09/Home-Sequence-1-opt.mp4" type="video/mp4" />
        </video>
      </div>

      <p
         
        style={{ color: "#283333", fontFamily: "Montserrat", fontSize: "22px", fontWeight: 400, lineHeight: "1.6em", letterSpacing: "-0.5px" }}
      >
        The Clinic provides a response to all dental needs and problems and offers a wide variety of treatments and solutions accordingly.
      </p>
    </div>
  );
};
 export default DentalClinicComponent;
