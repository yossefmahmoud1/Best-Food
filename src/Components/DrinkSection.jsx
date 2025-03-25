import { drinks } from "../data/Drinks";

const DrinksSection = () => {
  return (
    <div className="container mx-auto lg:max-w-[80%] max-w-[90%]  px-4 py-16 ">
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <span className="text-sky-500 font-medium tracking-wider text-sm">Refreshing Beverages</span>
        <h2 className="text-4xl font-bold mt-3 mb-4 text-gray-800">Delicious Drinks</h2>
        <p className="text-gray-600">Choose your favorite drink to complement your meal</p>
      </div>

      <div className="space-y-24"> 
        {drinks.map((drink, index) => (
          <div 
            key={drink.id} 
            className={`group relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 items-center mt-24`}
          >
            <div className="relative w-40 h-40 transform skew-y-6 group-hover:skew-y-0 transition-all duration-500">
              <div className="w-full h-full overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={drink.image}
                  alt={drink.name}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className={`absolute -z-10 inset-0 rounded-xl bg-amber-100 ${index % 2 === 0 ? 'translate-x-3 translate-y-3' : '-translate-x-3 translate-y-3'}`}></div>
            </div>
            
            <div className="w-full md:w-2/3 space-y-4 transform skew-y-6 group-hover:skew-y-0 transition-all duration-500">
              <h3 className="text-2xl font-bold text-gray-800">{drink.name}</h3>
              <p className="text-gray-600">{drink.description}</p>
              
              <div className="flex items-center justify-between mt-6">
                <span className="text-sky-500 font-bold text-xl">{drink.price}</span>
                <button className="px-6 py-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors">
                  Add to Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DrinksSection;
