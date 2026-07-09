import Carousel from "./components/Carousel";
import Calendly from "./components/Calendly";
import Newsletter from "./components/Newsletter";
import ContactForm from "./components/ContactForm";

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
    name: "The Pre-Board",
    subtitle: "2-Hour Private Consultation",
    popular: true,
    description: "Work 1:1 with Ramon to build a personalized strategy designed for your specific travel needs. Flexible schedule: 1 session of 2 hours, or 2 sessions of 1 hour.",
    features: [
      "2 hours of private 1:1 strategy",
      "Next Trip guidance",
      "Points & Miles Roadmap",
      "Credit Card review & recommendations",
    ],
  },
  {
    name: "The Flight Plan",
    subtitle: "1st Course · Foundations Intro Program",
    description: "4-Week · Classes 1–4\n\nThis is where you finally see what’s possible.\n\nThe Pre-Board is designed to help beginners build a strong foundation in credit card points, travel strategy, and responsible card usage. Students gain clarity, avoid common mistakes, and learn the fundamentals needed to begin traveling smarter with confidence.",
    features: [
      "4 live 90-min group sessions (60 min teaching + 30 min live Q&A)",
      "Credit fundamentals & responsible use",
      "Card selection framework",
      "Sign-up bonus strategy",
      "Beginner travel planning guidance",
      "1 private 60-min strategy session with Ramon",
    ],
  },
  {
    name: "The Take Off",
    subtitle: "2nd Course · From Possibility to Clarity",
    description: "4-Week · Classes 5–8\n\nThis is where strategy begins to create real momentum.\n\nThe Take Off helps students move beyond the basics into smarter earning, stronger applications, better organization, and intentional travel planning. Students learn how to maximize opportunities, troubleshoot challenges, and build systems that increase their travel results faster.",
    features: [
      "4 live 90-min group sessions (60 min teaching + 30 min live Q&A)",
      "Live application walkthroughs",
      "Credit card denial troubleshooting",
      "Points organization & referral strategy",
      "Advanced card selection framework",
      "Player 2 strategy",
      "Advanced sign-up bonus strategy",
      "2 private 60-min strategy sessions with Ramon",
    ],
  },
];

