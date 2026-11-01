export function EmptyState({ message }: { message: React.ReactNode }) {
  return (
    <div className="bg-label-bg rounded-xl text-center border-2 border-dashed border-empty-dash">
      {message}
    </div>
  );
}
