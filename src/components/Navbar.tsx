export function Navbar({theme, toggleTheme, favorites}: {
  theme: string;
  toggleTheme: () => void;
  favorites: number[];
}) {
  const links = [
    {
      label: "Shop",
      href: "/shop",
    },
    {
      label: `Favorites (${favorites.length})`,
      href: "/favorites",
    },
    {
      label: "Cart",
      href: "/cart",
    },
  ];

  return (
    <div className="sticky top-0 shadow-md flex justify-between p-5 bg-label-bg/92">
      <p className="text-2xl font-bold text-brand-green">🍀 SummitGear Market</p>
      <div>
        {links.map((link) => (
          <a key={link.label} className="p-3 text-main-label" href={link.href}>
            {link.label}
          </a>
        ))}
        <button className="bg-product-bg p-1 px-2 rounded-md border-1 border-solid border-sub-label" onClick={toggleTheme}>{theme === "dark" ? "☀️" : "🌙"}</button>
      </div>
    </div>
  );
}
