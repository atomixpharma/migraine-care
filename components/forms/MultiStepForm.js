import { useState } from "react";
import { useRouter } from "next/router";
import StepOnePatientInfo from "./StepOnePatientInfo";
import StepTwoInsurance from "./StepTwoInsurance";
import StepThreeScreening from "./StepThreeScreening";

export default function MultiStepForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    insurance: "",
    symptoms: [],
    duration: "",
    severity: ""
  });

  const validateStep = () => {
    if (step === 1) {
      return formData.name && formData.email && formData.phone;
    }
    if (step === 2) {
      return formData.insurance;
    }
    if (step === 3) {
      return (
        Array.isArray(formData.symptoms) &&
        formData.symptoms.length > 0 &&
        formData.duration &&
        formData.severity
      );
    }
    return false;
  };

  const handleNext = () => {
    if (!validateStep()) {
      alert("Please complete all required fields.");
      return;
    }
    setStep((prev) => prev + 1);
  };

  const handleBack = () => setStep((prev) => prev - 1);

  const handleSubmit = async () => {
    try {
      const res = await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        router.push("/thank-you");
      } else {
        alert("Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to submit.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded space-y-6">
      {step === 1 && (
        <StepOnePatientInfo formData={formData} setFormData={setFormData} />
      )}
      {step === 2 && (
        <StepTwoInsurance formData={formData} setFormData={setFormData} />
      )}
      {step === 3 && (
        <StepThreeScreening formData={formData} setFormData={setFormData} />
      )}

      <div className="flex justify-between pt-4">
        {step > 1 ? (
          <button onClick={handleBack} className="px-4 py-2 border rounded">
            Back
          </button>
        ) : (
          <span />
        )}
        {step < 3 ? (
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-black text-white rounded"
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-green-600 text-white rounded"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}
