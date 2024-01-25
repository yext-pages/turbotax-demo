export interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="min-h-screen">
      <main>{children}</main>
    </div>
  );
};

export default PageLayout;
