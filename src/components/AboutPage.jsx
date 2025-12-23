import { useState } from "react";

export default function AboutPage() {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-dvh w-full bg-gray-100 flex flex-col overflow-x-hidden">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 py-10 sm:py-14">

        {/* Page Title */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-blue-600 mb-10">
          About Ebola
        </h1>

        {/* ----------------------------- */}
        {/* What is Ebola Section */}
        {/* ----------------------------- */}
        <section className="mb-14">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 text-gray-900">
            What is Ebola?
          </h2>

          <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8">
            <img
              src="/images/ebola-virus.jpg"
              alt="Ebola virus illustration"
              className="w-full sm:w-80 md:w-[500px] h-52 sm:h-60 md:h-72 lg:h-80 object-cover rounded-md shadow"
            />

            <p className="text-gray-800 leading-relaxed text-base sm:text-lg mt-2 sm:mt-0">
              Ebola, also known as Ebola Virus Disease (EVD), is a rare but
              severe illness caused by the Ebola virus. It affects both humans
              and animals, causing symptoms such as fever, fatigue, and in
              severe cases, internal and external bleeding.
            </p>
          </div>
        </section>

        {/* ----------------------------- */}
        {/* Transmission Section */}
        {/* ----------------------------- */}
        <section className="mb-14">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 text-gray-900">
            How is Ebola Transmitted?
          </h2>

          <p className="text-gray-800 leading-relaxed text-base sm:text-lg">
            Ebola spreads through direct contact with the bodily fluids of an
            infected person or animal. It can also spread through contact with
            contaminated surfaces or materials, such as clothing or bedding that
            has been used by an infected person.
          </p>
        </section>

        {/* ----------------------------- */}
        {/* Symptoms Section */}
        {/* ----------------------------- */}
        <section className="mb-14">
          <h2 className="text-lg sm:text-xl font-semibold mb-5 text-gray-900">
            Symptoms of Ebola
          </h2>

          {/* Icon Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {/* Fever */}
            <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center text-center">
              <img src="/images/fever.png" alt="Fever" className="w-full max-w-28 h-24 object-contain" />
              <p className="mt-2 text-gray-700 font-medium">Fever</p>
            </div>

            {/* Headache */}
            <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center text-center">
              <img src="/images/headache.png" alt="Headache" className="w-full max-w-28 h-24 object-contain" />
              <p className="mt-2 text-gray-700 font-medium">Severe Headache</p>
            </div>

            {/* Muscle pain */}
            <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center text-center">
              <img src="/images/dia.png" alt="Muscle Pain" className="w-full max-w-28 h-24 object-contain" />
              <p className="mt-2 text-gray-700 font-medium">Muscle pain and Weakness</p>
            </div>

            {/* Vomiting */}
            <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center text-center">
              <img src="/images/vomit.png" alt="Vomiting" className="w-full max-w-28 h-24 object-contain" />
              <p className="mt-2 text-gray-700 font-medium">Vomiting and Diarrhea</p>
            </div>

            {/* Bleeding */}
            <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center text-center">
              <img src="/images/bleed.png" alt="Bleeding" className="w-full max-w-28 h-24 object-contain" />
              <p className="mt-2 text-gray-700 font-medium">Unexplained Bleeding</p>
            </div>
          </div>
        </section>

        {/* ----------------------------- */}
        {/* Prevention Section */}
        {/* ----------------------------- */}
        <section className="mb-6">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 text-gray-900">
            Prevention and Treatment
          </h2>

          <p className="text-gray-800 leading-relaxed text-base sm:text-lg">
            Currently, there is no specific treatment for Ebola. However, early
            supportive care, such as rehydration and treatment of specific
            symptoms, can improve chances of survival. Vaccines are also
            available to help prevent outbreaks.
          </p>
        </section>

      </div>
    </main>
  );
}