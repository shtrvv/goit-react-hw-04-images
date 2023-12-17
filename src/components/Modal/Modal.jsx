import { useEffect } from "react";

const Modal = ({ largeImg, alt, toggleModal }) => {
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.code === 'Escape') {
            toggleModal();
            }
        };
        document.addEventListener('keydown', handleEsc);
        return () => {
            document.removeEventListener('keydown', handleEsc);
        }
    }, [toggleModal]);   

    return (
        <div className="overlay">
            <div className="modal">
                <img src={largeImg} alt={alt} />
            </div>
        </div>
    )
}

export default Modal