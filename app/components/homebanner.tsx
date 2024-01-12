const HomeBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-sky-500 to-sky-700 mb-8">
      <div className="mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly">
        <div className="mb-8 md:mb-0 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Summer sale</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil quam
            eius veniam tempora, temporibus recusandae quaerat illo expedita
            reprehenderit tempore culpa velit veritatis quisquam nisi excepturi
            corporis delectus sunt voluptas.
          </p>
          <p>GEt 50%  off</p>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
