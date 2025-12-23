import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import LiveUpdatesPage from "./components/LiveUpdatesPage";
import SymptomsPage from "./components/SymptomsPage";
import PreventionPage from "./components/PreventionPage";
import ContactPage from "./components/ContactPage";

// Optional stubs—you can create these later
const Symptoms = () => <main className="flex-1 mx-auto max-w-6xl p-6">Symptoms page</main>;
const Prevention = () => <main className="flex-1 mx-auto max-w-6xl p-6">Prevention page</main>;
const Live = () => <main className="flex-1 mx-auto max-w-6xl p-6">Live Updates page</main>;
const Contact = () => <main className="flex-1 mx-auto max-w-6xl p-6">Contact page</main>;

function Layout() {
  return (
    <div className="min-h-dvh w-full bg-gray-100 flex flex-col overflow-x-hidden">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="symptoms" element={<SymptomsPage />} />
          <Route path="prevention" element={<PreventionPage />} />
          <Route path="live-updates" element={<LiveUpdatesPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}