import React, { createContext } from "react";
import All_images from "../all_product";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {

const contextValue = {All_images};

return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
)
}

export default ShopContextProvider;
