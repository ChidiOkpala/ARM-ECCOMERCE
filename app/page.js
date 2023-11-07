"use client"

import { useContext } from "react";
import { useQuery } from "react-query";

import Product from "./components/Product";
import LoadingBouncer from "./components/Loader";
import { AppLayoutContext } from "./context/provider";
import { getProductListing } from "./lib/reactQuery/actions";

const Home = () => {
  const { handleAddToCart } = useContext(AppLayoutContext);

  const { data, isLoading } = useQuery("PRODUCT_LISTING",  () => getProductListing());

  return (
    <>
      <picture>
        <source
            data-srcset="https://www-konga-com-res.cloudinary.com/image/upload/w_600,f_auto,fl_lossy,dpr_auto,q_auto/v1698838531/contentservice/nexusdeals.jpg_HksWuhyQ6.jpg"
            media="(max-width: 600px)"
            srcSet="https://www-konga-com-res.cloudinary.com/image/upload/w_600,f_auto,fl_lossy,dpr_auto,q_auto/v1698838531/contentservice/nexusdeals.jpg_HksWuhyQ6.jpg"
        />
        <source
            data-srcset="https://www-konga-com-res.cloudinary.com/image/upload/w_850,f_auto,fl_lossy,dpr_auto,q_auto/v1698838531/contentservice/nexusdeals.jpg_HksWuhyQ6.jpg"
            media="(max-width: 799px)"
            srcSet="https://www-konga-com-res.cloudinary.com/image/upload/w_850,f_auto,fl_lossy,dpr_auto,q_auto/v1698838531/contentservice/nexusdeals.jpg_HksWuhyQ6.jpg"
        />
        <img
            data-expand="100"
            data-src="https://www-konga-com-res.cloudinary.com/image/upload/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/v1698838531/contentservice/nexusdeals.jpg_HksWuhyQ6.jpg"
            alt="Amazing deals on Konga"
            className="f5e10_VzEXF d4797_2fTz8 cld-responsive lazyloaded "
            src="https://www-konga-com-res.cloudinary.com/image/upload/w_1500,f_auto,fl_lossy,dpr_3.0,q_auto/v1698838531/contentservice/nexusdeals.jpg_HksWuhyQ6.jpg"
            datawidth="1500"
        />
      </picture>
      <main>
        {isLoading ? (
          <LoadingBouncer />
        ): (
          <div className="flex justify-between space-y-2 flex-wrap overflow-hidden py-5">
            {(data || []).map(product => (
              <Product key={product.id} product={product} onAddToCart={() => handleAddToCart(product)} />
            ))}
          </div>
        )}
      </main>
    </>
  );
};

export default Home;
