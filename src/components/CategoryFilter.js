import React from "react";

function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {

  // const handleCategory = (category) => {
  //   handleSelectedCategory(category)


  // }
  const categoryButton = categories.map(category => (
    <button
      key={category}
      onClick={(e) => setSelectedCategory(category)}
      className={category === selectedCategory ? "selected" : null}
    >
      {category}
    </button>
  ))

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButton}
    </div>
  );
}

export default CategoryFilter;
