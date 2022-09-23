import { useState, useEffect } from "react";
// import Post from "./../post";
import axios from "axios";

function Currency() {
  const [weatherData, setWeatherData] = useState(null);
  const [cityName, setCityName] = useState("");

  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("");
  const [to, setto] = useState("");

  const [result, setResult] = useState(0);

  const submitHandler = (e) => {
    e.preventDefault();

    console.log("I am click handler");
    axios
      .get(
        `https://api.apilayer.com/currency_data/convert?to=${to}&from=${from}&amount=${amount}`,
        { headers: { apikey: "n92nZDSmV1SkEH8qg01HWrQKQZz0kn6w" } }
      )
      .then((response) => {
        console.log("response: ", response);

        setResult(response.data.result);

        // setWeatherData(response.data);
      })
      .catch((err) => {
        console.log("error: ", err);
      });
  };

  return (
    <div>
      <form
        onSubmit={submitHandler}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "fit-content",
        }}
      >
        Amount:
        <input
          type="text"
          placeholder="Enter your amount"
          required
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
        From:
        <input
          type="text"
          placeholder="EUR"
          required
          onChange={(e) => {
            setFrom(e.target.value);
          }}
        />
        To:
        <input
          type="text"
          placeholder="PKR"
          required
          onChange={(e) => {
            setto(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>

      <h1>Result: {result}</h1>
      <br />
      <br />
    </div>
  );
}

export default Currency;
