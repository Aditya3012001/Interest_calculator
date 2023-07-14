import logo from "./assets/investment-calculator-logo.png";
import Header from "./components/Header";
import Form from "./components/Form";
import Result from "./components/Result";

import calculateHandler from "./util/calculateHandler";

function App() {
  // do something with yearlyData ...

  let results = [];
  let userdata = [];

  const formtoapp = (...data) => {
    userdata = [...data];
    console.log(userdata);

    results = [...calculateHandler(userdata)];

    console.log(results);
  };

  // / calculate result  here and then pass the it to the render list

  return (
    <div>
      <Header />
      <Form formtoapp={formtoapp} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      <Result reuslts={results} />
    </div>
  );
}

export default App;
