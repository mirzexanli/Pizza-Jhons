import { useState } from "react"
import ProductInfo from "./ProductInfo"

function Card({ addToBasket, category, composition, img, price, subcategory, title, variations, id }) {

    const [isOpen, setIsOpen] = useState(true)


    function handleOpen() {
        setIsOpen(!isOpen)
    }

    return (
        <article className="border-[#ccc] m-[5px] sm:w-[650px] max-w-[800px] mt-[35px] md:w-[calc(50%-30px)] lg:w-[calc(33%-30px)] xl:w-[calc(25%-35px)]">
            <div className="h-[300px]"
                onClick={handleOpen}
            >
                <img className="w-full h-full object-cover" src={img} alt="Pizza" />
            </div>

            <div className="flex justify-between py-[7px]">
                <h3 className="font-bold text-[20px]">{title}</h3>
                <button
                    onClick={() => addToBasket(id, title, img, price)}
                    className="border bg-[#0F9675] text-[#fff] rounded-lg w-[110px] h-[40px]"><b>BUNU SEÇ</b></button>
            </div>

            <p> {composition} </p>

            <div
                style={{
                    display: isOpen ? "none" : "block"
                }}
            >
                <ProductInfo category={category} img={img} variations={variations} title={title} handleOpen={handleOpen} />
            </div>
        </article>
    )
}

export default Card