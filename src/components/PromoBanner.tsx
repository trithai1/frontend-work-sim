import { useEffect, useState } from "react";


export function PromoBanner() {
  const [promo, setPromo] = useState(0);
  const promoMsgs = [
    "🎉 Free shipping on orders over $50",
    '🎊 Use code "Super Sale" to get 90% off socks!',
    "😰 Don't look under your bed. Something doesn't want you there...",
    "🎅 Spread your cheeks for Santa and get a complimentary Christmas gift! 🎁",
  ];

  let intervalId: number;
  useEffect(() => {
    intervalId = setInterval(() => {
      setPromo(promo => (promo + 1) % promoMsgs.length);
    }, 4000);
    return () => clearInterval(intervalId);
  }, []);

  const [hidePromo, setHidePromo] = useState(false);
  function closePromo() {
    setHidePromo(true);
    clearInterval(intervalId);
  }

  return (
    <>
      {!hidePromo &&
      <div className="flex justify-center items-center bg-brand-green text-white dark:text-black py-2 font-bold">
        <p className="text-white">{promoMsgs[promo]}</p>
        <ul className="flex ml-2">
          {promoMsgs.map((_, idx) => idx === promo ?
            <button key={idx} className="text-[10px]" onClick={() => setPromo(idx)}>🟢</button> :
            <button key={idx} className="text-[10px]" onClick={() => setPromo(idx)}>⚫</button>)}
        </ul>
        <button className="absolute right-3 text-2xl font-bold text-white dark:text-black" onClick={closePromo}>×</button>
      </div>}
    </>
  );
}