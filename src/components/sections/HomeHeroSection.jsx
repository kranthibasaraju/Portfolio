import { LinkedinIcon, Mail } from "lucide-react";
import heroImage from "../../assets/hero.png";
import { homePageContent } from "../../data/siteContent";
import { profile } from "../../data/portfolioData";
import ButtonLink from "../ui/ButtonLink";

const socialIcons = {
  linkedin: LinkedinIcon,
  contact: Mail,
};

export default function HomeHeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <p className="eyebrow">{homePageContent.hero.eyebrow}</p>
        <h1>
          {profile.name}
          <span>{profile.role}</span>
        </h1>
        <p className="hero-lead">{profile.blurb}</p>

        <div className="button-row">
          {homePageContent.hero.actions.map((action) => (
            <ButtonLink key={action.to} className={action.className} to={action.to}>
              {action.label}
            </ButtonLink>
          ))}
        </div>

        <div className="social-row">
          {homePageContent.hero.socialLinks.map((item) => {
            const Icon = socialIcons[item.icon];
            const href = item.type === "email" ? `mailto:${profile.email}` : profile[item.valueKey];

            return (
              <a
                key={item.label}
                className="social-link"
                href={href}
                target={item.type === "external" ? "_blank" : undefined}
                rel={item.type === "external" ? "noopener noreferrer" : undefined}
                referrerPolicy={item.type === "external" ? "no-referrer" : undefined}
              >
                <Icon size={18} /> {item.label}
              </a>
            );
          })}
        </div>
      </div>

      <div className="hero-visual">
        <img src={heroImage} alt="Kavya Sree Maniga portrait" />
      </div>
    </section>
  );
}
