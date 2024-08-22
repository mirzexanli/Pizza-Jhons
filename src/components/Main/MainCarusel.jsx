import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import MainCategory from './MainCategory';

function MainCarusel() {
    return (
        <main className='lg:h-[70vh] ekoo:h-[76vh]'>

            <div className='bg-[#ccc] h-[70px] text-center py-[15px] sm:ml-[30px] sm:mr-[30px] lg:mt-[30px] lg:flex lg:justify-center lg:gap-[20px]'>
                <h2 className='text-[25px] ekoo:hidden lg:block'><b>Promo kodunuz var?</b> <span className='text-[#0F9675]'><b>Endirimdən istifadə edin!</b></span> </h2>
                <input className='p-[8px] border border-[#0F9675] rounded-md mx-[10px] w-[230px]' type="text" placeholder="Promo kodu daxil edin" />
                <button className=' bg-[#0F9675] border-[0] rounded-md  h-[40px] w-[60px]'>OK</button>
            </div>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                // navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="ekoo:max-h-[550px] m-[30px]"
            >
                    <SwiperSlide>
                        <img className='ekoo:hidden lg:block w-full h-full' src="https://www.papajohns.az/uploads/images/Campaigns/2024/%C4%B0yul/restoran-achilish-aksiyasi-banner%20(2).png" alt="" />
                        <img className='lg:hidden w-full h-full' src="https://www.papajohns.az/uploads/images/Campaigns/2024/%C4%B0yul/Achilish-Elmler%20(2).png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='ekoo:hidden lg:block w-full h-full' src="https://www.papajohns.az/uploads/images/Campaigns/2023/July/baglara%20chatdirilma%20banner.jpg" alt="" />
                        <img className='lg:hidden w-full h-full' src="https://www.papajohns.az/uploads/images/Campaigns/2023/July/baglara%20chatdirilma.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='ekoo:hidden lg:block w-full h-full' src="https://www.papajohns.az/uploads/images/Campaigns/2024/Vakansiya/Sayt-banner-vakansiya.png" alt="" />
                        <img className='lg:hidden w-full h-full' src="https://www.papajohns.az/uploads/images/Campaigns/2024/Vakansiya/vakansiya%20pizzachi%20feed.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='ekoo:hidden lg:block w-full h-full' src="https://www.papajohns.az/uploads/images/Campaigns/2024/%C4%B0yul/Cola-Orta-Karnaval-and-meksika-banner.png" alt="" />
                        <img className='lg:hidden w-full h-full' src="https://www.papajohns.az/uploads/images/Campaigns/2024/%C4%B0yul/Cola-Orta-Karnaval-and-meksika.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='ekoo:hidden lg:block w-full h-full' src="https://www.papajohns.az/uploads/images/Campaigns/2024/%C4%B0yul/%C4%B0ki-B%C3%B6y%C3%BCk-Litl-%C4%B0taliya-%26-Marqarita-BAnner.png" alt="" />
                        <img className='lg:hidden w-full h-full' src="https://www.papajohns.az/uploads/images/Campaigns/2024/%C4%B0yul/iki-boyuk-Litl%20%C4%B0taliya%20and%20Marqarita.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='ekoo:hidden lg:block w-full h-full' src="https://www.papajohns.az/uploads/images/Campaigns/2024/%C4%B0yul/Kichik-Yunan-%26-Ranch-banner.png" alt="" />
                        <img className='lg:hidden w-full h-full' src="https://www.papajohns.az/uploads/images/Campaigns/2024/%C4%B0yul/Kichik-Yunan-%26-Ranch.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='ekoo:hidden lg:block w-full h-full' src="https://www.papajohns.az/uploads/images/Campaigns/2024/%C4%B0yul/kichik-chiken-parmesan-poppers-bbq-banner.png" alt="" />
                        <img className='lg:hidden w-full h-full' src="https://www.papajohns.az/uploads/images/Campaigns/2024/%C4%B0yul/kichik-chiken-parmesan-poppers-bbq.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='ekoo:hidden lg:block w-full h-full' src="https://www.papajohns.az/uploads/images/Campaigns/2023/February/Sayt%20Banner%20Bol%20Bol%202023.jpg" alt="" />
                        <img className='lg:hidden w-full h-full' src="https://www.papajohns.az/uploads/images/Campaigns/2023/February/kombo%20menyu%20teze%20ler%202022%20son%209.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='ekoo:hidden lg:block w-full h-full' src="https://www.papajohns.az/uploads/images/Campaigns/2023/Noyabr/New%20products/pizza-party-sat-banner-2023.png" alt="" />
                        <img className='lg:hidden w-full h-full' src="https://www.papajohns.az/uploads/images/Campaigns/2023/Noyabr/New%20products/pizza-party-2023-feed.png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='ekoo:hidden lg:block w-full h-full' src="https://www.papajohns.az/uploads/images/banners/yashin%20geder/yashin-qeder-endirim%20%281%29.png" alt="" />
                        <img className='lg:hidden w-full h-full' src="https://www.papajohns.az/uploads/images/banners/yashin%20geder/yashin-qeder-endirim-feed%20(1).png" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='ekoo:hidden lg:block w-full h-full' src="https://www.papajohns.az/uploads/images/banners/Papa%20Talk/papa%20talk%20banner.jpg" alt="" />
                        <img className='lg:hidden w-full h-full' src="https://www.papajohns.az/uploads/images/banners/Papa%20Talk/papa%20talk.jpg" alt="" />
                    </SwiperSlide>
            </Swiper>
        </main>
    )
}

export default MainCarusel