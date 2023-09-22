export function makeProductObject(productTitle, productPrice, productDescription, productImageUrl, productCategory) {
    return {
        title: productTitle,
        price: productPrice,
        description: productDescription,
        image: productImageUrl,
        category: productCategory
    }
}

export function makeCartObject(userID, cartDate, productsArray) {
    return {
        userId: userID,
        date: cartDate,
        products: productsArray
    }
}

export function makeCartProductObject(productID, buyQuantity) {
    return {
        productId: productID,
        quantity: buyQuantity
    }
}

export function makeUserObject(userName, passWord, userEmail, userFirstName, userLastName, userCity, userStreet, userAddressNumber, userZipCode, userPhone) {
    return {
        email: userEmail,//'John@gmail.com',
        username: userName,//'johnd',
        password: passWord,//'m38rmF$',
        name: {
            firstname: userFirstName,//'John',
            lastname: userLastName,//'Doe'
        },
        address: {
            city: userCity,//'kilcoole',
            street: userStreet,//'7835 new road',
            number: userAddressNumber,//3,
            zipcode: userZipCode,//'12926-3874',
            geolocation: {
                lat: '-37.3159',
                long: '81.1496'
            }
        },
        phone: userPhone//'1-570-236-7033'
    }
}

export function makeLoginObject(username, password) {
    // const u = `"${userName}"`;
    // const p = `"${userPassword}"`
    console.log("I am in here")
    console.log(username)
    console.log(password)
    const obj = {
        username,
        password
    }
    console.log(obj);
    return obj;
    // return {
    //     username,
    //     password
    //     // username: "mor_2314",
    //     // password: "83r5^_"
    // }
}