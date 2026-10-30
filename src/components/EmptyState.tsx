export function EmptyState({ message }: { message: React.ReactNode }) {
  return (
    <div className="bg-white rounded-xl text-center border-2 border-dashed border-gray-400">
      <p className="mt-10 m-1 text-5xl">🛍️</p>
      <p className="m-1 font-bold">{message}</p>
      <p className="mb-10 m-1 text-gray-500">Nothing matches this section. Check back soon!</p>
    </div>
  );
}
