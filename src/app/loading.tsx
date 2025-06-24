export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-md p-8 max-w-md mx-auto text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Loading Plant Doctor Guide</h2>
        <p className="text-gray-600 mt-4 animate-pulse">
          Preparing your personalised plant care recommendations...
        </p>
      </div>
    </div>
  );
} 