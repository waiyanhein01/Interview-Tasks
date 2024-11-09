import React from "react";
import { Link } from "react-router-dom";

const Payment = () => {
  return (
    <section className=" min-h-screen relative">
      <div className=" pt-12 mx-16 md:mx-60 lg:mx-5">
        <Link to={"/"} className="">
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
        </Link>

        <h1 className="font-bold leading-[30.2px] text-[22.1px] md:text-2xl lg:text-3xl mt-3 text-[#2D0C57]">
          Credit / Debit card
        </h1>

        <div className="mt-5">
          <div className="relative w-[285.49px] h-[183.79px] rounded-md bg-gradient-to-r from-[#B993D6] from-0% to-[#8CA6DB] to-100% shadow-xl shadow-[#B894D759]">
            <svg
              width="195"
              height="200"
              viewBox="0 0 185 177"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 right-0"
            >
              <ellipse
                cx="123.382"
                cy="91.0916"
                rx="123.382"
                ry="121.908"
                fill="white"
                fill-opacity="0.12"
              />
            </svg>

            <svg
              width="49"
              height="31"
              viewBox="0 0 49 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=" absolute top-7 right-7"
            >
              <path
                d="M31.8358 4.10554H17.6548V27.2673H31.8358V4.10554Z"
                fill="#FF5F00"
              />
              <path
                d="M19.1155 15.6883C19.1137 13.458 19.6193 11.2566 20.5939 9.25057C21.5686 7.24454 22.9868 5.4865 24.7412 4.10949C22.5683 2.40181 19.9588 1.3399 17.2109 1.04514C14.463 0.750371 11.6876 1.23464 9.20192 2.4426C6.71623 3.65056 4.62054 5.53347 3.15436 7.87614C1.68817 10.2188 0.910645 12.9267 0.910645 15.6904C0.910645 18.454 1.68817 21.1619 3.15436 23.5046C4.62054 25.8473 6.71623 27.7302 9.20192 28.9381C11.6876 30.1461 14.463 30.6304 17.2109 30.3356C19.9588 30.0408 22.5683 28.9789 24.7412 27.2712C22.9863 25.8938 21.5677 24.1351 20.5931 22.1283C19.6184 20.1215 19.1131 17.9193 19.1155 15.6883Z"
                fill="#F24E1E"
              />
              <path
                d="M47.1665 24.8165V24.3419H47.371V24.2437H46.8842V24.3419H47.0765V24.8165H47.1665ZM48.1116 24.8165V24.2437H47.9643L47.7925 24.6529L47.6206 24.2437H47.4733V24.8165H47.5797V24.3828L47.7393 24.7552H47.8497L48.0093 24.3828V24.8165H48.1116Z"
                fill="#F79E1B"
              />
              <path
                d="M48.5739 15.6884C48.5739 18.4523 47.7962 21.1604 46.3297 23.5031C44.8633 25.8459 42.7673 27.7288 40.2813 28.9365C37.7953 30.1443 35.0196 30.6283 32.2716 30.3331C29.5235 30.0379 26.914 28.9755 24.7412 27.2673C26.4949 25.889 27.9127 24.1305 28.8876 22.1244C29.8626 20.1182 30.3691 17.9169 30.3691 15.6864C30.3691 13.4559 29.8626 11.2546 28.8876 9.24843C27.9127 7.24229 26.4949 5.48377 24.7412 4.10553C26.914 2.39731 29.5235 1.33489 32.2716 1.0397C35.0196 0.744512 37.7953 1.22847 40.2813 2.43626C42.7673 3.64405 44.8633 5.52693 46.3297 7.86967C47.7962 10.2124 48.5739 12.9205 48.5739 15.6844V15.6884Z"
                fill="#FFD25F"
              />
            </svg>

            <h1 className=" absolute text-[#FFFFFF] text-[23.15px] top-[82.15px] left-[29.09px] h-[25.04px] w-[232.77px] font-medium leading-[22.77px]">
              4747 4747 4747 4747
            </h1>

            <div className="w-[232.77px] h-[20.46px]">
              <h1 className="absolute text-[#FFFFFF] uppercase top-[137.5px] tracking-[3%] left-[29.62px] font-medium text-[14.73px] leading-[22.77px]">
                alexandra Smith
              </h1>

              <h2 className="absolute text-[#FFFFFF] w-[40.51px] h-[25.78px] tracking-[0.25%] top-[137.5px] left-[215.35px] text-[14.73px] leading-[22.77px]">
                07/21
              </h2>
            </div>
          </div>
        </div>

        <div className="absolute w-[25.04px] h-[21.36px] top-[350px] left-[152.96px]">
          <svg
            width="27"
            height="23"
            viewBox="0 0 27 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.5088 16.0535C21.5088 16.4443 21.3536 16.819 21.0773 17.0953C20.801 17.3715 20.4263 17.5268 20.0356 17.5268H6.77668C6.38596 17.5268 6.01124 17.3715 5.73496 17.0953C5.45868 16.819 5.30347 16.4443 5.30347 16.0535V7.95086C5.30347 7.56014 5.45868 7.18542 5.73496 6.90914C6.01124 6.63286 6.38596 6.47764 6.77668 6.47764H9.72311L11.1963 4.26782H15.616L17.0892 6.47764H20.0356C20.4263 6.47764 20.801 6.63286 21.0773 6.90914C21.3536 7.18542 21.5088 7.56014 21.5088 7.95086V16.0535Z"
              stroke="#9586A8"
              stroke-width="1.10491"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.4061 14.5803C15.0334 14.5803 16.3526 13.2612 16.3526 11.6339C16.3526 10.0066 15.0334 8.68747 13.4061 8.68747C11.7789 8.68747 10.4597 10.0066 10.4597 11.6339C10.4597 13.2612 11.7789 14.5803 13.4061 14.5803Z"
              stroke="#9586A8"
              stroke-width="1.10491"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M0.883911 5.74106V2.42633C0.883911 1.61269 1.54349 0.953112 2.35713 0.953112H5.67186M0.883911 16.7902V20.1049C0.883911 20.9185 1.54349 21.5781 2.35713 21.5781H5.67186M25.9286 5.37275V2.05802C25.9286 1.24439 25.269 0.584808 24.4553 0.584808H21.1406M25.9286 17.1585V20.4732C25.9286 21.2868 25.269 21.9464 24.4553 21.9464H21.1406"
              stroke="#9586A8"
              stroke-width="1.10491"
              stroke-linecap="round"
            />
          </svg>
        </div>

        <div className="absolute w-[275.49px] h-[51.56px] top-[390px] ">
          <h1 className="text-[#9586A8] absolute leading-[16.21px] text-[16.31px] left-[13.73px] md:text-base lg:text-lg tracking-[-0.3px]">
            Name On Card
          </h1>
          <div className="absolute w-[275.49px] h-[35.36px] top-[24px] rounded-[5.89px] border-[#D9D0E3] border-[0.74px]">
            <span className=" absolute w-[125px] h-[22px] text-[#2D0C57] text-[15.52px] md:text-lg lg:text-xl text-nowrap leading-[16.21px] tracking-[-0.3px] top-[2.78px] left-[9.58px] gap-[7.37px] font-normal">
              Alexandra Smith
            </span>
          </div>
        </div>

        <div className="absolute w-[275.49px] h-[51.56px] top-[461px] ">
          <h1 className="text-[#9586A8] absolute leading-[16.21px] text-[16.31px] left-[13.73px] md:text-base lg:text-lg tracking-[-0.3px]">
            Card Number
          </h1>
          <div className="absolute w-[275.49px] h-[35.36px] top-[24px] rounded-[5.89px] border-[#D9D0E3] border-[0.74px]">
            <svg
              width="24"
              height="16"
              viewBox="0 0 24 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[240.13px] h-[14.73px] w-[23.83px] top-[9.81px]"
            >
              <path
                d="M15.5205 2.38306H8.43005V13.9639H15.5205V2.38306Z"
                fill="#FF5F00"
              />
              <path
                d="M9.16039 8.17458C9.15951 7.05944 9.4123 5.95872 9.89963 4.9557C10.387 3.95269 11.0961 3.07367 11.9733 2.38517C10.8868 1.53132 9.58204 1.00037 8.2081 0.852987C6.83415 0.705605 5.44646 0.947741 4.20362 1.55172C2.96078 2.1557 1.91293 3.09716 1.17984 4.26849C0.446746 5.43982 0.0579834 6.79377 0.0579834 8.1756C0.0579834 9.55743 0.446746 10.9114 1.17984 12.0827C1.91293 13.254 2.96078 14.1955 4.20362 14.7995C5.44646 15.4035 6.83415 15.6456 8.2081 15.4982C9.58204 15.3508 10.8868 14.8199 11.9733 13.966C11.0958 13.2773 10.3865 12.398 9.89919 11.3946C9.41185 10.3912 9.1592 9.29006 9.16039 8.17458Z"
                fill="#F24E1E"
              />
              <path
                d="M23.186 12.7385V12.5012H23.2882V12.4521H23.0448V12.5012H23.1409V12.7385H23.186ZM23.6585 12.7385V12.4521H23.5849L23.499 12.6566L23.413 12.4521H23.3394V12.7385H23.3926V12.5216L23.4724 12.7078H23.5276L23.6074 12.5216V12.7385H23.6585Z"
                fill="#F79E1B"
              />
              <path
                d="M23.8896 8.17448C23.8896 9.55641 23.5007 10.9105 22.7675 12.0818C22.0343 13.2532 20.9863 14.1946 19.7433 14.7985C18.5003 15.4024 17.1125 15.6444 15.7384 15.4968C14.3644 15.3492 13.0596 14.818 11.9733 13.9639C12.8501 13.2748 13.559 12.3955 14.0465 11.3924C14.5339 10.3894 14.7872 9.2887 14.7872 8.17346C14.7872 7.05822 14.5339 5.95754 14.0465 4.95447C13.559 3.95141 12.8501 3.07214 11.9733 2.38303C13.0596 1.52892 14.3644 0.997705 15.7384 0.850111C17.1125 0.702517 18.5003 0.944497 19.7433 1.54839C20.9863 2.15228 22.0343 3.09372 22.7675 4.2651C23.5007 5.43647 23.8896 6.79051 23.8896 8.17244V8.17448Z"
                fill="#FFD25F"
              />
            </svg>

            <span className=" absolute w-[125px] h-[22px] text-[#2D0C57] text-[15.52px] md:text-lg lg:text-xl text-nowrap leading-[16.21px] tracking-[-0.3px] top-[2.78px] left-[9.58px] gap-[7.37px] font-normal">
              4747 4747 4747 4747
            </span>
          </div>
        </div>

        <div className="absolute w-[275.49px] h-[51.56px] top-[538px] ">
          <h1 className="text-[#9586A8] absolute leading-[16.21px] text-[14.31px] left-[13.73px] md:text-base tracking-[-0.3px]">
            Expiry date
          </h1>
          <div className="absolute w-[130px] h-[35.36px] top-[24px] rounded-[5.89px] border-[#D9D0E3] border-[0.74px]">
            <span className=" absolute w-[125px] h-[22px] text-[#2D0C57] text-[15.52px] md:text-lg lg:text-xl text-nowrap leading-[16.21px] tracking-[-0.3px] top-[2.78px] left-[9.58px] gap-[7.37px] font-normal">
              07/21
            </span>
          </div>

          <h1 className="text-[#9586A8] absolute leading-[16.21px] text-[14.31px] left-[160.58px] md:text-base tracking-[-0.3px]">
            CVC
          </h1>
          <div className="absolute w-[130px] h-[35.36px] top-[24px] left-[145.58px]  rounded-[5.89px] border-[#D9D0E3] border-[0.74px]">
            <span className=" absolute w-[125px] h-[22px] text-[#2D0C57] text-[15.52px] md:text-lg lg:text-xl text-nowrap leading-[16.21px] tracking-[-0.3px] top-[2.78px] left-[9.58px] gap-[7.37px] font-normal">
              474
            </span>

            <svg
              width="29"
              height="22"
              viewBox="0 0 29 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=" absolute left-[95px] top-[7.33px] h-[19.15px] w-[26.52px]"
            >
              <path
                d="M24.9731 1.33041H3.27668C1.94528 1.33041 0.865967 2.40223 0.865967 3.72439V18.0882C0.865967 19.4104 1.94528 20.4822 3.27668 20.4822H24.9731C26.3045 20.4822 27.3838 19.4104 27.3838 18.0882V3.72439C27.3838 2.40223 26.3045 1.33041 24.9731 1.33041Z"
                stroke="#D9D0E3"
                stroke-width="1.47321"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M0.865967 6.48654H27.3838"
                stroke="#D9D0E3"
                stroke-width="1.47321"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <rect
                x="12.1606"
                y="9.67853"
                width="10.3125"
                height="4.41964"
                rx="1.47321"
                stroke="#F24E1E"
                stroke-width="1.47321"
              />
            </svg>
          </div>
        </div>

        <div className="absolute w-[275.49px] bg-[#0ACF83] h-[41.36px] top-[650px] rounded-[5.89px] border-[#D9D0E3] border-[0.74px]">
          <span className=" absolute uppercase w-[86.18px] h-[13.26px] text-[#FFFFFF] text-[13.52px] text-nowrap leading-[16.21px] tracking-[-0.3px] top-[10.78px] left-[89.02px] gap-[7.37px] font-normal">
            use this card
          </span>
        </div>
      </div>
    </section>
  );
};

export default Payment;
