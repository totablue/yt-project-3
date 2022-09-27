import React, { useContext } from "react";

import { MenuContext } from "../context/MenuItem-context";

const Categories = () => {
    const { filter } = useContext(MenuContext);

    const filterAll = () => filter("all");
    const filterBreakfast = () => filter("breakfast");
    const filterLunch = () => filter("lunch");
    const filterShakes = () => filter("shakes");

    return (
        <div className="btn-container">
            <button type="button" className="filter-btn" onClick={filterAll}>
                All
            </button>
            <button
                type="button"
                className="filter-btn"
                onClick={filterBreakfast}
            >
                Breakfast
            </button>
            <button type="button" className="filter-btn" onClick={filterLunch}>
                Lunch
            </button>
            <button type="button" className="filter-btn" onClick={filterShakes}>
                Shakes
            </button>
        </div>
    );
};

export default Categories;
