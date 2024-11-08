import React from "react";

const CheckoutScrollView = () => {
  return (
    <section className="bg-[#F6F5F5] min-h-screen">
      <div className="bg-[#F6F5F5] shadow-lg pt-7">
        <div className="relative flex items-center mx-5 md:mx-7 py-3">
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

          <div className="absolute left-0 right-0 bottom-1 flex justify-center">
            <h1 className="text-[#2D0C57] md:text-lg lg:text-xl font-medium">Checkout</h1>
          </div>
        </div>
      </div>

      <div className="mx-5 md:mx-7 lg:py-10 py-5 lg:pb-20 pb-0">
        <div className="mt-5">
          <h1 className="text-[#2D0C57] text-[18.21px] md:text-xl lg:text-2xl font-bold">
            Payment method
          </h1>
        </div>

        <div className=" mt-3">
          <div className="flex items-center gap-5">
            <svg
              width="30"
              height="30"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_80_71)">
                <path
                  d="M16.3437 3.58928H3.08473C2.27109 3.58928 1.61151 4.24886 1.61151 5.0625V13.9018C1.61151 14.7154 2.27109 15.375 3.08473 15.375H16.3437C17.1573 15.375 17.8169 14.7154 17.8169 13.9018V5.0625C17.8169 4.24886 17.1573 3.58928 16.3437 3.58928Z"
                  stroke="#2D0C57"
                  stroke-width="1.10491"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.61151 8.00893H17.8169"
                  stroke="#2D0C57"
                  stroke-width="1.10491"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_80_71">
                  <rect
                    width="17.6786"
                    height="17.6786"
                    fill="white"
                    transform="translate(0.874878 0.642853)"
                  />
                </clipPath>
              </defs>
            </svg>
            <h1 className=" text-[#9586A8] text-[13.52px] md:text-base lg:text-lg">
              **** **** **** 4747
            </h1>
          </div>
        </div>

        <div className="mt-5">
          <h1 className="text-[#2D0C57] text-[18.21px] md:text-xl lg:text-2xl font-bold mt-3">
            Delivery address
          </h1>
        </div>

        <div className=" mt-3">
          <div className="flex gap-5">
            <svg
              width="30"
              height="30"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.08472 7.55807L9.71418 2.40182L16.3436 7.55807V15.6607C16.3436 16.0515 16.1884 16.4262 15.9122 16.7025C15.6359 16.9787 15.2612 17.134 14.8704 17.134H4.55793C4.16721 17.134 3.79249 16.9787 3.51621 16.7025C3.23993 16.4262 3.08472 16.0515 3.08472 15.6607V7.55807Z"
                stroke="#2D0C57"
                stroke-width="1.10491"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.50433 17.134V9.76788H11.924V17.134"
                stroke="#2D0C57"
                stroke-width="1.10491"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <div className="flex flex-col">
              <h1 className=" text-[#9586A8] text-[13.52px] md:text-base lg:text-lg">
                Alexandra Smith
              </h1>
              <h1 className=" text-[#9586A8] text-[13.52px] md:text-base lg:text-lg">
                Cesu 31 k-2 5.st, SIA Chili
              </h1>
              <h1 className=" text-[#9586A8] text-[13.52px] md:text-base lg:text-lg">
                Riga
              </h1>
              <h1 className=" text-[#9586A8] text-[13.52px] md:text-base lg:text-lg">
                LV–1012
              </h1>
              <h1 className=" text-[#9586A8] text-[13.52px] md:text-base lg:text-lg">
                Latvia
              </h1>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h1 className="text-[#2D0C57] text-[18.21px] md:text-xl lg:text-2xl font-bold mt-3">
            Delivery options
          </h1>
        </div>

        <div className=" mt-3">
          <div className="flex items-center gap-5 w-auto h-auto">
            <svg
              width="30"
              height="30"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.3536 4.76023C10.8311 4.76023 11.2181 4.37319 11.2181 3.89574C11.2181 3.4183 10.8311 3.03125 10.3536 3.03125C9.87618 3.03125 9.48914 3.4183 9.48914 3.89574C9.48914 4.37319 9.87618 4.76023 10.3536 4.76023Z"
                stroke="#2D0C57"
                stroke-width="1.10491"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.0826 16.8631L11.3471 14.6568C11.2623 14.4022 11.1193 14.1708 10.9295 13.981L8.6246 11.6761M8.6246 11.6761L9.48909 7.35367M8.6246 11.6761L6.03113 16.8631M9.48909 7.35367L11.8842 9.74874C12.0156 9.88015 12.1673 9.98951 12.3335 10.0726L13.8115 10.8116M9.48909 7.35367L7.38921 8.75359C7.0693 8.96686 6.82961 9.28068 6.70802 9.64543L6.03113 11.6761"
                stroke="#2D0C57"
                stroke-width="1.10491"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <h1 className=" text-[#9586A8] md:text-lg lg:text-xl">
              I’ll pick it up myself
            </h1>
          </div>

          <div className="flex items-center gap-5 mt-3 w-auto h-auto">
            <svg
              width="30"
              height="30"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.3838 5.58035C11.8449 5.58035 12.2187 5.20659 12.2187 4.74553C12.2187 4.28447 11.8449 3.91071 11.3838 3.91071C10.9228 3.91071 10.549 4.28447 10.549 4.74553C10.549 5.20659 10.9228 5.58035 11.3838 5.58035Z"
                stroke="#2D0C57"
                stroke-width="1.10491"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.71418 14.7634V11.4241L7.20972 9.75443L9.71418 7.24997L11.3838 8.91961L13.0535 9.75443"
                stroke="#2D0C57"
                stroke-width="1.10491"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.70527 16.433C6.08845 16.433 7.20973 15.3117 7.20973 13.9286C7.20973 12.5454 6.08845 11.4241 4.70527 11.4241C3.32209 11.4241 2.20081 12.5454 2.20081 13.9286C2.20081 15.3117 3.32209 16.433 4.70527 16.433Z"
                stroke="#2D0C57"
                stroke-width="1.10491"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.7231 16.433C16.1063 16.433 17.2276 15.3117 17.2276 13.9286C17.2276 12.5454 16.1063 11.4241 14.7231 11.4241C13.3399 11.4241 12.2186 12.5454 12.2186 13.9286C12.2186 15.3117 13.3399 16.433 14.7231 16.433Z"
                stroke="#2D0C57"
                stroke-width="1.10491"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <h1 className=" text-[#9586A8] md:text-lg lg:text-xl">
              By courier
            </h1>
          </div>

          <div className="flex justify-between items-center mt-3 w-auto h-auto">
            <div className="flex items-center gap-5">
              <svg
                width="30"
                height="30"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_80_148)">
                  <path
                    d="M18.4019 12.3927C18.1998 12.1907 17.8722 12.1907 17.6701 12.3927L16.3003 13.7626C15.9691 13.6258 15.5943 13.6257 15.2631 13.7626L12.2619 10.7614V7.12846L15.2595 4.13094C15.4219 4.19834 15.5976 4.2337 15.7787 4.2337C15.9599 4.2337 16.1356 4.19834 16.298 4.13094L17.6672 5.50006C17.7682 5.60109 17.9006 5.65164 18.033 5.65164C18.1654 5.65164 18.2979 5.60109 18.3989 5.50006C18.601 5.298 18.601 4.97036 18.3989 4.76827L17.029 3.39842C17.2318 2.9076 17.1343 2.32082 16.736 1.9225C16.3376 1.52418 15.7509 1.42667 15.2601 1.62949L13.8903 0.259608C13.6882 0.0575476 13.3606 0.0575476 13.1585 0.259608C12.9564 0.461669 12.9564 0.789309 13.1585 0.991404L14.5283 2.36125C14.3915 2.69245 14.3915 3.06722 14.5283 3.39845L11.6425 6.28431L10.0069 5.45058C9.82364 5.35715 9.6048 5.35715 9.42135 5.45058L7.78384 6.28531L4.89699 3.39845C5.03382 3.06726 5.03382 2.69248 4.89699 2.36125L6.26683 0.991404C6.46893 0.789344 6.46893 0.461703 6.26683 0.259608C6.06477 0.0575476 5.73713 0.0575476 5.53504 0.259608L4.16522 1.62946C3.67437 1.42664 3.08759 1.52421 2.68934 1.9225C2.29102 2.32085 2.19344 2.90756 2.39626 3.39842L1.02645 4.76827C0.824354 4.97033 0.824354 5.29797 1.02645 5.50006C1.12748 5.60109 1.25993 5.65164 1.39231 5.65164C1.52473 5.65164 1.65718 5.60109 1.75818 5.50006L3.1273 4.13094C3.28972 4.19834 3.46544 4.2337 3.64657 4.2337C3.82774 4.2337 4.00346 4.19834 4.16588 4.13094L7.16633 7.13139V10.7643L4.16809 13.7626C3.83689 13.6258 3.46212 13.6257 3.13092 13.7626L1.76108 12.3927C1.55902 12.1907 1.23138 12.1907 1.02928 12.3927C0.827186 12.5948 0.827186 12.9224 1.02928 13.1245L2.3984 14.4937C2.331 14.6561 2.29565 14.8318 2.29565 15.013C2.29565 15.3746 2.43649 15.7146 2.69221 15.9703C2.95611 16.2342 3.30281 16.3662 3.64951 16.3662C3.82605 16.3662 4.00253 16.3318 4.16812 16.2634L5.53794 17.6332C5.63897 17.7342 5.77142 17.7848 5.9038 17.7848C6.03618 17.7848 6.16867 17.7342 6.26967 17.6332C6.47176 17.4311 6.47176 17.1035 6.26967 16.9014L4.90061 15.5323C4.96801 15.3698 5.00337 15.1941 5.00337 15.013C5.00337 14.8318 4.96801 14.6561 4.90061 14.4937L7.78578 11.6085L9.42097 12.442C9.51279 12.4889 9.6135 12.5124 9.71416 12.5124C9.81474 12.5124 9.91528 12.489 10.0068 12.4423L11.6443 11.6075L14.5305 14.4937C14.463 14.6561 14.4277 14.8318 14.4277 15.013C14.4277 15.1941 14.4631 15.3698 14.5305 15.5322L13.1613 16.9014C12.9592 17.1034 12.9592 17.4311 13.1613 17.6332C13.2624 17.7342 13.3948 17.7847 13.5272 17.7847C13.6596 17.7847 13.7921 17.7342 13.8931 17.6332L15.2629 16.2633C15.4285 16.3318 15.605 16.3662 15.7815 16.3661C16.1281 16.3661 16.4749 16.2341 16.7388 15.9702C16.9945 15.7145 17.1354 15.3745 17.1354 15.0129C17.1354 14.8317 17.1 14.656 17.0326 14.4936L18.4017 13.1245C18.604 12.9224 18.604 12.5948 18.4019 12.3927ZM15.5532 2.65429C15.6153 2.59211 15.697 2.56103 15.7787 2.56103C15.8604 2.56103 15.942 2.59211 16.0042 2.65429C16.1285 2.77863 16.1285 2.981 16.0042 3.10534C15.944 3.16556 15.8639 3.19877 15.7787 3.19877C15.6935 3.19877 15.6134 3.16559 15.5532 3.10534C15.4289 2.98104 15.4289 2.77863 15.5532 2.65429ZM3.87218 3.10537C3.81196 3.16559 3.73186 3.19881 3.64664 3.19881C3.56146 3.19881 3.48135 3.16563 3.42114 3.10537C3.2968 2.98104 3.2968 2.77867 3.42114 2.65433C3.48332 2.59218 3.56498 2.56107 3.64664 2.56107C3.7283 2.56107 3.81 2.59214 3.87218 2.65433C3.99652 2.77867 3.99652 2.98104 3.87218 3.10537ZM3.87512 15.2384C3.75071 15.3628 3.54844 15.3628 3.42407 15.2384C3.36385 15.1783 3.33064 15.0981 3.33064 15.013C3.33064 14.9277 3.36382 14.8476 3.42407 14.7875C3.48626 14.7253 3.56792 14.6942 3.64961 14.6942C3.73127 14.6942 3.81296 14.7252 3.87512 14.7874C3.93533 14.8476 3.96855 14.9277 3.96855 15.013C3.96852 15.0981 3.93533 15.1783 3.87512 15.2384ZM11.227 10.6587L9.71419 11.4298L8.20136 10.6587V7.23412L9.71419 6.46296L11.227 7.23412V10.6587ZM16.0072 15.2385C15.8828 15.3627 15.6805 15.3628 15.5561 15.2385C15.4959 15.1783 15.4627 15.0981 15.4627 15.013C15.4627 14.9277 15.4959 14.8476 15.5561 14.7875C15.6183 14.7253 15.7 14.6942 15.7817 14.6942C15.8633 14.6942 15.945 14.7252 16.0072 14.7874C16.0674 14.8476 16.1006 14.9277 16.1006 15.013C16.1006 15.0981 16.0674 15.1783 16.0072 15.2385Z"
                    fill="#7203FF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_80_148">
                    <rect
                      width="17.6786"
                      height="17.6786"
                      fill="white"
                      transform="translate(0.874878 0.107147)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <h1 className=" text-[#9586A8] md:text-lg lg:text-xl">
                By Drone
              </h1>
            </div>

            <div className="">
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.4196 4.52679L7.31695 12.6295L3.63391 8.94644"
                  stroke="#7203FF"
                  stroke-width="1.10491"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <div className="flex items-center w-auto h-auto justify-between">
            <div className="">
              <h1 className="text-[#2D0C57] text-[18.21px] md:text-xl lg:text-2xl  font-bold">
                Non-contact-delivery
              </h1>
            </div>

            <div className="">
              <svg
                width="60"
                height="32"
                viewBox="0 0 60 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.857056"
                  y="2.82587"
                  width="54.5089"
                  height="22.0982"
                  rx="11.0491"
                  fill="#E2CBFF"
                />
                <g filter="url(#filter0_ddd_1_189)">
                  <rect
                    x="34.741"
                    y="4.29904"
                    width="19.1518"
                    height="19.1518"
                    rx="9.57589"
                    fill="white"
                  />
                </g>
                <path
                  d="M15.213 17.7722V14.8416L17.776 10.5062H16.5222L14.6943 13.6533H14.6087L12.7809 10.5062H11.5271L14.0851 14.8416V17.7722H15.213ZM19.9665 13.1044C20.7671 13.1044 21.2908 13.6634 21.316 14.5244H18.5465C18.607 13.6684 19.1659 13.1044 19.9665 13.1044ZM21.311 16.2918C21.1096 16.7198 20.6614 16.9565 20.0068 16.9565C19.1407 16.9565 18.5818 16.3472 18.5465 15.3855V15.325H22.4188V14.9474C22.4188 13.2253 21.4973 12.183 19.9716 12.183C18.4257 12.183 17.4438 13.2958 17.4438 15.0481C17.4438 16.8004 18.4055 17.878 19.9766 17.878C21.2304 17.878 22.1066 17.2737 22.3533 16.2918H21.311ZM23.29 13.8396C23.29 14.6553 23.7734 15.1236 24.8157 15.3704L25.7724 15.5919C26.3213 15.7228 26.5781 15.9343 26.5781 16.2616C26.5781 16.6997 26.0997 17.0018 25.425 17.0018C24.7704 17.0018 24.3676 16.74 24.2316 16.317H23.149C23.2447 17.2888 24.0957 17.878 25.3998 17.878C26.709 17.878 27.6708 17.1881 27.6708 16.1559C27.6708 15.3502 27.1824 14.9021 26.14 14.6604L25.2286 14.4489C24.6344 14.3129 24.3575 14.1065 24.3575 13.7792C24.3575 13.3512 24.8157 13.0641 25.42 13.0641C26.0343 13.0641 26.427 13.321 26.5278 13.7238H27.565C27.4593 12.757 26.6536 12.183 25.42 12.183C24.1813 12.183 23.29 12.8678 23.29 13.8396Z"
                  fill="#6C0EE4"
                />
                <defs>
                  <filter
                    id="filter0_ddd_1_189"
                    x="28.8481"
                    y="0.616006"
                    width="30.9374"
                    height="30.9375"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="2.20982" />
                    <feGaussianBlur stdDeviation="0.368304" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1_189"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="0.736607" />
                    <feGaussianBlur stdDeviation="0.368304" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_dropShadow_1_189"
                      result="effect2_dropShadow_1_189"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="2.20982" />
                    <feGaussianBlur stdDeviation="2.94643" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect2_dropShadow_1_189"
                      result="effect3_dropShadow_1_189"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect3_dropShadow_1_189"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-[#F8F8F8EB] border-t-2 fixed bottom-0 lg:p-5 md:p-12 p-6 w-full flex justify-around items-center">
        <div className="">
          <svg
            width="23"
            height="23"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.49542 2.90625H2.33917V8.0625H7.49542V2.90625Z"
              stroke="#9586A8"
              stroke-width="1.10491"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.5981 2.90625H10.4419V8.0625H15.5981V2.90625Z"
              stroke="#9586A8"
              stroke-width="1.10491"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.5981 11.0089H10.4419V16.1652H15.5981V11.0089Z"
              stroke="#9586A8"
              stroke-width="1.10491"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.49542 11.0089H2.33917V16.1652H7.49542V11.0089Z"
              stroke="#9586A8"
              stroke-width="1.10491"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div className=" relative">
          <svg
            width="23"
            height="23"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.56946 4.37946H17.197L15.9343 11.956H5.83221L4.56946 4.37946Z"
              fill="#7203FF"
              fill-opacity="0.5"
              stroke="#7203FF"
              stroke-width="1.10491"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.09501 16.1652C7.55994 16.1652 7.93685 15.7883 7.93685 15.3233C7.93685 14.8584 7.55994 14.4815 7.09501 14.4815C6.63008 14.4815 6.25317 14.8584 6.25317 15.3233C6.25317 15.7883 6.63008 16.1652 7.09501 16.1652Z"
              fill="#7203FF"
              fill-opacity="0.5"
              stroke="#7203FF"
              stroke-width="1.10491"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.6715 16.1652C15.1364 16.1652 15.5133 15.7883 15.5133 15.3233C15.5133 14.8584 15.1364 14.4815 14.6715 14.4815C14.2066 14.4815 13.8297 14.8584 13.8297 15.3233C13.8297 15.7883 14.2066 16.1652 14.6715 16.1652Z"
              fill="#7203FF"
              fill-opacity="0.5"
              stroke="#7203FF"
              stroke-width="1.10491"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.56939 4.37946H2.04388Z"
              fill="#7203FF"
              fill-opacity="0.5"
            />
            <path
              d="M4.56939 4.37946H2.04388"
              stroke="#7203FF"
              stroke-width="1.10491"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <div className=" absolute -top-1 -right-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8.19639" cy="7.69645" r="7.36607" fill="#CBF265" />
              <path
                d="M8.1928 10.4599C9.3905 10.4599 10.2106 9.84123 10.2106 8.93845C10.2106 8.26947 9.76456 7.74435 9.08838 7.61846V7.55732C9.64587 7.41704 9.99835 6.97465 9.99835 6.41716C9.99835 5.59711 9.25023 5.01084 8.19639 5.01084C7.14256 5.01084 6.39084 5.59711 6.39084 6.41716C6.39084 6.97105 6.75051 7.42064 7.30441 7.55732V7.61846C6.62463 7.76233 6.18223 8.28385 6.18223 8.94205C6.18223 9.84123 7.00228 10.4599 8.1928 10.4599ZM8.19639 9.73693C7.57057 9.73693 7.13896 9.38085 7.13896 8.86292C7.13896 8.345 7.57057 7.98892 8.19639 7.98892C8.81863 7.98892 9.25023 8.345 9.25023 8.86292C9.25023 9.38085 8.82222 9.73693 8.19639 9.73693ZM8.19639 7.27677C7.66768 7.27677 7.30441 6.96386 7.30441 6.50708C7.30441 6.0431 7.66408 5.72299 8.19639 5.72299C8.72511 5.72299 9.08478 6.0431 9.08478 6.50708C9.08478 6.96386 8.72151 7.27677 8.19639 7.27677Z"
                fill="#7203FF"
              />
            </svg>
          </div>
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

export default CheckoutScrollView;
