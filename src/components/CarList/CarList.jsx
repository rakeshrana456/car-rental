import React from "react";
import whiteCar from "../../assets/white-car.png";
import car2 from "../../assets/car5.png";
import car3 from "../../assets/car6.png";
import ertiganew from "../../assets/ertiganew.png";
 import fortuner1 from "../../assets/fortuner1.png";
 import tempo from "../../assets/tempo.png";
 import swift from "../../assets/swift.png";
 import innova2 from "../../assets/innova2.png";
 import etiosRecovered from "../../assets/etiosRecovered.png";



const carList = [
  {
    name: "BMW UX",
    price: 100,
    image: whiteCar,
    aosDelay: "0",
  },
  {
    name: "KIA UX",
    price: 140,
    image: car2,
    aosDelay: "500",
  },
  {
    name: "BMW UX",
    price: 100,
    image: car3,
    aosDelay: "1000",
  },
  {
    name: "ertiganew",
    price: 100,
    image: ertiganew,
    aosDelay: "1000",
  },
  {
    name: "fortuner1",
    price: 100,
    image: fortuner1,
    aosDelay: "1000",
  },
  {
    name: "Tempo travel",
    price: 100,
    image: tempo,
    aosDelay: "1000",
  },
  {
    name: "swift",
    price: 100,
    image: swift,
    aosDelay: "1000",
  },
  {
    name: "innova",
    price: 100,
    image: innova2,
    aosDelay: "1000",
  },
  {
    name: "etiosRecovered",
    price: 100,
    image: etiosRecovered,
    aosDelay: "1000",
  },
  
  
  
];

const CarList = () => {
  return (
    <div className="cont">
    <div className="pb-24">
      <div className="container">
        {/* Heading */}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
          Rana Travels
        </h1>
        <p data-aos="fade-up" aos-delay="400" className="text-sm pb-10">
        Book your ride now for a seamless, comfortable experience with reliable service and professional drivers, ensuring you reach your destination effortlessly...!
        </p>
        {/* Car listing */}
        

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {carList.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
              >
                <div className="w-full h-[120px]">
                  <img
                    src={data.image}
                    alt=""
                    className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                  />
                </div>
                
                <div className="space-y-2">
                  <h1 className="text-primary font-semibold">{data.name}</h1>
                  <div className="flex justify-between items-center text-xl font-semibold">
                  <button data-aos="fade-up" className="button-outline">
                <a href="https://wa.me/919728925976" target="blank">Book Now</a>
              </button>
                    
                    <button data-aos="fade-up" className="button-outline">
                <a href="tel:+919728925976" target="blank">Call</a>
              </button>
                  </div>
                </div>

                
                <p className="text-xl font-semibold absolute top-0 left-3">
                  
                </p>
              </div>
            ))}
          </div>
        </div>
        </div>
        {/* End of car listing */}
        <div className="grid place-items-center mt-8">
          <button data-aos="fade-up" className="button-outline">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarList;
