import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-blue-50 py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Migraine Care Made Simple</h1>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Start your care with a short intake form — no waiting rooms, no guesswork. Just expert help, when you need it.
        </p>
        <Link href="/intake" className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
          Start Your Care
        </Link>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="font-semibold text-lg mb-2">1. Fill Out the Form</h3>
            <p>Give us some background on your migraine symptoms and history.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">2. We'll Review It</h3>
            <p>Our clinicians will assess your case and follow up directly if needed.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">3. Get Connected</h3>
            <p>We’ll set you up with care options or treatment — based on your needs.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-2xl font-bold text-center mb-10">Why MigraineCare?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
          <div>
            <h3 className="font-semibold text-lg mb-2">Condition-Specific</h3>
            <p>We focus only on migraine. That means your care isn’t generic — it’s targeted.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Virtual First</h3>
            <p>No clinics. No waiting rooms. We review and respond through secure systems.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">No Overwhelm</h3>
            <p>We keep it simple. Just one form, one follow-up, and real treatment options.</p>
          </div>
        </div>
      </section>

      {/* Trusted Care */}
      <section className="py-16 px-6 text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Care by Clinicians Who Get It</h2>
        <p className="text-lg">
          Our team includes pharmacists and physicians with specific training in headache and migraine care. We review every case before recommending any treatment.
        </p>
      </section>

      {/* Get Started */}
      <section className="bg-blue-100 py-16 text-center px-6">
        <h2 className="text-2xl font-bold mb-4">Ready to Start?</h2>
        <p className="mb-6">Takes 2 minutes. No commitment required.</p>
        <Link href="/intake" className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
          Fill Out Intake Form
        </Link>
      </section>
    </main>
  );
}
