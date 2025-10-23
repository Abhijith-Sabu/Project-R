import "../styles/feed.css";
import Top from "./top.jsx";
import Bottom from "./bottom.jsx";
import { useEffect, useState } from "react";
import { db } from "../firebase.js";
import { collection, query, orderBy, onSnapshot, getDocs } from "firebase/firestore";

export default function Feed() {
  const [receipts, setReceipts] = useState([]);

  useEffect(() => {
    const receiptsCol = collection(db, "receipts");
    const q = query(receiptsCol, orderBy("created_at", "desc"));

    const unsubscribe = onSnapshot(q, async (snapshot) => {
      const data = await Promise.all(
        snapshot.docs.map(async (doc) => {
          const receipt = doc.data();

          const itemsCol = collection(db, "receipts", doc.id, "items");
          const itemsSnapshot = await getDocs(itemsCol);
          const items = itemsSnapshot.docs.map((itemDoc) => itemDoc.data());

          return { id: doc.id, ...receipt, items };
        })
      );

      setReceipts(data);
    });

    return () => unsubscribe();
  }, []);

  const handleSaveToWallet = async (receiptId) => {
    try {
      const res = await fetch(`http://127.0.0.1:8000/save-to-wallet/${receiptId}`, {
        method: "POST",
      });
      const data = await res.json();

      if (data.status === "success" && data.saveUrl) {
        window.open(data.saveUrl, "_blank");
      } else {
        alert("Failed to create Wallet link: " + (data.message || "Unknown error"));
      }
    } catch (err) {
      console.error("Save to Wallet error:", err);
      alert("Something went wrong.");
    }
  };

  if (receipts.length === 0) return <p className="empty-msg">No receipts found</p>;

  return (
    <div className="feed-container">
      <Top />
      <div className="feed">
        <div className="feed-grid">
          {receipts.map((r) => (
            <div className="wallet-card" key={r.id}>
              <div className="wallet-header">
                <span className="material-symbols-outlined">receipt_long</span>
                <h3>{r.establishment_name || "Unknown Store"}</h3>
              </div>
              <div className="wallet-body">
                <p><strong>Total:</strong> ₹{r.total}</p>
                <p><strong>Date:</strong> {r.date}</p>
                <ul>
                  {r.items?.map((i, idx) => (
                    <li key={idx}>{i.item_name || i.name} x{i.quantity} - ₹{i.price}</li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => handleSaveToWallet(r.id)}
                className="mt-3 bg-blue-500 text-white rounded-xl p-2 hover:bg-blue-600"
              >
                Save to Wallet
              </button>
            </div>
          ))}
        </div>
      </div>
      <Bottom />
    </div>
  );
}
