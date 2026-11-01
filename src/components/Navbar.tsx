export function Navbar() {
  const links = [
    {
      label: "Shop",
      href: "/shop",
    },
    {
      label: "Favorites",
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
      </div>
    </div>
  );
}
