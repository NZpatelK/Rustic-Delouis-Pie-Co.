import React, { useState } from 'react'
import NavBar from './NavBar'
import '../Styles/Products.css'
import minus from '../Data/icon/minus.png'
import plus from '../Data/icon/plus.png';
import { prodData } from '../Data/Product';
import DialogPopUp from './DialogPopUp';



function PieProducts() {
    const [productData, setProductData] = useState(prodData);


    // useEffect(() => {
    //     const cart = sessionStorage.getItem('cart');
    //     const newProductData = [...productData];
    //     if (cart !== null) {
    //         newProductData.forEach((prod:any) => {
    //             const cartProd = JSON.parse(cart);
    //             cartProd.forEach((cartItem: any) => {
    //                 if (cartItem.id === prod.id) {
    //                     prod.Quantity = cartItem.Quantity;
    //                 }
    //             })
    //         })
    //     };
    // }, []);

    //------------------- Control Dialog Pop up -------------------//

    const [open, setOpen] = React.useState(false);
    const [dataInfo, setDataInfo] = React.useState({});

    const handleClickOpen = (describe: string, name: string) => {
        setOpen(true);
        setDataInfo({ desc: describe, title: name });
    };

    // ------------------- handle Click -------------------// 

    const handleAddQuantity = (isAdd: boolean, index: number) => {
        if (isAdd) {
            const newProductData = [...productData];
            newProductData[index].Quantity = newProductData[index].Quantity + 1;
            setProductData(newProductData);

        } else if (productData[index].Quantity > 0) {
            const newProductData = [...productData];
            newProductData[index].Quantity = newProductData[index].Quantity - 1;
            setProductData(newProductData);
        }
    }

    const handleAddCart = (item: any) => {

        if (item.Quantity !== 0) {

            let cart: any = [];

            if (sessionStorage.getItem('cart') === null) {
                cart.push(item);

            }
            else {
                cart = JSON.parse(sessionStorage.getItem('cart') || '{}');
                let isUpdate = false;
                cart.map((prod: any) => {
                    if (prod.id === item.id) {
                        prod.Quantity = item.Quantity;
                        isUpdate = true;
                        return prod;
                    }
                    return prod;
                })

                if (!isUpdate) {
                    cart.push(item);
                }

            }

            sessionStorage.setItem('cart', JSON.stringify(cart));
            const newProductData = [...productData];
            setProductData(newProductData);
        }


    }

    // -------------------------------------------------------------------------------------//

    return (
        <div className='productContainer'>
            <NavBar />

            <div className="prodHeader">
                <h1>Delicious Pie Selection</h1>
            </div>

            <DialogPopUp open={open} dataInfo={dataInfo} handleDialogClose={setOpen} />

            <div className="prodCardContainer">
                <div className="productGrid">

                    {productData.map((item, index) => (
                            <div key={index} className="productCard">
                                <div className="productImg">
                                    <img src={item.img} alt="" />
                                </div>

                                <div className="productInfo">

                                    <h2 className='title'>{item.title}</h2>
                                    <p>Size: <span> {item.size} </span></p>
                                    <p>Price: <span>{item.price} </span></p>

                                    <div className="controlQuantity">
                                        <p>Quantity:</p>
                                        <div className='qunatityBtn' onClick={() => handleAddQuantity(false, index)}> <img src={minus} alt='' /> </div> {/* decreas quantity */}
                                        <p>{item.Quantity}</p>
                                        <div className='qunatityBtn' onClick={() => handleAddQuantity(true, index)}> <img src={plus} alt='' /> </div> {/* increase quantity */}
                                    </div>

                                    <div className="ProductButtonContainer">
                                        <button className='addCartBtn' onClick={() => handleAddCart(item)}>Add Cart</button>
                                        <button className='moreInfoBtn' onClick={() => handleClickOpen(item.describe, item.title)}>More Info</button>
                                    </div>

                                </div>
                            </div>
                        ))
                    }


                </div>
            </div>


        </div>
    )
}

export default PieProducts