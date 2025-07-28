import MultiStepForm from "@/components/forms/MultiStepForm";

export default function IntakePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-6">Patient Intake Form</h1>
      <MultiStepForm />
    </div>
  );
}
