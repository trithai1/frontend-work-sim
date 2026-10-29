export function EmptyState({ message }: { message: React.ReactNode }) {
  return (
    <div>
      <p>No products here yet</p>
      {message}
    </div>
  );
}
