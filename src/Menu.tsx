import classicImg from "./assets/classic.png";
import bruleImg from "./assets/brule.png";
import quesoImg from "./assets/queso.png";
import fudgeImg from "./assets/fudge.png";
import velvetImg from "./assets/flan.png";

import { Star, Plus } from "lucide-react";
import { Link } from "react-router-dom"; 
import { useCart, type MenuItem } from "./CartContext";

const menuItems: MenuItem[] = [
  { name: "CLASSIC KAMOTE MACAROONS", image: classicImg, price: 15 },
  { name: "MACAROON LE BRULE", image: bruleImg, price: 15 },
  { name: "TOASTED QUESO MACAROON", image: quesoImg, price: 15 },
  { name: "FUDGE-TOP MACAROON", image: fudgeImg, price: 15 },
  { name: "CARAMEL CAP MACAROON", image: velvetImg, price: 20 },
];

export default function Menu() {
  const { addToCart, totalItems } = useCart();
  return (
    
    <section className="min-h-screen bg-[#E6E0D4] py-20 px-6">
      

        {/* HEADER */}
        <div className="mb-16 rounded-[38px] border border-[#E0C9A6]/40 bg-[#E6E0D4] shadow-sm px-8 md:px-16 py-14">
          
          {/* Added max width so text doesn't hug the left side too much */}
          <div className="max-w-4xl">
            <h1 className="text-[170px] md:text-[150px] font-serif text-[#3A2A1F] leading-none">
             {"\u00A0"}{"\u00A0"} Solommour
            </h1>

            <h2 className="text-[80px] md:text-[50px] font-serif mt-5 text-[#3A2A1F] leading-snug">
              {"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}Sweet Potato Macaroons
            </h2>

            <p className="mt-6 text-[20px] text-[#5B4636] text-lg leading-relaxed max-w-2xl">
             {"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"} sweet potato macaroons baked to perfection with rich flavor in every bite.
            </p>
{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}
           <button className="bg-transparent border-none outline-none underline text-[18px]">
  view all flavors <br></br>
 <Link
  to="/cart"
  className="inline-flex items-center gap-3 bg-[#D89A5B] text-white px-7 py-4 rounded-full text-[20px] font-bold tracking-wide shadow-lg transition-all duration-300 hover:bg-[#C98647] hover:scale-105 hover:shadow-xl"
>
  {"\u00A0"}Checkout ({totalItems}){"\u00A0"}{"\u00A0"}
</Link>
</button>

          </div>
        </div>
<br></br>
        {/* FILTER TABS */}
        <div className="mb-16 rounded-full px-6 md:px-10 py-5">
  <div className="flex flex-wrap justify-left md:justify-start gap-8  text-[#3A2A1F] font-medium">
{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}
    <Link
      to="/menu"
      className="bg-transparent underline text-[18px] hover:text-[#3A2A1F] transition"
    >
      PASTRY
    </Link>
    {"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}
    <Link
          to="/Drinks"
          className="bg-transparent border-none outline-none underline text-[18px] hover:text-[#3A2A1F] transition"
        >
          DRINKS
        </Link>
{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}
    <Link
      to="/bundle"
      className="bg-transparent border-none outline-none underline text-[18px] hover: text-[#3A2A1F] transition"
    >
      BUNDLE
    </Link>

  </div>
</div>
<br></br><br></br>
        {/* MENU GRID */}
<div className="max-w-5xl mx-auto grid grid-cols-5 gap-y-12 gap-x-2 mb-24">
  {menuItems.map((item, index) => (
    <div
      key={index}
      className="flex flex-col items-center text-center group cursor-pointer"
    >
      <div className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-[#E6DCCF] flex items-center justify-center mb-5 shadow-inner transition-transform duration-500 group-hover:scale-105">
        
        <img
          src={item.image}
          alt={item.name}
          className="w-28 h-28 md:w-32 md:h-32 object-contain drop-shadow-lg"
        />

      </div>

      <h3 className="font-semibold text-[#3A2A1F] tracking-wide text-sm leading-relaxed px-2">
        {item.name}
      </h3>
      <p className="mt-2 text-[#6A4A33] font-bold text-lg">
  ₱{item.price}
</p>
      {/* ADD TO CART BUTTON */}
           <button 
  onClick={() => addToCart(item)}
  className="mt-5 flex items-center gap-2 bg-[#D89A5B] text-white px-6 py-3 rounded-full text-[17px] font-semibold tracking-wide shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#C98647] hover:shadow-lg active:scale-95"
>
  <Plus size={18} strokeWidth={2.5} />
  Add to Cart {"\u00A0"}  
</button>
    </div>
  ))}
</div>  
<br></br><br></br><br></br><br></br><br></br>

        {/* STATS SECTION */}
        <div className="border-t border-[#3A2A1F]/10 pt-10">
          <div className="flex flex-wrap items-center gap-6 text-[20px]  text-[#3A2A1F] font-semibold text-lg">
            
            {"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}<span>5 FLAVORS</span>{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}

            <span>100% NATURAL</span>{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}

            <div className="flex items-center gap-2">
              <Star
                size={20}
                className="fill-yellow-500 text-yellow-500"
              />
              <span>4.9 RATING</span>
            </div>

          </div>
        </div>

      
    </section>
  );
}