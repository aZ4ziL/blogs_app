interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return <div className="px-2 md:px-16 lg:px-36">{children}</div>;
}
