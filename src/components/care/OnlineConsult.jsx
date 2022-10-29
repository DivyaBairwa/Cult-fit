import React from "react";
import { Banner } from "../componentSection/banner/banner";

import { PriceList } from "../componentSection/priceList/PriceList";
import { Cards } from "../componentSection/cards/Cards";

export const OnlineConsult = () => {
  const promoStyle = {
    title: "cultpass ELITE",
    subHeading: "Unlimited access to all centers, gyms and live workouts",
    style: { background: "#586284", height: "450px" },
  };
  const image = {
    src: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:595/dpr_2/image/vm/577cce30-220e-4311-8164-61d85e89cda7.png",
  };
  const cards = [
    "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,ar_0.8,fl_progressive,f_auto,q_auto:eco/dpr_2/image/singles/care/tc/covid_unlimited_1.png",
    "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,ar_0.8,fl_progressive,f_auto,q_auto:eco/dpr_2/image/singles/care/tc/covid_adults_3.png",
    "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,ar_0.8,fl_progressive,f_auto,q_auto:eco/dpr_2/image/singles/care/tc/covid_kids_3.png",
    "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,ar_0.8,fl_progressive,f_auto,q_auto:eco/dpr_2/image/singles/care/tc/Pulmonologist.png",
    "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,ar_0.8,fl_progressive,f_auto,q_auto:eco/dpr_2/image/singles/care/tc/Dermatology_Magazine.png",
    "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,ar_0.8,fl_progressive,f_auto,q_auto:eco/dpr_2/image/singles/care/tc/GynecologistV2.jpg",
    "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,ar_0.8,fl_progressive,f_auto,q_auto:eco/dpr_2/image/singles/care/tc/ENT.jpg",
    "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,ar_0.8,fl_progressive,f_auto,q_auto:eco/dpr_2/image/singles/care/tc/ORTHO.jpg",
    "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,ar_0.8,fl_progressive,f_auto,q_auto:eco/dpr_2/image/singles/care/tc/Trichology_Magazine.png",
    "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,ar_0.8,fl_progressive,f_auto,q_auto:eco/dpr_2/image/singles/care/tc/Ophthalmology.jpg",
    "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,ar_0.8,fl_progressive,f_auto,q_auto:eco/dpr_2/image/singles/care/tc/Urology2.jpg",
    "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,ar_0.8,fl_progressive,f_auto,q_auto:eco/dpr_2/image/singles/care/tc/Sexology.jpg",
    "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,ar_0.8,fl_progressive,f_auto,q_auto:eco/dpr_2/image/singles/care/tc/DentalCare.jpg",
    "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_232,ar_0.8,fl_progressive,f_auto,q_auto:eco/dpr_2/image/singles/care/tc/psychiatry2.png",
  ];
  return (
    <div>
      <Banner image={image} />
      <Cards data={cards} />
      <PriceList promoStyle={promoStyle} />
    </div>
  );
};
