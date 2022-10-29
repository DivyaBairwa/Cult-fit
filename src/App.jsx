import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { CultCenter } from "./components/cult/CultCenter";
import { Gyms } from "./components/cult/Gyms";
import { Home } from "./components/homePage/Home";
import { OnlinePT } from "./components/cult/OnlinePT";
import { CultSport } from "./components/cult/CultSport";
import { LuxuryGyms } from "./components/cult/LuxuryGyms";
import { Footer } from "./components/Footer/Footer";
import { Login } from "./components/loginPage/Login";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logIn } from "./store/login/action";
import { setUser } from "./store/user/action";

////////////firebase
import { auth, db } from "./firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

import { Account } from "./components/account/Account";
import { Fitness } from "./components/live/Fitness";
import { OnlineConsult } from "./components/care/OnlineConsult";
import { Order } from "./components/eat/Order";
import { Mind } from "./components/mind/Mind";
import { Products } from "./components/products/Products";
import { NotFound } from "./components/notFound/notFound";
import { SingleProduct } from "./components/singleProduct/singleProduct";
import { CheckOut } from "./components/checkout/CheckOut";

function App() {
  const [log, setLog] = useState(false);
  const isLoged = useSelector((store) => store.login.log);
  const [account, setAccount] = useState(false);
  const dispatch = useDispatch();


  const checkUserLoged = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        async function handlePost() {
          const docRef = doc(db, "users", uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            let data = docSnap.data();
            dispatch(setUser(data));
          } else {
            await setDoc(docRef, {
              name: user.displayName,
              email: user.email,
              mobile: user.phoneNumber,
              profile_image: user.photoURL,
              cart: [],
            });
          }
        }
        handlePost();
        dispatch(logIn());
      } else {
        setTimeout(() => {
          setLog(true);
        }, 5000);
      }
    });
  };
  useEffect(() => {
    checkUserLoged();
  }, []);
  return (
    <div className="App">
      <Navbar
        setLog={isLoged ? setAccount : setLog}
        log={isLoged ? account : log}
        changeState={checkUserLoged}
      />
      {log && (
        <Login checkUserLoged={checkUserLoged} setLog={setLog} log={log} />
      )}
      {isLoged && account && <Account setAccount={setAccount} />}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/account" element={<Account />} /> */}
        <Route path="/gym" element={<CultCenter />} />
        <Route path="/cult-pass" element={<Gyms />} />
        <Route path="/online-personal-training" element={<OnlinePT />} />
        <Route path="/gear" element={<CultSport />} />
        <Route path="/othergyms" element={<LuxuryGyms />} />
        <Route path="/fitness" element={<Fitness />} />
        <Route path="/doctor-consultation" element={<OnlineConsult />} />
        <Route path="/eatordernow" element={<Order />} />
        <Route path="/therapy" element={<Mind />} />
        <Route path="/products/:cat" element={<Products />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route
          path="/product/:id"
          element={
            <SingleProduct setLog={setLog} changeState={checkUserLoged} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
