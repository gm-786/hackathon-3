import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Header Section */}
      <div className="flex items-center flex-col bg-gray-100 py-4">
        <h2 className="text-xl font-bold">Hello Nike App</h2>
        <p className="text-center text-gray-700">
          Download the app to access everything Nike.&nbsp;
          <Link href="#" className="text-blue-500 underline">
            Get Your Great
          </Link>
        </p>
      </div>

      {/* Hero Section */}
      <section className="px-10 py-8">
        <Image
          src="/images/shoeBanner.png"
          width={1344}
          height={700}
          alt="Banner"
          className="rounded-md"
        />
        <div className="flex flex-col items-center mt-6">
          <h3 className="text-lg font-medium text-black">First Look</h3>
          <h2 className="text-5xl font-extrabold uppercase text-black mt-2 mb-4">
            Nike Air Max Pulse
          </h2>
          <p className="w-3/4 text-center text-black">
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
            Pulse
            <br />
            — designed to push you past your limits and help you go to the max.
          </p>
          <div className="flex space-x-4 mt-6">
            <button className="px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
              Notify Me
            </button>
            <button className="px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
              Shop Air Max
            </button>
          </div>
        </div>
      </section>

      {/* Best of Air Max Section */}
      <div className="bg-white px-6 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Best of Air Max</h2>
          <div className="flex space-x-2">
            <button className="px-4 py-2 font-bold rounded-full bg-gray-100">
              Shop
            </button>
            <div className="flex space-x-2">
              <button className="p-2 bg-gray-100 rounded-full">←</button>
              <button className="p-2 bg-gray-300 rounded-full">→</button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[ 
            { src: "/images/shoe1.png", title: "Nike Air Max Pulse", price: "₹ 13,995", category: "Women's Shoes" },
            { src: "/images/shoe2.png", title: "Nike Air Max Pulse", price: "₹ 13,995", category: "Men's Shoes" },
            { src: "/images/shoe3.png", title: "Nike Air Max 97 SE", price: "₹ 16,995", category: "Men's Shoes" },
          ].map((product, index) => (
            <div key={index} className="border rounded-md p-4 text-center">
              <Image
                src={product.src}
                alt={product.title}
                width={300}
                height={300}
                className="mx-auto"
              />
              <div className="mt-4">
                <h3 className="font-medium text-lg">{product.title}</h3>
                <p className="text-gray-500 text-sm">{product.category}</p>
                <p className="font-bold mt-1">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Section */}
      <div className="relative bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-bold text-left">Featured</h1>
          <Image
            src="/images/runningman.png"
            alt="Running Man"
            width={1200}
            height={600}
            className="rounded-lg mx-auto"
          />
          <h1 className="mt-8 text-4xl font-extrabold text-gray-900">
            STEP INTO WHAT FEELS GOOD
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Cause everyone should know the feeling of running in that perfect
            pair!
          </p>
          <button className="mt-6 px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
            Find Your Shoe
          </button>
        </div>
      </div>

      {/* Gear Up Section */}
      <div className="bg-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-left">Gear Up</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[ 
              { src: "/images/gearup1.png", title: "Nike Dri-FIT ADV TechKnit Ultra Men's Short-Sleeve Running Top", price: "₹ 3,895" },
              { src: "/images/gearup2.png", title: "Nike Dri-FIT Challenger Men's 18cm (approx.) 2-in-1 Versatile Shorts", price: "₹ 2,495" },
              { src: "/images/gearup3.png", title: "Nike Dri-FIT ADV Run Division Women's Long-Sleeve Running Top", price: "₹ 5,295" },
              { src: "/images/gearup4.png", title: "Nike Fast Women's Mid-Rise 7/8 Running Leggings with Pockets", price: "₹ 3,795" },
            ].map((item, index) => (
              <div key={index} className="text-center flex flex-col items-center">
                <Image src={item.src} alt={item.title} width={300} height={300} className="rounded-lg" />
                <p className="text-gray-700 font-medium mt-4">{item.title}</p>
                <p className="text-gray-500 text-sm">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Don't Miss Section */}
      <div className="bg-white py-16 px-8">
        <div className="max-w-7xl mx-auto text-left">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Don`&apos;`t Miss</h2>
          <Image
            src="/images/image7.png"
            alt="Don't Miss Banner"
            width={1344}
            height={700}
            className="rounded-md"
          />
        </div>
      </div>

      {/* Flight Essentials Section */}
      <div className="relative bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-helvetica text-[52px] leading-[60px] text-center underline font-bold">
            Flight Essentials
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Your built-to-last all-weeks wears—but with style only Jordan Brand can deliver.
          </p>
          <button className="mt-6 px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
            Shop
          </button>
        </div>
      </div>

      {/* Category Images Section */}
      <div className="imgArea flex justify-center pt-8 gap-6">
        <p className=" text-left text-bold">The Essentials</p>
        <div className="imgItem flex flex-col">
          <Image
            src="/images/image8.png"
            width={282}
            height={100}
            alt="Men's"
          />
          <h6 className="pt-4 text-center font-semibold">Men`&apos;`s</h6>
        </div>
        <div className="imgItem flex flex-col">
          <Image
            src="/images/image9.png"
            width={282}
            height={100}
            alt="Women's"
          />
          <h6 className="pt-4 text-center font-semibold">Women`&apos;`s</h6>
        </div>
        <div className="imgItem flex flex-col">
          <Image
            src="/images/image10.png"
            width={282}
            height={100}
            alt="Kid's"
          />
          <h6 className="pt-4 text-center font-semibold rounded">Kid`&apos;`s</h6>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[ 
            { title: "Icons", items: ["Air Force 1", "Huarache", "Air Max 90", "Air Max 95"] },
            { title: "Shoes", items: ["All Shoes", "Custom Shoes", "Jordan Shoes", "Running Shoes"] },
            { title: "Clothing", items: ["All Clothing", "Modest Wear", "Hoodies & Pullovers", "Shirts & Tops"] },
            { title: "Kids'", items: ["Infant & Toddler Shoes", "Kids' Shoes", "Kids' Jordan Shoes", "Kids' Basketball Shoes"] },
          ].map((column, index) => (
            <div key={index}>
              <h3 className="font-bold mb-4">{column.title}</h3>
              <ul className="space-y-2 text-sm">
                {column.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </>
  );
}
