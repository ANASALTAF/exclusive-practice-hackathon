import React from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowRightLong, FaChevronLeft, FaChevronRight, FaHeart, FaStar,  } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faDesktop, faClock, faCamera, faHeadphones, faGamepad, faStar,  }  from '@fortawesome/free-solid-svg-icons';

import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faEye as farEye } from '@fortawesome/free-regular-svg-icons';
import '../app/globals.css'



export const Hero = () => {
  return (
    <div><div className="flex flex-col md:flex-row h-auto pb-[100px]">
      <div className="w-full md:w-1/4 p-4 border-r border-gray-300 h-full">
        <ul className="space-y-4">
          <li className="flex justify-between items-center">
            <span>Womens Fashion</span>
            <IoIosArrowForward className="text-gray-500" />
          </li>

          <li className="flex justify-between items-center">
            <span>Mens Fashion</span>
            <IoIosArrowForward className="text-gray-500" />
          </li>

          <li>Electronics</li>
          <li>Home & Lifestyle</li>
          <li>Medicine</li>
          <li>Sports & Outdoor</li>
          <li>Babys & Toys</li>
          <li>Groceries & Pets</li>
          <li>Health & Beauty</li>
        </ul>
      </div>

      <div className="w-full md:w-3/4 p-4 h-[375px]">
        <div className="relative bg-black text-white p-8 rounded-lg h-full pt-[50px] pl-[150px] font-poppins">
          <div className="flex items-center mb-4 ">
            <Image
              src="/1200px-Apple_gray_logo 1.png"
              alt="Apple logo"
              width={30}
              height={30}
              className="mr-2"
            />
            <span>iPhone 14 Series</span>
          </div>

          <h1 className="text-4xl font-bold mb-4">Up to 10% <br /><br /> off Voucher</h1>
          <button className="flex items-center text-white border-b-2 border-white">
            Shop Now
            <span className="ml-2 flex items-center">
              <FaArrowRightLong />
            </span>
          </button>

       
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            <span className="w-3 h-3 bg-white rounded-full"></span>
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
            <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
          </div>

         
          <Image
            src="/hero_endframe__cvklg0xk3w6e_large 2.png"
            alt="iPhone 14"
            width={400}
            height={300}
            className="absolute top-0 right-0 pt-[50px] pr-[40px]"
          />
        </div>
      </div>
    </div>
    <br />
  <br />
  <br />
    </div>
    
  );
  
};


export default Hero;



<div className="border-t border-gray-300 my-8"></div>

