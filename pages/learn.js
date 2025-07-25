import Link from 'next/link';

export default function Learn() {
  return (
    <main className="bg-white text-gray-900 px-6 py-12 max-w-4xl mx-auto space-y-12">
      <section>
        <h1 className="text-3xl font-bold mb-4">Learn About Migraine</h1>
        <p>Migraine is a neurological condition that affects millions of Canadians. It’s more than “just a headache” — and it deserves real attention and care.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">What Is Migraine?</h2>
        <p>
          Migraine is a recurring headache disorder that can cause moderate to severe pain, often on one side of the head. It can be accompanied by nausea, sensitivity to light or sound, and visual disturbances called aura.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Common Symptoms</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Throbbing or pulsing head pain</li>
          <li>Sensitivity to light and sound</li>
          <li>Nausea or vomiting</li>
          <li>Blurred vision or visual aura</li>
          <li>Fatigue or dizziness</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Triggers</h2>
        <p>Migraine triggers vary between individuals, but some of the most common include:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Stress</li>
          <li>Hormonal changes</li>
          <li>Changes in sleep or diet</li>
          <li>Weather or barometric pressure shifts</li>
          <li>Bright lights, noise, or strong smells</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Treatment Options</h2>
        <p>There are two main goals in migraine treatment: stop an attack when it starts, and prevent future attacks.</p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Acute treatments: e.g. triptans, NSAIDs, gepants</li>
          <li>Preventive therapies: daily medications, CGRP inhibitors, botox</li>
          <li>Non-drug options: lifestyle changes, supplements, behavioural therapy</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">When to Seek Care</h2>
        <p>You should consider professional care if:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Your migraines are happening more than 4 times per month</li>
          <li>You’re not responding to over-the-counter treatments</li>
          <li>You’re experiencing side effects from your current medications</li>
          <li>Your symptoms are affecting your work, school, or daily life</li>
        </ul>
      </section>

      <section className="text-center pt-6">
        <Link href="/intake" className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
          Fill Out the Intake Form
        </Link>
      </section>
    </main>
  );
}
