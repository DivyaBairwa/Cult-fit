import React from "react";
import styled from "styled-components";
import { Banner } from "../componentSection/banner/banner";
import { Sessions } from "../componentSection/sessions/Sessions";
import { TherapySessions } from "../../data/sessions";

const H1 = styled.h1`
  font-size: 24px;
  width: 1200px;
  margin: auto;
  font-family: BrandonTextWeb-Bold, "Helvetica Neue", Helvetica, Roboto, Arial,
    sans-serif;
  color: rgb(0, 0, 0);
  margin-bottom: 5px;
`;
export const Mind = () => {
  const image = {
    src: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_1360:150/dpr_2/image/vm/a279c1ab-cee3-42b3-add2-43e8be08e41d.png",
  };
  const image2 = {
    src: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:595/dpr_2/image/vm/4b57cb8f-b16c-4e44-9ddf-40f8dfaedc37.png",
  };
  return (
    <div>
      <Banner image={image} />
      <Banner image={image2} />
      <img
        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_1360:100/dpr_2/image/vm/6b3f0355-7178-4898-b4e8-d68b07a43bd6.png"
        style={{
          margin: "80px auto",
          width: "1200px",
        }}
        alt=""
      />
      <H1>EXPERTS TO HELP YOU</H1>
      <Sessions data={TherapySessions()} />
    </div>
  );
};
