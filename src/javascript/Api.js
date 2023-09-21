import axios from "axios";
import Cookies from "js-cookie";

/***************************/
/*API URLS AND BASE METHODS*/

const getAllProductsUrl = 'https://fakestoreapi.com/products';
const getAllCartsUrl = 'https://fakestoreapi.com/carts';
const getAllCategoriesUrl = `https://fakestoreapi.com/products/categories`;
const getAllUsersUrl = `https://fakestoreapi.com/users`;
const loginUrl = `https://fakestoreapi.com/auth/login`;

async function getFromApi(getUrl) {
    try {
        const response = await fetch(getUrl);
        const data = response.json();
        return data;
    }
    catch (error) {
        console.error(error);
    }
}

async function addToApi(addUrl, objectToAdd) {
    // console.log(objectToAdd);
    try {
        const response = await fetch(addUrl,
            {
                method: "POST",
                body: JSON.stringify(objectToAdd)
            });
        const data = response.json();
        return data;
    }
    catch (error) {
        console.error(error);
    }
}

async function updateToApi(updateUrl, objectToUpdate) {
    try {
        const response = await fetch(updateUrl,
            {
                method: "PUT",
                body: JSON.stringify(objectToUpdate)
            });
        const data = response.json();
        return data;
    }
    catch (error) {
        console.error(error);
    }
}

async function deleteFromApi(deleteUrl) {
    try {
        const response = await fetch(deleteUrl, {
            method: "DELETE"
        });
        const data = response.json();
        return data;
    }
    catch (error) {
        console.error(error);
    }
}

/*****************/
/*PRODUCT METHODS*/

export async function getAllProducts() {
    return getFromApi(getAllProductsUrl);
    // try{
    //     const response = await fetch(getAllProductsUrl);
    //     return await response.json();        
    // }
    // catch (error){
    //     console.error(error);
    // }
}

export async function getSingleProductById(productID) {
    const productUrl = `${getAllProductsUrl}/${productID}`;
    return getFromApi(productUrl);
    // try{
    //     const response = await fetch(productUrl);
    //     const data = await response.json();
    //     return data;
    // }
    // catch (error) {
    //     console.error(error);
    // }
}

export async function getAllProductsLimitedToNumber(numberToDisplay) {
    const productsUrl = `${getAllProductsUrl}?limit=${numberToDisplay}`;
    return getFromApi(productsUrl);
    // try{
    //     const response = await fetch(productsUrl);
    //     const data = await response.json();
    //     return data;
    // }
    // catch (error) {
    //     console.error(error);
    // }
}

/**
 * orderToSort must be either asc or desc
 */
export async function getAllProductsAscending() {
    return getSortedProducts("asc");
}
export async function getAllProductsDescending() {
    return getSortedProducts("desc");
}
async function getSortedProducts(orderToSort) {
    const productsUrl = `${getAllProductsUrl}?sort=${orderToSort}`;
    return getFromApi(productsUrl);
}

export async function addNewProduct(productToAdd) {
    return addToApi(getAllProductsUrl, productToAdd);
    // try{
    //     const response = await fetch(getAllProductsUrl,
    //         {
    //             method:"POST",
    //             body:JSON.stringify(
    //                 productToAdd
    //             )
    //         });
    //     const data = response.json();
    //     return data;
    // }
    // catch(error){
    //     console.error(error);
    // }
}

export async function updateProduct(productToUpdate) {
    const productUrl = `${getAllProductsUrl}/${productToUpdate.id}`;
    return updateToApi(productUrl, productToUpdate);
    // try{
    //     const response = await fetch(productUrl,
    //         {
    //             method:"PUT",
    //             body:JSON.stringify(
    //                 productToUpdate
    //             )
    //         });
    //     const data = response.json();
    //     return data;
    // }
    // catch(error){
    //     console.error(error);
    // }
}

export async function deleteProduct(productID) {
    const productUrl = `${getAllProductsUrl}/${productID}`;
    return deleteFromApi(productUrl);
    // try{
    //     const response = await fetch(productUrl, {
    //         method:"DELETE"
    //     });
    //     const data = response.json();
    //     return data;
    // }
    // catch(error){
    //     console.error(error);
    // }
}

/******************/
/*CATEGORY METHODS*/

export async function getAllCategories() {
    return getFromApi(getAllCategoriesUrl);
}

export async function getSpecificCategory(categoryName) {
    const categoryUrl = `${getAllCategoriesUrl}/${categoryName}`
    return getFromApi(categoryUrl);
}

/**************/
/*CART METHODS*/

export async function getAllCarts() {
    return getFromApi(getAllCartsUrl);
}

export async function getSingleCart(cartID) {
    const cartUrl = `${getAllCartsUrl}/${cartID}`;
    return getFromApi(cartUrl);
}

export async function getAllCartsLimitedToNumber(numberToDisplay) {
    const cartsUrl = `${getAllCartsUrl}?limit=${numberToDisplay}`;
    return getFromApi(cartsUrl);
}

export async function getAllCartsAscending() {
    return getSortedCarts("asc");
}
export async function getAllCartsDescending() {
    return getSortedCarts("desc");
}
async function getSortedCarts(sortOrder) {
    const cartsUrl = `${getAllCartsUrl}?sort=${sortOrder}`
    return getFromApi(cartsUrl);
}

