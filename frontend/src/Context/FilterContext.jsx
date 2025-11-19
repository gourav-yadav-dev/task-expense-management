import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export function FilterProvider({ children }) {

  const [filters, setFilters] = useState({
    week: "thisWeek",
    status: "",
    search: "",
    range: null,
  });

  
  const updateFilter = (changes) => {
    setFilters((prev) => ({ ...prev, ...changes }));
  };

  
  const resetFilters = () => {
    setFilters({
      week: "thisWeek",
      status: "",
      search: "",
      range: null,
    });
  };

  return (
    <FilterContext.Provider value={{ filters, updateFilter, resetFilters }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  return useContext(FilterContext);
}
