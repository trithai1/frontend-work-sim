import { NavLink, useLocation } from "react-router";


export function Page404() {
  const location = useLocation();

  return(
    <div className="flex flex-col items-center justify-center flex-1">
      <p className="text-brand-green text-8xl font-bold mb-2">404</p>
      <p className="text-main-label font-bold text-2xl">This page wandered off</p>
      <p className="text-sub-label mb-4">We couldn't find <span className="font-bold">{location.pathname}</span></p>
      <NavLink to="/" className="bg-brand-green text-white dark:text-black font-bold py-2 px-4 rounded-lg" end>Back to the shop</NavLink>
    </div>
  );
}