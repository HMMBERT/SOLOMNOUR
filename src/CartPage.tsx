import { useState } from "react";
import { useCart } from "./CartContext";
import bgImage from "./assets/bg2.jpeg";

export default function CartPage() {
  const {
    cartItems,
    totalPrice,
    removeFromCart,
  } = useCart();

  const [payment, setPayment] = useState("COD");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");

  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 py-12 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >

      {/* MAIN CONTAINER */}
      <div className="w-[700px] bg-[#F7F1E8] rounded-[42px] border border-[#DCCCB8] shadow-[0_12px_45px_rgba(0,0,0,0.08)] overflow-hidden">

        {/* CONTENT */}
        <div className="px-12 py-12">

          {/* HEADER */}
          <div className="text-center mb-12 border-b border-[#DCCCB8] pb-8">
            <h1 className="text-[52px] leading-none font-serif text-[#3A2A1F] tracking-wide">
              Checkout
            </h1>

            <p className="text-[#7A6A5C] text-[15px] mt-4 leading-relaxed">
              Complete your order details below
            </p>
          </div>

          {/* FORM CONTAINER */}
          <div className="border border-[#DDCCB8] rounded-[32px] bg-[#EFE6DA] px-8 py-8">

            {/* FORM SECTION */}
            <div className="space-y-7">

              {/* NAME */}
              <div>
                
                <label className="block text-[15px] font-semibold text-[#3A2A1F] mb-3">{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}
                  Full Name
                </label>
{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-500px px-20 py-20 bg-white border border-[#D8C6AF] rounded-2xl text-[20px] text-[#3A2A1F] placeholder:text-[#A09182] outline-none transition focus:ring-2 focus:ring-[#C89F6A]"
                />
              </div>

              {/* CONTACT */}
              <div>
                <label className="block text-[15px] font-semibold text-[#3A2A1F] mb-3">
                 {"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"} Contact Number
                </label>
{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}
                <input
                  type="text"
                  placeholder="09XXXXXXXXX"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-500px px-4 py-3 bg-white border border-[#D8C6AF] rounded-2xl text-[20px] text-[#3A2A1F] placeholder:text-[#A09182] outline-none transition focus:ring-2 focus:ring-[#C89F6A]"
                />
              </div>

              {/* ADDRESS */}
              <div>
                <label className="block text-[15px] font-semibold text-[#3A2A1F] mb-3">{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}
                  Delivery Address
                </label>
{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}
                <textarea
                  placeholder="House No. / Street / Barangay / City"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  rows={4}
                  className="ml-6 w-[500px] px-4 py-3 bg-white border border-[#D8C6AF] rounded-2xl text-[20px] text-[#3A2A1F] placeholder:text-[#A09182] outline-none resize-none transition focus:ring-2 focus:ring-[#C89F6A]"
                />
              </div>

              {/* PAYMENT */}
              <div>
                <label className="block text-[15px] font-semibold text-[#3A2A1F] mb-3">{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}
                  Payment Method
                </label>
{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}
                <select
                  value={payment}
                  onChange={(e) => setPayment(e.target.value)}
                  className="w-500px px-4 py-3 bg-white border border-[#D8C6AF] rounded-2xl text-[20px] text-[#3A2A1F] outline-none transition focus:ring-2 focus:ring-[#C89F6A]"
                >
                  <option>Cash on Delivery (COD)</option>
                  <option>GCash</option>
                </select>
              </div>

            </div>
          </div>

          {/* SUMMARY */}
          <div className="mt-10 border border-[#DDCCB8] bg-[#EFE6DA] rounded-[32px] px-8 py-8">

            <div className="flex items-center justify-between mb-7 border-b border-[#D8C6AF] pb-5">
              <h2 className="text-[32px] font-serif text-[#3A2A1F]">
               {"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"} Order Summary
              </h2>

              <span className="text-sm text-[#7A6A5C]">
                {cartItems.length} item(s){"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"} 
              </span>
            </div>

            <div className="space-y-5 max-h-[260px] overflow-y-auto pr-2">

              {cartItems.length === 0 ? (
                <p className="text-[#7A6A5C] text-sm">
                 {"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"} Your cart is empty.
                </p>
              ) : (
                cartItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-start border-b border-[#D8C6AF]/70 pb-5 px-1"
                  >
                    <div className="pr-6">
                      <h3 className="font-semibold text-[15px] text-[#3A2A1F] leading-relaxed">
                        {"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"} {item.name}
                      </h3>

                      <p className="text-sm text-[#7A6A5C] mt-1.5">
                       {"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}  Quantity: {item.quantity}
                      </p>
                    </div>

                    <div className="text-right min-w-[100px]">
                      <p className="font-semibold text-[15px] text-[#3A2A1F]">
                        ₱{item.price * item.quantity}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"} 
                      </p>

                      <button
                        onClick={() => removeFromCart(item.name)}
                        className="text-xs text-red-500 hover:underline mt-2"
                      >
                        Remove
                      </button>
                      {"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"} 
                    </div>
                  </div>
                ))
              )}

            </div>

            {/* TOTAL */}
            <div className="mt-8 pt-6 border-t border-[#D8C6AF] flex items-center justify-between px-1">
              <h2 className="text-[22px] font-bold text-[#3A2A1F]">
           {"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}{"\u00A0"}     Total
              </h2>

              <p className="text-[34px] font-bold text-[#3A2A1F]">
                ₱{totalPrice}{"\u00A0"}{"\u00A0"}{"\u00A0"}
              </p>
            </div>

          </div>

          {/* BUTTON */}
         <div className="flex justify-center mt-10 border-t border-[#E6D8C7] pt-8">
  <button className="w-[220px] bg-[#C97B47] text-white py-4 rounded-2xl text-[15px] text-center font-semibold tracking-wide hover:bg-[#B96D3D] transition-all duration-300 shadow-lg">
    Proceed to Checkout
  </button>
</div>

        </div>
      </div>
    </section>
  );
}