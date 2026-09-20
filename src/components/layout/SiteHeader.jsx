import { NavLink } from "react-router-dom";
import { navigationItems, siteIdentity } from "../../data/siteContent";
import ButtonLink from "../ui/ButtonLink";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <NavLink className="site-brand" to="/">
        {siteIdentity.mark}
      </NavLink>

      <nav className="site-nav" aria-label="Primary">
        {navigationItems.map((item) => (
          <NavLink key={item.to} to={item.to}>
            {item.label}
          </NavLink>
        ))}
      </nav>

      <ButtonLink className="button button-primary header-action" to="/resume">
        View Resume
      </ButtonLink>
    </header>
  );
}
