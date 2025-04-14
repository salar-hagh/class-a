import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import Cookie from "js-cookie";
type AppContextProvider = {
  children: React.ReactNode;
};

type CartItems = {
  id: string;
  qty: number;
};

type AppContext = {
  cartItems: CartItems[];
  increaseProductQty: (id: string) => void;
  getProductQty: (id: string) => number;
  decreaseProductQty: (id: string) => void;
  removeFromCart: (id: string) => void;
  getTotalQty: () => number;
  isLogin: boolean;
  setIsLogin: Dispatch<SetStateAction<boolean>>;
};

export const AppContext = createContext({} as AppContext);

export const AppContextProvider = ({ children }: AppContextProvider) => {
  const [cartItems, setCartItems] = useLocalStorage<CartItems[]>("cart", []);
  const [isLogin, setIsLogin] = useState(false);

  const getProductQty = (id: string) => {
    return cartItems.find((item) => item.id == id)?.qty ?? 0;
  };

  const increaseProductQty = (id: string) => {
    setCartItems((currentItems) => {
      let isNotProductExist =
        currentItems.find((item) => item.id == id) == null;

      if (isNotProductExist) {
        return [...currentItems, { id: id, qty: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id == id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseProductQty = (id: string) => {
    setCartItems((currentItems) => {
      let isLastOne = currentItems.find((item) => item.id == id)?.qty == 1;

      if (isLastOne) {
        return currentItems.filter((item) => item.id != id);
      } else {
        return currentItems.map((item) => {
          if (item.id == id) {
            return { ...item, qty: item.qty - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  };

  const getTotalQty = () => {
    return cartItems.reduce((total, item) => total + item.qty, 0);
  };

  useEffect(() => {
    const token = Cookie.get("token");

    if (token) {
      setIsLogin(true);
    }
  }, []);

  return (
    <>
      <AppContext.Provider
        value={{
          cartItems,
          increaseProductQty,
          getProductQty,
          decreaseProductQty,
          removeFromCart,
          getTotalQty,
          isLogin,
          setIsLogin,
        }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
};
