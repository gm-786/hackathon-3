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
      {/* Replaced button with plain text */}
      <span className="font-bold text-gray-800">Shop</span>
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
      <div key={index} className="text-center">
        <Image
          src={product.src}
          alt={product.title}
          width={441.36}
          height={441.36}
          className="mx-auto"
        />
        {/* Title, Category and Price Below Image */}
        <div className="flex justify-between items-center mt-4 text-black font-medium">
          <div className="text-left">
            <h3>{product.title}</h3>
            <p className="text-sm">{product.category}</p>
          </div>
          <div className="text-right font-bold">{product.price}</div>
        </div>
      </div>
    ))}
  </div>
</div>

     
      {/* Featured Section */}
<div className="relative bg-white py-16 px-4">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="font-bold text-2xl text-left text-gray-900 mb-8">
      Featured
    </h2>
    <Image
      src="/images/runningman.png"
      alt="Running Man"
      width={1344}
      height={700}
      className="rounded-lg mx-auto"
    />
    <h1 className="mt-8 text-5xl font-bold text-gray-900">
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
    {/* Section Heading */}
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-3xl font-bold text-gray-900">Gear Up</h2>
      <div className="flex items-center space-x-4">
        {/* Shop Men's Button */}
        <div className="flex items-center space-x-2">
          <h3 className="font-bold">Shop Men&apos;s</h3>
          {/* Men's Navigation Arrows */}
          <div className="flex items-center space-x-2">
            <button className="p-3 bg-gray-200 rounded-full">←</button>
            <button className="p-3 bg-gray-200 rounded-full">→</button>
          </div>
        </div>
        {/* Shop Women's Button */}
        <div className="flex items-center space-x-2">
        <h3 className="font-bold">Shop Women&apos;s</h3>
          {/* Women's Navigation Arrows */}
          <div className="flex items-center space-x-2">
            <button className="p-3 bg-gray-200 rounded-full">←</button>
            <button className="p-3 bg-gray-200 rounded-full">→</button>
          </div>
        </div>
      </div>
    </div>

    {/* Products Grid */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {/* Product 1 */}
      <div>
        <Image
          src="/images/gearup1.png"
          alt="Nike Dri-FIT ADV TechKnit Ultra"
          width={441.36}
          height={441.36}
          className="rounded-lg"
        />
        <div className="mt-3">
          <h3 className="text-base font-bold leading-tight">
            Nike Dri-FIT ADV TechKnit Ultra
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            Men&apos;s Short-Sleeve Running Top
          </p>
          <p className="text-base font-bold mt-1">₹ 3,895</p>
        </div>
      </div>

      {/* Product 2 */}
      <div>
        <Image
          src="/images/gearup2.png"
          alt="Nike Dri-FIT Challenger"
          width={441.36}
          height={441.36}
          className="rounded-lg"
        />
        <div className="mt-3">
          <h3 className="text-base font-bold leading-tight">
            Nike Dri-FIT Challenger
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            Men&apos;s 18cm (approx.) 2-in-1 Versatile Shorts
          </p>
          <p className="text-base font-bold mt-1">₹ 2,495</p>
        </div>
      </div>

      {/* Product 3 */}
      <div>
        <Image
          src="/images/gearup3.png"
          alt="Nike Dri-FIT ADV Run Division"
          width={441.36}
          height={441.36}
          className="rounded-lg"
        />
        <div className="mt-3">
          <h3 className="text-base font-bold leading-tight">
            Nike Dri-FIT ADV Run Division
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            Women&apos;s Long-Sleeve Running Top
          </p>
          <p className="text-base font-bold mt-1">₹ 5,295</p>
        </div>
      </div>

      {/* Product 4 */}
      <div>
        <Image
          src="/images/gearup4.png"
          alt="Nike Fast"
          width={441.36}
          height={441.36}
          className="rounded-lg"
        />
        <div className="mt-3">
          <h3 className="text-base font-bold leading-tight">Nike Fast</h3>
          <p className="text-sm text-gray-600 mt-1">
            Women&apos;s Mid-Rise 7/8 Running Leggings with Pockets
          </p>
          <p className="text-base font-bold mt-1">₹ 3,795</p>
        </div>
      </div>
    </div>
  </div>
</div>


           {/* Don't Miss Section */}
           <div className="bg-white py-16 px-8">
        <div className="max-w-7xl mx-auto text-left">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Don&apos;t Miss</h2>
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

      <div className="imgArea pt-8">
        <h2 className="text-2xl font-bold text-left px-8">The Essentials</h2>
        <div className="flex justify-between px-8 gap-6 mt-6">
          <div className="imgItem relative flex flex-col items-center w-full sm:w-1/3">
            <Image
              src="/images/image8.png"
              width={600}
              height={200}
              alt="Men's"
              className="w-full rounded-lg object-cover"
            />
            <button className="absolute bottom-4 left-4 px-6 py-2 bg-white text-black  font-bold rounded-full hover:bg-gray-800 transition">
              Men&apos;s
            </button>
          </div>
          <div className="imgItem relative flex flex-col items-center w-full sm:w-1/3">
            <Image
              src="/images/image9.png"
              width={600}
              height={200}
              alt="Women's"
              className="w-full rounded-lg object-cover"
            />
            <button className="absolute bottom-4 left-4 px-6 py-2 bg-white text-black  font-bold rounded-full hover:bg-gray-800 transition">
              Women&apos;s
            </button>
          </div>
          <div className="imgItem relative flex flex-col items-center w-full sm:w-1/3">
            <Image
              src="/images/image10.png"
              width={600}
              height={200}
              alt="Kid's"
              className="w-full rounded-lg object-cover"
            />
            <button className="absolute bottom-4 left-4 px-6 py-2 bg-white text-black font-bold rounded-full hover:bg-gray-800 transition">
              Kid&apos;s
            </button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[ 
            { title: "Icons", items: ["Air Force 1", "Huarache", "Air Max 90", "Air Max 95"] },
            { title: "Shoes", items: ["All Shoes", "Custom Shoes", "Jordan Shoes", "Running Shoes"] },
            { title: "Clothing", items: ["All Clothing", "Modest Wear", "Hoodies & Pullovers", "Shirts & Tops"] },
            { title: "Kids'", items: ["Infant & Toddler Shoes", "Kid's Shoes", "Kid's Jordan Shoes", "Kid's Basketball Shoes"] },
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
