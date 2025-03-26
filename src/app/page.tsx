/* eslint-disable @next/next/no-img-element */
export default function Home() {
  const Provider = [
    { id: 1, image: "/provider/1.webp" },
    { id: 2, image: "/provider/2.webp" },
    { id: 3, image: "/provider/3.webp" },
    { id: 4, image: "/provider/4.webp" },
    { id: 5, image: "/provider/5.webp" },
    { id: 6, image: "/provider/6.webp" },
    { id: 7, image: "/provider/7.webp" },
    { id: 8, image: "/provider/8.webp" },
    { id: 9, image: "/provider/9.webp" },
    { id: 10, image: "/provider/10.webp" },
    { id: 11, image: "/provider/11.webp" },
    { id: 12, image: "/provider/12.webp" },
    { id: 13, image: "/provider/13.webp" },
    { id: 14, image: "/provider/14.webp" },
    { id: 15, image: "/provider/15.webp" },
    { id: 16, image: "/provider/16.webp" },
    { id: 17, image: "/provider/17.webp" },
    { id: 18, image: "/provider/18.webp" },
    { id: 19, image: "/provider/19.webp" },
    { id: 20, image: "/provider/20.webp" },
    { id: 21, image: "/provider/21.webp" },
    { id: 22, image: "/provider/22.webp" },
    { id: 23, image: "/provider/23.webp" },
    { id: 24, image: "/provider/24.webp" },
  ];

  const linkUtama = "https://9lapak2.site";
  const linkRtp = "https://pola9lapak.online";

  return (
    <>
      <div className="bg-neutral-900 text-neutral-100 min-h-screen">
        <img src="/logo-gradient.png" className="w-52 mx-auto py-10" alt="" />

        <div className="mx-auto px-8">
          <div className="grid grid-cols-1 gap-4 md:items-center">
            <div className="bg-neutral-800 p-8 rounded-2xl">
              <h1 className="block text-3xl font-bold text-gray-800 dark:text-white">
                Main Bentar Langsung Cuan di Situs{" "}
                <span className="text-teal-600 font-black">9LAPAK</span>
              </h1>
              <p className="mt-3 text-sm leading-7 text-neutral-200">
                Temukan keseruan tanpa batas di 9lapak, situs judi online paling
                gacor yang siap memberikan kemenangan maksimal setiap hari
              </p>
            </div>

            <div className="bg-neutral-800 p-8 rounded-2xl">
              <div id="button-cta" className="grid gap-3 w-full">
                <a
                  className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-LG font-medium rounded-xl active:scale-95 transition-all bg-red-600 text-white hover:bg-red-700 focus:outline-hidden focus:bg-red-700 disabled:opacity-50 disabled:pointer-events-none"
                  href={linkUtama}
                >
                  Masuk / Daftar
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>
                <a
                  className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-LG font-medium rounded-xl active:scale-95 transition-all bg-teal-600 text-white hover:bg-teal-700 shadow-2xs focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none"
                  href={linkRtp}
                >
                  RTP Update
                </a>
              </div>
            </div>

            <div className="bg-neutral-800 p-8 rounded-2xl">
              <img
                className="w-full rounded-xl"
                src="/17.webp"
                alt="Hero Image"
              />
            </div>
          </div>
        </div>

        <div className="bg-neutral-900 px-8">
          <div className="mx-auto bg-neutral-800 p-8 rounded-2xl mt-4 text-left">
            <h1 className="font-extrabold leading-[3rem] text-white text-3xl">
              Situs Slot Terbaik
            </h1>
            <p className="font-semibold leading-8 mt-2 text-xl">
              Lapaknya para sultan, bikin Cuan auto Jeckpot setiap hari!
            </p>
            <div className="max-w-4xl">
              <p className="mt-5 text-neutral-400 text-sm leading-6">
                Selamat datang di 9lapak, situs judi online paling gacor yang
                menjadi pilihan utama bagi para pecinta permainan taruhan di
                Indonesia. Di 9lapak, Anda bisa menikmati berbagai pilihan game
                slot gacor, sportsbook, live casino, poker, dan masih banyak
                lagi, semuanya dirancang untuk memberikan peluang menang yang
                lebih besar.
              </p>
              <p className="mt-5 text-neutral-400 text-sm leading-6">
                Dengan RTP tinggi dan jackpot terbesar yang tersedia setiap
                hari, 9lapak gacor selalu menjadi destinasi favorit bagi para
                pemain yang ingin merasakan pengalaman judi online yang seru dan
                menguntungkan. Tak hanya itu, 9lapak juga menjamin proses
                deposit dan withdraw yang super cepat dan aman, serta layanan
                customer service profesional yang siap membantu Anda 24 jam
                nonstop.
              </p>
              <p className="mt-5 text-neutral-400 text-sm leading-6">
                Bergabunglah sekarang di 9lapak, dan nikmati keseruan bermain di
                situs judi online paling gacor dan terpercaya di Indonesia.
                Jangan lewatkan kesempatan meraih jackpot besar bersama 9lapak
                gacor hari ini juga!
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center my-8 px-4">
          <div className="flex-grow border-t border-neutral-700"></div>
          <span className="mx-4 text-neutral-100 text-md">
            Provider Support
          </span>
          <div className="flex-grow border-t border-neutral-700"></div>
        </div>

        {/* Clients */}
        <div className="px-8 pb-20">
          <div className="relative py-6 md:py-10 overflow-hidden  before:absolute before:top-0 before:start-0 before:z-10 before:w-20 before:h-full before:bg-linear-to-r before:from-white before:to-transparent after:absolute after:top-0 after:end-0 after:w-20 after:h-full after:bg-linear-to-l after:from-white after:to-transparent dark:before:from-neutral-900 dark:after:from-neutral-900">
            <div className="grid grid-cols-3 justify-between items-center gap-x-4 gap-y-10">
              {Provider.map((item) => (
                <div key={item.id}>
                  <img src={item.image} alt={`Provider ${item.id}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End Clients */}

        <div className="fixed bottom-0 left-0 w-full z-50 bg-neutral-900 border-t-blue-400">
          <div className="mx-auto px-4 max-w-lg">
            <div className="my-4">
              <div className="flex gap-x-3">
                <a
                  className="flex-1 py-3 px-4 inline-flex justify-center items-center gap-x-2 font-medium rounded-xl active:scale-95 transition-all border border-transparent bg-red-600 text-white hover:bg-red-700 focus:outline-hidden focus:bg-red-700 disabled:opacity-50 disabled:pointer-events-none"
                  href={linkUtama}
                >
                  Masuk
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>
                <a
                  className="flex-1 py-3 px-4 inline-flex justify-center items-center gap-x-2 font-medium rounded-xl active:scale-95 transition-all border border-transparent bg-teal-600 text-white hover:bg-teal-700 focus:outline-hidden focus:bg-teal-700 disabled:opacity-50 disabled:pointer-events-none"
                  href={linkRtp}
                >
                  RTP Update
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
