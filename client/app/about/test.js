import { useEffect, useState } from "react";
import CryptoJS from "crypto-js";

export default function ShowKeyAOnly() {
  const [items, setItems] = useState([]);
  const passKey = process.env.NEXT_PUBLIC_PASS_KEY; // From .env

  useEffect(() => {
    async function loadData() {
      const res = await fetch("/data.json.enc");
      const encryptedText = await res.text();

      // Decrypt
      const bytes = CryptoJS.AES.decrypt(encryptedText, passKey);
      const decryptedText = bytes.toString(CryptoJS.enc.Utf8);

      const jsonData = JSON.parse(decryptedText);
      const aArray = jsonData["a"]; // Access only key "a"

      setItems(aArray);
    }

    loadData();
  }, [passKey]);

  return (
    <div>
      <h2>Items from key "a":</h2>
      {items.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}
