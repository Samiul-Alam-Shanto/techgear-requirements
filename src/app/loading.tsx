export default function Loading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
      <span className="loading loading-spinner loading-lg text-primary" />

      <p className="text-sm text-base-content/60">Loading, please wait...</p>
    </div>
  );
}
