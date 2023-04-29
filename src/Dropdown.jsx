import {IoIosArrowDropdownCircle, IoIosArrowDropupCircle} from "react-icons/io"
import { useState } from "react"

function Dropdown() {

    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("Your Favourite City");

    // Items Array to Display
    const list = ["Delhi","Jaipur","Chandigarh","Agra","Mumbai","Chennai"];

  return (
    <div className="relative flex flex-col item-center w-[340px] h-[340px] rounded-lg">

        {/* Dropdown */}
        <div onMouseOver={() => setIsOpen((prev) => !prev)} 
            className="bg-white p-4 w-full cursor-pointer flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white">
            {selected}
            {!isOpen ? (<IoIosArrowDropdownCircle className="h-8" />) : (<IoIosArrowDropupCircle className="h-8" />)}
        </div>

        {/* Dropdown Menu */}
        {
            isOpen && <div className="bg-white absolute top-20 flex flex-col items-start rounded-lg p-2 w-full">
                {
                    list.map((item, i) => (
                        <div onClick={(e) => {setSelected(item); setIsOpen(false);}} className="w-full p-2 hover:bg-blue-200 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-green-400 border-l-4" key={i}>
                            <h3 className="font-bold">{item}</h3>
                        </div>
                    ))
                }
            </div>
        }
    </div>
  )
}

export default Dropdown

