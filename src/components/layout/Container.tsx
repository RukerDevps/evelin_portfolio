interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div className={`mx-auto w-full max-w-[1320px] ${className}`.trim()}>
      {children}
    </div>
  );
};
