import Image from "next/image";

export default function ServicesSection() {
  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-600 tracking-wide uppercase mb-2">
            Impeccable Dry Clean Quality, Every Time
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-4 rounded-full" />
        </div>

        {/* Two-column Comparison */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center mb-10">
          {/* Left: Image */}
          <div className="flex-1 flex justify-center">
            <div className="rounded-xl overflow-hidden shadow-lg bg-white">
              <Image
                src="/img/dailywear2.jpeg"
                alt="Premium dry cleaning"
                width={400}
                height={300}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
          {/* Right: Feature Comparison */}
          <div className="flex-1 w-full max-w-lg">
            <div className="flex items-center justify-end mb-6">
              <div className="bg-blue-600 text-white px-6 py-2 rounded-l-md font-semibold shadow-md">
                Daily Wear
              </div>
              <div className="bg-gray-400 text-white px-6 py-2 rounded-r-md font-semibold">
                Others
              </div>
            </div>
            <ul className="space-y-4 text-base sm:text-lg">
              {[
                {
                  label: "100% Garment Care Label Adherence",
                  us: true,
                  others: false,
                },
                {
                  label: "Color Bleeding Proof Process",
                  us: true,
                  others: false,
                },
                { label: "Zero Shrinkage Guaranteed", us: true, others: false },
                { label: "99% Stain Removal Promise", us: true, others: false },
                {
                  label: "Color Restoration For Old Dark Garments",
                  us: true,
                  others: false,
                },
                {
                  label: "Whiter Technology For 3 Shades Brighter Whites",
                  us: true,
                  others: false,
                },
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center justify-between border-b border-gray-100 pb-2 last:border-b-0"
                >
                  <span className="flex items-center gap-2 font-medium">
                    {/* Icon */}
                    <svg
                      className="w-5 h-5 text-emerald-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item.label}
                  </span>
                  <span className="flex items-center gap-[100px]">
                    <svg
                      className={`w-5 h-5 ${
                        item.us ? "text-emerald-500" : "text-red-400"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {item.us ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      )}
                    </svg>
                    <svg
                      className={`w-5 h-5 ${
                        item.others ? "text-emerald-500" : "text-red-400"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {item.others ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      )}
                    </svg>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Description and Bullets */}
        <div className="max-w-4xl mx-auto text-gray-700 text-base sm:text-lg leading-relaxed">
          <p className="mb-4">
            We offer the finest dry cleaning in the city using the latest
            eco-friendly technology. As the most trusted dry cleaner in the
            city, we ensure:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Zero cloth shrinkage</li>
            <li>100% preservation of cloth shine and texture</li>
            <li>
              Zero harm to environment, unlike toxic oil-based solvents used by
              other dry cleaners in the city
            </li>
          </ul>
          <p>
            Daily Wear is the only dry clean brand to have developed chemicals
            for India specific stains like heena (mehendi), Indian turmeric,
            spices, ball pen ink, and very old stains. This allows us to achieve
            up to 99% stain removal during dry cleaning. Other dry cleaners in
            the city can achieve only up to 80% stain removal.
          </p>
          <p>
            Also, if you need a dry cleaner in the city who can make your whites
            shine all over again, you must try our service. Unlike, other local
            dry cleaners in the city, we use the latest Whitex technology that
            makes white clothes up to 3 shades brighter and restores their
            original whiteness.
          </p>
        </div>
      </div>
    </section>
  );
}
