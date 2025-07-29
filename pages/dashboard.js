import { useEffect, useState } from 'react';
import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (status === 'loading') return;
    if (!session) {
      signIn();
      return;
    }

    fetch(`/api/userByEmail?email=${encodeURIComponent(session.user.email)}`)
      .then(res => res.ok ? res.json() : Promise.reject('User not found'))
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.toString());
        setLoading(false);
      });
  }, [session, status]);

  if (status === 'loading' || loading) return <div className="text-center mt-10">Loading dashboard...</div>;
  if (error) return <div className="text-center text-red-600 mt-10">{error}</div>;
  if (!user) return null;

  const intakeFields = [
    user.phone,
    user.dob,
    user.address,
    user.city,
    user.province,
    user.postalCode,
    user.ohipCard,
    user.insurance1,
    user.insurance1Back,
    user.insurance2,
    user.insurance2Back,
  ];
  const completedFields = intakeFields.filter(Boolean).length;

  const getBadgeColor = () => {
    const percent = (completedFields / 11) * 100;
    if (percent >= 90) return 'bg-green-600';
    if (percent >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const uploadedLabel = (fileUrl) =>
    fileUrl
      ? <a href={fileUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View</a>
      : <span className="text-gray-400">Not uploaded</span>;

  const textOrMissing = (value) =>
    value ? value : <span className="text-gray-400">Not provided</span>;

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white shadow rounded p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Welcome, {user.name || user.email}</h1>
        <span className={`text-white text-sm px-3 py-1 rounded-full ${getBadgeColor()}`}>
          {completedFields}/11 complete
        </span>
      </div>
      <p className="mb-6 text-gray-600">Email: {user.email}</p>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-semibold">Profile</h2>
          <button
            className="text-blue-600 text-sm underline"
            onClick={() => router.push('/signup/demographics')}
          >
            Edit
          </button>
        </div>
        <ul className="space-y-1">
          <li><b>Phone:</b> {textOrMissing(user.phone)}</li>
          <li><b>Date of Birth:</b> {textOrMissing(user.dob)}</li>
          <li><b>Address:</b> {textOrMissing(user.address)}</li>
          <li><b>City:</b> {textOrMissing(user.city)}</li>
          <li><b>Province:</b> {textOrMissing(user.province)}</li>
          <li><b>Postal Code:</b> {textOrMissing(user.postalCode)}</li>
        </ul>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-semibold">Intake Documents</h2>
          <button
            className="text-blue-600 text-sm underline"
            onClick={() => router.push('/signup/insurance')}
          >
            Edit
          </button>
        </div>
        <ul className="space-y-1">
          <li><b>OHIP Card:</b> {uploadedLabel(user.ohipCard)}</li>
          <li><b>Insurance 1:</b> {uploadedLabel(user.insurance1)}</li>
          <li><b>Insurance 1 Back:</b> {uploadedLabel(user.insurance1Back)}</li>
          <li><b>Insurance 2:</b> {uploadedLabel(user.insurance2)}</li>
          <li><b>Insurance 2 Back:</b> {uploadedLabel(user.insurance2Back)}</li>
        </ul>
      </div>
    </div>
  );
}
