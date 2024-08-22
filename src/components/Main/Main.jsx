import React from 'react'
import MainCategory from './MainCategory'
import Card from './Card'
import { useParams } from 'react-router-dom'
import Error from '../Error'

function Main(data) {
    const { category } = useParams()
    
    const addToBasket = data.addToBasket


    if (data !== null) {
        const arr = Object.keys(data)

        const index = arr.find(arrayCategory => arrayCategory == category)

        if (index && index == undefined) {
            return <Error />
        }
    }



    return (
        <main className='min-h-[90vh]'>
            <div className='bg-[#ccc] h-[70px] text-center py-[15px] sm:ml-[30px] sm:mr-[30px] lg:mt-[30px] lg:flex lg:justify-center lg:gap-[20px]'>
                <h2 className='text-[25px] ekoo:hidden lg:block'><b>Promo kodunuz var?</b> <span className='text-[#0F9675]'><b>Endirimdən istifadə edin!</b></span> </h2>
                <input className='p-[8px] border border-[#0F9675] rounded-md mx-[10px] w-[230px]' type="text" placeholder="Promo kodu daxil edin" />
                <button className=' bg-[#0F9675] border-[0] rounded-md  h-[40px] w-[60px]'>OK</button>
            </div>

            <MainCategory />
            <section className='flex flex-wrap justify-center sm:w-[100%] md:flex gap-[16px] '>
                {
                    data[category]?.map((item, i) => {
                        return (
                            <Card addToBasket={addToBasket} {...item} key={i} />
                        )
                    })
                }
            </section>
        </main>
    )
}

export default Main