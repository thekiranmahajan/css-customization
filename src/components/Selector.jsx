import { useState } from "react";

const currencies = [
  {
    value: "rupees",
    short: "INR",
    long: "Indian Rupee",
    symbol: "₹",
    flag: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
  },
  {
    value: "rupees",
    short: "INR",
    long: "Indian Rupee",
    symbol: "₹",
    flag: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
  },
  {
    value: "rupees",
    short: "INR",
    long: "Indian Rupee",
    symbol: "₹",
    flag: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
  },
  {
    value: "rupees",
    short: "INR",
    long: "Indian Rupee",
    symbol: "₹",
    flag: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
  },
  {
    value: "rupees",
    short: "INR",
    long: "Indian Rupee",
    symbol: "₹",
    flag: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
  },
  {
    value: "eur",
    short: "EUR",
    long: "Euro",
    symbol: "€",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/510px-Flag_of_Europe.svg.png",
  },
  {
    value: "gbp",
    short: "GBP",
    long: "Great British Pound",
    symbol: "£",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/510px-Flag_of_the_United_Kingdom_%281-2%29.svg.png",
  },
  {
    value: "usd",
    short: "USD",
    long: "United States Dollar",
    symbol: "$",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/510px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png",
  },
  {
    value: "jpy",
    short: "JPY",
    long: "Japanese Yen",
    symbol: "¥",
    flag: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/510px-Flag_of_Japan.svg.png",
  },
  {
    value: "bitcoin",
    short: "BTC",
    long: "Bitcoin",
    symbol: "₿",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/300px-Bitcoin.svg.png",
  },
  {
    value: "bitcoin",
    short: "BTC",
    long: "Bitcoin",
    symbol: "₿",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/300px-Bitcoin.svg.png",
  },
  {
    value: "bitcoin",
    short: "BTC",
    long: "Bitcoin",
    symbol: "₿",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/300px-Bitcoin.svg.png",
  },
  {
    value: "bitcoin",
    short: "BTC",
    long: "Bitcoin",
    symbol: "₿",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/300px-Bitcoin.svg.png",
  },
  {
    value: "bitcoin",
    short: "BTC",
    long: "Bitcoin",
    symbol: "₿",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/300px-Bitcoin.svg.png",
  },
];

const Selector = () => {
  const [selected, setSelected] = useState("usd");

  return (
    <div className="h-72 flex items-center justify-center bg-gray-100 p-6 gap-5">
      <div className="relative w-72">
        <label
          htmlFor="currency"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Currency Preference
        </label>
        <select
          name="currency"
          id="currency"
          className="appearance-[base-select] custom-select w-full bg-white border border-gray-300 rounded-lg px-3 py-2 pr-8 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 overflow-scroll max-h-64"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          {currencies.map((curr) => (
            <option
              key={curr.value}
              value={curr.value}
              className="grid grid-cols-[1.5rem_1fr_auto] gap-4 items-start p-2 cursor-pointer"
            >
              <img className="size-10" src={curr.flag} alt="" />
              {curr.short} {curr.long} {curr.symbol}
            </option>
          ))}
        </select>
      </div>
      <a href="#">shortcut</a>
      <textarea name="" id="" className="resize-none"></textarea>
    </div>
  );
};

export default Selector;
