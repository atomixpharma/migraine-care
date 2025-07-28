import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

export default function Demographics() {
  const router = useRouter();
  const { status } = useSession();

  const [form, setForm] = useState({
    phone: '',
    dob: '',
    address: '',
    city: '',
    province: '',
    postalCode: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status !== 'authenticated') {
      alert('You must be logged in.');
      return;
    }
    const res = await fetch('/api/signup/demographics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      router.push('/signup/insurance');
    } else {
      alert('Something went wrong.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Demographic Info</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="phone" placeholder="Phone Number" required onChange={handleChange} className="w-full border p-2 rounded" />
        <input name="dob" type="date" required onChange={handleChange} className="w-full border p-2 rounded" />
        <input name="address" placeholder="Street Address" required onChange={handleChange} className="w-full border p-2 rounded" />
        <input name="city" placeholder="City" required onChange={handleChange} className="w-full border p-2 rounded" />
        <input name="province" placeholder="Province" required onChange={handleChange} className="w-full border p-2 rounded" />
        <input name="postalCode" placeholder="Postal Code" required onChange={handleChange} className="w-full border p-2 rounded" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Next</button>
      </form>
    </div>
  );
}
