function MainCategory() {
  return (
    <div className="bg-[#ccc] h-[45px] sm:m-[30px] my-[30px] p-[10px]">
        <ul className="flex gap-[8px] text-[14px]">
            <li className="hover:text-red-700 cursor-pointer"><b>Hamısı</b></li>
            <li className="hover:text-red-700 cursor-pointer"><b>Toyuqlu</b></li>
            <li className="hover:text-red-700 cursor-pointer"><b>Ət ilə</b></li>
            <li className="hover:text-red-700 cursor-pointer"><b>Vegeterian</b></li>
            <li className="hover:text-red-700 cursor-pointer"><b>Acılı</b></li>
        </ul>
    </div>
  )
}

export default MainCategory