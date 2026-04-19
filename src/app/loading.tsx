export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#050505] z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-2 border-primary-container border-t-transparent rounded-full animate-spin"></div>
        <div className="font-label text-sm text-primary-container tracking-widest animate-pulse">
          INITIALIZING...
        </div>
      </div>
    </div>
  );
}
