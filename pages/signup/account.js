import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().required('Full name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(4, 'Minimum 4 characters').required('Password is required'),
});

export default function Signup() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (form) => {
    const res = await fetch('/api/signup/account', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
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
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            {...register('name')}
            placeholder="Full Name"
            className="w-full border p-2"
          />
          <p className="text-red-500 text-sm">{errors.name?.message}</p>
        </div>
        <div>
          <input
            type="email"
            {...register('email')}
            placeholder="Email"
            className="w-full border p-2"
          />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>
        </div>
        <div>
          <input
            type="password"
            {...register('password')}
            placeholder="Password"
            className="w-full border p-2"
          />
          <p className="text-red-500 text-sm">{errors.password?.message}</p>
        </div>
        <button type="submit" className="w-full bg-black text-white py-2 rounded">
          Continue
        </button>
      </form>
    </div>
  );
}
