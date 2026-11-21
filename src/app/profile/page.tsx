"use client";

import { useState } from "react";

export default function Profile() {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
    county: "Nairobi",
    bio: "",
    interests: "",
    tribe: "",
  });

  const counties = ["Nairobi", "Mombasa", "Kisumu", "Kiambu", "Nakuru", "Uasin Gishu", "Machakos", "Other"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("kenyaNearDatesProfile", JSON.stringify(profile));
    alert("Profile saved locally! In production this would go to the database.");
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow">
      <h1 className="text-3xl font-bold mb-6 text-center">Create Your Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            className="w-full border rounded-lg p-3"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Age</label>
          <input
            type="number"
            className="w-full border rounded-lg p-3"
            value={profile.age}
            onChange={(e) => setProfile({ ...profile, age: e.target.value })}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">County</label>
          <select
            className="w-full border rounded-lg p-3"
            value={profile.county}
            onChange={(e) => setProfile({ ...profile, county: e.target.value })}
          >
            {counties.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium">Tribe (optional)</label>
          <input
            type="text"
            className="w-full border rounded-lg p-3"
            value={profile.tribe}
            onChange={(e) => setProfile({ ...profile, tribe: e.target.value })}
            placeholder="e.g. Kikuyu, Luo, Kalenjin..."
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Bio</label>
          <textarea
            className="w-full border rounded-lg p-3"
            rows={4}
            value={profile.bio}
            onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Interests (comma separated)</label>
          <input
            type="text"
            className="w-full border rounded-lg p-3"
            value={profile.interests}
            onChange={(e) => setProfile({ ...profile, interests: e.target.value })}
            placeholder="Hiking, Music, Food, Travel"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-kenyan-green text-white py-3 rounded-lg font-semibold hover:bg-green-800"
        >
          Save Profile
        </button>
      </form>
    </div>
  );
}