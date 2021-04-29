import { createContext, ReactNode, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';
import { Product, Stock } from '../types';

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
}

interface CartContextData {
  cart: Product[];
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<Product[]>(() => {
    const storagedCart = localStorage.getItem('@RocketShoes:cart');

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });


  const addProduct = async (productId: number) => {
    try {

      //Pega o id do produto clicado
      const productAlreadyInCart = cart.find(product => product.id === productId)

      //Verifica se o produto não existe no carrinho
      if (!productAlreadyInCart) {
        // Se não estiver no carrinho, então o item é adicionado
        const {data: product} = await api.get<Product>(`products/${productId}`)
        const {data: stock} = await api.get<Stock>(`stock/${productId}`)
        
        // Verifica se o produto tem em estoque
        if (stock.amount > 0 ) {
          setCart([ ...cart, { ...product, amount: 1}])
          localStorage.setItem('@RocketShoes:cart', JSON.stringify([ ...cart, { ...product, amount: 1}]))
          toast('Adicionando')
          return
        }
      }

      // Verifica se o produto já existe no carrinho
      if (productAlreadyInCart) {
        const {data: stock} = await api.get<Stock>(`stock/${productId}`)

        // Se o produto existe no carrinho, verifica se o stock é maior que quantidade(amount) do produto adicionado, se for maior, irá fazer um update e atualizará com a nova quantidade do produto
        if (stock.amount > productAlreadyInCart.amount) {
          // Faz um map para retornar um novo array com os valores atualizados
          const updatedCart = cart.map(cartItem => cartItem.id === productId ? {
            ...cartItem,
            amount: Number(cartItem.amount) + 1
          } : cartItem)
          
          // Atualiza o novo valor do cart dentro do setCart usando updatedCart
          setCart(updatedCart)
          localStorage.setItem('@RocketShoes:cart', JSON.stringify(updatedCart))
          toast('Adicionado')
          return
        } else {
          toast.error('Quantidade solicitada fora de estoque');
        }
      }
    
    } catch {
      toast.error('Erro na adição do produto')
    }
  };

  const removeProduct = (productId: number) => {
    try {

      const productExists = cart.some(cartProduct => cartProduct.id === productId)
      if(!productExists) {
        toast.error('Erro na remoção do produto');
        return
      }
      
      const removeProductInCart = cart.findIndex(product => product.id === productId)
      cart.splice(removeProductInCart, 1)
      setCart([...cart])
      localStorage.setItem('@RocketShoes:cart', JSON.stringify([ ...cart ]))

    } catch {
      toast.error('Erro na remoção do produto');
    }
  };

  const updateProductAmount = async ({
    productId,
    amount,
  }: UpdateProductAmount) => {
    try {

      if (amount < 1) {
        toast.error('Erro na alteração de quantidade do produto');
        return
      }

      const productExists = cart.find(product => product.id === productId)

      const {data: stock} = await api.get(`stock/${productId}`)
      const stockIsNotAvailable = amount > stock.amount

      if (stockIsNotAvailable) {
        toast.error('Quantidade solicitada fora de estoque');
        return
      }

      if (!productExists) {
        toast.error('Erro na alteração de quantidade do produto');
        return
      }

      const updatedProductAmount = cart.map(product => product.id === productId ? {
        ...product,
        amount: amount,
      } 
      : product)

      setCart(updatedProductAmount)
      localStorage.setItem('@RocketShoes:cart', JSON.stringify(updatedProductAmount))

    } catch {
      toast.error('Erro na alteração de quantidade do produto');
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
