import { wait } from "../util"

const products = [
  {
    id: 1,
    title: "Milk",
    price: 350,
  },
  {
    id: 2,
    title: "Bread",
    price: 250,
  },
  {
    id: 3,
    title: "Salad Dressings",
    price: 780,
  },
  {
    id: 4,
    title: "Condiments",
    price: 1250,
  },
  {
    id: 5,
    title: "Cheese",
    price: 1500,
  },
  {
    id: 6,
    title: "Eggs",
    price: 850,
  },
  {
    id: 7,
    title: "Canned Fish",
    price: 1750,
  },
  {
    id: 8,
    title: "Fish Oil",
    price: 3925,
  },
  {
    id: 9,
    title: "Frozen Chicken",
    price: 1095,
  },
  {
    id: 10,
    title: "Almonds",
    price: 5500,
  },
  {
    id: 11,
    title: "Cashew",
    price: 6500,
  },
  {
    id: 12,
    title: "Chilli Sauce",
    price: 600,
  },
  {
    id: 13,
    title: "Tea",
    price: 700,
  },
  {
    id: 14,
    title: "Coffee",
    price: 700,
  },
  {
    id: 15,
    title: "Apple",
    price: 850,
  },
  {
    id: 16,
    title: "Orange",
    price: 650,
  },
  {
    id: 17,
    title: "Tomato",
    price: 160,
  },
  {
    id: 18,
    title: "Brinjal",
    price: 225,
  },
  {
    id: 19,
    title: "Carrot",
    price: 135,
  },
  {
    id: 20,
    title: "Cooking Oil",
    price: 1220,
  },
  {
    id: 21,
    title: "Cereals",
    price: 870,
  },
]

const cartItems = [
  {
    id: 2,
    title: "Bread",
    price: 250,
  },
  {
    id: 3,
    title: "Salad Dressings",
    price: 780,
  },
]

export const getProducts = async () => {
  await wait()
  return { success: true, products }
  // throw {
  //   error: "Some problems in fetching the products. Please try again later.",
  // }
}
export const getCartItems = async () => {
  await wait()
  return { success: true, cartItems }
  // throw {
  //   error: "Some problems in fetching the cart items. Please try again later.",
  // }
}

export const addCartItem = async () => {
  await wait()
  return { success: true }
  //  throw {
  //   error: "Some problems in adding items to the cart. Please try again later.",
  //  }
}

export const removeCartItem = async () => {
  await wait()
  // return { success: true }
  throw {
    error:
      "Some problems in removing items from the cart. Please try again later.",
  }
}
