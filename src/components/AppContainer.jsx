

// eslint-disable-next-line react/prop-types
export const AppContainer = ({ children, className = "" }) => {
  return (
    <div className={`max-w-[94%] bg-[#141416] relative left-[80px] px-[20px] py-[30px] ${className}`}>
      {children}
    </div>
  );
};
