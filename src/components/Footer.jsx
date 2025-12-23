// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white py-10 px-6 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-5 gap-6">

        <div>
          <h3 className="font-semibold mb-2">Information Sources</h3>
          <p className="text-sm">
            All medical content is sourced from trusted organizations such as
            the World Health Organization (WHO) and Centers for Disease Control
            and Prevention (CDC).
          </p>
        </div>

        <div className= "col-span-1 flex flex-col items-center text-center">
          <h3 className="font-semibold mb-2">About</h3>
          <p className="text-sm">About Ebola</p>
        </div>

        <div className= "col-span-1 flex flex-col items-center text-center">
          <h3 className="font-semibold mb-2">Resources</h3>
          <p className="text-sm">Symptoms</p>
          <p className="text-sm">Prevention</p>
        </div>

        <div className= "col-span-1 flex flex-col items-center text-center">
          <h3 className="font-semibold mb-2">Support</h3>
          <p className="text-sm">Contact</p>
          <p className="text-sm">Subscribe</p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Ebola Info Center</h3>
          <p className="text-sm">+1 (800) 555-019</p>
          <p className="text-sm">email@ebolainfocenter.com</p>
        </div>
      </div>

      <p className="text-center text-xs mt-8">2024 Ebola Information Center</p>
    </footer>
  );
}