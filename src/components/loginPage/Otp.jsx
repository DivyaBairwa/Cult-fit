import { useEffect, useRef } from "react";
import styled from "styled-components";

const EnterOtp = styled.div`
  display: flex;
  margin: auto;
  margin-top: 50px;
  justify-content: center;
  position: relative;
  width: 250px;
  display: flex;
  justify-content: space-between;

  & > input {
    background: transparent;
    color: white;
    width: 15%;
    padding: 0px 10px;
    border: 1px solid white;
    border-radius: 10px;
    font-size: 25px;
    /* letter-spacing: 45px; */
  }
`;

export const Otp = ({ otp, setOtp }) => {
  const otpRef1 = useRef(null);
  const otpRef2 = useRef(null);
  const otpRef3 = useRef(null);
  const otpRef4 = useRef(null);
  const otpRef5 = useRef(null);
  const otpRef6 = useRef(null);

  useEffect(() => {
    if (otp[0]) {
      otpRef1.current.value = otp[0];
      otpRef2.current.focus();
    } else otpRef1.current.value = "";
    if (otp[1]) {
      otpRef2.current.value = otp[1];
      otpRef3.current.focus();
    } else otpRef2.current.value = "";
    if (otp[2]) {
      otpRef3.current.value = otp[2];
      otpRef4.current.focus();
    } else otpRef3.current.value = "";
    if (otp[3]) {
      otpRef4.current.value = otp[3];
      otpRef5.current.focus();
    } else otpRef4.current.value = "";
    if (otp[4]) {
      otpRef5.current.value = otp[4];
      otpRef6.current.focus();
    } else otpRef5.current.value = "";
    if (otp[5]) {
      otpRef6.current.value = otp[5];
    } else otpRef6.current.value = "";
  }, [otp]);

  return (
    <EnterOtp>
      <input
        type="text"
        onChange={(e) => {
          if (otp.length === 0) {
            setOtp([...otp, e.target.value]);
          }
        }}
        onKeyDown={(e) => {
          if (e.code === "Backspace") {
            setOtp((init) => {
              init.shift();
              return [...init];
            });
          }
        }}
        ref={otpRef1}
      />
      <input
        type="text"
        ref={otpRef2}
        onChange={(e) => {
          if (otp.length === 1) {
            setOtp([...otp, e.target.value]);
          }
        }}
        onKeyDown={(e) => {
          if (e.code === "Backspace") {
            otpRef1.current.focus();
            setOtp((init) => {
              if (init.length > 2) {
                init.splice(1, 1);
              } else init.pop();
              return [...init];
            });
          }
        }}
      />
      <input
        type="text"
        ref={otpRef3}
        onChange={(e) => {
          if (otp.length === 2) {
            setOtp([...otp, e.target.value]);
          }
        }}
        onKeyDown={(e) => {
          if (e.code === "Backspace") {
            otpRef2.current.focus();
            setOtp((init) => {
              if (init.length > 3) {
                init.splice(2, 1);
              } else init.pop();
              return [...init];
            });
          }
        }}
      />
      <input
        type="text"
        ref={otpRef4}
        onChange={(e) => {
          if (otp.length < 4) {
            setOtp([...otp, e.target.value]);
          }
        }}
        onKeyDown={(e) => {
          if (e.code === "Backspace") {
            otpRef3.current.focus();
            setOtp((init) => {
              if (init.length > 4) {
                init.splice(3, 1);
              } else init.pop();
              return [...init];
            });
          }
        }}
      />
      <input
        type="text"
        ref={otpRef5}
        onChange={(e) => {
          if (otp.length < 5) {
            setOtp([...otp, e.target.value]);
          }
        }}
        onKeyDown={(e) => {
          if (e.code === "Backspace") {
            otpRef4.current.focus();
            setOtp((init) => {
              if (init.length > 5) {
                init.splice(4, 1);
              } else init.pop();
              return [...init];
            });
          }
        }}
      />
      <input
        type="text"
        ref={otpRef6}
        onChange={(e) => {
          if (otp.length < 6) {
            setOtp([...otp, e.target.value]);
          }
        }}
        onKeyDown={(e) => {
          if (e.code === "Backspace") {
            otpRef5.current.focus();
            setOtp((init) => {
              init.pop();
              return [...init];
            });
          }
        }}
      />
    </EnterOtp>
  );
};
