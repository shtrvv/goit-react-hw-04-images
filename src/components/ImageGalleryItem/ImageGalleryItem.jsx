import Modal from "components/Modal/Modal"
import { useState } from "react"

const ImageGalleryItem = ({src, alt, largeImg}) => {
    const [isShowModal, setIsShowModal] = useState(false)

    const toggleModal = () => {
        setIsShowModal(prev => !prev);
    }

    return (
        <li className="imageGalleryItem" onClick={toggleModal}>
            <img src={src} alt={alt} loading="lazy" className="img" />
            {isShowModal && <Modal largeImg={largeImg} alt={alt} toggleModal={toggleModal} />}
        </li>
    )
}

export default ImageGalleryItem