export const Hero1 = () => {
  const products = [
    {
      id: 1,
      name: 'HAVIT HV-G92 Gamepad',
      image: "/Frame 570.png",
      price: 120,
      originalPrice: 160,
      discount: 40,
      rating: 88,
    },
    {
      id: 2,
      name: 'AK-900 Wired Keyboard',
      image: '/Frame 612.png',
      price: 960,
      originalPrice: 1160,
      discount: 35,
      rating: 75,
    },
    {
      id: 3,
      name: 'IPS LCD Gaming Monitor',
      image: '/Frame 570 (1).png',
      price: 370,
      originalPrice: 400,
      discount: 30,
      rating: 99,
    },
    {
      id: 4,
      name: 'S-Series Comfort Chair',
      image: '/Frame 570 (2).png',
      price: 375,
      originalPrice: 400,
      discount: 30,
      rating: 99,
    },
    {
      id: 5,
      name: 'S-Series Comfort Chair',
      image: '/Frame 570 (2).png',
      price: 80,
      originalPrice: 100,
      discount: 20,
      rating: 90,
    },
  ];
<div className="border-t border-gray-300 my-8"></div>
  return (
    
    <div><div className="">
      <div className="items-center">
        <div className="w-2 h-8 bg-red-500"><h2 className="text-red-500 text-lg pl-[25px]">Today</h2></div>
        
      </div>
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">Flash Sales</h1>
        <div className="flex pr-[500px]">
          {['Days', 'Hours', 'Minutes', 'Seconds'].map((label, index) => (
            <div key={index} className="text-center mx-2">
              <p className="text-sm">{label}</p>
              <p className="text-3xl font-bold">
                {index === 0 ? '03' : index === 1 ? '23' : index === 2 ? '19' : '56'}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <button className="p-2 rounded-full border border-gray-300">
          <FaChevronLeft />
        </button>
        <button className="p-2 rounded-full border border-gray-300">
          <FaChevronRight />
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg relative">
            <div className="absolute top-2 right-2">
              <FaHeart />
            </div>
            <Image
              src={product.image}
              alt={product.name}
              className="w-full mb-4"
              width={200}
              height={200}
            />
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-red-500 text-lg">${product.price} <span className="line-through text-gray-500">${product.originalPrice}</span></p>
            <div className="flex items-center">
              <span className="text-yellow-500 flex">
                {[...Array(5)].map((_, i) => (
                  i < Math.floor(product.rating / 20) ? <FaStar key={i} /> : (i === Math.floor(product.rating / 20) && product.rating % 20 >= 10 ? <FaStarHalfAlt key={i} /> : null)
                ))}
              </span>
              <p className="ml-2 text-gray-500">({product.rating})</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button className="bg-red-500 text-white py-2 px-4 rounded mt-[20px] " >View All Products</button>
      </div>
    </div>
    <br />
  <br />
  <br />
  <br />
    </div>
  );
};

<div className="border-t border-gray-300 my-8"></div>

export const ProductsPage = () => {
  return (
    <div className="p-4 font-poppins">
      <div className="border-t border-gray-300 my-8"></div>

      {/* Categories Section */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className="w-2 h-8 bg-red-500 mr-2"></div>
          <h2 className="text-lg font-semibold text-red-500">Categories</h2>
          <button className="bg-red-500 text-white px-4 py-2 rounded ml-auto">View All</button>
        </div>
        <h1 className="text-2xl font-bold mb-4">Browse By Category</h1>
        <div className="flex space-x-4 overflow-x-auto">
          {[
            { name: 'Phones', icon: faMobileAlt },
            { name: 'Computers', icon: faDesktop },
            { name: 'SmartWatch', icon: faClock },
            { name: 'Camera', icon: faCamera, active: true },
            { name: 'HeadPhones', icon: faHeadphones },
            { name: 'Gaming', icon: faGamepad },
          ].map((category, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center w-60 h-40 border ${
                category.active ? 'bg-red-500 text-white' : 'bg-white text-black'
              } rounded-lg`}
            >
              <FontAwesomeIcon icon={category.icon} className="text-3xl mb-2" />
              <span className="text-sm">{category.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-300 my-8"></div>
      <br />
  <br />
  <br />
  <br />

      
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className="w-2 h-8 bg-red-500 mr-2"></div>
          <h2 className="text-lg font-semibold text-red-500">This Month</h2>
        </div>
        <h1 className="text-2xl font-bold mb-4">Best Selling Products</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 overflow-x-auto">
          {[
            { name: 'The North Coat', price: '$260', oldPrice: '$360', rating: 5, reviews: 65, img: '/Cart.png' },
            { name: 'Gucci Duffle Bag', price: '$960', oldPrice: '$1160', rating: 5, reviews: 65, img: '/Cart (1).png' },
            { name: 'RGB Liquid CPU Cooler', price: '$160', oldPrice: '$170', rating: 5, reviews: 65, img: '/Cart (2).png' },
            { name: 'Small Bookshelf', price: '$360', oldPrice: '', rating: 5, reviews: 65, img: '/Cart (3).png' },
          ].map((product, index) => (
            <div key={index} className="w-full p-4 border rounded-lg">
              <Image
                src={product.img}
                alt={product.name}
                width={300}
                height={300}
                quality={100}
                className="w-full h-40 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <div className="flex items-center mb-2">
                <span className="text-red-500 text-xl font-bold mr-2">{product.price}</span>
                {product.oldPrice && <span className="line-through text-gray-500">{product.oldPrice}</span>}
              </div>
              <div className="flex items-center">
                <div className="flex text-yellow-500 mr-2">
                  {Array.from({ length: product.rating }, (_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} />
                  ))}
                </div>
                <span className="text-gray-500">({product.reviews})</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-300 my-8"></div>

  
  <Image
    src="/Capture.PNG"
    alt="JBL Speaker"
   
    width={1500} 
    height={1000} 
  />
  <br />
  <br />
  <br />
  <br />

  
</div>




  
  );
};

interface Product {
  id: number;
  name: string;
  price: string;
  rating: number;
  reviews: number;
  image: string;
  isNew: boolean;
  colors: string[];
}


export const Explore: Product[] = [
  {
    id: 1,
    name: "Breed Dry Dog Food",
    price: "$100",
    rating: 3,
    reviews: 35,
    image: "/Frame 604.png",
    isNew: false,
    colors: []
},
{
    id: 2,
    name: "CANON EOS DSLR Camera",
    price: "$360",
    rating: 4,
    reviews: 95,
    image: "/Frame 604 (1).png",
    isNew: false,
    colors: []
  },
  {
      id: 3,
      name: "ASUS FHD Gaming Laptop",
      price: "$700",
      rating: 5,
      reviews: 325,
      image: "/Frame 604 (2).png",
      isNew: false,
      colors: []
  },
  {
      id: 4,
      name: "Curology Product Set",
      price: "$500",
      rating: 4,
      reviews: 145,
      image: "/Capture1.PNG",
      isNew: false,
      colors: []
  },
  {
      id: 5,
      name: "Kids Electric Car",
      price: "$960",
      rating: 5,
      reviews: 65,
      image: "/Frame 608 (3).png",
      isNew: true,
      colors: ["red", "black"]
  },
  {
      id: 6,
      name: "Jr. Zoom Soccer Cleats",
      price: "$1160",
      rating: 5,
      reviews: 35,
      image: "/Frame 608 (2).png",
      isNew: false,
      colors: ["yellow", "black"]
  },
  {
      id: 7,
      name: "GP11 Shooter USB Gamepad",
      price: "$660",
      rating: 4,
      reviews: 55,
      image: "/Frame 608 (1).png",
      isNew: true,
      colors: ["black", "red"]
  },
  {
      id: 8,
      name: "Quilted Satin Jacket",
      price: "$660",
      rating: 4,
      reviews: 55,
      image: "/Frame 608.png",
      isNew: false,
      colors: ["green", "red"]
  }
];


export const ExploreProducts: React.FC = () => (
  <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Explore Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Explore.map(product => (
              <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
                  <div className="relative">
                      {product.isNew && <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">NEW</span>}
                      <Image src={product.image} alt={product.name} className="w-[200px] h-48 mx-auto w-1/2 object-cover rounded-t-lg" width={200} height={200} />
                      <div className="absolute top-2 right-2 flex space-x-2">
  <button className="bg-white p-1 rounded-full shadow">
    <FontAwesomeIcon icon={farHeart} />
  </button>
  <button className="bg-white p-1 rounded-full shadow">
    <FontAwesomeIcon icon={farEye} />
  </button>
</div>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
                  <div className="flex items-center mt-2">
                      <span className="text-red-500 text-xl font-bold">{product.price}</span>
                      <div className="ml-2 flex items-center">
                          {Array.from({ length: 5 }, (_, i) => (
                              <i key={i} className={`fas fa-star ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`}></i>
                          ))}
                          <span className="ml-2 text-gray-500 text-sm">({product.reviews})</span>
                      </div>
                  </div>
                  {product.colors.length > 0 && (
                      <div className="mt-2 flex space-x-2">
                          {product.colors.map((color, index) => (
                              <span key={index} className={`w-4 h-4 rounded-full bg-${color}-500`}></span>
                          ))}
                      </div>
                  )}
                  {product.name === "CANON EOS DSLR Camera" && (
                      <button className="mt-4 w-full bg-black text-white py-2 rounded-lg">Add To Cart</button>
                  )}
              </div>
          ))}
      </div>
      <div className="mt-6 text-center">
          <button className="bg-red-500 text-white py-2 px-4 rounded-lg">View All Products</button>
      </div>
    
      <br />
      <br />
      <br />

      <div className="grid place-items-center">
  <Image
    src="/Frame 740.png"
    alt="New Arrival"
    width={1170}
    height={768}
    quality={100} // Optional: adjust the image quality if needed
  />

  <br />
  <br />
  <br />

  <Image
    src="/Frame 702.png"
    alt="New Arrival"
    width={943}
    height={161}
    quality={100}
    className="mt-4" // Optional: adds margin-top for spacing
  />
</div>

  </div>
);