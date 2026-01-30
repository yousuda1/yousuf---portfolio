export default function ContactPage() {
  return (
    <main className="min-h-screen p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="text-gray-600 mt-2">
        For project inquiries, send details and timeline. I reply with a clear scope and plan.
      </p>

      <div className="border rounded-2xl p-6 mt-10 space-y-3 text-gray-700">
        <div>
          <span className="font-semibold">Email: </span>
          <span>yousuda@gmail.com</span>
        </div>
        <div>
          <span className="font-semibold">LinkedIn: </span>
          <span>https://www.linkedin.com/in/yousuf-a-dev/</span>
        </div>
        <div>
          <span className="font-semibold">Upwork: </span>
          <span>upwork.com/freelancers/youssaf</span>
        </div>

        <p className="text-sm text-gray-500 pt-2">
        </p>
      </div>
    </main>
  );
}