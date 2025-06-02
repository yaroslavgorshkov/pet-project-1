import Image from 'next/image';


export const HeaderLogo = () => {
    return (
        <a href="#home" className='w-[104px] h-[26px] relative md:w-[144px] md:h-[36px] md:order-0'>
            <Image src={'/img/logo.png'} alt={'InWood Logo'} fill></Image>
        </a>
    )
}