
/* Filter  */
export function filterData(searchInput, allRestaurants) {
    const temp = allRestaurants.filter((restaurant) =>
      restaurant?.info?.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  
    return temp;
  }