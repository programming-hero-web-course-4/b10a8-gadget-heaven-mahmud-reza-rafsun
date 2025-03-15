import BannerImg from "../../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="bg-violet-500 py-10 text-center rounded-b-2xl">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl lg:text-5xl text-white font-bold">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h2>
        <p className="text-white py-5">
          Explore the latest gadgets that will take your experience to <br />{" "}
          the next level. From smart devices to the coolest accessories, we have
          it all!
        </p>
        <div className="pb-36">
          <button className="text-violet-500 border border-violet-500 bg-white rounded-full px-4 py-2 text-sm font-semibold cursor-pointer">
            Shop Now
          </button>
        </div>
        <div className="border-16 border-transparent bg-white/50 rounded-3xl absolute left-0 right-0 top-96 max-w-4xl mx-auto z-10">
          <img className="rounded-xl h-[500px] w-full" src={BannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
