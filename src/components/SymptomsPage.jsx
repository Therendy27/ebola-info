export default function SymptomsPage() {
  return (
    <main className="min-h-dvh bg-gray-100 flex flex-col lg:flex-row lg:gap-10 p-6 sm:p-10 lg:p-16">
      {/* Right on desktop, first on mobile */}
      <div className="flex-1 flex items-center justify-center mb-8 lg:mb-0 order-first lg:order-last">
        <img
          src="/images/body.jpg"
          alt="Symptoms of Ebola"
          className="w-full max-w-sm sm:max-w-md rounded-lg shadow-lg h-auto"
        />
      </div>

      {/* Text content */}
      <div className="flex-1">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-5 sm:mb-6">
          Symptoms of Ebola
        </h1>

        {/* Recognizing the Symptoms */}
        <section className="mb-6 sm:mb-8 bg-white p-5 sm:p-6 rounded-lg shadow-lg">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-black">
            Recognizing the Symptoms
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-3 sm:mb-4">
            Ebola Virus Disease (EVD) presents with various symptoms that often
            begin abruptly. It is essential to recognize these symptoms early,
            as prompt medical care can significantly improve the chances of
            survival. Here are the most common symptoms of Ebola:
          </p>
          <ul className="list-disc list-inside text-base sm:text-lg text-gray-800 space-y-1">
            <li>Fever</li>
            <li>Severe headache</li>
            <li>Muscle pain and weakness</li>
            <li>Fatigue</li>
            <li>Sore throat</li>
            <li>Vomiting and diarrhea</li>
            <li>Stomach pain</li>
            <li>Unexplained bleeding or bruising</li>
          </ul>
        </section>

        {/* Progression of Symptoms */}
        <section className="mb-6 sm:mb-8 bg-white p-5 sm:p-6 rounded-lg shadow-lg">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-black">
            Progression of Symptoms
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Symptoms typically appear between 2 to 21 days after exposure to the
            virus, with an average onset of 8–10 days. In the early stages,
            Ebola may mimic the flu, which makes diagnosis challenging without
            laboratory tests. As the disease progresses, symptoms may worsen and
            include internal and external bleeding, leading to more severe
            health complications.
          </p>
        </section>

        {/* When to Seek Medical Attention */}
        <section className="bg-white p-5 sm:p-6 rounded-lg shadow-lg">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-black">
            When to Seek Medical Attention
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            If you or someone you know begins showing symptoms after recent
            travel to an area affected by Ebola or has been in contact with an
            infected individual, seek medical attention immediately. Early
            supportive care with rehydration and treatment of symptoms can
            improve survival rates.
          </p>
        </section>
      </div>
    </main>
  );
}