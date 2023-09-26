export interface CenteredContainerProps {
  children?: React.ReactNode;
}

const CenteredContainer = ({ children }: CenteredContainerProps) => {
  return <div className={"mx-auto"}>{children}</div>;
};

export default CenteredContainer;
