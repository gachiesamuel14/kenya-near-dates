"use client";

import { useState, useEffect } from "react";
import { mockUsers, User, calculateDistance } from "@/lib/mockUsers";

export default function Discover() {
  const [users, setUsers] = useState<User[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [status, setStatus] = useState("Requesting location...");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const loc = { lat: pos.coords.latitude, lng: pos.coords.longitude };
          setLocation(loc);
          setStatus(`Location found! Showing nearby matches.`);
          const withDistance = mockUsers.map((u) => ({
            ...u,
            distance: calculateDistance(loc.lat, loc.lng, u.lat, u.lng),
          })).sort((a, b) => (a.distance || 0) - (b.distance || 0));
          setUsers(withDistance);
        },
        () => {
          // Fallback to Nairobi
          const nairobi = { lat: -1.286389, lng: 36.817223 };
          setLocation(nairobi);
          setStatus("Location permission denied. Using Nairobi as default.");
          const withDistance = mockUsers.map((u) => ({
            ...u,
            distance: calculateDistance(nairobi.lat, nairobi.lng, u.lat, u.lng),
          }));
          setUsers(withDistance);
        }
      );
    }
  }, []);

  const current = users[currentIndex];

  const handleLike = () => {
    alert(`You liked ${current?.name}! In a real app this would create a match request.`);
    setCurrentIndex((i) => i + 1);
  };

  const handlePass = () => {
    setCurrentIndex((i) => i + 1);
  };

  if (!current) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold mb-4">No more people nearby</h2>
        <p>Check back later or expand your filters!</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto">
      <p className="text-center text-sm text-gray-600 mb-4">{status}</p>
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <img
          src={current.photo}
          alt={current.name}
          className="w-full h-96 object-cover"
        />
        <div className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold">{current.name}, {current.age}</h2>
              <p className="text-gray-600">{current.town}, {current.county}</p>
              {current.distance !== undefined && (
                <p className="text-sm text-kenyan-green font-semibold">{current.distance} km away</p>
              )}
            </div>
            {current.tribe && (
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">{current.tribe}</span>
            )}
          </div>
          <p className="mt-4 text-gray-700">{current.bio}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {current.interests.map((int) => (
              <span key={int} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                {int}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-around p-6 border-t">
          <button
            onClick={handlePass}
            className="w-16 h-16 rounded-full bg-gray-200 text-2xl hover:bg-gray-300"
          >
            ✕
          </button>
          <button
            onClick={handleLike}
            className="w-16 h-16 rounded-full bg-kenyan-green text-white text-2xl hover:bg-green-800"
          >
            ♥
          </button>
        </div>
      </div>
    </div>
  );
}