// pages/signup/insurance.js


import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

export default function InsuranceUpload() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    ohipCard: null,
    insurance1: null,
    insurance1Back: null,
    insurance2: null,
    insurance2Back: null,
  });

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };


  const { data: session, status } = useSession();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status !== 'authenticated') {
      alert('You must be logged in to upload insurance.');
      return;
    }
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key]) data.append(key, formData[key]);
    });
    const res = await fetch('/api/signup/upload', {
      method: 'POST',
      body: data,
    });
    if (res.ok) {
      router.push('/dashboard');
    } else {
      alert('Upload failed.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-semibold">Upload Insurance Information</h2>

      <div>
        <label>OHIP Card</label>
        <input type="file" name="ohipCard" onChange={handleFileChange} />
      </div>

      <div>
        <label>Insurance Card Front</label>
        <input type="file" name="insurance1" onChange={handleFileChange} />
      </div>

      <div>
        <label>Insurance Card Back</label>
        <input type="file" name="insurance1Back" onChange={handleFileChange} />
      </div>

      <div>
        <label>2nd Insurance Card Front (optional)</label>
        <input type="file" name="insurance2" onChange={handleFileChange} />
      </div>

      <div>
        <label>2nd Insurance Card Back (optional)</label>
        <input type="file" name="insurance2Back" onChange={handleFileChange} />
      </div>

      <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded">Continue</button>
    </form>
  );
}
