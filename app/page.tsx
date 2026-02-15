import Carousel from "./components/Carousel";
import Calendly from "./components/Calendly";
import Newsletter from "./components/Newsletter";

const galleryImages = [
  // { src: "/img/gallery-1.avif", alt: "Travel adventure 1" },
  { src: "/img/gallery-2.avif", alt: "Travel adventure 2" },
  { src: "/img/gallery-3.avif", alt: "Travel adventure 3" },
  { src: "/img/gallery-4.avif", alt: "Travel adventure 4" },
  { src: "/img/gallery-5.avif", alt: "Travel adventure 5" },
  { src: "/img/gallery-6.avif", alt: "Travel adventure 6" },
];

const services = [
  {
    name: "4 Weeks Program",
    originalPrice: "$497",
    price: "$297",
    description: "A focused jumpstart to earning and using travel points.",
    features: [
      "Personalized credit card recommendations",
      "Basic points strategy guide",
      "Email support",
      "Weekly check-ins",
    ],
  },
  {
    name: "12 Weeks Program",
    originalPrice: "$997",
    price: "$597",
    description: "Our most popular program for families ready to travel smarter.",
    features: [
      "Everything in 4 Weeks",
      "Custom travel booking assistance",
      "Points maximization strategy",
      "Priority email & chat support",
      "Bi-weekly strategy calls",
    ],
    popular: true,
  },
  {
    name: "20 Weeks Program",
    originalPrice: "$1,897",
    price: "$997",
    description: "The ultimate program for full-service luxury travel planning.",
    features: [
      "Everything in 12 Weeks",
      "Dedicated travel concierge",
      "Flight & hotel booking management",
      "Complete points audit & optimization",
      "Unlimited support calls",
    ],
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center overflow-hidden"
      >
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="https://www.pexels.com/es-es/download/video/9525409/" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
            Unlock Luxury Travel with Points &amp; Miles
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-white/80 md:text-2xl">
            Transform everyday expenses into unforgettable travel experiences.
            Travel freedom is more accessible than ever.
          </p>
          <a
            href="#services"
            className="mt-8 inline-block rounded-full bg-[#15548f] px-8 py-3 text-lg font-semibold text-primary transition-transform hover:scale-105"
          >
            Explore Our Services
          </a>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-[#15548f] md:text-4xl">
                About Points Are Power
              </h2>
              <p className="mt-6 leading-relaxed text-gray-600">
                We believe every family deserves to experience luxury travel
                without the luxury price tag. At Points Are Power, we specialize
                in helping you maximize credit card points and miles to unlock
                first-class flights, five-star hotels, and unforgettable
                vacations.
              </p>
              <p className="mt-4 leading-relaxed text-gray-600">
                Whether you&apos;re new to points or a seasoned traveler, our
                expert strategies make it simple to turn your everyday spending
                into extraordinary travel experiences for the whole family.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex h-64 w-full items-center justify-center rounded-2xl bg-accent/40">
                <img 
                  src="/img/about-img.avif" 
                  alt="Avión"
                  className="h-100 w-150 object-contain rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-[#15548f] py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-10 text-center text-3xl font-bold text-white md:text-4xl">
            Travel Adventures Powered by Points
          </h2>
          <Carousel images={galleryImages} />
        </div>
      </section>

      {/* Services / Pricing Section */}
      <section id="services" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#15548f] md:text-4xl">
              Our Services
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Choose the plan that fits your travel goals. Every plan is designed
              to help you travel smarter and save more.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.name}
                className={`relative flex flex-col rounded-2xl border p-8 transition-shadow hover:shadow-lg ${
                  service.popular
                    ? "border-[#15548f] bg-white shadow-md"
                    : "border-gray-200 bg-white"
                }`}
              >
                {service.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#15548f] px-4 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-[#15548f]">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {service.description}
                </p>
                <div className="mt-6">
                  <p className="text-lg text-gray-400 line-through">
                    {service.originalPrice}
                  </p>
                  <p className="text-4xl font-bold text-[#15548f]">
                    {service.price}
                  </p>
                </div>
                <ul className="mt-6 flex-1 space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#15548f]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-8 block rounded-full py-3 text-center text-sm font-semibold transition-colors ${
                    service.popular
                      ? "bg-[#15548f] text-white hover:bg-[#15548f]/90"
                      : "bg-accent text-[#15548f] hover:bg-accent/80"
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Book a Free Travel Consultation */}
      <section id="consultation" className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#15548f] md:text-4xl">
              Book a Free Travel Consultation
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Ready to start your journey? Schedule a free consultation with our
              travel points experts and discover how to make luxury travel a
              reality for your family.
            </p>
          </div>
          <div className="mt-10">
            <Calendly />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-[#15548f] py-20">
        <div className="mx-auto max-w-md px-6">
          <Newsletter />
        </div>
      </section>

      {/* Collaborising Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
          <div>
            <p className="text-2xl leading-relaxed text-gray-600 md:text-3xl">
              <span className="font-bold text-[#15548f]">Points Are Power</span>{" "}
              is a program of{" "}
              <span className="font-bold text-[#15548f]">Collaborising</span>
            </p>
            <a
              href="https://www.collaborising.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full bg-[#15548f] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#15548f]/90"
            >
              Visit Collaborising
            </a>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/collaborising-1.webp"
              alt="Collaborising"
              className="w-full max-w-md rounded-2xl object-contain"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
