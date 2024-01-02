// App.js
import "./App.css";
import React, { useState } from "react";

import Form from "./components/Form/Form";
import Print from "./components/Form/Print";

function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handlePrint = () => {
    setIsFormVisible(true);
    setTimeout(() => {
      window.print();
      setIsFormVisible(false);
    }, 0);
  };

  return (
    <div className="App">
      {!isFormVisible && <Print handlePrint={handlePrint} />}
      {isFormVisible && <Form />}
      {/* <Print /> */}
      {/* <Form /> */}
    </div>
  );
}

export default App;
