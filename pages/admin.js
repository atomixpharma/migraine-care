import { useEffect, useState } from 'react';

export default function AdminPage() {
  const [intakes, setIntakes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIntakes = async () => {
      try {
        const res = await fetch('/api/intakes');
        const data = await res.json();
        setIntakes(data);
      } catch (err) {
        console.error('Failed to fetch intakes:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchIntakes();
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Admin: Submitted Intake Forms</h1>

      {loading ? (
        <p>Loading...</p>
      ) : intakes.length === 0 ? (
        <p>No submissions found.</p>
      ) : (
        <table className="w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-2 py-1">Name</th>
              <th className="border px-2 py-1">Email</th>
              <th className="border px-2 py-1">Phone</th>
              <th className="border px-2 py-1">Insurance</th>
              <th className="border px-2 py-1">Symptoms</th>
              <th className="border px-2 py-1">Duration</th>
              <th className="border px-2 py-1">Severity</th>
            </tr>
          </thead>
          <tbody>
            {intakes.map((form) => (
              <tr key={form.id}>
                <td className="border px-2 py-1">{form.user.name}</td>
                <td className="border px-2 py-1">{form.user.email}</td>
                <td className="border px-2 py-1">{form.user.phone}</td>
                <td className="border px-2 py-1">{form.insurance}</td>
                <td className="border px-2 py-1">{form.symptoms}</td>
                <td className="border px-2 py-1">{form.duration}</td>
                <td className="border px-2 py-1">{form.severity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
