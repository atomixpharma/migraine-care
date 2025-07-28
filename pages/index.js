// File: pages/index.js

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      <section className="flex flex-col md:flex-row items-center justify-between py-16 px-6 bg-gradient-to-b from-blue-50 to-white max-w-7xl mx-auto">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Prescription Migraine Treatment Online</h1>
          <p className="text-lg md:text-xl mb-8 max-w-xl">
            Take a clinical approach to treating migraines. Start your online assessment now and get medication delivered.
          </p>
          <ul className="mb-8 space-y-2 text-left">
            <li className="flex items-center"><span className="mr-2">✔</span> 100% online medical visit</li>
            <li className="flex items-center"><span className="mr-2">✔</span> Prescribed migraine medication</li>
            <li className="flex items-center"><span className="mr-2">✔</span> Insurance concierge to reduce cost</li>
            <li className="flex items-center"><span className="mr-2">✔</span> Free shipping or pharmacy pick-up</li>
          </ul>
          <Link href="/signup/account" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded">
            Get Started →
          </Link>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/hero-migraine.png"
            alt="Migraine Hero Image"
            width={600}
            height={500}
            className="rounded-xl shadow"
          />
        </div>
      </section>

      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-10 text-center">Migraine Treatment Options</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border rounded-xl p-6 text-center shadow">
            <div className="mb-4">
              <Image src="/acute-treatment.png" alt="Acute Relief" width={100} height={100} className="mx-auto" />
            </div>
            <h3 className="font-bold text-xl mb-2">Fast-Acting Migraine Relief</h3>
            <p className="mb-4 text-sm">Treats migraine attacks as they happen. Available in pill or nasal spray form.</p>
            <Link href="/signup/account" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded block">Get Started</Link>
          </div>
          <div className="border rounded-xl p-6 text-center shadow">
            <div className="mb-4">
              <Image src="/preventive-treatment.png" alt="Daily Prevention" width={100} height={100} className="mx-auto" />
            </div>
            <h3 className="font-bold text-xl mb-2">Daily Migraine Prevention</h3>
            <p className="mb-4 text-sm">Daily medication to reduce how often migraines occur.</p>
            <Link href="/signup/account" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded block">Get Started</Link>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-10 text-center">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="text-center">
            <div className="mb-4">
              <Image src="/icons/form.svg" alt="Step 1" width={80} height={80} className="mx-auto h-20" />
            </div>
            <h3 className="font-bold text-lg mb-2">Step 1: Online Assessment</h3>
            <p>Answer questions about your migraine symptoms and medical history.</p>
          </div>

          <div className="text-center">
            <div className="mb-4">
              <Image src="/icons/doctor.svg" alt="Step 2" width={80} height={80} className="mx-auto h-20" />
            </div>
            <h3 className="font-bold text-lg mb-2">Step 2: Review by Prescriber</h3>
            <p>A licensed healthcare provider will review your intake form and follow up if needed.</p>
          </div>

          <div className="text-center">
            <div className="mb-4">
              <Image src="/icons/delivery.svg" alt="Step 3" width={80} height={80} className="mx-auto h-20" />
            </div>
            <h3 className="font-bold text-lg mb-2">Step 3: Prescription Delivery</h3>
            <p>If approved, your migraine medication will be shipped directly to your door.</p>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Why Use Migraine Care?</h2>
          <p className="mb-6">We make it fast, private, and easy to get migraine help online in Ontario. No referrals or in-person appointments required.</p>
          <ul className="text-left list-disc list-inside space-y-2">
            <li>Evidence-based treatment options</li>
            <li>Licensed Ontario prescribers</li>
            <li>Prescription delivery to your home</li>
            <li>Secure and confidential care</li>
          </ul>
        </div>
      </section>

      <section className="py-12 px-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">Pricing</h2>
        <div className="bg-white border rounded-xl shadow p-8 text-center">
          <h3 className="text-3xl font-bold mb-2">$99</h3>
          <p className="mb-6 text-sm text-gray-600">Program fee</p>
          <ul className="text-left list-disc list-inside space-y-2 mb-6">
            <li>Initial consultation with a medical provider</li>
            <li>Prescription for migraine medication (if eligible)</li>
            <li>Unlimited messaging with a medical provider</li>
            <li>Free shipping or pharmacy pick-up</li>
            <li>Competitive medication prices (with insurance option)</li>
          </ul>
          <p className="text-sm text-gray-500">Have insurance? Upload during your visit and we’ll bill your insurer directly.</p>
        </div>
      </section>

      <section className="bg-gray-100 rounded-xl py-16 px-4 mt-24 text-center">
  <h2 className="text-3xl font-semibold mb-6">Ready to get started?</h2>
  <Link
    href="/signup/account"
    className="inline-block bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition"
  >
    Get started today
  </Link>
</section>

    </div>
  );
}