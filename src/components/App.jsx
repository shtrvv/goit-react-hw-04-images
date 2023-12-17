import Notiflix from "notiflix"
import Searchbar from "./Searchbar/Searchbar"
import ImageGallery from "./ImageGallery/ImageGallery"
import Button from "./Button/Button"
import Loader from "./Loader/Loader"

import { fetchImages } from "services/api"
import { useEffect, useState } from "react"

const App = () => {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [searchImage, setSearchImage] = useState('')
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    if (!searchImage) return;
      getImages();
  }, [searchImage, page])

  const getImages = async () => {
    try {
      setIsLoading(true);
      const data = await fetchImages(searchImage, page);
      
      if (data.hits.length === 0) {
        Notiflix.Notify.failure('Sorry, there are no images')
      }
    
      setImages((prev) => [...prev, ...data.hits]);
      setTotalPages(Math.floor(data.totalHits / 12));
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  const getSearch = (searchImage) => {
    setSearchImage(searchImage);
    setImages([]);
    setPage(1);
  }

  const handleClick = () => {
    setPage((prev) => prev + 1);
  }

  return (
    <div className="app">
      <Searchbar getSearch={getSearch} />
      {isLoading && <Loader/>}
      <ImageGallery images={images} />
      {images.length > 0 && page <= totalPages &&
        <Button handleClick={handleClick} />
      }
    </div>
  )
}

export default App