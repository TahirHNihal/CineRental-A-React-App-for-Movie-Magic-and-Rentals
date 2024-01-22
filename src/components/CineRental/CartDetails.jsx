import { useContext } from "react";
import Checkout from "../../assets/icons/checkout.svg";
import Delete from "../../assets/delete.svg";
// import EmptyCart from "../../assets/icons/svgviewer-output.svg";
import { MovieContext } from "../../contexts";
import { getImgUrl } from "../../utils/cineUtility";
import { toast } from "react-toastify";

/* eslint-disable react/prop-types */
const CartDetails = ({ onHideCart }) => {
  const { cartData, setCartData } = useContext(MovieContext);
  //Handle Delete Item From Cart
  const handleDeleteCart = (e, itemId) => {
    toast.success(`Successfuly remove from your cart✌️`,{
        position:"bottom-right"
    })
    const newCartData = cartData.filter((item) => {
      return item.id !== itemId;
    });
    setCartData([...newCartData]);
  };
  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[790px] p-4 max-h-[90vh] overflow-auto">
          <div className="bg-white shadow-md dark:bg-[#12141D] rounded-2xl overflow-hidden p-5 md:p-9">
            <h2 className="text-2xl lg:text-[30px] mb-10 font-bold">
              Your Carts
            </h2>
            <div className="space-y-8 lg:space-y-12 max-h-[450px] overflow-auto mb-10 lg:mb-14">
              {cartData.length <= 0 ? (
                <div className="text-center">
                  <span
                    data-testid="icon"
                    aria-hidden="true"
                    className="css-14aopxi flex justify-center mb-5"
                  >
                    <svg
                      viewBox="0 0 45 52"
                      className="svg css-uwwqev h-[80px] w-auto"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fillRule="evenodd" fill="none">
                        <path
                          fill="#00d991"
                          d="M4.058 0C1.094 0 0 1.098 0 4.075v35.922c0 .338.013.65.043.94.068.65-.043 1.934 2.285 2.96 1.553.683 7.62 3.208 18.203 7.573 1.024.428 1.313.529 2.081.529.685.013 1.137-.099 2.072-.53 10.59-4.227 16.66-6.752 18.213-7.573 2.327-1.23 2.097-3.561 2.097-3.899V4.075C44.994 1.098 44.13 0 41.166 0H4.058z"
                        ></path>
                        <path
                          d="M14 18l4.91 2.545-2.455 4M25.544 28.705c-1.056-.131-1.806-.14-2.25-.025-.444.115-1.209.514-2.294 1.197M29.09 21.727L25 19.5l2.045-3.5"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          strokeWidth="2"
                          stroke="#FFF"
                        ></path>
                      </g>
                    </svg>
                  </span>

                  <h1 className="text-2xl">Your cart is empty.</h1>
                </div>
              ) : (
                cartData.map((item) => (
                  <div
                    className="grid grid-cols-[1fr_auto] gap-4"
                    key={item.id}
                  >
                    <div className="flex items-center gap-4">
                      <img
                        className="rounded overflow-hidden h-auto w-[60px]"
                        src={getImgUrl(item.cover)}
                        alt={item.title}
                      />
                      <div>
                        <h3 className="text-base md:text-xl font-bold">
                          {item.title}
                        </h3>
                        <p className="max-md:text-xs text-[#575A6E]">
                          {item.genre}
                        </p>
                        <span className="max-md:text-xs">${item.price}</span>
                      </div>
                    </div>
                    <div className="flex justify-between gap-4 items-center">
                      <button
                        className="bg-[#D42967] rounded-md p-2 md:px-4 inline-flex items-center space-x-2 text-white"
                        onClick={(e) => handleDeleteCart(e, item.id)}
                      >
                        <img className="w-5 h-5" src={Delete} alt="" />
                        <span className="max-md:hidden">Remove</span>
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="flex items-center justify-end gap-2">
              <button className="rounded-md p-2 md:px-4 inline-flex items-center space-x-2 bg-primary text-[#171923] text-sm">
                <img src={Checkout} width="24" height="24" alt="Checkout" />
                <span>Checkout</span>
              </button>
              <button
                className="border border-[#74766F] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#6F6F6F] dark:text-gray-200 font-semibold text-sm"
                onClick={onHideCart}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDetails;
