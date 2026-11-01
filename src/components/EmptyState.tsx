export function EmptyState({ message }: { message: React.ReactNode }) {
  return (
    <div className="bg-white rounded-xl text-center border-2 border-dashed border-gray-400">
      {message}
    </div>
  );
}
