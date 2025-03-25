const Card = ({ item }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden p-4 transition-transform duration-300 hover:scale-105">
      <img 
        src={item.image} 
        alt={item.name} 
        className="w-full h-40 object-cover rounded-lg"
      />

      <div className="mt-3 text-center">
        <p className="text-lg font-semibold">{item.name}</p>
        <span className="text-gray-500 text-sm block mt-1">${item.price}</span>
      </div>
    </div>
  );
};

export default Card;
