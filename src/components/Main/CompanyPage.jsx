import React from 'react'

function CompanyPage() {
    return (
        <>
            {/* <Heade /> */}
            <main className='w-full '>

                <div className='bg-[#ccc] h-[70px] text-center py-[15px] sm:ml-[30px] sm:mr-[30px] lg:mt-[30px] lg:flex lg:justify-center lg:gap-[20px]'>
                    <h2 className='text-[25px] ekoo:hidden lg:block'><b>Promo kodunuz var?</b> <span className='text-[#0F9675]'><b>Endirimdən istifadə edin!</b></span> </h2>
                    <input className='p-[8px] border border-[#0F9675] rounded-md mx-[10px] w-[230px]' type="text" placeholder="Promo kodu daxil edin" />
                    <button className=' bg-[#0F9675] border-[0] rounded-md  h-[40px] w-[60px]'>OK</button>
                </div>


                <h1 className='font-bold text-[40px] ml-[48px]'>Kompaniyalar</h1>
                <div className='flex flex-wrap justify-center gap-[50px]'>
                    <div className=' border-[#ccc] m-[5px] sm:w-[650px] max-w-[800px] mt-[35px] md:w-[calc(50%-30px)] lg:w-[calc(33%-30px)] xl:w-[calc(25%-70px)]'>
                        <img className='pb-[60px]' src="https://www.papajohns.az/uploads/images/banners/Yashin%20qeder%20endirim/Yashin%20qeder%20endirim.jpeg" alt="" />
                        <button className='rounded-md bg-[#0F9675] w-[180px] h-[40px] font-bold text-[#fff] text-[15px]'>ƏTRAFLI MƏLUMAT</button>
                    </div>
                    <div className=' border-[#ccc] m-[5px] sm:w-[650px] max-w-[800px] mt-[35px] md:w-[calc(50%-30px)] lg:w-[calc(33%-30px)] xl:w-[calc(25%-70px)]'>
                        <img className='pb-[60px]' src="https://www.papajohns.az/uploads/images/Campaigns/2023/Noyabr/New%20products/pizza-party-2023-feed.png" alt="" />
                        <button className='rounded-md bg-[#0F9675] w-[180px] h-[40px] font-bold text-[#fff] text-[15px]'>ƏTRAFLI MƏLUMAT</button>
                    </div>
                    <div className=' border-[#ccc] m-[5px] sm:w-[650px] max-w-[800px] mt-[35px] md:w-[calc(50%-30px)] lg:w-[calc(33%-30px)] xl:w-[calc(25%-70px)]'>
                        <img className='pb-[60px]' src="https://www.papajohns.az/uploads/images/banners/Papa%20Talk/papa%20talk.jpg" alt="" />
                        <button className='rounded-md bg-[#0F9675] w-[180px] h-[40px] font-bold text-[#fff] text-[15px]'>ƏTRAFLI MƏLUMAT</button>
                    </div>
                    <div className=' border-[#ccc] m-[5px] sm:w-[650px] max-w-[800px] mt-[35px] md:w-[calc(50%-30px)] lg:w-[calc(33%-30px)] xl:w-[calc(25%-70px)]'>
                        <img className='pb-[60px]' src="https://www.papajohns.az/uploads/images/Campaigns/2023/February/kombo%20menyu%20teze%20ler%202022%20son%209.jpg" alt="" />
                        <button className='rounded-md bg-[#0F9675] w-[180px] h-[40px] font-bold text-[#fff] text-[15px]'>ƏTRAFLI MƏLUMAT</button>
                    </div>
                    <div className=' border-[#ccc] m-[5px] sm:w-[650px] max-w-[800px] mt-[35px] md:w-[calc(50%-30px)] lg:w-[calc(33%-30px)] xl:w-[calc(25%-70px)]'>
                        <img className='pb-[60px]' src="https://www.papajohns.az/uploads/images/Campaigns/2024/%C4%B0yul/Achilish-Elmler%20(2).png" alt="" />
                        <button className='rounded-md bg-[#0F9675] w-[180px] h-[40px] font-bold text-[#fff] text-[15px]'>ƏTRAFLI MƏLUMAT</button>
                    </div>
                    <div className=' border-[#ccc] m-[5px] sm:w-[650px] max-w-[800px] mt-[35px] md:w-[calc(50%-30px)] lg:w-[calc(33%-30px)] xl:w-[calc(25%-70px)]'>
                        <img className='pb-[60px]' src="https://www.papajohns.az/uploads/images/Campaigns/2024/Avgust/Kichik-rastik-and-poppers.png" alt="" />
                        <button className='rounded-md bg-[#0F9675] w-[180px] h-[40px] font-bold text-[#fff] text-[15px]'>ƏTRAFLI MƏLUMAT</button>
                    </div>
                    <div className=' border-[#ccc] m-[5px] sm:w-[650px] max-w-[800px] mt-[35px] md:w-[calc(50%-30px)] lg:w-[calc(33%-30px)] xl:w-[calc(25%-70px)]'>
                        <img className='pb-[60px]' src="https://www.papajohns.az/uploads/images/Campaigns/2024/Avgust/Klassik-Dondurmal%C4%B1-2024666.png" alt="" />
                        <button className='rounded-md bg-[#0F9675] w-[180px] h-[40px] font-bold text-[#fff] text-[15px]'>ƏTRAFLI MƏLUMAT</button>
                    </div>
                    <div className=' border-[#ccc] m-[5px] sm:w-[650px] max-w-[800px] mt-[35px] md:w-[calc(50%-30px)] lg:w-[calc(33%-30px)] xl:w-[calc(25%-70px)]'>
                        <img className='pb-[60px]' src="https://www.papajohns.az/uploads/images/Campaigns/2024/Avgust/%C4%B0ki-boyuk-papa-miks-and-vegetarian.png" alt="" />
                        <button className='rounded-md bg-[#0F9675] w-[180px] h-[40px] font-bold text-[#fff] text-[15px]'>ƏTRAFLI MƏLUMAT</button>
                    </div>
                    <div className=' border-[#ccc] m-[5px] sm:w-[650px] max-w-[800px] mt-[35px] md:w-[calc(50%-30px)] lg:w-[calc(33%-30px)] xl:w-[calc(25%-70px)]'>
                        <img className='pb-[60px]' src="https://www.papajohns.az/uploads/images/Campaigns/2024/Avgust/Orta-4-pendir-%26-Amerikan-Hot.png" alt="" />
                        <button className='rounded-md bg-[#0F9675] w-[180px] h-[40px] font-bold text-[#fff] text-[15px]'>ƏTRAFLI MƏLUMAT</button>
                    </div>
                </div>
            </main>
            {/* <Footer /> */}
        </>
    )
}

export default CompanyPage