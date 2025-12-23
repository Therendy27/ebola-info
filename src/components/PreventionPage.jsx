export default function PreventionPage() {
  return (
    <main className="min-h-dvh bg-gray-100 p-6 sm:p-10 lg:p-16">
      {/* Header */}
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-8 text-center lg:text-left">
        Prevention
      </h1>

      {/* Section 1: How to Prevent Ebola */}
      <section className="bg-white p-6 sm:p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-black">
          How to Prevent Ebola
        </h2>
        <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
          Prevention is key when it comes to stopping the spread of Ebola.
          Follow these guidelines to reduce the risk of infection.
        </p>
        <ul className="list-disc list-inside text-base sm:text-lg text-gray-800 space-y-2">
          <li>Avoid contact with blood and body fluids of people who are sick.</li>
          <li>
            Avoid handling items that may have come into contact with an infected person.
          </li>
          <li>
            Wash your hands frequently with soap and water or use an alcohol-based
            hand sanitizer.
          </li>
          <li>
            Avoid contact with bats, monkeys, and other animals that may carry the virus.
          </li>
          <li>
            Follow infection prevention practices in healthcare settings, including
            wearing personal protective equipment (PPE).
          </li>
        </ul>
      </section>

      {/* Section 2: Vaccination */}
      <section className="bg-white p-6 sm:p-8 rounded-lg shadow-lg mb-10">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-black">
          Vaccination and Health Measures
        </h2>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
          Vaccines are available for Ebola, and it is important to get vaccinated
          if you are in an area with a high risk of infection. Always follow public
          health guidelines and seek medical attention if you suspect exposure.
        </p>
      </section>

      {/* Section 3: Prevention Images */}
      <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        <img
          src="/images/washyourhands.avif"
          alt="Wash your hands regularly"
          className=" h-48 object-cover rounded-lg shadow-md"
        />
        <img
          src="/images/blood.webp"
          alt="Avoid contact with infected blood"
          className=" h-48 object-cover rounded-lg shadow-md"
        />
        <img
          src="/images/avoid.jpg"
          alt="Avoid close contact with infected individuals"
          className="h-48 object-cover rounded-lg shadow-md"
        />
        <img
          src="/images/procedures.jpeg"
          alt="Follow proper healthcare procedures"
          className=" h-48 object-cover rounded-lg shadow-md"
        />
      </section>
    </main>
  );
}