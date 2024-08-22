import React, { useState } from 'react'
import { FaXmark } from 'react-icons/fa6'

function ProductInfo({ variations, category, img, title, handleOpen }) {
    const [type, setType] = useState("Ənənəvi")
    const [qiymet, setQiymet] = useState(0)

    return (
        <section onClick={handleOpen} className='fixed inset-0 bg-[#00000028] h-full w-full flex items-center justify-center'>
            <div onClick={(e) => { e.stopPropagation() }} className='bg-white w-full max-w-[400px] min-h-[420px] rounded-[10px]'>
                <FaXmark
                    onClick={handleOpen}
                    className='float-right m-4 text-[20px] cursor-pointer hover:text-[red]' />

                <div>
                    <img className='w-[350px] m-auto' src={img} alt="" />
                </div>
                <div className='p-[20px]'>
                    <h2 className='text-[25px]'><b>{title}</b></h2>
                    <p className='text-[green] cursor-pointer underline'>İngrediyentləri dəyişdir </p>
                    {
                        category == "pizza" && <>
                            <div className='mt-[10px]'>
                                <button
                                    onClick={() => setType("Ənənəvi")}
                                    className='w-[50%] rounded-md p-[6px] border bg-green-600 text-white'>Ənənəvi</button>
                                <button
                                    onClick={() => setType("Nazik")}
                                    className='w-[50%] rounded-md p-[6px] active:bg-green-600 active:text-[#fff] border bg-[#ccc]'>Nazik</button>
                            </div>
                            <select
                                onChange={(e) => setQiymet(e.target.value)}
                                className='w-full p-2 mt-[15px] mb-[15px] text-white bg-[#AD0F14]'>
                                {
                                    variations?.filter(item => item.type == type)?.map(item => (
                                        <option value={item.price}>{item.type} {item.size}</option>
                                    ))
                                }
                            </select>
                        </>
                    }

                    <div className='flex justify-between '>
                        <div>
                            <button className='w-[30px] rounded-md text-white text-[20px] font-bold bg-[#808080]'>-</button>
                            <span className='text-[20px] inline-block bg-gray-200 text-center w-[50px]'>1</span>
                            <button className='w-[30px] rounded-md text-white text-[20px] font-bold bg-[#0f9675]'>+</button>
                        </div>

                        <span className='text-[30px]'>{qiymet}₼</span>
                    </div>

                    <div className='text-center m-1'>
                        <button className='bg-[#0F9675] w-[120px] p-2 rounded-md text-white'>SƏBƏTƏ AT</button>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default ProductInfo