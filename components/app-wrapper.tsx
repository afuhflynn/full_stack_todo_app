type props = {
  children: React.ReactNode;
};

const AppWrapper = ({ children }: props) => {
  return (
    <div className="h-full md:w-[540px] lg:w-[620px] w-full flex flex-col items-center gap-6 md:p-8 p-4">
      {children}
    </div>
  );
};

export default AppWrapper;
