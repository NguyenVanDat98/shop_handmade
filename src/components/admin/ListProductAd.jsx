import React from "react";
import { ICONADD } from "../../Icon";
import {ItemProductAd} from "./../index.js";

const ListProductAd = (props) => {
  return (
    <div className="list-product-Ad">
      <div className="list-product-Ad_header">
        <button>
          <i className={ICONADD}> ADD PRODUCT</i>
        </button>
        <select className="form-select" name="">
          <option defaultValue>CATEGORY</option>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
        </select>
      </div>
      <div className="example-container list-product-Ad_body   ">
        <div className="row gap-2 row-cols-xs-1 row-cols-sm-3 row-cols-md-4 row-cols-lg-6">
          {[...new Array(50)].map((_, i) => (
            <ItemProductAd key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListProductAd;
