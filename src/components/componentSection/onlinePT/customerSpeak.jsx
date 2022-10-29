export const CustomerSpeak = () => {
  const img1 =
    "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_52,ar_1,fl_progressive,f_auto,q_auto:eco/dpr_2/image/vm/823287af-32b7-42aa-a1e2-90e07bfc9707.jpg";
  const img2 =
    "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_52,ar_1,fl_progressive,f_auto,q_auto:eco/dpr_2/image/vm/4bb0c5c0-5c7c-43f5-88d5-d6819b051894.jpg";

  return (
    <div
      style={{
        width: "110rem",
        marginLeft: "22rem",
        marginTop: "4rem",
        marginBottom: "4rem",
      }}
    >
      <p
        style={{ fontWeight: "bold", marginBottom: "3rem", fontSize: "1.7rem" }}
      >
        CUSTOMER SPEAK
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontFamily:
            "BrandonTextWeb-Medium,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif",
        }}
      >
        <div style={{ display: "flex", gap: "3rem" }}>
          <img
            src={img1}
            style={{ width: "104px", height: "104px", borderRadius: "100%" }}
            alt=""
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p style={{ width: "350px", lineHeight: "4rem" }}>
              I had felt major disappointment with Cult gyms getting closed due
              to the Covid19 situation. Before this, I had been regular at Cult,
              enjoying a buffet of international quality exercises with great
              trainers. My spirit buoyed when Cult launched their live sessions.
            </p>
            <p
              style={{
                fontWeight: "bold",
                marginTop: "2rem",
                fontSize: "1.7rem",
              }}
            >
              Bhalachandra
            </p>
          </div>
        </div>
        <div style={{ display: "flex", gap: "3rem" }}>
          <img
            src={img2}
            style={{ width: "104px", height: "104px", borderRadius: "100%" }}
            alt=""
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p style={{ width: "350px", lineHeight: "4rem" }}>
              With Cult PT sessions, I actually feel myself getting fitter and
              stronger. Even though the live sessions are there, It just amps up
              your workout when you actually have someone interacting,
              motivating and pushing you even if it's via laptop or a mobile
              screen.
            </p>
            <p
              style={{
                fontWeight: "bold",
                marginTop: "2rem",
                fontSize: "1.7rem",
              }}
            >
              Sunaina D.K.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
