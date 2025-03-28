const Herocard = () => {
    return (
      <div className="max-w-[90%] lg:max-w-[80%] mx-auto p-4 py-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        
        {[
          { title: "And we serve pasta", img: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600" },
          { title: "Steak meat", img: "https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=600" },
          { title: "We also serve desserts", img: "https://images.pexels.com/photos/3992134/pexels-photo-3992134.jpeg?auto=compress&cs=tinysrgb&w=600" },
        ].map((item, index) => (
          <div key={index} className="rounded-xl relative overflow-hidden group aspect-[4/5] min-h-[350px]">
            <div className="absolute w-full h-full bg-black/50 text-white rounded-xl flex flex-col justify-between p-4">
              <div>
                <p className="font-bold text-2xl">{item.title}</p>
                <p>Through 28/6</p>
              </div>
              <button className="border-white bg-white text-black py-2 px-4 self-start rounded-md">
                Order Now
              </button>
            </div>
  
            <img 
              src={item.img} 
              className="w-full h-full  object-center rounded-xl transition-transform duration-300 group-hover:scale-105" 
            />
          </div>
        ))}
  
      </div>
    );
  }
  
  export default Herocard;
  
  