import styled from "styled-components";
import { auth } from "../../firebase-config";
import { signOut } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../store/login/action";

const Main = styled.div`
  position: fixed;
  right: 0;
  display: flex;
  align-items: flex-start;
  padding: 20px;
  width: 300px;
  flex-direction: column;
  color: white;
  border-radius: 10px;
  background: #1b1b1b;
  z-index: 9999;
`;
const H1 = styled.h1`
  font-size: 20px;
  margin: 20px 0;
`;
const BG = styled.div`
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  left: 0;
`;

export const Account = ({ setAccount }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const signOutUser = () => {
    signOut(auth)
      .then((res) => {
        dispatch(logOut());
        setAccount(false);
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <>
      <Main>
        <H1>
          name: <span>{user.name}</span>
        </H1>
        <H1>
          mobile: <span>{user.mobile}</span>
        </H1>
        <H1>
          email: <span>{user.email}</span>
        </H1>
        <button
          style={{
            margin: "auto",
            background: "red",
            padding: "5px 10px",
            borderRadius: "10px",
          }}
          onClick={signOutUser}
        >
          signOut
        </button>
      </Main>
      <BG onClick={() => setAccount(false)}></BG>
    </>
  );
};
