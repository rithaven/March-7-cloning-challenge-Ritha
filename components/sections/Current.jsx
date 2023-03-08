import React from "react";
import Card from "../UI/Card";

const Current = () => {
  return (
    <div className=" p-32">
      <div className="">
        <h3 className="text-4xl font-bold mb-10">Current</h3>
        <div className="grid grid-cols-3 gap-4">
          <Card
            image="https://www.uva.nl/binaries/_ht_1621425617139/cardsmall/content/gallery/faculteiten-en-diensten/restyling18-generiek-beeld/trap-stairs-roeterseiland.jpg"
            title="Study in Amsterdam Week 20 - 24 February"
            description="
          Discover everything an international student needs to know about studying at the UvA."
          />
          <Card
            image="/masters.png"
            title="The UvA and the smart city"
            description="
          Discover everything an international student needs to know about studying at the UvA."
          />
          <Card
            image="https://www.uva.nl/binaries/_ht_1674029674329/680x190-webp/content/gallery/evenementen/2023/voorlichting/bachelorweek-vj-2023.jpg"
            title="Bachelor's Week 17 - 25 March"
            description="
            Discover your Bachelor's at the UvA."
          />
        </div>
      </div>
    </div>
  );
};

export default Current;
