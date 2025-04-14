interface IContainerProps {
  children: React.ReactNode;
}

function Container({ children }: IContainerProps) {
  return <div style={{ padding: "0 200px" }}>{children}</div>;
}

export default Container;
