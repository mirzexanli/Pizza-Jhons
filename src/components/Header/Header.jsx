import React, { useState, useEffect } from 'react';
import { FaUser } from "react-icons/fa";
import { IoIosBasket } from "react-icons/io";
import { Link } from 'react-router-dom';
import { TiDeleteOutline } from "react-icons/ti";

function Header({ basket, setBasket }) {
    const [isCartVisible, setIsCartVisible] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);

   
    useEffect(() => {
        const newTotalPrice = basket.reduce((sum, item) => sum + item.price * item.count, 0);
        setTotalPrice(newTotalPrice);
    }, [basket]);

    const toggleCart = () => {
        document.body.classList.toggle("overflow-hidden");
        setIsCartVisible(!isCartVisible);
    };

    const removeCart = (id) => {
        setBasket(prevBasket => prevBasket.filter(item => item.id !== id));
    };

    const deleteBasket = () => {
        setBasket([]);
    };

    const increaseQuantity = (id) => {
        setBasket(prevBasket => 
            prevBasket.map(item => 
                item.id === id ? { ...item, count: item.count + 1 } : item
            )
        );
    };

    const decreaseQuantity = (id) => {
        setBasket(prevBasket => 
            prevBasket.map(item => 
                item.id === id ? { ...item, count: Math.max(item.count - 1, 1) } : item
            )
        );
    };

    return (
        <header>
            <div className='h-[80px] flex justify-around lg:justify-between lg:ml-[60px] py-[20px]'>
                <Link to={"/"}>
                    <img className='w-[75px] py-[9px] ml-[-20px] lg:w-[190px] xl:w-[300px] xl:mt-[20px]' src="https://www.papajohns.az/img/content/pj_logo_web_new.png" alt="" />
                </Link>

                <div className='lg:flex lg:gap-[150px] xl:gap-[200px] 2xl:gap-[400px] ekoo:hidden'>
                    <div className='flex gap-7 text-[23px] 2xl:ml-[-100px]'>
                        <a href="#" className='hover:text-[#7c7676]'><b>Restoranlar</b></a>
                        <a href="#" className='hover:text-[#7c7676]'><b>PapaBonus</b></a>
                    </div>
                    <div className='flex gap-5 '>
                        <div className='flex'>
                            <img src="https://www.papajohns.az/img/content/flag_az.png" alt="bayraq" />
                            <select className='text-[20px]'>
                                <option value="">Azərbaycanca</option>
                                <option value="">English</option>
                                <option value="">Rusca</option>
                            </select>
                        </div>
                        <div className='mt-[5px]'>
                            <a href="#" className='text-[20px]'><b>Giriş /Qeydiyyat</b></a>
                        </div>
                    </div>
                </div>

                <div className='flex gap-[100px]'>
                    <div className='lg:hidden'>
                        <img className='w-[25px]' src="https://www.papajohns.az/img/content/flag_az.png" alt="bayraq" />
                        <span className='m-1 text-[13px]'>Az</span>
                    </div>
                    <div className='lg:hidden'>
                        <FaUser className='w-[30px] h-[25px]' />
                        <span className='text-[13px]'>Giriş</span>
                    </div>
                    <div className='lg:mr-[40px]' onClick={toggleCart}>
                        <IoIosBasket className='w-[30px] h-[25px] cursor-pointer' />
                        <span className='m-1'>{totalPrice}₼</span>
                    </div>
                </div>

                {isCartVisible && (
                    <div className='flex flex-col justify-between fixed right-0 top-0 h-screen overflow-y-scroll md:max-w-[550px] xl:max-w-[700px] ekoo:w-screen bg-white shadow-2xl'>
                        <div>
                            <div className='flex justify-end'>
                                <TiDeleteOutline
                                    className='m-3 text-[30px] text-[red] cursor-pointer'
                                    onClick={toggleCart}
                                />
                            </div>
                            {
                                basket?.map((item, i) => (
                                    <div key={i} className='flex justify-between mt-9 bg-[#ccc] m-4 rounded-xl'>
                                        <div className='flex items-center gap-7'>
                                            <img
                                                className='w-[210px] rounded-xl'
                                                src={item.img}
                                                alt="Pizza"
                                            />
                                            <div>
                                                <h1 className='font-bold text-[25px]'>{item.title}</h1>
                                                <p>Ölçüsü: 30sm</p>
                                                <p>Qiyməti: {item.price} ₼</p>
                                            </div>
                                        </div>
                                        <div>
                                            <TiDeleteOutline 
                                                onClick={() => removeCart(item.id)} 
                                                className='text-[25px] cursor-pointer ml-[50px] mt-[10px]' 
                                            />
                                            <div className='flex pt-[30px] mr-3'>
                                                <button 
                                                    className='bg-[#0F9675] text-white w-[30px] rounded-lg mr-2'
                                                    onClick={() => decreaseQuantity(item.id)}
                                                >
                                                    -
                                                </button>
                                                <p>{item.count}</p>
                                                <button 
                                                    className='bg-[#0F9675] text-white w-[30px] rounded-lg ml-2'
                                                    onClick={() => increaseQuantity(item.id)}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='p-5'>
                            <button onClick={deleteBasket} className='bg-[#0F9675] w-[160px] p-3 rounded-md text-white'>SƏBƏTİ TƏMİZLƏ</button>
                        </div>
                    </div>
                )}
            </div>

            <div className='h-[60px] gap-2 scrollNone bg-[#AD0F14] overflow-x-auto xl:text-[22px] xl:gap-[10px] xl:pl-[23%] 2xl:pr-[100px] 2xl:gap-[30px] lg:gap-[20px] lg:h-[90px] lg:text-[19px] lg:pt-[26px] text-[white] flex justify-center p-[15px] text-[15px]'>
                <Link to={"/kompaniyalar"} className='hover:text-[#aaa] cursor-pointer'><b>KOMPANİYALAR</b></Link>
                <Link to={"/menu/papadias"} className='hover:text-[#aaa] cursor-pointer'><b>PAPADİAS</b></Link>
                <Link to={"/menu/pizza"} className='hover:text-[#aaa] cursor-pointer'><b>PİZZA</b></Link>
                <Link to={"/menu/qalyanaltilar"} className='hover:text-[#aaa] cursor-pointer'><b>QƏLYANALTI</b></Link>
                <Link to={"/menu/salat"} className='hover:text-[#aaa] cursor-pointer'><b>SALAT</b></Link>
                <Link to={"/menu/pasta"} className='hover:text-[#aaa] cursor-pointer'><b>PASTA</b></Link>
                <Link to={"/menu/icki"} className='hover:text-[#aaa] cursor-pointer'><b>İÇKİ</b></Link>
                <Link to={"/menu/desertlar"} className='hover:text-[#aaa] cursor-pointer'><b>DESERT</b></Link>
                <Link to={"/menu/souses"} className='hover:text-[#aaa] cursor-pointer'><b>SOUS</b></Link>
            </div>
        </header>
    );
}

export default Header;
