export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex justify-between bg-label-bg text-sub-label">
      <p className="m-2">© {currentYear} SummitGear Market</p>
      <p className="m-2">Prices in USD</p>
    </div>
  );
}
