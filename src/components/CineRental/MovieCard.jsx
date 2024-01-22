/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import Tag from "../../assets/tag.svg";
import { getImgUrl } from "../../utils/cineUtility";
import MovieDetailsModal from "./MovieDetailsModal";
import Rating from "./Rating";
import { MovieContext } from "../../contexts";
import { toast } from "react-toastify";

const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { cartData, setCartData } = useContext(MovieContext);

  //Handle Modal Hide
  const handleModalHide = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };
  //Handle Selected Movie
  const handleMovieSelection = () => {
    setSelectedMovie(movie);
    setShowModal(true);
  };
  //Handle Add to Cart
  const handleAddToCart = (e, movie) => {
    e.stopPropagation();
    const found = cartData.find((item) => {
      return item.id === movie.id;
    });
    if (found) {
      toast.error(`The movie ${movie.title} already added in your cart`, {
        position: "bottom-right",
      });
    } else {
      setCartData([...cartData, movie]);
      toast.success(`The movie ${movie.title} added in your cart`, {
        position: "bottom-right",
      });
    }
  };
  return (
    <>
      {showModal && (
        <MovieDetailsModal
          onHide={handleModalHide}
          movie={selectedMovie}
          onCartAdd={handleAddToCart}
        />
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <span onClick={() => handleMovieSelection(movie)}>
          <img
            className="w-full object-cover cursor-pointer"
            src={getImgUrl(movie.cover)}
            alt={movie.title}
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie.rating} />
            </div>
            <button className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm">
              <img src={Tag} alt="" />
              <span onClick={(e) => handleAddToCart(e, movie)}>
                ${movie.price} | Add to Cart
              </span>
            </button>
          </figcaption>
        </span>
      </figure>
    </>
  );
};

export default MovieCard;
