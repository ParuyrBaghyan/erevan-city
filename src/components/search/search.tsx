import { useDispatch, useSelector } from "react-redux";
import "./search.scss";
import { RootState } from "@/app/store/store";
import ClickOutside from "@/util/clickOutSide";
import { searchActions } from "@/app/store/searchSlice";
import Product from "../product/product";
import { useGetMostSearchedItemsQuery } from "@/app/services/search";

export default function Search() {
  const { data } = useGetMostSearchedItemsQuery();
  const showSearchContBool = useSelector(
    (state: RootState) => state.search.showSearchContBool
  );

  const searchResultArray = useSelector(
    (state: RootState) => state.search.searchResultArray
  );

  const dispatch = useDispatch();

  const handleClickOutside = () => {
    dispatch(searchActions.closeSearchCont());
  };


  return (
    <div
      className="search-container"
      style={{
        transform: `rotateX(${showSearchContBool ? "0deg" : "90deg"})`,
      }}
    >
      <ClickOutside onClickOutside={handleClickOutside}>
        <div className="search-main">
          <div className="search-result">
            {!searchResultArray.length
              ? data?.data.specialItems[0].products.map((product: any) => {
                  return <Product key={product.id} product={product} />;
                })
              : searchResultArray.map((product:any) => {
                  return <Product key={product.id} product={product} />;
                })}
          </div>
        </div>
      </ClickOutside>
    </div>
  );
}
