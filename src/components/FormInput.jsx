// components/FormInput.jsx
function FormInput({ label, type = "text", value, onChange, placeholder }) {
  return (
    <div className="mb-4">
      <label className="block mb-2 font-semibold">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default FormInput;
