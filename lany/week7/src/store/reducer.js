import { combineReducers } from "redux";

import MProducts from "./reducers/MProducts";
import MBanners from "./reducers/MBanners";
import BProducts from "./reducers/BProducts";
import BBanners from "./reducers/BBanners";

const rootReducer = combineReducers({
  m_products: MProducts,
  m_banners: MBanners,
  b_products: BProducts,
  b_banners: BBanners,
});

export default rootReducer;
