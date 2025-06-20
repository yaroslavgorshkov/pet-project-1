import { useState } from 'react';
import { HeaderIconsBarAccountButton } from './HeaderIconsBarAccountButton';

export const HeaderIconsBarAccount = () => {
    const [isAccountDialogVisible, setIsAccountDialogVisible] = useState(false);

    function handleAccountDialogClick() {
        setIsAccountDialogVisible((prev) => !prev);
    }

    return (
        <div>
            <HeaderIconsBarAccountButton
                handleClick={handleAccountDialogClick}
            />
            {/* <div className={`icons-bar__account-content fixed shadow-lg border bg-darken-white
                    ${isAccountDialogVisible ? 'custom-icons-bar__account-content-visible' : 'custom-icons-bar__account-content-hidden'}`}>
                <div className="">
                    <Image
                        src="/img/h-m_content-img1.png"
                        alt="White sofa"
                        width={400}
                        height={200}
                    />
                </div>
                <p className="">Input:</p>
                <input
                    type="tel"
                    value="+380"
                    pattern="\+380\d{9}"
                    required
                    maxLength={13}
                />
                <IconsBarAccountContentBtn content="Get SMS" />
                <IconsBarAccountContentBtn content="Get Call" />
                <p>Or:</p>
                <button>
                    <div>
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.9409 8.13609C18.3354 5.84176 15.8057 4.52579 13.0001 4.52579C10.6873 4.52579 8.52482 5.44465 6.91112 7.11294L6.53967 7.49706L3.25983 4.68393L3.66548 4.25126C4.85149 2.98664 6.25239 1.99089 7.82921 1.29165C9.46273 0.567311 11.2025 0.200012 13.0002 0.200012C15.1132 0.200012 17.2014 0.718691 19.0389 1.70004C20.8727 2.67942 22.4613 4.12154 23.633 5.87069L23.784 6.09604C23.8836 6.24468 23.8376 6.44652 23.6835 6.53743L20.4898 8.41986C20.3498 8.50244 20.1699 8.46332 20.0768 8.33016L19.9409 8.13609Z" fill="#CD2900" />
                            <path d="M1.83213 19.2484C0.76444 17.3473 0.200012 15.1866 0.200012 13C0.200012 10.1042 1.14729 7.37052 2.93952 5.0946L3.30548 4.62976L6.58584 7.44341L6.26071 7.86932C5.12574 9.35629 4.52576 11.1305 4.52576 13.0001C4.52576 14.4028 4.87733 15.7934 5.54255 17.0217L5.79772 17.4928L2.12183 19.7643L1.83213 19.2484Z" fill="#FFCE00" />
                            <path d="M13.0001 25.8C8.76798 25.8 4.81227 23.7044 2.41847 20.1945L2.08411 19.7042L5.76063 17.4321L6.06829 17.8687C7.65906 20.1264 10.2504 21.4743 13.0001 21.4743C15.284 21.4743 17.5077 20.5288 19.1008 18.8804L19.4723 18.4959L22.7489 21.3063L22.3441 21.739C21.1579 23.0065 19.756 24.0046 18.1774 24.7057C16.542 25.4319 14.8002 25.8 13.0001 25.8Z" fill="#40A459" />
                            <path d="M19.4262 18.5499L19.7504 18.124C20.2717 17.4391 20.6837 16.6817 20.9752 15.8722L14.694 15.872C14.5222 15.872 14.3828 15.7327 14.3828 15.5608V11.8576C14.3828 11.6857 14.5222 11.5463 14.694 11.5463H25.496C25.6445 11.5463 25.766 11.6648 25.7697 11.8133L25.8 13.0071C25.7986 15.8954 24.8543 18.623 23.0692 20.895L22.7033 21.3607L19.4262 18.5499Z" fill="#1D81CE" />
                        </svg>
                    </div>
                    <span>Google</span>
                </button>
            </div>
            <Background isVisible={isAccountDialogVisible} handleClick={handleAccountDialogClick} /> */}
        </div>
    );
};
