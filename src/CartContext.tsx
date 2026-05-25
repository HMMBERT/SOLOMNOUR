import { createContext, useContext, useState, type ReactNode } from "react";

// MENU ITEM
export interface MenuItem {
  name: string;
  image: string;
  price: number;
}

// CART ITEM
export interface CartItem extends MenuItem {
  quantity: number;
}

// CONTEXT TYPES
interface CartContextType {
  cartItems: CartItem[];

  addToCart: (item: MenuItem) => void;

  removeFromCart: (name: string) => void;

  totalItems: number;

  totalPrice: number;
}

// CONTEXT
const CartContext = createContext<CartContextType | undefined>(undefined);

// PROVIDER
export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // ADD TO CART
  const addToCart = (item: MenuItem) => {
    setCartItems((prev) => {
      const existingItem = prev.find(
        (cartItem) => cartItem.name === item.name
      );

      if (existingItem) {
        return prev.map((cartItem) =>
          cartItem.name === item.name
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              }
            : cartItem
        );
      }

      return [...prev, { ...item, quantity: 1 }];
    });
  };

  // REMOVE ITEM
  const removeFromCart = (name: string) => {
    setCartItems((prev) =>
      prev.filter((item) => item.name !== name)
    );
  };

  // TOTAL ITEMS
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // TOTAL PRICE
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// CUSTOM HOOK
export function useCart(): CartContextType {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}