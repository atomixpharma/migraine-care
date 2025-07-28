export default function StepThreeScreening({ formData, setFormData }) {
  const symptomsList = [
    "Throbbing or pulsing pain",
    "Pain on one side of the head",
    "Nausea or vomiting",
    "Sensitivity to light or sound",
    "Aura or visual disturbances",
  ];

  const handleSymptomToggle = (symptom) => {
    const current = formData.symptoms || [];
    const updated = current.includes(symptom)
      ? current.filter((s) => s !== symptom)
      : [...current, symptom];

    setFormData((prev) => ({ ...prev, symptoms: updated }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Step 3: Migraine Screening</h2>

      <p>Select any symptoms you've experienced:</p>
      <div className="space-y-2">
        {symptomsList.map((symptom) => (
          <label key={symptom} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={formData.symptoms?.includes(symptom) || false}
              onChange={() => handleSymptomToggle(symptom)}
            />
            <span>{symptom}</span>
          </label>
        ))}
      </div>

      <label className="block">
        Duration of Symptoms:
        <input
          type="text"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
        />
      </label>

      <label className="block">
        Severity:
        <select
          name="severity"
          value={formData.severity}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded px-3 py-2"
        >
          <option value="">Select</option>
          <option value="Mild">Mild</option>
          <option value="Moderate">Moderate</option>
          <option value="Severe">Severe</option>
        </select>
      </label>
    </div>
  );
}
