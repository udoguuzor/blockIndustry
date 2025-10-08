import Image from "../assets/plumbing.jpg"

const Home = () => {
  return (
    <div>
       <div
      className="bg-blue-400 "
      style={{
        backgroundImage: "url('/src/assets/plumbing.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "400px",
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "darken",
      }}
    >
  
   <div className="text-white p-6 flex flex-col justify-between  w-[100%] h-[400px] space-y-6 ">

     <div className="flex flex-col space-y-6">
      <h1 className="flex font-[inter] text-5xl font-bold">Quality Plumbing <br /> Materials & Accessories
        
      </h1>

      <p className="flex">Professional-grade supplies for contractors and homeowners. <br /> Fast delivery, competitive prices, expert support.</p>

      <div className="flex space-x-4">
      <button className="rounded-md shadow-md w-40 h-10 bg-white text-black">Shop Now→</button>
      <button className="rounded-md shadow-md w-40 h-10 bg-blue-800">Get a quote</button>
      </div>
    </div>

    
   </div>
    </div>
    <div className="w-[100%] h-[400px]" >
      <div className="w-[100%] h-[100px] flex flex-col justify-center items-center space-y-4">
        <h1 className="text-2xl font-bold">Featured Products</h1>
        <p className="text-center">Discover our most popular plumbing materials and accessories, trusted by professionals</p>
      </div>
      <div className="flex space-x-4 w-[100%] h-[300px] justify-evenly items-center">
        <img src={Image} alt="" className="w-[200px] h-[200px] object-cover rounded-2xl" />
        <img src={Image} alt="" className="w-[200px] h-[200px] object-cover rounded-2xl" />
        <img src={Image} alt="" className="w-[200px] h-[200px] object-cover rounded-2xl" />
      </div>
    </div>
    </div>
   
  );
};

export default Home;