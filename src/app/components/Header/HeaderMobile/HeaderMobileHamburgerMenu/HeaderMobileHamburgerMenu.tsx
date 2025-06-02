import { useState } from "react";
import { navigationListContent } from "../../mockHeaderData";
import { HeaderMobileHamburgerMenuButton } from "./HeaderMobileHamburgerMenuButton";



export const HeaderMobileHamburgerMenu = () => {
    const [isBurgerMenuVisible, setIsBurgerMenuVisible] = useState(false);
    const hamburgerMenuNavigationListContent = navigationListContent;

    function handleBurgerMenuClick() {
        setIsBurgerMenuVisible(prev => !prev)
    }

    return (
        <div className="relative md:order-1">
            <HeaderMobileHamburgerMenuButton handleClick={handleBurgerMenuClick} />

            {/* <aside className={`flex flex-col gap-4 w-[75%] shadow-lg fixed top-0 z-20 h-screen bg-white p-4 overflow-hidden hamburger-menu__content max-w-[282px] min-w-[225px] ${isBurgerMenuVisible ? 'custom-visible' : 'custom-hidden'}`}>
                <div className="relative left-[-100px] w-[300px] h-[140px] top-[-30px]">
                    <Image
                        src="/img/h-m_content-img1.png"
                        alt="White sofa"
                        width={400}
                        height={200}
                    />
                </div>
                <NavigationList
                    highlightedElementIndex={0}
                    underlineType={"left"}
                    flexDirection={getFlexDirection('col')}
                    fontSize={getFontSize("36px")}
                    gap={getGapValue("12px")}
                    content={hamburgerMenuNavigationListContent}
                />
                <div className="relative right-[-100px] w-[250px] h-[100px] self-end">
                    <Image
                        src="/img/h-m_content-img2.png"
                        alt="Brown sofa"
                        width={400}
                        height={200}
                    />
                </div>
            </aside>
            <Background isVisible={isBurgerMenuVisible} handleClick={handleBurgerMenuClick} /> */}
        </div>
    )
}