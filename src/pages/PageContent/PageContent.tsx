import "./PageContent.scss";

interface PageContentProps {
    menuOpen: boolean;
}

export function PageContent(props: PageContentProps) {
    const { menuOpen } = props;

    console.log("menuOpen - PageContent component:", menuOpen);

  return <div className="pageContentWrapper"></div>;
}
