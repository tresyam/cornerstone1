import { useEffect } from 'react'
import './App.css'
import { addNewProduct, createCart, deleteCart, deleteLoginCookie, getAllCartsAscending, getAllProducts, getAllUsers, updateCart, userLogin } from './javascript/Api'
import { makeCartObject, makeCartProductObject, makeLoginObject, makeProductObject } from './javascript/CreateObjectUtilities';
import Authenticate from './AuthenticateForm';
import SignUpForm from './SignupForm';
import LoginPage from './LoginPage';

export default function App() {



  useEffect(() => {
    async function fetchData() {
      // //testing get functions
      const temp = await getAllProducts();
      console.log(temp);
      const tempAgain = await getAllUsers();
      console.log(tempAgain);
      const temp2 = await getAllCartsAscending();
      console.log(temp2);

      // //Make Product
      const tempProduct = makeProductObject("test", "3.00", "test product", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Two_red_dice_01.svg/1200px-Two_red_dice_01.svg.png", "electronics");
      const temp3 = await addNewProduct(tempProduct);
      console.log(temp3);

      //Make Cart (and Cart Product Object)
      const cartProduct1 = makeCartProductObject(1, 3);
      const cartProduct2 = makeCartProductObject(18, 12);
      const cartObject = makeCartObject("3", "2023-08-24", [cartProduct1, cartProduct2]);
      const temp4 = createCart(cartObject);
      console.log(temp4);

      //Make login object - NOT WORKING!!!!
      const loginObject = makeLoginObject("mor_2314", "83r5^_");
      console.log(loginObject);
      const loginObject2 = `{"username":"mor_2314", "password":"83r5^_"}`
      console.log(JSON.parse(loginObject2));
      // console.log(loginObject);
      const temp5 = await userLogin("mor_2314", "83r5^_");
      console.log(temp5);

      // //Update
      // const temp6 = updateCart(cartObject, 5);
      // console.log(temp6);

      // //Delete
      // const temp7 = deleteCart(4);
      // console.log(temp7);
    }
    fetchData();
  }, [])

  // deleteLoginCookie();
  return (
      <LoginPage/>
  )
}

// export default App
