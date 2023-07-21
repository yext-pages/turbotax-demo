import {
  SearchHeadlessProvider,
  provideHeadless,
} from "@yext/search-headless-react";
import { HexColor } from "@yext/studio";

export interface PageLayoutProps {
  children: React.ReactNode;
  backgroundColor?: HexColor;
}

export const initialProps = {
  backgroundColor: "#FFFFFF",
};

const searcher = provideHeadless({
  apiKey: "b843386ef2f732e657190e7d945aadc5",
  experienceKey: "turbotax-locator",
  locale: "en",
  verticalKey: "locations",
});

const PageLayout = ({ children, backgroundColor }: PageLayoutProps) => {
  return (
    <SearchHeadlessProvider searcher={searcher}>
      <div className="min-h-screen" style={{ backgroundColor }}>
        <main>{children}</main>
      </div>
    </SearchHeadlessProvider>
  );
};

export default PageLayout;
