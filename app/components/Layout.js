'use client';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x">
      {children}
    </div>
  );
}