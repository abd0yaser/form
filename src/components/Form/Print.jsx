import React from "react";

export default function Print({ handlePrint }) {
  return (
    <div>
      <button onClick={handlePrint}>Print</button>
    </div>
  );
}
