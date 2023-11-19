import React, { useState } from "react";
import Button from "../components/Button";
import arrowRight from "../assets/icons/arrow-right.svg";
import { shoes, statistics } from "../constants/index";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {


  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 ">
        <p className="text-coral-red text-xl font-montserrat">
          Our Summer collections
        </p>
       <div className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold sm:z-10">
          <h1 className="xl:bg-white xl:whitespace-nowrap relative sm:z-10 pr-10">
            The New Arrival
          </h1>
        </div>
        <div className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold sm:z-10">
          <h1 className="text-coral-red inline-block mt-3 sm:z-10">Nike</h1>{" "}
          Shoes
        </div>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label={"Show Now"} imgURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((data) => (
            <div key={data.label}>
              <p className="text-4xl font-palanquin font-bold">{data.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {data.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          className="object-contain relative sm:z-10"
          src={bigShoeImg}
          alt="Shoe Collection"
          width={610}
          height={500}
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => {
                  setbigShoeImg(shoe);
                }}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
