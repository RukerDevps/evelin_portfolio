interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div
      className={`relative mx-auto w-full max-w-[96rem] ${className}`.trim()}
    >
      {children}
    </div>
  );
};
