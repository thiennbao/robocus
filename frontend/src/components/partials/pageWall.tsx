const PageWall = ({ title, image }: { title: string; image: string }) => {
  return (
    <section
      className="aspect-video lg:aspect-auto lg:h-[50vh] bg-gray-200 relative bg-cover bg-center text-center rounded-lg"
      style={{ backgroundImage: `url("${image}")`, filter: "brightness(.8)"}}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h2 className="gradient-text text-4xl font-bold">{title}</h2>
      </div>
    </section>
  );
};

export default PageWall;
