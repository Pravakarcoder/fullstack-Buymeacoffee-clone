"use client";
import { useEffect, useState } from "react";
import { BiSolidCoffeeTogo } from "react-icons/bi";

export default function DonationForm() {
  const [numberInValue, setNumberInValue] = useState("");
  const [amount, setAmount] = useState(1);
  const [crypto, setCrypto] = useState("btc");
  useEffect(() => {
    if (numberInValue) {
      const intValue = parseInt(numberInValue);
      if (intValue > 5 && intValue <= 1000) {
        setAmount(intValue);
      } else if (intValue === 1 || intValue === 3 || intValue === 5) {
        setAmount(intValue);
      } else {
        setAmount(1);
      }
    }
  }, [numberInValue]);

  return (
    <form>
      <div className="border border-yellow-300 bg-yellow-300/10 rounded-xl  gap-2  p-4 items-center">
        {" "}
        <div className="flex gap-2 items-center justify-center">
          <BiSolidCoffeeTogo size={25} /> <span>x</span>
          <button
            onClick={() => {
              setAmount(1);
              setNumberInValue("1");
            }}
            type="button"
            className={"amount " + (amount === 1 ? "active" : "")}
          >
            1
          </button>
          <button
            onClick={() => {
              setAmount(3);
              setNumberInValue("3");
            }}
            type="button"
            className={"amount " + (amount === 3 ? "active" : "")}
          >
            3
          </button>
          <button
            onClick={() => {
              setAmount(5);
              setNumberInValue("5");
            }}
            type="button"
            className={"amount " + (amount === 5 ? "active" : "")}
          >
            5
          </button>
        </div>
        <input
          className="w-full h-12 rounded-xl text-center border-yellow-300 mt-1"
          type="text"
          placeholder="10"
          onChange={(ev) => setNumberInValue(ev.target.value)}
          value={numberInValue}
        />
      </div>
      <div className="mt-2">
        <input type="text" placeholder="Your name" />
      </div>
      <div className="mt-2">
        <textarea name="" id="" placeholder="Say something nice"></textarea>
      </div>
      <div className="mt-2">
        <h3 className="text-xs mb-1 text-gray-600">
          pay with selected crypto or with cc
        </h3>
        <div className="flex gap-1">
          <button
            type="button"
            onClick={() => setCrypto("btc")}
            className={"crypto " + (crypto === "btc" ? "active" : "")}
          >
            <span>BTC</span>
            <p>BITCOIN</p>
          </button>
          <button
            type="button"
            onClick={() => setCrypto("eth")}
            className={"crypto " + (crypto === "eth" ? "active" : "")}
          >
            <span>ETH</span>
            <p>Ethereum</p>
          </button>
          <button
            type="button"
            onClick={() => setCrypto("ltc")}
            className={"crypto " + (crypto === "ltc" ? "active" : "")}
          >
            <span>LTC</span>
            <p>Litecoin</p>
          </button>
        </div>
      </div>

      <div className="mt-2">
        <button className="bg-yellow-300 w-full rounded-lg py-3 hover:bg-yellow-300/90">
          Support ${amount * 5}
        </button>
      </div>
    </form>
  );
}
