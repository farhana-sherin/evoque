import React from "react";
import heroUrl from "../assets/about-hero.svg";

export const About = () => {
  return (
    <section className="bg-[#0b0b0c] text-white">
      <div
        className="relative overflow-hidden"
        style={{ backgroundImage: `url(${heroUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="py-28 md:py-36 lg:py-40">
            <div className="max-w-3xl">
              <span className="inline-flex items-center rounded-full bg-white/10 ring-1 ring-white/15 px-3 py-1 text-xs tracking-wide uppercase">
                Crafted Luxury
              </span>
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
                Evoque — Where Style Meets Craftsmanship
              </h1>
              <p className="mt-5 text-base sm:text-lg text-white/80 leading-relaxed">
                We design footwear that elevates your presence and empowers your journey. Our collections
                fuse refined aesthetics, enduring comfort, and meticulous detailing.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <a href="#vision" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-black bg-white hover:bg-white/90 transition-colors">
                  Our Vision
                </a>
                <a href="#craft" className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-white/90 ring-1 ring-white/25 hover:bg-white/10 transition-colors">
                  Craft & Quality
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 md:py-28 space-y-16">
        <div id="vision" className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white text-gray-900 rounded-3xl p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.15)] ring-1 ring-white/10">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Our Vision</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Evoque envisions a world where footwear transcends utility and becomes an experience of luxury,
              confidence, and artistry. We aspire to create shoes that leave a lasting impression and inspire
              those who wear them to embrace their unique style with pride.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              We blend timeless elegance with modern trends, making every pair a statement of individuality,
              sophistication, and lifestyle.
            </p>
          </div>
          <div className="rounded-3xl ring-1 ring-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 md:p-12">
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-2xl bg-white/10 backdrop-blur p-6 ring-1 ring-white/15">
                <p className="text-sm text-white/70">Design Philosophy</p>
                <p className="mt-2 text-lg font-medium">Timeless silhouettes, modern lines</p>
              </div>
              <div className="rounded-2xl bg-white/10 backdrop-blur p-6 ring-1 ring-white/15">
                <p className="text-sm text-white/70">Comfort First</p>
                <p className="mt-2 text-lg font-medium">Engineered for all-day wear</p>
              </div>
              <div className="rounded-2xl bg-white/10 backdrop-blur p-6 ring-1 ring-white/15">
                <p className="text-sm text-white/70">Material Integrity</p>
                <p className="mt-2 text-lg font-medium">Premium, responsibly sourced</p>
              </div>
              <div className="rounded-2xl bg-white/10 backdrop-blur p-6 ring-1 ring-white/15">
                <p className="text-sm text-white/70">Detailing</p>
                <p className="mt-2 text-lg font-medium">Every stitch tells a story</p>
              </div>
            </div>
          </div>
        </div>

        <div id="craft" className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          <div className="rounded-3xl ring-1 ring-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 md:p-12 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Craftsmanship & Quality</h2>
              <p className="mt-4 text-white/80 leading-relaxed">
                Every Evoque shoe tells a story of passion, precision, and expertise. We source the finest
                materials and ensure that each stitch is executed with care.
              </p>
              <p className="mt-4 text-white/80 leading-relaxed">
                Our artisans combine traditional techniques with modern innovations for unmatched comfort,
                style, and longevity.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-2xl bg-white/10 backdrop-blur p-5 ring-1 ring-white/15">
                <p className="text-3xl font-semibold">50+</p>
                <p className="text-sm text-white/70">Artisan Techniques</p>
              </div>
              <div className="rounded-2xl bg-white/10 backdrop-blur p-5 ring-1 ring-white/15">
                <p className="text-3xl font-semibold">100%</p>
                <p className="text-sm text-white/70">Premium Materials</p>
              </div>
              <div className="rounded-2xl bg-white/10 backdrop-blur p-5 ring-1 ring-white/15">
                <p className="text-3xl font-semibold">24 mo</p>
                <p className="text-sm text-white/70">Wear-tested</p>
              </div>
            </div>
          </div>
          <div className="bg-white text-gray-900 rounded-3xl p-0 shadow-[0_20px_60px_rgba(0,0,0,0.15)] ring-1 ring-white/10 overflow-hidden">
            <img src={heroUrl} alt="Evoque craft" className="w-full h-64 sm:h-80 object-cover" />
            <div className="p-8 md:p-12">
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight">Innovation & Sustainability</h3>
              <p className="mt-3 text-gray-700 leading-relaxed">
                We embrace innovation while staying responsible to the planet—eco-conscious materials,
                mindful packaging, and ethical sourcing underpin our process.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg text-white/80 italic">
            Choosing Evoque is choosing a journey of style, confidence, and uncompromising quality.
          </p>
          <p className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight">
            Evoque — Walk Your Story, Leave a Legacy.
          </p>
        </div>
      </div>
    </section>
  );
};
