import { footerContent } from "../../data/siteContent";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>{footerContent.copyright}</p>
      <p>{footerContent.label}</p>
    </footer>
  );
}
