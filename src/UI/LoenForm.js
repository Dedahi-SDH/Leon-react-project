import "./LoenForm.css";
import Modal from "../UI/Modal";
export default function LoenForm() {
  function handleClick() {
    <Modal />;
  }
  return (
    <div className="flex" style={{ flexDirection: "column" }}>
      <form
        id="loen-form"
        className="flex"
        style={{ flexDirection: "column" }}
        onSubmit={handleClick}
      >
        <h1>Requesting Loen</h1>
        <hr></hr>
        <label>Enter ur name</label>
        <input />
        <label>Enter your age</label>
        <input />
        <label>Enter your number</label>
        <input />
        <label>Are you an employee?</label>
        <input type="checkbox" />
        <label>Salary</label>
        <select>
          <option>Less than 500$</option>
          <option>more than 500$</option>
          <option>equals to 500$</option>
        </select>
        <button id="btn">Submit</button>
      </form>
    </div>
  );
}
