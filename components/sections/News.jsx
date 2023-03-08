import React from "react";
import Card from "../UI/Card";
import Link from "next/link";

export const News = () => {
  return (
    <div className=" bg-[#e6e6e6] p-32">
      <div className=" ">
        <h3 className="text-4xl font-bold mb-10">News</h3>
        <div className="grid grid-cols-4 gap-4">
          <Card
            image="https://www.uva.nl/binaries/_ht_1677583600827/cardsmall/content/gallery/faculteiten-en-diensten/uva-bureau-communicatie/persvoorlichting/2023/pexels-lisa-fotios-1346155.jpg"
            title="Study in Amsterdam Week 20 - 24 February"
            description="
        Discover everything an international student needs to know about studying at the UvA."
          />
          <Card
            image="https://www.uva.nl/binaries/_ht_1677194284781/cardsmall/content/gallery/onderzoek/iop/nieuws/2023/20230219_teflon-wrijving_imgeng.png"
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
            image="https://www.uva.nl/binaries/_ht_1676632421291/680x190-webp/content/gallery/faculteiten-en-diensten/fmg/fmg-corporate-met-restricties/nieuws/rich-man.jpg"
            title="Bachelor's Week 17 - 25 March"
            description="
          Discover your Bachelor's at the UvA."
          />
        </div>

        <div className="flex justify-end mt-6">
          <Link className="underline text-red-500" href='/'>More news</Link>
          <img className="h-4" src="/arrow-right.svg" alt="" />
        </div>
      </div>
    </div>
  );
};