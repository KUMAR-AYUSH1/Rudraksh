
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Sun,
  Moon,
  CalendarDays,
  HeartPulse,
  House,
  UserRound,
  Newspaper,
  Images,
} from "lucide-react";

const navItems = [
  { name: "Home", href: "/", icon: House },
  { name: "About Us", href: "/about", icon: UserRound },
  { name: "Blog", href: "/blog", icon: Newspaper },
  { name: "Gallery", href: "/gallery", icon: Images },
  {
    name: "Book Appointment",
    href: "/appointment",
    icon: CalendarDays,
  },
];

export default function Header() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    setMenuOpen(false);
  }, [darkMode]);

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-100 bg-white/95 text-slate-800 shadow-sm backdrop-blur-md dark:border-slate-700 dark:bg-slate-950/95 dark:text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo and brand */}
        <a
          href="/"
          className="flex shrink-0 items-center gap-2"
          aria-label="Rudraksh Health Care home"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300">
            <HeartPulse size={27} strokeWidth={1.8} />
          </span>

          <span className="leading-tight">
            <span className="block text-lg font-bold tracking-tight text-emerald-700 dark:text-emerald-400 sm:text-xl">
              Rudraksh
            </span>
            <span className="block text-xs font-medium tracking-[0.18em] text-slate-500 dark:text-slate-400 sm:text-sm">
              HEALTH CARE
            </span>
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`whitespace-nowrap text-sm font-medium transition-colors hover:text-emerald-600 dark:hover:text-emerald-400 ${
                item.name === "Book Appointment"
                  ? "rounded-full bg-emerald-600 px-5 py-3 text-white hover:bg-emerald-700 dark:hover:bg-emerald-500"
                  : ""
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Theme toggle and mobile menu */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
            title={darkMode ? "Light mode" : "Dark mode"}
            className="rounded-full border border-slate-200 p-2.5 transition hover:bg-emerald-50 dark:border-slate-700 dark:hover:bg-slate-800"
          >
            {darkMode ? (
              <Sun size={19} className="text-amber-400" />
            ) : (
              <Moon size={19} className="text-slate-700" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="rounded-lg p-2 transition hover:bg-emerald-50 dark:hover:bg-slate-800 lg:hidden"
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 pb-5 pt-3 dark:border-slate-700 dark:bg-slate-950 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-3 border-b border-slate-100 py-3.5 text-sm font-medium transition hover:text-emerald-600 dark:border-slate-800 dark:hover:text-emerald-400 ${
                    item.name === "Book Appointment"
                      ? "mt-3 justify-center rounded-xl border-0 bg-emerald-600 px-4 text-white hover:bg-emerald-700"
                      : ""
                  }`}
                >
                  <Icon size={19} />
                  {item.name}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