export async function getCartsInDateRange(startDate, endDate) {
    const cartsUrl = `${getAllCartsUrl}?startdate=${startDate}&enddate=${endDate}`;
    return getFromApi(cartsUrl);
}

export async function getUserCarts(userID) {
    const userCartUrl = `${getAllCartsUrl}/${userID}`;
    return getFromApi(userCartUrl);
}

export async function createCart(cartObject) {
    return addToApi(getAllCartsUrl, cartObject);
    // try{
    //     const response = await fetch(getAllCartsUrl, {
    //         method:"POST",
    //         body:JSON.stringify(cartObject)
    //     });
    //     const data = await response.json();  
    //     return data;
    // }
    // catch(error){
    //     console.error(error);
    // }
}

export async function updateCart(cartObject, cartID) {
    const cartUrl = `${getAllCartsUrl}/${cartID}`;
    return updateToApi(cartUrl, cartObject);
    // try{
    //     const response = await fetch(cartUrl,{
    //         method:"PUT",
    //         body:JSON.stringify(cartObject)
    //     });
    //     const data = await response.json();
    //     return data;
    // }
    // catch(error){
    //     console.error(error);
    // }
}

export async function deleteCart(cartID) {
    const cartUrl = `${getAllCartsUrl}/${cartID}`;
    return deleteFromApi(cartUrl);
    // try{
    //     const response = await fetch(
    //         cartUrl,
    //         { method:"DELETE" }
    //     );
    //     const data = await response.json();
    //     return data;
    // }
    // catch(error){
    //     console.error(error);
    // }
}

/**************/
/*USER METHODS*/

export async function getAllUsers() {
    return getFromApi(getAllUsersUrl);
}

export async function getSingleUser(userID) {
    const userUrl = `${getAllUsersUrl}/${userID}`;
    return getFromApi(userUrl);
}

export async function getAllUsersLimitedToNumber(numberToDisplay) {
    const userUrl = `${getAllUsersUrl}?limit=${numberToDisplay}`;
    return getFromApi(userUrl);
}

export async function getAllUsersAscending() {
    return getAllUsersSorted("asc");
}
export async function getAllUsersDescending() {
    return getAllUsersSorted("desc");
}
async function getAllUsersSorted(sortOrder) {
    const userUrl = `${getAllUsersUrl}?sort=${sortOrder}`;
    return getFromApi(userUrl);
}

export async function addNewUser(userObject) {
    return addToApi(getAllUsersUrl, userObject);
    // try{
    //     const response = await fetch(getAllUsersUrl,
    //         {
    //             method:"POST",
    //             body:JSON.stringify(userObject)
    //         });
    //     const data = response.json();
    //     return data;
    // }
    // catch(error){
    //     console.error(error);
    // }
}

export async function updateUser(userObject, userID) {
    const userUrl = `${getAllUsersUrl}/${userID}`;
    return updateToApi(userUrl, userObject);
    // try{
    //     const response = await fetch(userUrl,
    //         {
    //             method:"PUT",
    //             body:JSON.stringify(userObject)
    //         });
    //     const data = await response.json();
    //     return data;
    // }
    // catch(error){
    //     console.error(error);
    // }
}

export async function deleteUser(userID) {
    const userUrl = `${getAllUsersUrl}/${userID}`;
    return deleteFromApi(userUrl);
}

export async function userLogin(userName, passWord) {
    try {
        let response = await axios.post(loginUrl, {
            username: userName,
            password: passWord
        });
        return response;
    } catch (e) {
        const error = e.response;
        console.error(error);
    }
    //   };
    // fetch('https://fakestoreapi.com/auth/login',{
    //         method:'POST',
    //         body:loginObject})
    // const loginObject = makeLoginObject(userName, userPass);
    // return addToApi(loginUrl, loginObject);
    // const obj = {
    //     username: "mor_2314",
    //     password: "83r5^_"
    // }
    // console.log(obj);
    // console.log(JSON.stringify(obj))
    // console.log(loginObject);
    // console.log(JSON.stringify(loginObject))
    // try{
    //     const response = await fetch(`https://fakestoreapi.com/auth/login`,
    //     {
    //         method:"POST",
    //         // body: loginObject
    //         body:{
    //             username: "mor_2314",
    //             "password": "83r5^_"
    //         }
    //     });
    //     const data = await response.json();
    //     return data;
    // }
    // catch(error){
    //     console.error(error);
    // }


}
/**
 * Function to check if the user has logged in or not.  
 * @returns true if the user is logged in (a loginToken cookie exists), and false if it does not
 */
export function checkIfLoggedIn() {
    const loginToken = Cookies.get("loginToken");
    console.log(`Login Token: ${loginToken}`);
    if (loginToken == undefined) {
        return false;
    }
    else {
        return true;
    }
}

/**
 * Function to delete the login cookie if it exists.  
 */
export function deleteLoginCookie() {
    try {
        Cookies.remove("loginToken");
    }
    catch (e) {
        Console.log("The cookie does not exist!");
    }
}

