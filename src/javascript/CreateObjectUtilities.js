export function makeProductObject(productTitle, productPrice, productDescription, productImageUrl, productCategory){
    return {
        title: productTitle,
        price: productPrice,
        description: productDescription,
        image: productImageUrl,
        category: productCategory
    }
}

export function makeCartObject(userID, cartDate, productsArray){
    return {
        userId:userID,
        date:cartDate,
        products:productsArray
    }
}

export function makeCartProductObject(productID, buyQuantity){
    return {
        productId: productID,
        quantity: buyQuantity
    }
}

export function makeUserObject(){
    
}

export function makeLoginObject(userName, userPassword){
    return {
        username: userName,
        password: userPassword
        // username: "mor_2314",
        // password: "83r5^_"
    }
}