import React from "react";

const Vegetables = () => {
  return (
    <section className="bg-[#F6F5F5] min-h-screen relative overflow-hidden">
      <div className=" pt-14 mx-5 md:mx-7">
        <div className="">
          <svg
            width="8"
            height="14"
            viewBox="0 0 7 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.67404 9.50893L1.25439 5.08929L5.67404 0.669643"
              stroke="#2D0C57"
              stroke-width="1.10491"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div className="">
          <h1 className="font-bold text-3xl mt-3 text-[#2D0C57]">Vegetables</h1>
        </div>

        <div className="relative z-50 my-10 flex items-center border border-slate-200 rounded-3xl bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class=" h-5 w-5 cursor-pointer ms-3 stroke-slate-800 peer-disabled:cursor-not-allowed"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
            aria-label="Search icon"
            role="graphics-symbol"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            id="id-s03"
            type="search"
            name="id-s03"
            placeholder="Search"
            aria-label="Search content"
            className=" h-10 px-4 outline-none"
          />
        </div>

        <div className="absolute top-0 right-0">
          <svg
            width="165"
            height="190"
            viewBox="0 0 135 143"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M73.2646 106.928L73.1132 107.264C79.3935 110.096 86.8593 113.974 94.2154 119.004C92.6708 121.294 90.819 123.392 88.6859 125.24C88.6859 125.24 88.6858 125.24 88.6857 125.24L88.6807 125.244C88.6355 125.283 88.5895 125.323 88.5452 125.361C76.5877 135.596 59.2901 134.962 48.4279 124.398C54.447 123.021 60.2799 120.174 65.3716 115.816L65.3724 115.816L65.5549 115.659L65.5557 115.658C68.4383 113.162 70.9218 110.306 72.9729 107.2L73.1131 107.264L73.2646 106.928ZM150.649 44.7615L150.65 44.7607C154.91 41.0717 158.266 36.5666 160.554 31.5607C163.401 36.1364 164.675 41.5406 164.161 47.0894C163.546 53.7138 160.456 59.7429 155.461 64.0694L155.46 64.0695C155.424 64.1012 155.385 64.1342 155.347 64.1667C152.929 66.2363 150.239 67.7484 147.429 68.7245C144.639 62.9705 142.565 57.7927 141.172 53.9908L140.826 54.1175L141.172 53.9907C140.84 53.0854 140.508 52.1468 140.178 51.195C143.855 49.697 147.341 47.593 150.48 44.907L150.481 44.9063L150.649 44.7615ZM119.434 55.5919L119.436 55.5908C120.208 54.9217 120.948 54.2213 121.656 53.4904C124.443 53.8816 127.262 53.9315 130.056 53.6561C130.503 54.971 130.98 56.3258 131.49 57.718C136.063 70.197 144.367 88.2667 157.185 102.821C157.876 103.607 158.228 104.651 158.155 105.715C158.083 106.779 157.592 107.767 156.799 108.453L147.035 116.81L133.627 100.441L133.626 100.44C131.763 98.1854 128.463 97.9142 126.255 99.8393L126.497 100.117L126.255 99.8393C124.056 101.757 123.779 105.131 125.637 107.38C125.637 107.38 125.637 107.38 125.637 107.381L138.996 123.689L128.796 132.419C128.006 133.094 126.988 133.415 125.972 133.31C124.949 133.205 124.011 132.677 123.374 131.844C110.492 114.995 91.5506 104.033 77.5889 97.7015C79.0047 93.5002 79.7424 89.0823 79.7282 84.6296C82.6584 81.9008 85.0862 78.6985 86.9162 75.1674C88.1278 74.7197 89.3116 74.2002 90.4684 73.625L111.935 82.497L112.757 82.8366L112.416 82.0154L104.557 63.0878C109.902 61.9278 114.968 59.4152 119.278 55.7257L119.279 55.7253L119.434 55.5919ZM117.811 41.4356L117.526 41.3291L117.368 41.5891C116.076 43.7124 114.454 45.6346 112.554 47.2805C112.554 47.2806 112.554 47.2807 112.554 47.2808L112.499 47.3281L112.444 47.375C108.106 51.0878 102.773 53.0344 97.3763 52.9629L97.1584 52.96L97.051 53.1496C95.5507 55.7979 93.5977 58.1907 91.29 60.1891L91.2896 60.1895C87.8588 63.1685 83.7149 65.1849 79.3879 66.0292L79.1737 66.071L79.1075 66.279C77.7779 70.4531 75.3057 74.222 71.9331 77.1428C70.9725 77.97 69.9575 78.7221 68.8955 79.3808L68.6841 79.512L68.7268 79.7571C70.4694 89.7502 66.6971 100.431 58.6281 107.42C58.6051 107.439 58.5822 107.459 58.5594 107.479C58.5364 107.499 58.5136 107.518 58.4908 107.538C46.4448 117.847 28.9485 116.764 19.3994 105.144C12.0973 96.2583 11.3615 83.6042 17.0828 73.3298L17.2299 73.0657L16.9995 72.87C16.1063 72.1109 15.2764 71.2663 14.5139 70.3386C10.9567 66.0098 9.36098 60.4417 10.028 54.6528C10.6822 48.977 13.4464 43.7682 17.8141 39.985C18.8098 39.1264 19.8531 38.3632 20.9463 37.7017L21.2256 37.5328L21.0914 37.2352C18.4788 31.4407 17.5836 24.8846 18.5682 18.262L18.2039 18.2078L18.5682 18.262C19.8541 9.61155 24.2473 1.65476 30.9405 -4.14136L30.9414 -4.14213C30.9945 -4.18843 31.0488 -4.23482 31.1045 -4.2825L31.1047 -4.28269C37.3704 -9.64495 45.1869 -12.6942 53.1367 -12.8793C59.3394 -13.0236 65.3306 -11.431 70.4573 -8.33598L70.7333 -8.16935L70.935 -8.42089C72.1789 -9.97233 73.5632 -11.4101 75.0779 -12.7217C75.1276 -12.7647 75.1773 -12.8077 75.2266 -12.8498C88.2006 -23.9532 107.04 -22.7955 117.319 -10.2878C118.03 -9.42244 118.689 -8.51473 119.293 -7.56914L119.456 -7.31358L119.738 -7.42462C123.815 -9.02926 128.206 -9.59979 132.486 -9.04244C138.571 -8.24964 144.049 -5.22268 147.914 -0.519697C152.226 4.72737 154.16 11.4821 153.35 18.5064C152.554 25.4177 149.184 31.7638 143.859 36.3746L143.858 36.3761C143.818 36.4107 143.778 36.4451 143.736 36.481C136.305 42.8408 126.283 44.6002 117.811 41.4356Z"
              fill="#CBF265"
              stroke="#C7E96F"
              stroke-width="0.736607"
            />
          </svg>
        </div>

        <div className=" grid grid-cols-12 gap-3 md:gap-2 relative">
          <div className="flex items-center col-span-9 md:col-span-11 text-nowrap text-[#6C0EE4] bg-[#E2CBFF] rounded-2xl py-1 px-3">
            <span className="">
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5135 4.46428L7.41077 12.567L3.72774 8.88392"
                  stroke="#6C0EE4"
                  stroke-width="1.10491"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <h1 className="ps-1">Сabbage and lettuce (14)</h1>
          </div>

          <div className="flex items-center col-span-3 md:col-span-2 lg:col-span-1 absolute -right-[173px] md:-right-[183px] text-[#9586A8] bg-[#FFFFFF] rounded-2xl py-1 px-3">
            <h1 className="">Сucumbers and tomatoes (10)</h1>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-3 lg:gap-1 relative mt-3">
          <div className="flex items-center col-span-7 md:col-span-6 lg:col-span-8 text-nowrap text-[#9586A8] bg-[#FFFFFF] rounded-2xl py-1 px-3">
            <h1 className="">Oinons and garlic (8)</h1>
          </div>

          <div className="flex items-center col-span-4 md:col-span-5 lg:col-span-4 text-nowrap text-[#9586A8] bg-[#FFFFFF] rounded-2xl py-1 px-3">
            <h1 className="">Peppers (7)</h1>
          </div>

          <div className="flex items-center absolute lg:-right-[192px] -right-[180px] text-[#9586A8] bg-[#FFFFFF] rounded-2xl py-1 px-3">
            <h1 className="">Potatoes and carrots (4)</h1>
          </div>
        </div>

        <div className=" mt-10">
          <div className=" grid grid-cols-12 gap-3">
            <div className="col-span-7">
              <img
                src="https://s3-alpha-sig.figma.com/img/ed02/3feb/39e754db430384ee1a2a937245b5be42?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eYxNKY~ohu6QAVW1B7DwSILOapE6ZL9zJx2EtkEaClWwdUIRyreIPsOIb4pr~Xp-Aan9Mnqx9MQPyIpeyMerwab~P-TIjDw9YDSYCxETxGXCileko8P0dW4f1KceKqbPNBtMn45AIhGFpD11Pi602RqVKrCEKhSGP7dK4rQxIk1ZmIEvf8RZlENuz17mQ2JjSq7PhDi~E2ViqMq~xjxt7HnA3OHF2bTBk2cuj9XSiZPoC-sFNWkEOjWmAtVobzmb3eqGoFcfqsM1S-GBg1ZGAHLPJ1xmcJy8krk~F2Xyh6NcbeJYIlfkOFZa7fhOiZ8Avi0GGysGpprmT5-Agm9wHw__"
                alt=""
                className="h-[160px] sm:h-[250px] md:h-[300px] lg:h-[400px] w-auto rounded-lg object-cover object-center"
              />
            </div>

            <div className=" col-span-5 flex flex-col">
              <div className=" h-auto">
                <h1 className="text-[#2D0C57] font-bold text-lg sm:text-3xl">
                  Boston Lettuce
                </h1>
                <h2 className="text-[#2D0C57] sm:text-lg">
                  1.10 <span className="text-[#9586A8]">€ / piece</span>
                </h2>
              </div>

              <div className=" flex items-center mt-auto gap-2 sm:gap-3">
                <div className=" border rounded-md md:px-8 md:py-3 px-4 py-2 bg-[#ffffff]">
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className=" text-[#D9D0E3] md:w-[30px] md:h-[30px] w-5 h-5"
                  >
                    <g clip-path="url(#clip0_80_29)">
                      <path
                        d="M13.7344 3.55746C13.4209 3.24379 13.0486 2.99496 12.6389 2.8252C12.2292 2.65543 11.7901 2.56805 11.3466 2.56805C10.9031 2.56805 10.4639 2.65543 10.0542 2.8252C9.64452 2.99496 9.27227 3.24379 8.95875 3.55746L8.30808 4.20813L7.65741 3.55746C7.02412 2.92416 6.16519 2.56838 5.26958 2.56838C4.37397 2.56838 3.51504 2.92416 2.88174 3.55746C2.24845 4.19075 1.89267 5.04968 1.89267 5.94529C1.89267 6.8409 2.24845 7.69983 2.88174 8.33313L3.53241 8.98379L8.30808 13.7595L13.0838 8.98379L13.7344 8.33313C14.0481 8.0196 14.2969 7.64735 14.4667 7.23764C14.6364 6.82793 14.7238 6.38878 14.7238 5.94529C14.7238 5.5018 14.6364 5.06265 14.4667 4.65294C14.2969 4.24323 14.0481 3.87098 13.7344 3.55746V3.55746Z"
                        stroke="#9586A8"
                        stroke-width="1.10491"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_80_29">
                        <rect
                          width="14.7321"
                          height="14.7321"
                          fill="white"
                          transform="translate(0.942017 0.727661)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                <div className=" border rounded-md md:px-8 md:py-3 px-4 py-2 bg-[#0BCE83]">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#fffff] md:w-[30px] md:h-[30px] w-5 h-5"
                  >
                    <g clip-path="url(#clip0_80_23)">
                      <path
                        d="M3.28641 3.79684H13.8094L12.7571 10.1106H4.3387L3.28641 3.79684Z"
                        stroke="white"
                        stroke-width="1.10491"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.39098 13.6183C5.77843 13.6183 6.09251 13.3042 6.09251 12.9168C6.09251 12.5293 5.77843 12.2152 5.39098 12.2152C5.00354 12.2152 4.68945 12.5293 4.68945 12.9168C4.68945 13.3042 5.00354 13.6183 5.39098 13.6183Z"
                        stroke="white"
                        stroke-width="1.10491"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M11.7048 13.6183C12.0922 13.6183 12.4063 13.3042 12.4063 12.9168C12.4063 12.5293 12.0922 12.2152 11.7048 12.2152C11.3173 12.2152 11.0032 12.5293 11.0032 12.9168C11.0032 13.3042 11.3173 13.6183 11.7048 13.6183Z"
                        stroke="white"
                        stroke-width="1.10491"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.28642 3.79684H1.18182"
                        stroke="white"
                        stroke-width="1.10491"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_80_23">
                        <rect
                          width="14.7321"
                          height="14.7321"
                          fill="white"
                          transform="translate(0.129517 0.727661)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className=" grid grid-cols-12 gap-3 mt-6">
            <div className="col-span-7">
              <img
                src="https://s3-alpha-sig.figma.com/img/ed02/3feb/39e754db430384ee1a2a937245b5be42?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eYxNKY~ohu6QAVW1B7DwSILOapE6ZL9zJx2EtkEaClWwdUIRyreIPsOIb4pr~Xp-Aan9Mnqx9MQPyIpeyMerwab~P-TIjDw9YDSYCxETxGXCileko8P0dW4f1KceKqbPNBtMn45AIhGFpD11Pi602RqVKrCEKhSGP7dK4rQxIk1ZmIEvf8RZlENuz17mQ2JjSq7PhDi~E2ViqMq~xjxt7HnA3OHF2bTBk2cuj9XSiZPoC-sFNWkEOjWmAtVobzmb3eqGoFcfqsM1S-GBg1ZGAHLPJ1xmcJy8krk~F2Xyh6NcbeJYIlfkOFZa7fhOiZ8Avi0GGysGpprmT5-Agm9wHw__"
                alt=""
                className="h-[160px] sm:h-[250px] md:h-[300px] lg:h-[400px] w-auto rounded-lg object-cover object-center"
              />
            </div>

            <div className=" col-span-5 flex flex-col">
              <div className=" h-auto">
                <h1 className="text-[#2D0C57] font-bold text-lg sm:text-3xl">
                  Boston Lettuce
                </h1>
                <h2 className="text-[#2D0C57] sm:text-lg">
                  1.10 <span className="text-[#9586A8]">€ / piece</span>
                </h2>
              </div>

              <div className=" flex items-center mt-auto gap-2 sm:gap-3">
                <div className=" border rounded-md md:px-8 md:py-3 px-4 py-2 bg-[#ffffff]">
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className=" text-[#D9D0E3] md:w-[30px] md:h-[30px] w-5 h-5"
                  >
                    <g clip-path="url(#clip0_80_29)">
                      <path
                        d="M13.7344 3.55746C13.4209 3.24379 13.0486 2.99496 12.6389 2.8252C12.2292 2.65543 11.7901 2.56805 11.3466 2.56805C10.9031 2.56805 10.4639 2.65543 10.0542 2.8252C9.64452 2.99496 9.27227 3.24379 8.95875 3.55746L8.30808 4.20813L7.65741 3.55746C7.02412 2.92416 6.16519 2.56838 5.26958 2.56838C4.37397 2.56838 3.51504 2.92416 2.88174 3.55746C2.24845 4.19075 1.89267 5.04968 1.89267 5.94529C1.89267 6.8409 2.24845 7.69983 2.88174 8.33313L3.53241 8.98379L8.30808 13.7595L13.0838 8.98379L13.7344 8.33313C14.0481 8.0196 14.2969 7.64735 14.4667 7.23764C14.6364 6.82793 14.7238 6.38878 14.7238 5.94529C14.7238 5.5018 14.6364 5.06265 14.4667 4.65294C14.2969 4.24323 14.0481 3.87098 13.7344 3.55746V3.55746Z"
                        stroke="#9586A8"
                        stroke-width="1.10491"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_80_29">
                        <rect
                          width="14.7321"
                          height="14.7321"
                          fill="white"
                          transform="translate(0.942017 0.727661)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                <div className=" border rounded-md md:px-8 md:py-3 px-4 py-2 bg-[#0BCE83]">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#fffff] md:w-[30px] md:h-[30px] w-5 h-5"
                  >
                    <g clip-path="url(#clip0_80_23)">
                      <path
                        d="M3.28641 3.79684H13.8094L12.7571 10.1106H4.3387L3.28641 3.79684Z"
                        stroke="white"
                        stroke-width="1.10491"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.39098 13.6183C5.77843 13.6183 6.09251 13.3042 6.09251 12.9168C6.09251 12.5293 5.77843 12.2152 5.39098 12.2152C5.00354 12.2152 4.68945 12.5293 4.68945 12.9168C4.68945 13.3042 5.00354 13.6183 5.39098 13.6183Z"
                        stroke="white"
                        stroke-width="1.10491"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M11.7048 13.6183C12.0922 13.6183 12.4063 13.3042 12.4063 12.9168C12.4063 12.5293 12.0922 12.2152 11.7048 12.2152C11.3173 12.2152 11.0032 12.5293 11.0032 12.9168C11.0032 13.3042 11.3173 13.6183 11.7048 13.6183Z"
                        stroke="white"
                        stroke-width="1.10491"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.28642 3.79684H1.18182"
                        stroke="white"
                        stroke-width="1.10491"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_80_23">
                        <rect
                          width="14.7321"
                          height="14.7321"
                          fill="white"
                          transform="translate(0.129517 0.727661)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className=" grid grid-cols-12 gap-3 mt-6">
            <div className="col-span-7">
              <img
                src="https://s3-alpha-sig.figma.com/img/ed02/3feb/39e754db430384ee1a2a937245b5be42?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eYxNKY~ohu6QAVW1B7DwSILOapE6ZL9zJx2EtkEaClWwdUIRyreIPsOIb4pr~Xp-Aan9Mnqx9MQPyIpeyMerwab~P-TIjDw9YDSYCxETxGXCileko8P0dW4f1KceKqbPNBtMn45AIhGFpD11Pi602RqVKrCEKhSGP7dK4rQxIk1ZmIEvf8RZlENuz17mQ2JjSq7PhDi~E2ViqMq~xjxt7HnA3OHF2bTBk2cuj9XSiZPoC-sFNWkEOjWmAtVobzmb3eqGoFcfqsM1S-GBg1ZGAHLPJ1xmcJy8krk~F2Xyh6NcbeJYIlfkOFZa7fhOiZ8Avi0GGysGpprmT5-Agm9wHw__"
                alt=""
                className="h-[160px] sm:h-[250px] md:h-[300px] lg:h-[400px] w-auto rounded-lg object-cover object-center"
              />
            </div>

            <div className=" col-span-5 flex flex-col">
              <div className=" h-auto">
                <h1 className="text-[#2D0C57] font-bold text-lg sm:text-3xl">
                  Boston Lettuce
                </h1>
                <h2 className="text-[#2D0C57] sm:text-lg">
                  1.10 <span className="text-[#9586A8]">€ / piece</span>
                </h2>
              </div>

              <div className=" flex items-center mt-auto gap-2 sm:gap-3">
                <div className=" border rounded-md md:px-8 md:py-3 px-4 py-2 bg-[#ffffff]">
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className=" text-[#D9D0E3] md:w-[30px] md:h-[30px] w-5 h-5"
                  >
                    <g clip-path="url(#clip0_80_29)">
                      <path
                        d="M13.7344 3.55746C13.4209 3.24379 13.0486 2.99496 12.6389 2.8252C12.2292 2.65543 11.7901 2.56805 11.3466 2.56805C10.9031 2.56805 10.4639 2.65543 10.0542 2.8252C9.64452 2.99496 9.27227 3.24379 8.95875 3.55746L8.30808 4.20813L7.65741 3.55746C7.02412 2.92416 6.16519 2.56838 5.26958 2.56838C4.37397 2.56838 3.51504 2.92416 2.88174 3.55746C2.24845 4.19075 1.89267 5.04968 1.89267 5.94529C1.89267 6.8409 2.24845 7.69983 2.88174 8.33313L3.53241 8.98379L8.30808 13.7595L13.0838 8.98379L13.7344 8.33313C14.0481 8.0196 14.2969 7.64735 14.4667 7.23764C14.6364 6.82793 14.7238 6.38878 14.7238 5.94529C14.7238 5.5018 14.6364 5.06265 14.4667 4.65294C14.2969 4.24323 14.0481 3.87098 13.7344 3.55746V3.55746Z"
                        stroke="#9586A8"
                        stroke-width="1.10491"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_80_29">
                        <rect
                          width="14.7321"
                          height="14.7321"
                          fill="white"
                          transform="translate(0.942017 0.727661)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>

                <div className=" border rounded-md md:px-8 md:py-3 px-4 py-2 bg-[#0BCE83]">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#fffff] md:w-[30px] md:h-[30px] w-5 h-5"
                  >
                    <g clip-path="url(#clip0_80_23)">
                      <path
                        d="M3.28641 3.79684H13.8094L12.7571 10.1106H4.3387L3.28641 3.79684Z"
                        stroke="white"
                        stroke-width="1.10491"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.39098 13.6183C5.77843 13.6183 6.09251 13.3042 6.09251 12.9168C6.09251 12.5293 5.77843 12.2152 5.39098 12.2152C5.00354 12.2152 4.68945 12.5293 4.68945 12.9168C4.68945 13.3042 5.00354 13.6183 5.39098 13.6183Z"
                        stroke="white"
                        stroke-width="1.10491"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M11.7048 13.6183C12.0922 13.6183 12.4063 13.3042 12.4063 12.9168C12.4063 12.5293 12.0922 12.2152 11.7048 12.2152C11.3173 12.2152 11.0032 12.5293 11.0032 12.9168C11.0032 13.3042 11.3173 13.6183 11.7048 13.6183Z"
                        stroke="white"
                        stroke-width="1.10491"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.28642 3.79684H1.18182"
                        stroke="white"
                        stroke-width="1.10491"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_80_23">
                        <rect
                          width="14.7321"
                          height="14.7321"
                          fill="white"
                          transform="translate(0.129517 0.727661)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-white border-t-2 fixed bottom-0 lg:p-8 md:p-12 p-6 w-full flex justify-around items-center">
        <div className="">
          <svg
            width="23"
            height="23"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.13832 16.1652H2.98207V11.0089H8.13832V16.1652Z"
              fill="#7203FF"
              fill-opacity="0.5"
              stroke="#7203FF"
              stroke-width="1.10491"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.241 16.1652H11.0847V11.0089H16.241V16.1652Z"
              fill="#7203FF"
              fill-opacity="0.5"
              stroke="#7203FF"
              stroke-width="1.10491"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.241 8.0625H11.0847V2.90625H16.241V8.0625Z"
              fill="#7203FF"
              fill-opacity="0.5"
              stroke="#7203FF"
              stroke-width="1.10491"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.13832 8.0625H2.98207V2.90625H8.13832V8.0625Z"
              fill="#7203FF"
              fill-opacity="0.5"
              stroke="#7203FF"
              stroke-width="1.10491"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div className="">
          <svg
            width="23"
            height="23"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.2123 4.37946H16.8399L15.5771 11.956H5.47506L4.2123 4.37946Z"
              stroke="#9586A8"
              stroke-width="1.10491"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.73781 16.1652C7.20274 16.1652 7.57965 15.7883 7.57965 15.3233C7.57965 14.8584 7.20274 14.4815 6.73781 14.4815C6.27288 14.4815 5.89597 14.8584 5.89597 15.3233C5.89597 15.7883 6.27288 16.1652 6.73781 16.1652Z"
              stroke="#9586A8"
              stroke-width="1.10491"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.3143 16.1652C14.7793 16.1652 15.1562 15.7883 15.1562 15.3233C15.1562 14.8584 14.7793 14.4815 14.3143 14.4815C13.8494 14.4815 13.4725 14.8584 13.4725 15.3233C13.4725 15.7883 13.8494 16.1652 14.3143 16.1652Z"
              stroke="#9586A8"
              stroke-width="1.10491"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.2123 4.37946H1.68679"
              stroke="#9586A8"
              stroke-width="1.10491"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div className="">
          <svg
            width="23"
            height="23"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.808 16.1652V14.692C14.808 13.9105 14.4975 13.1611 13.945 12.6085C13.3924 12.056 12.643 11.7455 11.8615 11.7455H5.96868C5.18723 11.7455 4.4378 12.056 3.88524 12.6085C3.33267 13.1611 3.02225 13.9105 3.02225 14.692V16.1652"
              stroke="#9586A8"
              stroke-width="1.10491"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.91511 8.79911C10.5424 8.79911 11.8615 7.47995 11.8615 5.85268C11.8615 4.22541 10.5424 2.90625 8.91511 2.90625C7.28784 2.90625 5.96868 4.22541 5.96868 5.85268C5.96868 7.47995 7.28784 8.79911 8.91511 8.79911Z"
              stroke="#9586A8"
              stroke-width="1.10491"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Vegetables;
