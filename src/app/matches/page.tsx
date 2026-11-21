export default function Matches() {
  return (
    <div className="text-center py-20">
      <h1 className="text-3xl font-bold mb-4">Your Matches</h1>
      <p className="text-gray-600 mb-8">
        Matches will appear here once you like people who like you back.
      </p>
      <div className="bg-white p-8 rounded-lg shadow max-w-md mx-auto">
        <p className="text-lg">No matches yet.</p>
        <p className="text-sm text-gray-500 mt-2">Start discovering nearby people!</p>
        <a
          href="/discover"
          className="inline-block mt-4 bg-kenyan-green text-white px-6 py-2 rounded-full"
        >
          Go Discover
        </a>
      </div>
    </div>
  );
}