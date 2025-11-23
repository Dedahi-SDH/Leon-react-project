export default function MyInput({ value, handleChange, input, type }) {
  return (
    <>
      <label>{input}</label>
      <input type={type} required value={value} onChange={handleChange} />
    </>
  );
}
