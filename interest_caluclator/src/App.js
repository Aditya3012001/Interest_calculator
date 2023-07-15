import logo from "./assets/investment-calculator-logo.png";
import Header from "./components/Header";
import Form from "./components/Form";
import Result from "./components/Result";

import calculateHandler from "./util/calculateHandler";
import { useState } from "react";

function App() {
  const [results, setresults] = useState([]);

  let userdata = [];

  const formtoapp = (...data) => {
    userdata = [...data];
    let temp = [...calculateHandler(userdata)];
    setresults([...temp]);
    console.log(results);
  };

  return (
    <div>
      <Header />
      <Form formtoapp={formtoapp} />
      <Result results={results} />
    </div>
  );
}

export default App;
