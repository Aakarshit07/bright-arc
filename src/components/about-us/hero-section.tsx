export default function HeroSection() {
  return (
    <section className="relative overflow-hidden fancy-corner-gradient">
      {/* Yellow curved design element */}
      <div
        className="absolute inset-0 bg-no-repeat"
        style={{
          backgroundImage: "url('/aboutus-graphic.svg')",
          backgroundSize: "cover",
          backgroundPosition: "left center ",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 z-10 flex items-center justify-center ">
        {/* Main heading container */}
        <div className="flex items-center justify-center min-h-[300px]">
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-center leading-tight tracking-tight text-white drop-shadow-lg">
            About{" "}
            <span className="text-primary-700 font-bold text-4xl md:text-5xl lg:text-6xl">
              Bright Arc
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}
