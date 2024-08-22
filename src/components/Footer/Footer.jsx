import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { LiaTripadvisor } from "react-icons/lia";

function Footer() {
  return (

    <>
      <footer className='lg:hidden h-[45vh] lg:h-[10vh] mt-[70px] bg-[#AD0F14] text-[white]'>
        <div className='font-bold pt-[30px] flex justify-around gap-10'>
          <div className='flex flex-col text-center'>
            <a href='#' className='hover:text-[#aaa]'>Haqqımızda</a>
            <a href='#' className='inline-block pt-[10px] hover:text-[#aaa]'>Sual-Cavab</a>
            <a href='#' className='inline-block pt-[10px] hover:text-[#aaa]'>Karyera</a>
            <a href='#' className='inline-block pt-[10px] hover:text-[#aaa]'>Xəmir</a>
            <a href='#' className='inline-block pt-[10px] hover:text-[#aaa]'>Papa Talk - Şərtlər və Qaydalar</a>
          </div>
          <div className='text-center mr-7 flex flex-col'>
            <a href="#" className='hover:text-[#aaa]'>Restoranlar</a>
            <a href="#" className='inline-block pt-[10px] hover:text-[#aaa]'>Kompaniyalar</a>
            <a href="#" className='inline-block pt-[10px] hover:text-[#aaa]'>PapaBonus</a>
          </div>
        </div>

        <div className='flex justify-center pt-[30px]'>
          <img src="https://www.papajohns.az/img/content/footer-images-az-AZ.png" alt="" />
        </div>

        <div className='flex justify-center gap-9 text-[23px] pt-5'>
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
          <LiaTripadvisor />
        </div>

        <div className='text-center pt-6 text-[20px] font-bold'>
          <p>© PJA 2024</p>
        </div>
      </footer>


      <footer className='bg-[#AD0F14] mt-10 items-center p-10 ekoo:hidden lg:flex justify-between h-[10vh]'>
        <div className='flex gap-10'>
          <div className='text-[20px] text-white font-bold'>
            <p>© PJA 2024</p>
          </div>

          <div className='flex gap-2 pt-1 text-white font-bold'>
            <a href='#' className='hover:text-[#aaa]'>Haqqımızda</a>
            <a href='#' className='hover:text-[#aaa]'>Sual-Cavab</a>
            <a href='#' className='hover:text-[#aaa]'>Karyera</a>
            <a href='#' className='hover:text-[#aaa]'>Xəmir</a>
            <a href='#' className='hover:text-[#aaa]'>Papa Talk - Şərtlər və Qaydalar</a>
          </div>
        </div>

        <div className='flex gap-20'>
          <div className=''>
            <img src="https://www.papajohns.az/img/content/footer-images-az-AZ.png" alt="" />
          </div>
          <div className='flex gap-9 pt-4 text-white text-[23px]'>
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <LiaTripadvisor />
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer