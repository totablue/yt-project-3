import React, { createContext, useState } from "react";

import MENU from "../data/data";

export const MenuContext = createContext({
    menu: [],
    filter: () => {},
});

const handleFilter = (category) => {
    if (category === "all") {
        return MENU;
    }
    if (category === "breakfast") {
        return MENU.filter((menuItem) => menuItem.category === "breakfast");
    }
    if (category === "lunch") {
        return MENU.filter((menuItem) => menuItem.category === "lunch");
    }
    if (category === "shakes") {
        return MENU.filter((menuItem) => menuItem.category === "shakes");
    }
};

export const MenuProvider = ({ children }) => {
    const [menu, setMenu] = useState(MENU);

    const filter = (category) => {
        setMenu(handleFilter(category));
    };

    const value = {
        menu,
        filter,
    };
    return (
        <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
    );
};
