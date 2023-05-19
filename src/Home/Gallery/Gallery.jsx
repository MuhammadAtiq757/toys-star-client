
const Gallery = () => {
    return (
      <div>

    <div>
    <h2 className=" text-center text-2xl mt-10 font-semibold"> Photo
     <span className="text-cyan-800 ml-1">Gallery</span>  </h2>
    </div>

          <div className="m-6 mr-0 grid grid-cols-1 md:grid-cols-3 gap-4">
                         
            <div className="card w-64 h-64 bg-base-100 shadow-xl">
                <figure><img className="p-4 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeqErMeux6jO48fapZq6HEIkXnM5gZFJWORSpLtRTaSEr8UbSuESsecESMobLMn9D_ZFs&usqp=CAU"/></figure>
               
            </div>
            <div className="card w-64 h-64 bg-base-100 shadow-xl">
                <figure><img className="p-4 " src="https://d29bbxrtp7ma0n.cloudfront.net/products/1652030452Vosox1vEM39Z2pnLwXb95LpuD51clFLrS3tnUqv3-550x550.jpeg" alt="Shoes" /></figure>
             
            </div>
            <div className="card w-64 h-64 bg-base-100 shadow-xl">
                <figure><img className="p-4 " src="https://i5.walmartimages.com/asr/e24b301e-45e3-4de2-b691-fdcd349da0d7.a6fac6f29e973ba11515ec1e11353b2f.jpeg?odnHeight=784&odnWidth=580&odnBg=FFFFFF" alt="Shoes" /></figure>
             
            </div>
            <div className="card w-64 h-64 bg-base-100 shadow-xl">
                <figure><img className="p-4 " src="https://m.media-amazon.com/images/I/315Rdxq29UL._AC_SR300,300.jpg" alt="Shoes" /></figure>
               
            </div>
            <div className="card w-64 h-64 bg-base-100 shadow-xl">
                <figure><img className="p-4" src="https://i.pinimg.com/736x/dd/6f/a9/dd6fa937376c44e23cde018a381f82e7--fisher-price-toys-kids-sports.jpg" alt="Shoes" /></figure>
               
            </div>
            <div className="card w-64 h-64 bg-base-100 shadow-xl">
                <figure><img className="p-4 " src="https://i.ebayimg.com/images/g/0pcAAOSwz71ZVp2S/s-l500.png" alt="Shoes" /></figure>
               
            </div>




        </div>
         
      </div>
    );
};

export default Gallery;