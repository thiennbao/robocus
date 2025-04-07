const Spacer = ({ count = 1 }: { count?: number }) => {
  return (
    <div>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="h-4"></div>
      ))}
    </div>
  );
};

export default Spacer;
