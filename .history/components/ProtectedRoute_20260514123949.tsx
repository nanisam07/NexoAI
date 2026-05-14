"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

import { useAuth } from "@/context/AuthContext";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {

  const {
    user,
    loading,
  } = useAuth();

  const router = useRouter();

  useEffect(() => {

    // WAIT until Firebase finishes checking auth

    if (loading) return;

    // If no user AFTER loading

    if (!user) {

      router.replace("/login");
    }

  }, [user, loading, router]);

  // Fullscreen loader

  if (loading) {

    return (
      <div className="min-h-screen bg-[#020617] flex items-center justify-center">

        <div className="space-y-6 text-center">

          <div className="w-16 h-16 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin mx-auto"></div>

          <p className="text-gray-400 tracking-widest uppercase text-sm">
            Authenticating...
          </p>

        </div>

      </div>
    );
  }

  // Prevent flashing

  if (!user) return null;

  return <>{children}</>;
}