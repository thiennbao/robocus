const Spacer = ({ count = 1 }: { count?: number; }) => {
  const elements = Array.from({ length: count }).map((_, index) => (
    <div key={index} className="h-10"></div>
  ));
  return (
    <div className="spacer">
      {elements}
    </div>
  );
};

export default Spacer;