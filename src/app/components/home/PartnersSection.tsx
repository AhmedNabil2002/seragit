import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

// Import logos
import wazaratLogo from "@/assets/images/customer1.png";
import ictLogo from "@/assets/images/customer2.png";
import ministryLogo from "@/assets/images/customer3.png";
import waterLogo from "@/assets/images/customer4.png";
import schneiderLogo from "@/assets/images/customer5.png";
import maritimeLogo from "@/assets/images/customer6.png";
import environmentalLogo from "@/assets/images/customer7.png";
import technicalLogo from "@/assets/images/customer8.png";
import Logoone from "@/assets/images/customer9.png";
import Logotwo from "@/assets/images/customer10.png";
import Logothree from "@/assets/images/customer11.png";
import Logofour from "@/assets/images/customer12.png";
import Logofive from "@/assets/images/customer13.png";
import Logosex from "@/assets/images/customer14.png";
import Logoseven from "@/assets/images/customer15.png";
import Logoeight from "@/assets/images/customer16.png";
import Logonine from "@/assets/images/customer17.png";
import Logoten from "@/assets/images/customer18.png";
import Logoeleven from "@/assets/images/customer19.png";
import Logotwelve from "@/assets/images/customer20.png";

export function PartnersSection() {
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  } as const;

  const subheadingVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
    },
  } as const;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const M = motion as unknown as any;

  const partners = [
    { name: "Wazarat", logo: wazaratLogo },
    { name: "ICT Solutions", logo: ictLogo },
    { name: "Ministry of Water", logo: ministryLogo },
    { name: "Water Infrastructure", logo: waterLogo },
    { name: "Schneider Electric", logo: schneiderLogo },
    { name: "Maritime Solutions", logo: maritimeLogo },
    { name: "Environmental Tech", logo: environmentalLogo },
    { name: "Technical Institute", logo: technicalLogo },
    { name: "Partner Nine", logo: Logoone },
    { name: "Partner Ten", logo: Logotwo },
    { name: "Partner Eleven", logo: Logothree },
    { name: "Partner Twelve", logo: Logofour },
    { name: "Partner Twelve", logo: Logofive },
    { name: "Partner Twelve", logo: Logosex },
    { name: "Partner Twelve", logo: Logoseven },
    { name: "Partner Twelve", logo: Logoeight },
    { name: "Partner Twelve", logo: Logonine },
    { name: "Partner Twelve", logo: Logoten },
    { name: "Partner Twelve", logo: Logoeleven },
    { name: "Partner Twelve", logo: Logotwelve },
  ];

  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="relative py-7 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-5">
          <M.div
            variants={headingVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4"
          >
            <Sparkles className="w-4 h-4" />
            Trusted by Industry Leaders
          </M.div>

          <M.h2
            variants={headingVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4"
          >
            Powering Innovation
            <span className="block text-transparent bg-clip-text bg-gradient-to-r bg-blue-600 ">
              Across Industries
            </span>
          </M.h2>

          <M.p
            variants={subheadingVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto"
          >
            We collaborate with trusted organizations to deliver impactful digital
            transformation solutions.
          </M.p>
        </div>

        {/* Logos Carousel */}
        <div className="relative">
          <div className="overflow-hidden py-2">
  <M.div
    className="flex w-max gap-6"
    animate={{ x: ["0%", "-50%"] }}
    transition={{
      duration: 40,
      ease: "linear",
      repeat: Infinity,
    }}
  >
    {[...partners, ...partners].map((partner, index) => (
      <div
        key={index}
        className="flex items-center justify-center w-[260px] h-[170px] shrink-0"
      >
        <img
          src={partner.logo}
          alt={partner.name}
          className="w-full h-full object-contain"
        />
      </div>
    ))}
  </M.div>
</div>

        </div>

        {/* CTA */}
        {/* <M.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-slate-600 mb-6">
            Join our growing network of partners
          </p>
          <Link to="/services#contact">
            <button className="bg-gradient-to-r bg-blue-600  text-white px-10 py-4 rounded-full font-semibold hover:shadow-xl transition-all hover:-translate-y-1">
              Become a Partner
            </button>
          </Link>
        </M.div> */}

      </div>
    </section>
  );
}
