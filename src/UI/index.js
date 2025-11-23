import { useState } from "react";
// import Modal from "./Modal";
import "./LoenForm.css";
import MyComponent from "./inputNumber";

export default function UiDesign() {
  const [inpName, setInputName] = useState("");
  const [inpNumber, setInputNumber] = useState();
  const [inpAge, setInputAge] = useState();
  const [inpCheck, setInputCheck] = useState(false);
  const [inpSelect, setInputSelect] = useState("");
  let isAge = false;
  let isNumber = false;
  function handleClick(event) {
    event.preventDefault();
    checkAge();
    chekedNumber();
    if (isAge && isNumber) {
      alert("hi");
    }
  }
  function checkAge() {
    if (inpAge > 100 || inpAge < 18) {
      alert("Votre age est inaccesible!!");
      isAge = false;
    } else {
      isAge = true;
    }
  }
  function chekedNumber() {
    if (inpNumber.length < 8) {
      alert("Number must be biger than 8 caracter!");
      isNumber = false;
    } else {
      isNumber = true;
    }
  }
  function handleChangeNumber(e) {
    setInputNumber(e.target.value);
  }
  function handleChangeName(e) {
    setInputName(e.target.value);
  }
  function handleChangeAge(e) {
    setInputAge(e.target.value);
  }
  function handleChangeCheck(e) {
    setInputCheck(e.target.value);
  }
  const type = {
    text: "text",
    number: "number",
    check: "checkbox",
  };
  return (
    <div
      className="flex"
      style={{ flexDirection: "column", paddingTop: "50px" }}
    >
      <form
        onSubmit={handleClick}
        id="loen-form"
        className="flex"
        style={{ flexDirection: "column" }}
      >
        <h1>Requesting Loen</h1>
        <hr></hr>
        <MyComponent
          input={"Your Name: "}
          value={inpName}
          handleChange={handleChangeName}
          type={type.text}
        />
        <MyComponent
          input={"Your Number: "}
          value={inpNumber}
          handleChange={handleChangeNumber}
          type={type.number}
        />
        <MyComponent
          input={"Your Age: "}
          value={inpAge}
          handleChange={handleChangeAge}
          type={type.number}
        />
        <MyComponent
          input={"Are you an employee?"}
          value={inpCheck}
          handleChange={handleChangeCheck}
          type={type.check}
        />
        <label>Salary</label>
        <select
          value={inpSelect}
          onChange={(event) => setInputSelect(event.target.value)}
          required
        >
          <option value={""}>Chose on of them</option>
          <option value={"Less than 500$"}>less than 500$</option>
          <option value={"More than 500$"}>more than 500$</option>
          <option value={"equal to 500$"}>equals to 500$</option>
        </select>
        <button id="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
