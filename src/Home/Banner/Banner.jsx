
const Banner = () => {
  return (
    <div className="w-full mx-auto  w-full h-[600px]">
    <div  className="relative w-full">
        <img src="https://img.freepik.com/premium-vector/sports-equipment-background_38359-18.jpg" className="w-full rounded-xl" />
        <div className="absolute h-full flex items-center left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21,0)]">

            <div className='text-white font-bold space-y-7 w-1/2 pl-12'>
                <h2 className='text-6xl'> Action-Packed Athletics: The Ultimate Sports Toy Collection</h2>
                <p>Experience the thrill of the game with our Sports Toy Set. From soccer to basketball, this versatile toy lets you play and practice your favorite sports anytime, anywhere.</p>
                
            </div>



        </div>
      
    </div>
 
</div>

  );
};

export default Banner;