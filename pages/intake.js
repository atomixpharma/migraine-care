// File: pages/questionnaire.js

import { useState } from 'react';

export default function Questionnaire() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    province: '',
    postalCode: '',
    familyDoctor: '',
    medications: '',
    allergies: '',
    ohipNumber: '',
    insuranceProvider: '',
    insuranceNumber: '',
    headacheEpisodes: '',
    duration: '',
    pulsating: '',
    physicalActivity: '',
    associatedSymptoms: '',
    headacheDaysPerMonth: '',
    migraineDaysPerMonth: '',
    missedWork: '',
    reducedWork: '',
    missedHousework: '',
    reducedHousework: '',
    missedSocial: '',
    averagePain: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); // Replace with actual submission logic
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Migraine Intake Form</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {step === 1 && (
          <div className="bg-gray-50 p-4 rounded shadow">
            <h2 className="font-semibold text-lg mb-2">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} className="border px-3 py-2 rounded w-full" />
              <input name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} className="border px-3 py-2 rounded w-full" />
              <input name="dateOfBirth" type="date" value={form.dateOfBirth} onChange={handleChange} className="border px-3 py-2 rounded w-full" />
              <select name="gender" value={form.gender} onChange={handleChange} className="border px-3 py-2 rounded w-full">
                <option value="">Gender</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </select>
              <input name="email" placeholder="Email" value={form.email} onChange={handleChange} className="border px-3 py-2 rounded w-full" />
              <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} className="border px-3 py-2 rounded w-full" />
              <input name="address" placeholder="Street Address" value={form.address} onChange={handleChange} className="border px-3 py-2 rounded w-full" />
              <input name="city" placeholder="City" value={form.city} onChange={handleChange} className="border px-3 py-2 rounded w-full" />
              <input name="province" placeholder="Province" value={form.province} onChange={handleChange} className="border px-3 py-2 rounded w-full" />
              <input name="postalCode" placeholder="Postal Code" value={form.postalCode} onChange={handleChange} className="border px-3 py-2 rounded w-full" />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="bg-gray-50 p-4 rounded shadow">
            <h2 className="font-semibold text-lg mb-2">Health and Insurance Info</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="ohipNumber" placeholder="OHIP Number (if applicable)" value={form.ohipNumber} onChange={handleChange} className="border px-3 py-2 rounded w-full" />
              <input name="insuranceProvider" placeholder="Insurance Provider" value={form.insuranceProvider} onChange={handleChange} className="border px-3 py-2 rounded w-full" />
              <input name="insuranceNumber" placeholder="Insurance Policy/ID Number" value={form.insuranceNumber} onChange={handleChange} className="border px-3 py-2 rounded w-full" />
              <input name="familyDoctor" placeholder="Family Doctor (if applicable)" value={form.familyDoctor} onChange={handleChange} className="border px-3 py-2 rounded w-full md:col-span-2" />
              <textarea name="medications" placeholder="Current Medications" value={form.medications} onChange={handleChange} className="border px-3 py-2 rounded w-full md:col-span-2" />
              <textarea name="allergies" placeholder="Allergies" value={form.allergies} onChange={handleChange} className="border px-3 py-2 rounded w-full md:col-span-2" />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="bg-gray-50 p-4 rounded shadow">
            <h2 className="font-semibold text-lg mb-2">Migraine Screening</h2>
            <div className="grid grid-cols-1 gap-4">
              <input name="headacheEpisodes" placeholder="How many headache episodes have you had in the past 3 months?" value={form.headacheEpisodes} onChange={handleChange} className="border px-3 py-2 rounded w-full" />
              <input name="duration" placeholder="Typical duration of your headaches (in hours)?" value={form.duration} onChange={handleChange} className="border px-3 py-2 rounded w-full" />
              <select name="pulsating" value={form.pulsating} onChange={handleChange} className="border px-3 py-2 rounded w-full">
                <option value="">Are the headaches pulsating/throbbing?</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <select name="physicalActivity" value={form.physicalActivity} onChange={handleChange} className="border px-3 py-2 rounded w-full">
                <option value="">Worsened by routine activity?</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <textarea name="associatedSymptoms" placeholder="Nausea, vomiting, sensitivity to light/sound?" value={form.associatedSymptoms} onChange={handleChange} className="border px-3 py-2 rounded w-full" />
              <input name="headacheDaysPerMonth" placeholder="# of headache days/month" value={form.headacheDaysPerMonth} onChange={handleChange} className="border px-3 py-2 rounded w-full" />
              <input name="migraineDaysPerMonth" placeholder="# of migraine days/month" value={form.migraineDaysPerMonth} onChange={handleChange} className="border px-3 py-2 rounded w-full" />
              <input name="averagePain" placeholder="Average pain level (0–10)" value={form.averagePain} onChange={handleChange} className="border px-3 py-2 rounded w-full" />
            </div>
          </div>
        )}

        <div className="flex justify-between">
          {step > 1 && (
            <button type="button" onClick={prevStep} className="bg-gray-300 hover:bg-gray-400 text-black font-semibold py-2 px-6 rounded">
              Back
            </button>
          )}
          {step < 3 ? (
            <button type="button" onClick={nextStep} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded">
              Next
            </button>
          ) : (
            <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded">
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
