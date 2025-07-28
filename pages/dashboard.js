
import { useEffect, useState } from 'react';
import { useSession, signIn } from 'next-auth/react';


export default function Dashboard() {
  const { data: session, status } = useSession();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (status === 'loading') return;
    if (!session) {
      signIn();
      return;
    }
    // Fetch user info from backend using session.user.email
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

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white shadow rounded p-8">
      <h1 className="text-3xl font-bold mb-2">Welcome, {user.name || user.email}</h1>
      <p className="mb-4 text-gray-600">Email: {user.email}</p>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Profile</h2>
        <ul className="space-y-1">
          <li><b>Phone:</b> {user.phone || <span className="text-gray-400">Not provided</span>}</li>
          <li><b>Date of Birth:</b> {user.dob || <span className="text-gray-400">Not provided</span>}</li>
          <li><b>Address:</b> {user.address || <span className="text-gray-400">Not provided</span>}</li>
          <li><b>City:</b> {user.city || <span className="text-gray-400">Not provided</span>}</li>
          <li><b>Province:</b> {user.province || <span className="text-gray-400">Not provided</span>}</li>
          <li><b>Postal Code:</b> {user.postalCode || <span className="text-gray-400">Not provided</span>}</li>
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Intake Status</h2>
        <ul className="space-y-1">
          <li><b>OHIP Card:</b> {user.ohipCard ? 'Uploaded' : <span className="text-gray-400">Not uploaded</span>}</li>
          <li><b>Insurance 1:</b> {user.insurance1 ? 'Uploaded' : <span className="text-gray-400">Not uploaded</span>}</li>
          <li><b>Insurance 1 Back:</b> {user.insurance1Back ? 'Uploaded' : <span className="text-gray-400">Not uploaded</span>}</li>
          <li><b>Insurance 2:</b> {user.insurance2 ? 'Uploaded' : <span className="text-gray-400">Not uploaded</span>}</li>
          <li><b>Insurance 2 Back:</b> {user.insurance2Back ? 'Uploaded' : <span className="text-gray-400">Not uploaded</span>}</li>
        </ul>
      </div>
    </div>
  );
}
