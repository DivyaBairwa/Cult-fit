import { HeroSec } from "../componentSection/heroContainer/HeroSec";
import { MobilePromo } from "../componentSection/mobilePromo/MobilePromo";
import { NavCat } from "../componentSection/navCategory/NavCat";
export const Home = () => {
  let cult = {
    logo_img: "https://static.cure.fit/assets/images/cult-brand.svg",
    title: "Makes fitness fun and easy",
    pathname: "/cult/gym",
    description:
      "Try our fun group classes at our cult centers or work out at best-in-class gyms",
    img1: {
      title: "Find a cult center near you",
      description:
        "Work out at our world class cult centers with the safest measures. From ample workout space to ensure social distancing to frequent sanitisation, cult is playing it safe so you don't have to.",
      src: "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_600,h_470,fl_progressive,f_auto,q_auto:eco/dpr_2/image/vm/6285c073-5e3d-4abf-9189-21403628a1f4.png",
    },
    img2: {
      title: "Find a cult center near you",
      description:
        "Get unlimited access to the best gyms in town with a cultpass. Carefully handpicked by cult, these select gyms boast of cult certified trainers, best-in-class safety and equipment standards.",
      src: "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_600,h_470,fl_progressive,f_auto,q_auto:eco/dpr_2/image/vm/f66c717a-bcb9-4d64-b227-115d1010b610.jpeg",
    },
    img3: {
      title: "Find a cult center near you",
      description:
        "Personalised workout sessions with the best of cult trainers to help you achieve your fitness goals from the comfort of home.",
      src: "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_600,h_470,fl_progressive,f_auto,q_auto:eco/dpr_2/image/vm/aedcb538-777e-4564-b422-30eb8dc220d2.png",
    },
  };
  let live = {
    logo_img: "https://static.cure.fit/assets/images/live-brand.svg",
    title: "At-home health & fitness made easy",
    pathname: "/live/fitness",
    description:
      "Get fit and stay healthy from the comfort of your home with live workouts",
    img1: {
      title: "Fitness",
      description:
        "Stay fit from home with online fitness classes led by celebs and certified cult coaches.",
      src: "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_600,h_470,fl_progressive,f_auto,q_auto:eco/dpr_2/image/vm/d2ceda2f-0362-43f6-9a5a-d1c57f54e7f9.png",
    },
    img2: {
      title: "Mindfulness",
      description:
        "Relax your mind, body and soul with guided meditation & reach your full potential.",
      src: "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_600,h_470,fl_progressive,f_auto,q_auto:eco/dpr_2/image/vm/0fedd809-8ebf-4c79-8306-0207522155fe.png",
    },
    img3: {
      title: "Recipes",
      description:
        "Easy-to-follow healthy recipes designed by our in-house experts and nutritionists.",
      src: "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_600,h_470,fl_progressive,f_auto,q_auto:eco/dpr_2/image/vm/4041957e-947a-4cba-b9ac-940316910888.png",
    },
  };
  let cultsport = {
    logo_img: "https://static.cure.fit/assets/images/cult-sports.svg",
    title: "Collection of premium athleisure wear",
    pathname: "/store/gear",
    description:
      "Browse through our collection to help you ace your workouts in style",
    img1: {
      title: "Equipment",
      description:
        "Get your hands on cult branded workout equipment and slay your fitness goals.",
      src: "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_600,h_470,fl_progressive,f_auto,q_auto:eco/dpr_2/image/vm/5c333536-cc72-4e5a-8648-9dcb8006f7c0.png",
    },
    img2: {
      title: "Footwear",
      description: "Exclusive footgear designed for workouts and leisure use.",
      src: "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_600,h_470,fl_progressive,f_auto,q_auto:eco/dpr_2/image/vm/631e1299-7ad1-4e06-b410-f77671c2c540.png",
    },
    img3: {
      title: "Apparel",
      description:
        "Browse through a range of collections that’s been tested on athletes and designed for you.",
      src: "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_600,h_470,fl_progressive,f_auto,q_auto:eco/dpr_2/image/vm/dec83eee-b999-4058-ac0f-6d346b8d071a.png",
    },
  };
  let eatfit = {
    logo_img: "https://static.cure.fit/assets/images/eat-title.svg",
    title: "Healthy, Tasty, Everyday Food!",
    pathname: "/eat/eatordernow",
    description:
      "Indulge in healthy meals that are both nutritious and delicious",
    img1: {
      title: "Home Style",
      description:
        "Nothing can beat the Great Indian Thali. Enjoy homestyle food just like mum's, made with less oil and mild spices.",
      src: "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_600,h_470,fl_progressive,f_auto,q_auto:eco/dpr_2/image/vm/257e0d59-ebf5-406d-a775-ba22ed951dc8.png",
    },
    img2: {
      title: "Weight Watch",
      description:
        "Go cal-light with weight watch lunches that have quality proteins and high-fibre grains to keep you feeling full for longer.",
      src: "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_600,h_470,fl_progressive,f_auto,q_auto:eco/dpr_2/image/vm/ee64deeb-f19d-4eb7-ac58-c04434d02ae8.png",
    },
    img3: {
      title: "Fit Curries",
      description:
        "Try our perfect one-box meals featuring all-time classics like rajma, chole and Thai green curry served with high-fibre brown rice or millet.",
      src: "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_600,h_470,fl_progressive,f_auto,q_auto:eco/dpr_2/image/vm/53c04204-7350-4d5c-9a12-62fc07cbb896.png",
    },
  };

  return (
    <div>
      <HeroSec />
      <NavCat data={cult} />
      <NavCat data={live} />
      <NavCat data={cultsport} />
      <NavCat data={eatfit} />
      <MobilePromo />
      <img
        width="100%"
        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,c_fit/dpr_2/image/clp/business-cult.png"
        alt=""
      />
      <img
        width="100%"
        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,c_fit/dpr_2/image/clp/careers-cult.png"
        alt=""
      />
    </div>
  );
};
