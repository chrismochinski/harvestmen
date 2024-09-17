import "./PageContent.scss";

interface PageContentProps {
  menuOpen: boolean;
}

export function PageContent(props: PageContentProps) {
  const { menuOpen } = props;

  console.log("menuOpen - PageContent component:", menuOpen);

  return (
    <div className={`pageContentWrapper ${menuOpen ? "menuOpen" : ""}`}>
      <h2 className="raleway">Coming Soon</h2>
    </div>
  );
}
