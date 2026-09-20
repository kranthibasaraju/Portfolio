import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

export default function AppShell({ children }) {
  return (
    <div className="app-shell">
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
