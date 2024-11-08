import React from "react";

const Item = () => {
  return (
    <section className="text-3xl font-bold underline">
      <div className="min-h-screen relative">
        <div className=" relative">
          <img
            src="https://s3-alpha-sig.figma.com/img/ed02/3feb/39e754db430384ee1a2a937245b5be42?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eYxNKY~ohu6QAVW1B7DwSILOapE6ZL9zJx2EtkEaClWwdUIRyreIPsOIb4pr~Xp-Aan9Mnqx9MQPyIpeyMerwab~P-TIjDw9YDSYCxETxGXCileko8P0dW4f1KceKqbPNBtMn45AIhGFpD11Pi602RqVKrCEKhSGP7dK4rQxIk1ZmIEvf8RZlENuz17mQ2JjSq7PhDi~E2ViqMq~xjxt7HnA3OHF2bTBk2cuj9XSiZPoC-sFNWkEOjWmAtVobzmb3eqGoFcfqsM1S-GBg1ZGAHLPJ1xmcJy8krk~F2Xyh6NcbeJYIlfkOFZa7fhOiZ8Avi0GGysGpprmT5-Agm9wHw__"
            alt=""
            className="w-full h-screen object-cover object-center"
          />

          <div className="absolute top-[30%] md:[20%] lg:top-[25%] right-[49%]">
            <svg
              width="30"
              height="8"
              viewBox="0 0 30 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="26.6205"
                cy="2.99104"
                r="2.94643"
                fill="white"
                fill-opacity="0.5"
              />
              <circle
                cx="14.8348"
                cy="2.99104"
                r="2.94643"
                fill="white"
                fill-opacity="0.5"
              />
              <circle cx="3.04903" cy="2.99108" r="2.94643" fill="white" />
            </svg>
          </div>
        </div>

        <div className=" absolute bottom-0 lg:h-[70%] md:h-[67%] h-4/6 w-full  bg-[#F6F5F5]  p-5 rounded-tl-[22.1px] rounded-tr-[22.1px]">
          <div className=" flex flex-col justify-start items-start space-y-3">
            <h1 className=" text-[#2D0C57] text-[22.1px] md:text-2xl lg:text-3xl leading-[30.2px]">
              Boston Lettuce
            </h1>

            <div className=" leading-[31.74px] flex items-center gap-3">
              <h1 className="text-[#2D0C57] text-[23.57px] md:text-2xl lg:text-3xl">
                1.10
              </h1>
              <h1 className=" text-[#9586A8] text-[17.68px] md:text-lg lg:text-xl">
                € / piece
              </h1>
            </div>

            <div className=" leading-[18.78px]">
              <h1 className="text-[#06BE77] text-[12.52px] md:text-sm lg:text-base">
                ~ 150 gr / piece
              </h1>
            </div>

            <div className="leading-[18.78px]">
              <p className=" text-[#2D0C57] text-[16.21px] md:text-lg lg:text-xl">
                Spain
              </p>
              <p className=" text-[#9586A8] font-[400px] text-[12.52px] md:text-sm lg:text-base mt-5 w-[274.75px] md:w-[386.72px] h-[142.9px]">
                Lettuce is an annual plant of the daisy family, Asteraceae. It
                is most often grown as a leaf vegetable, but sometimes for its
                stem and seeds. Lettuce is most often used for salads, although
                it is also seen in other kinds of food, such as soups,
                sandwiches and wraps; it can also be grilled.
              </p>
            </div>

            <div className=" flex gap-[7.37px] lg:gap-1 w-[195.96px] h-[41.25px]">
              <button className=" w-[57.46px] h-[41.25px] rounded-[5.89px] border-[0.74px] py-[7.37px] px-[21.36px] bg-[#F6F5F5]">
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_80_7)">
                    <path
                      d="M13.4619 2.83431C13.1483 2.52064 12.7761 2.27182 12.3664 2.10205C11.9567 1.93229 11.5175 1.84491 11.074 1.84491C10.6305 1.84491 10.1914 1.93229 9.78168 2.10205C9.37197 2.27182 8.99972 2.52064 8.6862 2.83431L8.03553 3.48498L7.38486 2.83431C6.75157 2.20102 5.89264 1.84524 4.99703 1.84524C4.10141 1.84524 3.24248 2.20102 2.60919 2.83431C1.9759 3.4676 1.62012 4.32653 1.62012 5.22215C1.62012 6.11776 1.9759 6.97669 2.60919 7.60998L3.25986 8.26065L8.03553 13.0363L12.8112 8.26065L13.4619 7.60998C13.7755 7.29646 14.0244 6.92421 14.1941 6.5145C14.3639 6.10478 14.4513 5.66564 14.4513 5.22215C14.4513 4.77865 14.3639 4.33951 14.1941 3.9298C14.0244 3.52008 13.7755 3.14783 13.4619 2.83431V2.83431Z"
                      stroke="#9586A8"
                      stroke-width="1.10491"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_80_7">
                      <rect
                        width="14.7321"
                        height="14.7321"
                        fill="white"
                        transform="translate(0.669495 0.0045166)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>
              <button className="uppercase text-[11.05px] text-nowrap flex items-center gap-[11.79px] py-[11.79px] px-[49.72px] bg-[#0BCE83] font-thin text-sm text-white rounded-[5.89px]">
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.87787 3.32812H14.4008L13.3485 9.6419H4.93016L3.87787 3.32812Z"
                    stroke="white"
                    stroke-width="1.10491"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.98248 13.1496C6.36992 13.1496 6.68401 12.8355 6.68401 12.448C6.68401 12.0606 6.36992 11.7465 5.98248 11.7465C5.59503 11.7465 5.28094 12.0606 5.28094 12.448C5.28094 12.8355 5.59503 13.1496 5.98248 13.1496Z"
                    stroke="white"
                    stroke-width="1.10491"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.2963 13.1496C12.6837 13.1496 12.9978 12.8355 12.9978 12.448C12.9978 12.0606 12.6837 11.7465 12.2963 11.7465C11.9088 11.7465 11.5947 12.0606 11.5947 12.448C11.5947 12.8355 11.9088 13.1496 12.2963 13.1496Z"
                    stroke="white"
                    stroke-width="1.10491"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.87791 3.32812H1.77332"
                    stroke="white"
                    stroke-width="1.10491"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Item;
