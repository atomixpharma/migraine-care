export default function StepTwoInsurance({ formData, setFormData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Step 2: Insurance Information</h2>

      <label className="block">
        OHIP Number:
        <input
          type="text"
          name="ohip"
          value={formData.ohip}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
        />
      </label>

      <label className="block">
        Insurance Provider:
        <input
          type="text"
          name="insurance"
          value={formData.insurance}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
        />
      </label>
    </div>
  );
}
