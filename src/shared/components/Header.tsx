import { useState } from "react";
import { Link } from "react-router-dom";
import NavigationPillList, { type NavItem } from "./NavigationPillList";
import { useTheme } from "../theme/useTheme";
import MenuIcon from "../../assets/Menu-16.svg";
import XIcon from "../../assets/X-16.svg";
import StarIcon from "../../assets/Star.svg";
import XSmall from "../../assets/X.svg";

function ThemeToggleButton({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={`cursor-pointer border-border-default-default border-solid border-stroke-border p-space-300 bg-background-default-secondary w-11 h-11 rounded-scale-06 box-border overflow-hidden shrink-0 flex items-center justify-center text-text-default-default ${className}`}
    >
      {isDark ? (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" strokeLinecap="round" />
        </svg>
      ) : (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  );
}

interface HeaderProps {
  className?: string;
  logoSrc?: string;
  logoAlt?: string;
  logoLinkTo?: string;
  navItems?: NavItem[];
  showAuth?: boolean;
}

export default function Header({
  className = "",
  logoSrc,
  logoAlt = "",
  logoLinkTo = "/",
  navItems,
  showAuth = true,
}: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-background-default-default border-border-default-default border-solid border-b-stroke-border box-border h-16 overflow-hidden flex items-center flex-wrap content-center px-space-800 gap-x-space-600 gap-y-0 text-left text-body-size-medium text-text-default-default font-body-font-family ${className}`}
    >
      <div className="flex items-center gap-3 shrink-0 md:hidden flex-1 min-w-0">
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="cursor-pointer border-border-default-default border-solid border-stroke-border p-space-300 bg-background-default-secondary w-11 h-11 rounded-scale-06 box-border overflow-hidden shrink-0 flex items-center justify-center"
        >
          <img
            className="cursor-pointer border-none p-0 bg-transparent h-5 w-5 relative dark:invert"
            alt=""
            src={mobileOpen ? XIcon : MenuIcon}
          />
        </button>
        {logoSrc && (
          <Link to={logoLinkTo} className="flex items-center shrink-0">
            <img
              className="h-[50px] w-[50px] object-cover dark:[filter:brightness(0)_invert(1)]"
              loading="lazy"
              alt={logoAlt}
              src={logoSrc}
            />
          </Link>
        )}
        <div className="flex-1" />
        <ThemeToggleButton />
      </div>

      {logoSrc && (
        <Link
          to={logoLinkTo}
          className="hidden md:flex items-center shrink-0 h-[50px] w-[50px]"
        >
          <img
            className="h-[50px] w-[50px] object-cover dark:[filter:brightness(0)_invert(1)]"
            loading="lazy"
            alt={logoAlt}
            src={logoSrc}
          />
        </Link>
      )}

      <div className="hidden md:flex flex-1 min-w-0">
        <NavigationPillList items={navItems} onNavigate={() => setMobileOpen(false)} />
      </div>

      <div className="hidden md:flex shrink-0">
        <ThemeToggleButton />
      </div>

      {showAuth && (
        <div className="hidden md:flex w-[178px] items-center gap-space-300 shrink-0">
          <Link
            to="/sign-in"
            className="flex-1 rounded-radius-200 bg-background-neutral-tertiary border-border-neutral-secondary border-solid border-stroke-border overflow-hidden flex items-center justify-center p-space-200 gap-space-200 no-underline text-text-default-default hover:opacity-90"
          >
            <img className="h-4 w-4 relative hidden shrink-0" alt="" src={StarIcon} />
            <span className="relative leading-[100%] shrink-0">Sign in</span>
            <img className="h-4 w-4 relative hidden shrink-0" alt="" src={XSmall} />
          </Link>
          <Link
            to="/register"
            className="flex-1 rounded-radius-200 bg-background-brand-default border-border-brand-default border-solid border-stroke-border overflow-hidden flex items-center justify-center p-space-200 gap-space-200 text-text-brand-on-brand no-underline hover:opacity-90"
          >
            <img className="h-4 w-4 relative hidden shrink-0" alt="" src={StarIcon} />
            <span className="relative leading-[100%] shrink-0">Register</span>
            <img className="h-4 w-4 relative hidden shrink-0" alt="" src={XSmall} />
          </Link>
        </div>
      )}

      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-background-utilities-scrim md:hidden"
          aria-hidden
          onClick={() => setMobileOpen(false)}
        />
      )}
      <div
        className={`fixed top-16 left-0 right-0 z-40 bg-background-default-default border-b border-border-default-default shadow-md md:hidden transition-transform duration-200 ${mobileOpen ? "block" : "hidden"}`}
      >
        <div className="flex flex-col py-4 px-space-800 gap-2">
          <NavigationPillList
            items={navItems}
            direction="Column"
            onNavigate={() => setMobileOpen(false)}
          />
          {showAuth && (
            <div className="flex flex-col gap-2 pt-4 mt-2 border-t border-border-default-default">
              <Link
                to="/sign-in"
                onClick={() => setMobileOpen(false)}
                className="rounded-radius-200 bg-background-neutral-tertiary border border-border-neutral-secondary p-space-200 text-center no-underline text-text-default-default"
              >
                Sign in
              </Link>
              <Link
                to="/register"
                onClick={() => setMobileOpen(false)}
                className="rounded-radius-200 bg-background-brand-default border border-border-brand-default p-space-200 text-center no-underline text-text-brand-on-brand"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
