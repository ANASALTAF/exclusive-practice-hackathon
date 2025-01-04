import Head from 'next/head';
import React from 'react';
import Image from 'next/image';

const page = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Head>
        <title>Our Story</title>
        <meta name="description" content="Learn about our story and journey." />
        
      </Head>

      {/* Navigation */}
      <div className="ml-[150px] pt-[70px]">
        <ul className="flex gap-2 w-[114px] h-[24px]">
          <li className="w-[42px] h-[21px] font-poppins font-normal text-[14px] opacity-[50%]">
            Home
          </li>
          <li className="w-[42px] h-[21px] font-poppins font-normal text-[14px]">
            About
          </li>
        </ul>
      </div>

      {/* Content Section */}
      <div className="flex max-w-[1440px] w-[1270px] mx-auto">
        <div className="w-[525px] h-[336px] mt-[150px] pl-[15px] gap-[40px]">
          <h2 className="font-inter font-semibold text-[54px] text-left h-[64px] w-[277px]">
            Our Story
          </h2>
          <p>
            Launched in 2015, Exclusive is South Asias premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a wide
            range of tailored marketing, data, and service solutions, Exclusive has
            10,500 sellers and 300 brands and serves 3 million customers across the
            region.
          </p>
          <br />
          <p>
            Exclusive has more than 1 Million products to offer, growing at a very
            fast rate. Exclusive offers a diverse assortment in categories ranging
            from consumer goods to much more.
          </p>
        </div>

        {/* Image Section */}
        <div>
          <Image
            src="https://placehold.co/525x336"
            alt="Placeholder image"
            width={525}
            height={336}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default page;
