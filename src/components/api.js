import axios from 'axios';

export default async function getGoods() {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');

    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getCategory() {
  try {
    const response = await axios.get(
      'https://fakestoreapi.com/products/categories'
    );

    return response.data;
  } catch (error) {
    console.error(error);
  }
}
