import { useState } from "react";
import "./Form.css";

const Form = (props) => {
  const [Currsavings, setCurrsavings] = useState("");
  const [Yearlysavings, setYearlysavings] = useState("");
  const [Expint, setExpint] = useState("");
  const [Invstd, setInvstd] = useState("");

  const currsavinghandler = (event) => {
    setCurrsavings(event.target.value);
  };

  const yearlysavinghandler = (event) => {
    setYearlysavings(event.target.value);
  };

  const expinthandler = (event) => {
    setExpint(event.target.value);
  };

  const invstdhandler = (event) => {
    setInvstd(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.formtoapp(Currsavings, Yearlysavings, Expint, Invstd);
    setCurrsavings("");
    setExpint("");
    setInvstd("");
    setYearlysavings("");
  };

  return (
    <>
      <form className="form" onSubmit={submitHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              type="number"
              id="current-savings"
              onChange={currsavinghandler}
              value={Currsavings}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              id="yearly-contribution"
              onChange={yearlysavinghandler}
              value={Yearlysavings}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              type="number"
              id="expected-return"
              onChange={expinthandler}
              value={Expint}
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              type="number"
              id="duration"
              onChange={invstdhandler}
              value={Invstd}
            />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </>
  );
};

export default Form;

// controlled components are the ones whos statee is managed not by them
