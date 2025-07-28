import { useState } from 'react';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';

export default function Signup() {
  const router = useRouter();
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/signup/account', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      // Automatically sign in the user after signup
      const { email, password } = form;
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      if (result && !result.error) {
        router.push('/signup/demographics');
      } else {
        alert('Signup succeeded, but login failed. Please try logging in.');
        router.push('/login');
      }
    } else {
      alert('Signup failed.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 border rounded">
      <h1 className="text-2xl font-bold mb-6">Create Account</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" placeholder="Full Name" className="w-full border p-2" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" className="w-full border p-2" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" className="w-full border p-2" onChange={handleChange} required />
        <button type="submit" className="w-full bg-black text-white py-2 rounded">Continue</button>
      </form>
    </div>
  );
}
