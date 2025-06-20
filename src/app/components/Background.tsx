export default function Background({
    isVisible,
    handleClick,
}: {
    isVisible: boolean;
    handleClick: () => void;
}) {
    return (
        <div
            className={`fixed w-full h-dvh bg-bg-gray z-100 inset-0 opacity-65 ${isVisible ? '' : 'd-none'}`}
            onClick={handleClick}
        ></div>
    );
}
