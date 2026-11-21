import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center py-16">
      <h1 className="text-5xl font-bold text-kenyan-green mb-4">
        Find Love Near You in Kenya
      </h1>
      <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
        Location-based matchmaking. Connect with people in your county — Nairobi, Mombasa, Kisumu, Kiambu and beyond.
      </p>
      <div className="flex justify-center gap-4 mb-12">
        <Link
          href="/discover"
          className="bg-kenyan-green text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-800 transition"
        >
          Start Discovering
        </Link>
        <Link
          href="/profile"
          className="border-2 border-kenyan-green text-kenyan-green px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-50 transition"
        >
          Create Profile
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2">📍 Location Based</h3>
          <p>Find people nearby using GPS or by county/town.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2">🇰🇪 Made for Kenya</h3>
          <p>Filters for tribe, interests, lifestyle. M-Pesa ready.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-2">💬 Match & Chat</h3>
          <p>Swipe, like, match, and start conversations.</p>
        </div>
      </div>
    </div>
  );
}