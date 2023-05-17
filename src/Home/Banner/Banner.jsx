
const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
    <div id="slide1" className="carousel-item relative w-full">
        <img src="https://img.freepik.com/premium-vector/sports-equipment-background_38359-18.jpg" className="w-full rounded-xl" />
        <div className="absolute rounded-xl h-full flex items-center left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21,0)]">

            <div className='text-white font-bold space-y-7 w-1/2 pl-12'>
                <h2 className='text-6xl'> Action-Packed Athletics: The Ultimate Sports Toy Collection</h2>
                <p>Experience the thrill of the game with our Sports Toy Set. From soccer to basketball, this versatile toy lets you play and practice your favorite sports anytime, anywhere.</p>
                
            </div>



        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle mr-5">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
    </div>
    <div id="slide2" className="carousel-item relative w-full">
        <img src="https://thumbs.dreamstime.com/b/sport-games-background-basketball-soccer-ball-rackets-sneakers-copy-space-196415583.jpg" className="w-full rounded-xl" />

        <div className="absolute rounded-xl h-full flex items-center left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21,0)]">

            <div className='text-white font-bold space-y-7 w-1/2 pl-12'>
                <h2 className='text-6xl'> Sports Stars Playset: Unleash Your Sporting Skills</h2>
                <p>Get ready for an action-packed adventure with our Interactive Sports Game. Compete against friends in exciting challenges and improve your skills while having endless fun.</p>
              
            </div>



        </div>

        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle mr-5">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
    </div>
    <div id="slide3" className="carousel-item relative w-full">
        <img src="https://c4.wallpaperflare.com/wallpaper/89/870/355/ball-soccer-ball-soccer-football-wallpaper-preview.jpg" className="w-full rounded-xl" />
        <div className="absolute rounded-xl h-full flex items-center left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21,0)]">

            <div className='text-white font-bold space-y-7 w-1/2 pl-12'>
                <h2 className='text-6xl'> Super Sports Challenge: Interactive Toy Game for Athletes</h2>
                <p>Introducing the Sports Training Kit, designed to enhance your performance. With adjustable equipment and training guides, it is the perfect companion for aspiring athletes aiming to reach their full potential.</p>
              
            </div>



        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle mr-5">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
    </div>
    <div id="slide4" className="carousel-item relative w-full">
        <img src="https://s.yimg.com/ny/api/res/1.2/Oh.AHvjcNmipUAwIM3gFzA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04NDA-/https://media.zenfs.com/en/ocala-star-banner/40489db358e1bb2a71532122d3e740d9" className="w-full rounded-xl" />
        <div className="absolute rounded-xl h-full flex items-center left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21,0)]">

            <div className='text-white font-bold space-y-7 w-1/2 pl-12'>
                <h2 className='text-6xl'> All-Star Sports Training Kit: Gear Up for Victory</h2>
                <p>Unleash your inner champion with our Sports Playset. Featuring realistic equipment and accessories, it offers a fun and immersive experience for sports enthusiasts of all ages.</p>
            
            </div>



        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle mr-5">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
    </div>
</div>

  );
};

export default Banner;