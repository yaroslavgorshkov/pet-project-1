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
        </div>
    )
}