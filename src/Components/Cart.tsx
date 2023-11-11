import React, { useEffect, useState } from 'react';
import '../Styles/Cart.css';
import NavBar from './NavBar'
import minus from '../Data/icon/minus.png'
import plus from '../Data/icon/plus.png';
import remove from '../Data/icon/trash.png';

interface Product {
    id: number;
    title: string;
    size: string;
    desc: string;
    img: string;
    price: number;
    Quantity: number;
}


const Cart: React.FC = () => {

    const [productData, setProductData] = useState<Product[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);

    useEffect(() => {
        const cart = sessionStorage.getItem('cart');
        if (cart !== null) {
            const prod = JSON.parse(cart);
            setProductData(prod);
            calculateTotalPrice(prod);
        }
    }, []);


    const handleAddQuantity = (isAdd: boolean, index: number) => {
        if (isAdd) {
            const newProductData = [...productData];
            newProductData[index].Quantity = newProductData[index].Quantity + 1;
            setProductData(newProductData);
            calculateTotalPrice(newProductData);
            updateCart(newProductData);

        } else if (productData[index].Quantity > 0) {
            const newProductData = [...productData];
            newProductData[index].Quantity = newProductData[index].Quantity - 1;
            setProductData(newProductData);
            calculateTotalPrice(newProductData);
            updateCart(newProductData);
        }
    }

    const updateCart = (cart: Product[]) => {
        sessionStorage.setItem('cart', JSON.stringify(cart));
    }

    const removeItem = (index: number) => {
        const newProductData = [...productData];
        newProductData.splice(index, 1);
        setProductData(newProductData);
        calculateTotalPrice(newProductData);
        updateCart(newProductData);
        sessionStorage.setItem('cart', JSON.stringify(newProductData));
    }

    const calculateTotalPrice = (products: Product[]) => {
        let total = 0;
        products.forEach((product) => {
            total += product.price * product.Quantity;
        });
        setTotalPrice(total);
    }



    return (
        <>
            <div className='cartContainer'>
                <NavBar />

                <div className="cartHeader">
                    <h1>Cart</h1>
                </div>


                <div className="twoColumm">
                    {/* ---------------------------------------------------------------------------------------- */}
                    {/* Display the list of items of customer orders */}
                    <div className="listItemContainer">
                        {productData !== null ? (
                            productData.map((product, index) => {
                                return (
                                    <div className="prodCard" key={index}>
                                        <div className="prodImg">
                                            <img src={product.img} alt={product.title} />
                                        </div>
                                        <div className="prodContent">
                                            <div className="prodDesc">
                                                <p className='prodTitle'>{product.title}</p>
                                                <p className='retailPrice'>Retail Price: ${product.price}</p>

                                                <p className='prodSize'>Size: {product.size}</p>
                                            </div>
                                            <div className="prodQuantity">
                                                <div className="pordControlQuantity">
                                                    <p>Quantity: </p>
                                                    <div className='qunatityBtn' onClick={() => handleAddQuantity(false, index)}> <img src={minus} alt='' /> </div>
                                                    <p className='quantityValue'>{product.Quantity}</p>
                                                    <div className='qunatityBtn' onClick={() => handleAddQuantity(true, index)}> <img src={plus} alt='' /> </div>
                                                </div>
                                            </div>
                                            <div className='removeItem'>
                                                <img src={remove} alt="" onClick={() => removeItem(index)} />
                                            </div>
                                            <div className="prodTotalPrice">
                                                <p> Total Price: ${(product.price * product.Quantity).toFixed(2)}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        ) : null}
                    </div>

                    {/* ---------------------------------------------------------------------------------------- */}
                    {/* Summary the customer order with shipping cost and total cost */}

                    <div className="subTatalContainer">
                        <h3 className='subTotalHeader'>Subtotal</h3>

                        <div className="subTotal">
                            <div className="promoCodeContainer">
                                <input className='promoCodeInput' type="text" placeholder='Enter Promo Code' />
                                <button className='promoCodeButton'>Apply</button>
                            </div>
                            <div className="broderLine" />
                            <h2>Order Summary</h2>
                            <p>Subtotal: ${totalPrice.toFixed(2)}</p>
                            <p>Shipping: $10</p>
                            <div className="broderLine" />
                            <h4 className='totalPay'>Total to Pay: ${(totalPrice + 10).toFixed(2)}</h4>
                            <button>Process to Checkout</button>
                        </div>
                    </div>

                    {/* ---------------------------------------------------------------------------------------- */}
                </div>


            </div>
        </>
    )

};

export default Cart;
