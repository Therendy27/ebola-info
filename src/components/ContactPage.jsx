import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState(null); // "ok" | "error" | null

  async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
    };

    try {
      console.log("Contact payload:", payload);
      setStatus("ok");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-dvh bg-gray-100 p-6 sm:p-10 lg:p-16">
      {/* Page Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-8 text-center">
        Contact Us
      </h1>

      {/* Card */}
      <section className="bg-white max-w-lg w-full mx-auto p-6 sm:p-8 rounded-lg shadow-lg">
        {/* Heading */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-black text-center">
          Get in Touch
        </h2>

        <p className="text-base sm:text-lg text-gray-700 mb-6 text-center">
          If you have questions, need further information, or want to stay
          updated, reach out to us—we’re here to help.
        </p>

        {/* Success Message */}
        {status === "ok" && (
          <div
            className="mb-6 rounded-md bg-green-50 p-4 text-green-800"
            role="status"
            aria-live="polite"
          >
            ✅ Thanks! Your message was sent.
          </div>
        )}

        {/* Error Message */}
        {status === "error" && (
          <div
            className="mb-6 rounded-md bg-red-50 p-4 text-red-800"
            role="status"
            aria-live="assertive"
          >
            ⚠️ Something went wrong. Please try again.
          </div>
        )}

        {/* Contact Form */}
        <form className="grid gap-5" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-base sm:text-lg font-medium text-gray-800 mb-2"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              placeholder="Enter your full name"
              className="w-full rounded-lg border border-gray-300 px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-base sm:text-lg font-medium text-gray-800 mb-2"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-lg border border-gray-300 px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-base sm:text-lg font-medium text-gray-800 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Write your message here... (e.g., I have a question about Ebola symptoms or prevention)"
              className="w-full rounded-lg border border-gray-300 px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-4 py-3 text-white text-lg font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}