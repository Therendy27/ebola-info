export default function HomePage() {
  return (
    <main className="flex-1 grid place-items-center">
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="mx-auto max-w-4xl text-3xl sm:text-4xl lg:text-5xl font-semibold text-blue-600">
          Stay Informed on the Ebola Outbreak
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-gray-800">
          Get the latest learn about the symptoms and prevention and
          how you can protect yourself and your loved ones.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="about"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-white font-semibold hover:bg-blue-700 transition"
          >
            Learn About Ebola
          </a>
          <a
            href="live-updates"
            className="inline-flex items-center justify-center rounded-md bg-green-400 px-5 py-3 text-white ont-semibold hover:bg-green-300 transition"
          >
            Live Updates
          </a>
        </div>
      </section>
    </main>
  );
}