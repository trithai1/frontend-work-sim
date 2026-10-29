export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex justify-between text-gray-600">
      <p className="m-2">© {currentYear} SummitGear Market</p>
      <p className="m-2">Prices in USD</p>
    </div>
  );
}
