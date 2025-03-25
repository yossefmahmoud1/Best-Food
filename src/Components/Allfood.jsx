import { useState, useMemo } from "react";
import { data } from "../data/data.js";
import Card from "./Card";

const AllFood = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");

  const categories = ["all", ...new Set(data.map((item) => item.category))];

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const categoryMatch = selectedCategory === "all" || item.category === selectedCategory;
      const itemPrice = parseInt(item.price.replace("$", ""), 10);
      const priceMatch =
        selectedPrice === "all" ||
        (selectedPrice === "low" && itemPrice < 50) ||
        (selectedPrice === "medium" && itemPrice >= 50 && itemPrice <= 100) ||
        (selectedPrice === "high" && itemPrice > 100);

      return categoryMatch && priceMatch;
    });
  }, [selectedCategory, selectedPrice]);

  return (
    <div className="container   max-w-[90%]  lg:max-w-[80%] mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-amber-500 relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-1 bg-sky-500 mt-2"></div>
      </h2>
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <span className="text-sky-500 font-medium tracking-wider text-sm">     Food Section
        </span>
        <h2 className="text-4xl font-bold mt-3 mb-4 text-gray-800"> Our Delicious Food</h2>
        <p className="text-gray-600">Choose Your Favoutie Food</p>
      </div>
      {/* فلاتر البحث */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-lg text-sm font-semibold shadow-md transition ${
              selectedCategory === cat
                ? "bg-amber-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="flex justify-center gap-4 mb-6">
        {/* فلتر الأسعار */}
        <select
          className="p-2 border rounded-lg shadow-md bg-white"
          value={selectedPrice}
          onChange={(e) => setSelectedPrice(e.target.value)}
        >
          <option value="all">All Prices</option>
          <option value="low">Below $50</option>
          <option value="medium">$50 - $100</option>
          <option value="high">Above $100</option>
        </select>
      </div>

      {/* عرض البيانات */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredData.length > 0 ? (
          filteredData.map((item) => <Card key={item.id} item={item} />)
        ) : (
          <p className="text-center col-span-full text-gray-500">No food matches your filters.</p>
        )}
      </div>
    </div>
  );
};

export default AllFood;