const testimonials = [
  {
    name: "Terrie Moore",
    role: "",
    image: "/img/terrie.webp", // Replace with real image
    quote: "Have you ever wondered how I can travel so much? Well, thanks to a virtual workshop called Points Are Power I learned a lot of valuable info that upgraded my travel experience. Things like having the right travel card that offers the most points. I used my Chase points to help pay for my airline ticket to Thailand, to book two hotel stays during my road trip to San Miguel–Guadalajara–Puerto Vallarta, and got a $50 statement credit every year. You should follow Ramon Anibal's travel page and sign up for his next webinar. You can thank me later!",
  },
  {
    name: "Rebecca Ellenson",
    role: "",
    image: "/img/rebecca.webp", // Replace with real image
    quote: "Ramon Anibal has helped us travel for so much less money than before. I used to use mileage cards like everyone else does — Ramon taught me how to multiply the value. My husband and I have taken a total of 12 round trip flights in the past 2 years and not one has been full price. This system really works. It's worth the time.",
  },
  // {
  //   name: "Elena Rodriguez",
  //   role: "Digital Nomad",
  //   image: "https://randomuser.me/api/portraits/women/68.jpg", // Replace with real image
  //   quote: "I thought I knew what I was doing, but the Strategy Intensive showed me how much I was leaving on the table. Worth every penny.",
  // },
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
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#services"
              className="inline-block rounded-full bg-[#15548f] px-8 py-3 text-lg font-semibold text-white transition-transform hover:scale-105"
            >
              Explore Our Services
            </a>
            <a
              href="#consultation"
              className="inline-block rounded-full border-2 border-white bg-white/10 px-8 py-3 text-lg font-semibold text-white backdrop-blur-sm transition-transform hover:scale-105 hover:bg-white/20"
            >
              Book Your Free 30-Min Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Banner */}
      <div className="bg-[#15548f] py-4 text-center text-white font-semibold text-4xl">
        Your Boarding Pass to Points &amp; Miles
      </div>

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
              <div className="flex w-full items-center justify-center rounded-2xl bg-accent/40">
                <img 
                  src="/img/about-img.avif" 
                  alt="Avión"
                  className="object-contain rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Coach */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="flex items-center justify-center">
              <div className="flex w-full items-center justify-center rounded-2xl bg-accent/40">
                <img
                  src="/img/ramon.webp"
                  alt="Ramon Quintana"
                  className="object-contain rounded-2xl h-100 "
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#15548f] md:text-4xl">
                Meet Your Credit Card Strategist — Ramon Quintana
              </h2>
              <p className="mt-6 leading-relaxed text-gray-600">
                Ramon is a travel strategist and points educator who has helped hundreds of families unlock luxury travel experiences they never thought possible. His passion for smart travel began when he discovered the untapped power of credit card rewards — and realized most people were leaving thousands of dollars in value on the table every year.
              </p>
              <p className="mt-4 leading-relaxed text-gray-600">
                Through his programs and community, Ramon breaks down complex points strategies into clear, actionable steps — so anyone, regardless of experience, can start traveling smarter. His approach is personal, practical, and proven.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Banner */}
      <div className="bg-[#15548f] py-4 text-center text-white font-semibold text-4xl">
        Unleashing the Power of Points
      </div>

      <section id="about" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="flex items-center justify-center">
              <div className="flex w-full items-center justify-center rounded-2xl bg-accent/40">
                <img 
                  src="/img/Airplane.webp" 
                  alt="Avión"
                  className="object-contain rounded-2xl"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#15548f] md:text-4xl">
                Points aren't just rewards, they're leverage
              </h2>
              <p className="mt-6 leading-relaxed text-gray-600">
                Use them strategically and they unlock free flights, luxury hotel stays, upgrades, and travel experiences most people think they have to pay cash for.
              </p>
              <p className="mt-4 leading-relaxed text-gray-600">
                I'll show you how to earn smarter, redeem better, and turn the money you already spend into extraordinary first-class travel. ✈️
              </p>
            </div>            
          </div>
        </div>
      </section>

      {/* Banner 2 */}
      <div className="bg-[#15548f] py-6 text-center text-white">
        <p className="text-4xl font-semibold">Ready to start your journey?</p>
        <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#consultation"
            className="inline-block rounded-full border-2 border-white px-6 py-2 text-lg font-semibold text-white transition-colors hover:bg-white hover:text-[#15548f]"
          >
            Use my Calendly
          </a>
          <a
            href="https://wa.me/13057880456?text=Hi%2C%20I'm%20interested%20in%20your%20Points%20%26%20Miles%20program"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full border-2 border-white px-6 py-2 text-lg font-semibold text-white transition-colors hover:bg-white hover:text-[#15548f]"
          >
            Message me on WhatsApp
          </a>
        </div>
      </div>

      {/* Gallery Section */}
      {/* <section className="bg-[#15548f] py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-10 text-center text-3xl font-bold text-white md:text-4xl">
            Travel Adventures Powered by Points
          </h2>
          <Carousel images={galleryImages} />
        </div>
      </section> */}

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

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                <p className="mt-1 text-xs font-medium text-gray-400 uppercase tracking-wide">
                  {service.subtitle}
                </p>
                <div className="mt-3 space-y-1">
                  {service.description.split("\n\n").map((para, i) => (
                    <p key={i} className={`text-sm ${i === 0 ? "font-medium text-gray-400" : "text-gray-500"}`}>
                      {para}
                    </p>
                  ))}
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
                  href="https://calendly.com/10qramon/new-meeting?embed_domain=localhost%3A3000&embed_type=Inline&back=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 block rounded-full py-3 text-center text-sm font-semibold transition-colors ${
                    service.popular
                      ? "bg-[#15548f] text-white hover:bg-[#15548f]/90"
                      : "bg-accent text-[#15548f] hover:bg-accent/80"
                  }`}
                >
                  Book a Free Strategy Call
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section id="testimonials" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#15548f] md:text-4xl">
              Success Stories
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              See how our clients are turning everyday spending into luxury travel experiences.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {testimonials.map((t, index) => (
              <div key={index} className="flex flex-col rounded-2xl border border-gray-100 bg-gray-50 p-8 shadow-sm transition-transform hover:-translate-y-1">
                <div className="mb-6 flex items-center gap-4">
                  <img 
                    src={t.image} 
                    alt={t.name} 
                    className="h-14 w-14 rounded-full border-2 border-[#15548f] object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{t.name}</h4>
                    
                  </div>
                </div>
                
                <div className="relative">
                  {/* Quote Icon Decoration */}
                  <span className="absolute -top-4 -left-2 text-4xl text-[#15548f]/30 font-serif">“</span>
                  <p className="italic text-gray-700 leading-relaxed">
                    {t.quote}
                  </p>
                </div>

                <div className="mt-6 flex text-[#15548f]">
                  {/* 5-star rating */}
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner 2 */}
      <div className="bg-[#15548f] py-6 text-center text-white">
        <p className="text-4xl font-semibold">Book a Free Travel Consultation</p>
        <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#consultation"
            className="inline-block rounded-full border-2 border-white px-6 py-2 text-lg font-semibold text-white transition-colors hover:bg-white hover:text-[#15548f]"
          >
            Use my Calendly
          </a>
          <a
            href="https://wa.me/13057880456?text=Hi%2C%20I'm%20interested%20in%20your%20Points%20%26%20Miles%20program"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full border-2 border-white px-6 py-2 text-lg font-semibold text-white transition-colors hover:bg-white hover:text-[#15548f]"
          >
            Message me on WhatsApp
          </a>
        </div>
      </div>

      {/* Book a Free Travel Consultation */}
      <section id="consultation" className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#15548f] md:text-4xl">
              Claim Your Slot
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Ready to start your journey? Schedule a free consultation and discover how to make luxury travel a
              reality for your family.
            </p>
          </div>
          <div className="mt-10">
            <Calendly />
          </div>
        </div>
      </section>

      {/* Intake Form Section */}
      <section id="intake-form" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#15548f] md:text-4xl">
              Travel Intake Form
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Please complete this form when making an appointment on Calendly or WhatsApp.
            </p>
          </div>
          <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSd-kkBWR9l_LVlVJGD2-eYrxTTsWKlLCYQsjce0b906uz5Isg/viewform?embedded=true"
              width="100%"
              height="1200"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              title="Travel Intake Form"
              className="w-full"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-[#15548f] py-20">
        <div className="mx-auto max-w-md px-6">
          <Newsletter />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-20">
        <div className="mx-auto max-w-xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#15548f] md:text-4xl">Get in Touch</h2>
            <p className="mx-auto mt-4 max-w-md text-gray-600">
              Have questions? Fill out the form and I&apos;ll connect with you directly on WhatsApp.
            </p>
          </div>
          <div className="mt-10">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Banner */}
      <div className="bg-[#15548f] py-4 text-center text-white font-semibold text-4xl">
        
      </div>

      {/* Collaborising Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
          <div>
            <p className="text-2xl leading-relaxed text-gray-600 md:text-3xl">
              <span className="font-bold text-[#15548f]">Points Are Power</span>{" "}
              is a program of{" "}
              <span className="font-bold text-[#15548f]">Collaborising 501(c)(3)</span>
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                 A nonprofit organization committed to empowering people through spiritual alignment, financial education, and restorative support—anchored in the belief that every person deserves dignity, opportunity, and the ability to rise.
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
