import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import ServiceDiscovery from "@/components/sections/ServiceDiscovery";
import AboutUs from "@/components/sections/AboutUs";
import Testimonials from "@/components/sections/Testimonials";
import CallToAction from "@/components/sections/CallToAction";
import { Stat } from "@/components/ui/Stats";
import { FaUserTie, FaSmile, FaFileInvoiceDollar, FaGlobeAfrica } from "react-icons/fa";

const highlightStats = [
  {
    value: 500,
    label: "Happy Clients Across Kenya",
    icon: <FaSmile className="text-secondary" />,
  },
  {
    value: 1200,
    label: "Filings Completed Annually",
    icon: <FaFileInvoiceDollar className="text-secondary" />,
  },
  {
    value: 25,
    label: "Industry Experts On Staff",
    icon: <FaUserTie className="text-secondary" />,
  },
  {
    value: "47 Counties",
    label: "Nationwide Coverage",
    icon: <FaGlobeAfrica className="text-secondary" />,
  },
];

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      <Hero />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {highlightStats.map((stat, index) => (
              <Stat key={index} value={stat.value} label={stat.label} icon={stat.icon} />
            ))}
          </div>
        </div>
      </section>

      <Services />
      <ServiceDiscovery className="py-16" />
      <AboutUs />
      <Testimonials />
      <CallToAction />
    </div>
  );
}
