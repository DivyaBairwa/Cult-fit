import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import "./CultSport.css";
import { Link } from "react-router-dom";

export const CultSport = () => {
  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

  const images = [
    {
      imgPath:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_3000:1200/dpr_2/image/vm/c44cb069-a7fd-46f6-8cdd-18434513bba7.png",
    },
    {
      imgPath:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_3000:1200/dpr_2/image/vm/9d0fca00-f5bc-4476-8a93-d9e72eb4d0a4.png",
    },
    {
      imgPath:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_3000:1200/dpr_2/image/vm/ba25796f-60c3-4011-8574-ee68a270e4b9.png",
    },
    {
      imgPath:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_3000:1200/dpr_2/image/vm/95def045-a089-4723-b647-58f640a37fdf.png",
    },
    {
      imgPath:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_3000:1200/dpr_2/image/vm/50791be6-3fe4-4c3c-89fd-79aefa2813a1.png",
    },
  ];

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
      <div>
        <img
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:596/dpr_2/image/vm/438b10c9-909f-45eb-a5f2-e7546894a79a.png"
          alt="CultFit Store Banner"
        />
      </div>

      <div id="imagesGear">
        <Link to="/products/men">
          {" "}
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_365:350/dpr_2/image/vm/a657acc2-6d43-4912-ab45-4031df9c1f3f.png"
            alt=" Of Man"
            className="imageGear"
          />
        </Link>
        <Link to="/products/women">
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_365:350/dpr_2/image/vm/65c1c120-5c8f-4d98-8ed7-efebe6d1a277.png"
            alt=" Of Woman"
            className="imageGear"
          />
        </Link>
        <Link to="/products/spinbike">
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_365:350/dpr_2/image/vm/625df537-224a-46b8-b5f7-936c6666ee56.png"
            alt=" Of Spin Bike"
            className="imageGear"
          />
        </Link>
        <Link to="/products/cycle">
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_365:350/dpr_2/image/vm/aab7c5f3-87a2-4535-92cd-719743c504e1.png"
            alt=" Of Cycles"
            className="imageGear"
          />
        </Link>
        <Link to="/products/footwear">
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_365:350/dpr_2/image/vm/8765ee6c-d1f4-4113-8ac8-e5614844b805.png"
            alt=" Of Footwear"
            className="imageGear"
          />
        </Link>
        <Link to="/products/treadmills">
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_365:350/dpr_2/image/vm/b59fbb0e-bac2-41bf-a652-4abcab6a041b.png"
            alt=" Of Treadmills"
            className="imageGear"
          />
        </Link>
      </div>

      <div id="shopByWorkout" className="width-1200">
        Shop by Workout
      </div>

      <div id="shopByWorkoutImages">
        <Link to="/products/yoga">
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_530:700/dpr_2/image/vm/06a67be8-5b49-49b9-83b1-af4e6fa6461b.png"
            alt="YOGA"
            className="shopByWorkoutImage"
          />
        </Link>
        <Link to="/products/strength">
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_530:700/dpr_2/image/vm/a026ae3f-fc71-4403-aa75-b03226b7c36f.png"
            alt="STRENGTH"
            className="shopByWorkoutImage"
          />
        </Link>
        <Link to="/products/running">
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_530:700/dpr_2/image/vm/c0ae83e6-a054-448f-b658-f214863779ce.png"
            alt="RUNNING"
            className="shopByWorkoutImage"
          />
        </Link>
        <Link to="/products/dance">
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_530:700/dpr_2/image/vm/6dbd08ab-43d5-4f35-abab-d283384f7904.png"
            alt="DANCE"
            className="shopByWorkoutImage"
          />
        </Link>
      </div>

      <Box>
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            pl: 2,
            bgcolor: "background.default",
          }}
        ></Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={index}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box component="img" src={step.imgPath} alt={step.label} />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button onClick={handleNext} disabled={activeStep === maxSteps - 1}>
              <ChevronRightIcon />
            </Button>
          }
          backButton={
            <Button onClick={handleBack} disabled={activeStep === 0}>
              <ChevronLeftIcon />
            </Button>
          }
        />
      </Box>

      <div id="shopByCategory">Shop by Category</div>

      <div id="shopByCategoryImages">
        <Link to="/products/men">
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_365:350/dpr_2/image/vm/7bc7142d-f87e-43ab-8396-3fcc71a6bee6.png"
            className="shopByCategoryImage"
            alt="T-Shirts"
          />
        </Link>
        <Link to="/products/men">
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_365:350/dpr_2/image/vm/df6a4e2b-8239-4cf2-9ba4-7123a34a6fbf.png"
            className="shopByCategoryImage"
            alt="Sweatshirts"
          />
        </Link>
        <Link to="/products/women">
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_365:350/dpr_2/image/vm/b7ce6f01-ba33-4c57-b6e5-918dd06b8633.png"
            className="shopByCategoryImage"
            alt="Joggers"
          />
        </Link>
        <Link to="/products/women">
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_365:350/dpr_2/image/vm/1ab48e88-474e-4cad-9040-a23d138360ef.png"
            className="shopByCategoryImage"
            alt="Sports Bra"
          />
        </Link>
        <Link to="/products/treadmills">
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_365:350/dpr_2/image/vm/b7755cc7-80f8-4ad4-a00f-90e9271ffc74.png"
            className="shopByCategoryImage"
            alt="Equipment"
          />
        </Link>
        <Link to="/products/women">
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_365:350/dpr_2/image/vm/7597af64-463f-41f7-a0ac-b5f45f5f7747.png"
            className="shopByCategoryImage"
            alt="Tights"
          />
        </Link>
        <Link to="/products/footwear">
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_365:350/dpr_2/image/vm/ec2f8bda-b841-4a81-bbdc-8e90114f1637.png"
            className="shopByCategoryImage"
            alt="Footwear"
          />
        </Link>
        <Link to="/products/men">
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_365:350/dpr_2/image/vm/12fca99c-8bbe-4069-99bb-1599be03ba68.png"
            className="shopByCategoryImage"
            alt="Accessories"
          />
        </Link>
        <Link to="/products/women">
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_365:350/dpr_2/image/vm/7ccb9b98-89c9-4dcf-a2a9-2464d55efc61.png"
            className="shopByCategoryImage"
            alt="Shorts"
          />
        </Link>
        <Link to="/products/footwear">
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_365:350/dpr_2/image/vm/96bf757f-baaf-4443-8194-f163b307e4e4.png"
            className="shopByCategoryImage"
            alt="Vitamins"
          />
        </Link>
        <Link to="/products/spinbike">
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_365:350/dpr_2/image/vm/7a42b018-6783-4494-96b7-4395c3c5af11.png"
            className="shopByCategoryImage"
            alt="Spin Bikes"
          />
        </Link>
        <Link to="/products/treadmills">
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_365:350/dpr_2/image/vm/41274bec-349b-467a-9f5f-6edffd96d10d.png"
            className="shopByCategoryImage"
            alt="Treadmills"
          />
        </Link>
        <Link to="/products/cycles">
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_365:350/dpr_2/image/vm/1eea0631-5bb8-4dcc-86c0-567a92260e67.png"
            className="shopByCategoryImage"
            alt="Cycles"
          />
        </Link>
        <Link to="/products/women">
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_365:350/dpr_2/image/vm/b3b509d0-ad7e-4e60-b088-72a991adfef6.png"
            className="shopByCategoryImage"
            alt="Under 999"
          />
        </Link>
        <Link to="/products/women">
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_365:350/dpr_2/image/vm/a1461493-5700-4fe2-8867-2086ac3b7da5.png"
            className="shopByCategoryImage"
            alt="Yoga"
          />
        </Link>
      </div>

      <div id="spotlight">Spotlight</div>

      <div id="spotlightImages">
        <Link to="/products/men">
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_1080:600/dpr_2/image/vm/236187b6-218f-4d36-ad13-a47515b2b385.png"
            alt="Wheelchair"
            className="spotlightImage"
          />
        </Link>
        <Link to="/products/women">
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_420,ar_1080:600/dpr_2/image/vm/89567047-8d49-493a-b032-4e48df8e112d.png"
            alt="Weird Pose"
            className="spotlightImage"
          />
        </Link>
      </div>
    </>
  );
};
