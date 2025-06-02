import { useState } from "react";
import { HeaderIconsBarSearchButton } from "./HeaderIconsBarSearchButton";

export const HeaderIconsBarSearch = () => {
    const [isSearchbarVisible, setIsSearchbarVisible] = useState(false);
    function handleSearchbarClick() {
        setIsSearchbarVisible(prev => !prev)
    }

    return (
        <div className="flex justify-center items-center">
            <HeaderIconsBarSearchButton handleClick={handleSearchbarClick} />
            {/* <div className={`absolute flex gap-6 translate-x-[-50%] w-[90%] left-[50%] icons-bar__searchbar-wrapper 
                    ${isSearchbarVisible ? 'custom-icons-bar__searchbar-wrapper-visible' : 'custom-icons-bar__searchbar-wrapper-hidden'}`}>
                <input type="text" className="text-[24px] border rounded-[30px] bg-white shadow-lg w-full p-3" />
                <button className="svg-container">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#07484A"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" /></svg>
                </button>
            </div>
            <Background isVisible={isSearchbarVisible} handleClick={handleSearchbarClick} /> */}
        </div>
    )
}