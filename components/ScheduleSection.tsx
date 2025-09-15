import Image from "next/image";

export default function ScheduleSection() {
  return (
    <section className="w-full  py-12 sm:py-16 lg:py-20 flex justify-center items-center animate-fade-in">
      <div className="max-w-5xl w-full mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16 px-4">
        {/* Left: Text & Form */}
        <div className="flex-1 w-full max-w-lg">
          <h2 className="text-center md:text-left text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-2 leading-tight">
            Looking For The <br className="hidden md:block" />
            <span className="font-normal">
              &quot;BEST DRY CLEANERS IN CITY?&quot;
            </span>
          </h2>
          <h3 className="text-center md:text-left text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 mt-2">
            WELCOME TO DAILY WEAR
          </h3>
          <hr className="my-4 border-gray-300" />
          <div className="text-lg sm:text-xl text-gray-800 space-y-1 mb-4 font-medium">
            <div>Trusted By 10,000+ Customers</div>
            <div>Serving Across City</div>
            <div className="font-bold text-black">
              Flat 20% Off On 1st Order
            </div>
          </div>
          <hr className="my-4 border-gray-300" />
          <div className="text-sm text-gray-700 mb-2">
            Try No.1 Dry Cleaner in City, To Feel The Difference
          </div>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none bg-white text-gray-900"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none bg-white text-gray-900"
            />
            <input
              type="text"
              placeholder="Address"
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none bg-white text-gray-900"
            />
            <button
              type="submit"
              className="w-full bg-blue-900 hover:bg-blue-600 text-white font-semibold py-2.5 rounded-full text-base shadow-lg transition-all duration-200"
            >
              Schedule Free Pick up
            </button>
          </form>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center items-center w-full max-w-xs md:max-w-sm">
          <Image
            src="/img/laundry-man.png"
            alt="Laundry professional holding suit"
            width={320}
            height={320}
            className="object-contain drop-shadow-xl rounded-xl bg-white"
            priority
          />
        </div>
      </div>
    </section>
  );
}
