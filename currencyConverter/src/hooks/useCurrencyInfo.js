import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchCurrency = async () => {
      try {
        const res = await fetch(
          `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`
        );
        const json = await res.json();

        setData(json[currency] || {}); // ✅ safe fallback
      } catch (error) {
        console.error("Error fetching currency data:", error);
        setData({});
      }
    };

    if (currency) {
      fetchCurrency();
    }
  }, [currency]);

  return data;
}

export default useCurrencyInfo;