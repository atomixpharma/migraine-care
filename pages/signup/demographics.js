import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  phone: yup.string().required('Phone number is required'),
  dob: yup.date().required('Date of birth is required'),
  address: yup.string().required('Address is required'),
  city: yup.string().required('City is required'),
  province: yup.string().required('Province is required'),
  postalCode: yup.string().required('Postal code is required'),
});

export default function Demographics() {
  const router = useRouter();
  const { status } = useSession();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    if (status !== 'authenticated') {
      alert('You must be logged in.');
      return;
    }
    const res = await fetch('/api/signup/demographics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
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
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input {...register('phone')} placeholder="Phone Number" className="w-full border p-2 rounded" />
          <p className="text-red-500 text-sm">{errors.phone?.message}</p>
        </div>
        <div>
          <input type="date" {...register('dob')} className="w-full border p-2 rounded" />
          <p className="text-red-500 text-sm">{errors.dob?.message}</p>
        </div>
        <div>
          <input {...register('address')} placeholder="Street Address" className="w-full border p-2 rounded" />
          <p className="text-red-500 text-sm">{errors.address?.message}</p>
        </div>
        <div>
          <input {...register('city')} placeholder="City" className="w-full border p-2 rounded" />
          <p className="text-red-500 text-sm">{errors.city?.message}</p>
        </div>
        <div>
          <input {...register('province')} placeholder="Province" className="w-full border p-2 rounded" />
          <p className="text-red-500 text-sm">{errors.province?.message}</p>
        </div>
        <div>
          <input {...register('postalCode')} placeholder="Postal Code" className="w-full border p-2 rounded" />
          <p className="text-red-500 text-sm">{errors.postalCode?.message}</p>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Next
        </button>
      </form>
    </div>
  );
}
