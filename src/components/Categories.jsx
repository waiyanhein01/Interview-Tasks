import React from "react";
import { HiChevronLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <section className="bg-[#F6F5F5] min-h-screen">
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

        <h1 className="font-bold text-3xl mt-3 text-[#2D0C57]">Categories</h1>

        <div className=" my-6 flex items-center border border-slate-200 rounded-3xl bg-white">
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

        <div className=" grid grid-cols-2 gap-5">
          <div className=" border border-slate-200 rounded-xl bg-white overflow-hidden">
            <img
              src="https://s3-alpha-sig.figma.com/img/ddcc/dd8a/21c17fc207e1c914237056d769e28862?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZusB7iHhC4wGUbWgsb5uQC1dflXAPgv9N~c-EP~esnKfuXp9-m-bsIh1d1mAZUmTT2Wv1mGJFpI1M35BQ7x7oeKCi2sPhwSq0mHr3JYEy8P40LsVfanADmMbQdqOjQX2ZKDYFqEFIT98~o9qqked1GbiV3351VYtRAAveNjcGtfIKaKjp4LtQ5HqiG~upsJFgMgn7fMBorqKwQtSTNGjpRXY74S62mVKpbRvPOngf-gmui-UdMN4z9FBcLHTAIlvh8HONY6w1jG1sZdcBnWcJ~YUmUL33bK2mqUir5hQOl0G84MUBH-aigOGMSr3VBGQo3Qpp7HEYpfXfs0J-9rwvA__"
              alt=""
              className=" h-[180px] md:h-[280px] lg:h-[300px]  w-full object-cover object-top"
            />
            <div className=" p-3 md:p-5 lg:p-6">
              <h1 className=" font-bold">Vegetables</h1>
              <h2 className="text-xs text-slate-500 mt-1">(43)</h2>
            </div>
          </div>

          <div className="border border-slate-200 rounded-xl bg-white overflow-hidden">
            <img
              src="https://plus.unsplash.com/premium_photo-1675237625695-710b9a6c3f2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b3JhbmdlfGVufDB8fDB8fHww"
              alt=""
              className=" h-[180px] md:h-[280px] lg:h-[300px] w-full object-cover object-top"
            />
            <div className=" p-3 md:p-5 lg:p-6">
              <h1 className=" font-bold">Fruits</h1>
              <h2 className="text-xs text-slate-500 mt-1">(32)</h2>
            </div>
          </div>

          <div className="border border-slate-200 rounded-xl bg-white overflow-hidden">
            <img
              src="https://s3-alpha-sig.figma.com/img/a120/f088/82135c746d36c3465b55c6d64260cdb2?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IsMvv2l9CGBhvF9TqB4U2y7524cR9qm9j65zUKmXTX3f3J56fBTxYQcWrqZzuve72bjy1HiEO93BYw6v7WyahfUwHGX0YOrAJh8v3meABlAj7pnOwr-E~f7jqEidDNNWMvKay7-YtocriTtY6KxQajbX2ZuXKlA4IV4ndf9dgij7kkKZRXGc8GDMbbtvbcy30dVq3xC-0Dk-4B9RjtHRes78~ILMyzivh0xQnpg-90xIVjX6AwwN-ur3xs517ciAE0tXd5dgbug-86YR7Iamz7ogpDd4gSjtdnuSDR7-1ZpQaj1shp3SbhiqyWoujSBgji~UKHkoHf4T55gw1AlLPw__"
              alt=""
              className=" h-[180px] md:h-[280px] lg:h-[300px] w-full object-cover object-top"
            />
            <div className=" p-3 md:p-5 lg:p-6">
              <h1 className="">Bread</h1>
              <h2 className="text-xs text-slate-500 mt-1">(22)</h2>
            </div>
          </div>

          <div className="border border-slate-200 rounded-xl bg-white overflow-hidden">
            <img
              src="https://s3-alpha-sig.figma.com/img/4470/3914/607852c04087c9e4c007691f5990612f?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bb9cDEPZjquc9-YBOV3l09t2yp1U8pjR2YwN-jylEj5Fn4kXD9O47kJ6E~lsFN~75Vot5N~MdOSySf5Tf6TMkfnwHpTVGqbJWLC2nTU9sBVZGafiPtvhC9M5iHIE5yruzHfgDD8jnbS5ahe25eZEUuMYfLKc3P4FxrlKJdTl8Jh52KtK0zEt3v1QG0wwAsQm8qJqOCX1uKLImalk8IhirYn4b8PZHcjinDLeN0eTwpcYrwyvmwZnzNXgdIOq24hVdw0-zh2BKa8e-9l7nVcTTSCAdrAAvqq8s73n2AAl6HgFCFf-OITg~WN7dayRWi1xvz1HsH3GbpGY1yvg287LAw__"
              alt=""
              className=" h-[180px] md:h-[280px] lg:h-[300px] w-full object-cover object-top"
            />
            <div className=" p-3 md:p-5 lg:p-6">
              <h1 className="">Sweets</h1>
              <h2 className="text-xs text-slate-500 mt-1">(56)</h2>
            </div>
          </div>

          <div className="border border-slate-200 rounded-xl bg-white overflow-hidden">
            <img
              src="https://s3-alpha-sig.figma.com/img/beee/11f3/b447d8c6eabe2baead235436514ca92a?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p-dA4yEz4XdGojFCkLmMvn81O0JtMwIjHpppsUDjD47eH167YiFCAzIj8zfXa9MloD1m5-G626UGI~FiEPeqXPS8qGyi1r-SQYZiFos0RRA4nMPVNhZ6wPHJSpTsyZ7hJLa1G9yL63uQsXym5qYhBR5~v9TO9~Xo6feI29M5JmbSIqvM0ZykDyU6fuv5Ieu0r0~uo0Vy81CK3uZygpcAXMYKlpYHzOV2ooURORVaVKHWEOKFARobqcAQt3xzu9WSdRUonMU-03h0WqYJMzFe~PkBMLmbMyyuGD9FpXypjRb8~x9gFIA8~29V1UZdFNPvz-UxaqjAOVDsxBj3DL8BIg__"
              alt=""
              className=" h-[180px] md:h-[280px] lg:h-[300px] w-full object-cover object-top"
            />
          </div>

          <div className="border border-slate-200 rounded-xl bg-white overflow-hidden">
            <img
              src="https://s3-alpha-sig.figma.com/img/5d71/b69c/8d79a3c6ab7b8a1562ff9f275f369245?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=diosbfremDeF5e6LeDGDvtpZFj0nHCIDOOF6voCJOux2QMRsx6vbEfGoQ2P4UHKffAJux2aDhzIrZLglaG3sCkYoxNfvzn9ejS9PfWwHCxsi3~ELwG4JiT2aSMQAPGqGgzu3O7EYPziadazpR4QTo4GumIWqw80C5xS48xS3HxY3zLzhMu4mGoNsKrC5EW5MLNnt007FL1-Pa5I30Aqu3xjdnJb5zyGBDt4syMgvhpysGjh9cKs6PGp7X6-CIkmtQNEmCjiWDNxubXMyQat5jtmHnua9g5nabJdIGhi2RJPcH4BQh636Js4OA-JcBNVvWcra9damAMviRv9qbeAElg__"
              alt=""
              className=" h-[180px] md:h-[280px] lg:h-[300px] w-full object-cover object-top"
            />
          </div>
        </div>
      </div>
      <div className=" bg-white border-t-2 fixed z-50 bottom-0 lg:p-8 md:p-12 p-6 w-full flex justify-around items-center">
        <Link to={"/"}  className="">
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
        </Link>

        <Link to={"/checkout"} className="">
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
        </Link>

        <Link to={"/payment"} className="">
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
        </Link>
      </div>
    </section>
  );
};

export default Categories;
