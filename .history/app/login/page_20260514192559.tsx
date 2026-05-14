"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

import toast from "react-hot-toast";

import { googleLogin } from "@/firebase/auth";

import {
  sendOTP,
  verifyOTP,
} from "@/firebase/phoneAuth";
import {
  doc,
  setDoc,
} from "firebase/firestore";

import { db } from "@/firebase/firestore";

export default function AuthPage() {

  const [isLogin, setIsLogin] = useState(true);
  const [showOtp, setShowOtp] = useState(false);

  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");

  const router = useRouter();

  // Send OTP
  const handleSendOtp = async () => {

    try {

      if (phone.length < 10) {
        toast.error("Enter valid phone number");
        return;
      }

      await sendOTP(phone);

      toast.success("OTP Sent Successfully");

      setShowOtp(true);

    } catch (error) {

      console.log(error);

      toast.error("Failed to send OTP");
    }
  };

  // Verify OTP
  const handleVerifyOtp = async () => {

  try {

    // VERIFY OTP

    const user =
      await verifyOTP(otp);

    // GET USER

    

    // STORE USER IN FIRESTORE

    await setDoc(
      doc(db, "users", user.uid),
      {
        uid: user.uid,
        phone: user.phoneNumber,
        createdAt: new Date(),
      },
      {
        merge: true,
      }
    );

    toast.success(
      "Login Successful 🚀"
    );

    router.push("/home");

  } catch (error) {

    console.log(error);

    toast.error("Invalid OTP");
  }
};

  // Google Login
  const handleGoogleLogin = async () => {

  try {

    const result =
      await googleLogin();

    const user =
      result.user;

    // STORE USER

    await setDoc(
      doc(db, "users", user.uid),
      {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        createdAt: new Date(),
      },
      {
        merge: true,
      }
    );

    toast.success(
      "Google Login Success 🚀"
    );

    router.push("/home");

  } catch (error) {

    console.log(error);

    toast.error(
      "Google Login Failed"
    );
  }
};

  return (
    <main className="min-h-screen bg-[#020617] flex flex-col lg:flex-row items-center justify-center p-6 gap-12 overflow-hidden relative">

      {/* Background Glow */}

      <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-purple-500/20 blur-3xl rounded-full"></div>

      {/* LEFT SIDE */}

      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="hidden lg:flex flex-col items-center gap-8 max-w-md text-center"
      >

        {/* Hover Image */}

        <motion.div
          whileHover={{
            scale: 1.05,
            rotate: 2,
          }}
          transition={{
            duration: 0.4,
          }}
          className="relative"
        >

          <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>

          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Students"
            className="relative w-[320px] h-[320px] object-cover rounded-[40px] border border-white/10 shadow-2xl"
          />

        </motion.div>

        {/* Branding */}

        <div className="space-y-4">

          <p className="uppercase tracking-[0.3em] text-cyan-400 text-xs">
            FUTURE OF LEARNING
          </p>

          <h1 className="text-5xl font-black leading-tight">

            Welcome to
            <br />

            <span className="gradient-text">
              Nexora AI
            </span>

          </h1>

          <p className="text-gray-400 text-lg leading-relaxed">

            Build future-ready skills with immersive
            AI-powered learning experiences,
            mentorship,
            and real-world projects.

          </p>

        </div>

      </motion.div>

      {/* RIGHT SIDE AUTH */}

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-md relative z-10"
      >

        <div className="rounded-[40px] border border-white/10 p-1 bg-white/5 backdrop-blur-3xl shadow-2xl">

          <div className="bg-[#0A0A0A]/90 rounded-[38px] p-8 md:p-10">

            {/* Toggle */}

            <div className="flex bg-white/5 rounded-full p-1 mb-8 border border-white/5">

              <button
                onClick={() => {
                  setIsLogin(true);
                  setShowOtp(false);
                }}
                className={`flex-1 py-3 rounded-full text-sm font-semibold transition-all ${
                  isLogin
                    ? "bg-white text-black"
                    : "text-gray-400"
                }`}
              >
                Login
              </button>

              <button
                onClick={() => {
                  setIsLogin(false);
                  setShowOtp(false);
                }}
                className={`flex-1 py-3 rounded-full text-sm font-semibold transition-all ${
                  !isLogin
                    ? "bg-white text-black"
                    : "text-gray-400"
                }`}
              >
                Register
              </button>

            </div>

            <AnimatePresence mode="wait">

              {!showOtp ? (

                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >

                  {!isLogin && (

                    <div className="space-y-2">

                      <label className="text-xs text-gray-500 uppercase tracking-widest">
                        Full Name
                      </label>

                      <input
                        type="text"
                        placeholder="Enter Your Name"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                      />

                    </div>
                  )}

                  {/* Phone */}

                  <div className="space-y-2">

                    <label className="text-xs text-gray-500 uppercase tracking-widest">
                      Phone Number
                    </label>

                    <div className="relative">

                      <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 text-sm border-r border-white/10 pr-3">
                        +91
                      </span>

                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) =>
                          setPhone(e.target.value)
                        }
                        placeholder="00000 00000"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-16 pr-5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 tracking-[0.1em]"
                      />

                    </div>
                  </div>

                  {/* OTP BUTTON */}

                  <button
                    onClick={handleSendOtp}
                    className="w-full py-4 rounded-2xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-all active:scale-95"
                  >
                    Request OTP
                  </button>

                  {/* Divider */}

                  <div className="relative py-2">

                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-white/10"></div>
                    </div>

                    <div className="relative flex justify-center text-xs uppercase tracking-widest">

                      <span className="bg-[#0A0A0A] px-4 text-gray-500">
                        OR
                      </span>

                    </div>
                  </div>

                  {/* Google */}

                  <button
                    onClick={handleGoogleLogin}
                    className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-semibold flex items-center justify-center gap-3 hover:bg-white/10 transition-all"
                  >

                    Continue with Google

                  </button>

                </motion.div>

              ) : (

                <motion.div
                  key="otp"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-8"
                >

                  <div className="text-center">

                    <h1 className="text-3xl font-bold">
                      Verify OTP
                    </h1>

                    <p className="text-gray-500 mt-2">
                      Enter the OTP sent to your phone
                    </p>

                  </div>

                  {/* OTP INPUT */}

                  <input
                    type="text"
                    maxLength={6}
                    value={otp}
                    onChange={(e) =>
                      setOtp(e.target.value)
                    }
                    className="w-full h-16 bg-white/5 border border-white/10 rounded-2xl text-center text-2xl tracking-[1em] font-bold text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  />

                  {/* VERIFY */}

                  <button
                    onClick={handleVerifyOtp}
                    className="w-full py-4 rounded-2xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-all"
                  >
                    Verify & Access
                  </button>

                  <button
                    onClick={() =>
                      setShowOtp(false)
                    }
                    className="w-full text-xs text-gray-500 uppercase tracking-widest"
                  >
                    Change Number
                  </button>

                </motion.div>

              )}

            </AnimatePresence>

          </div>

        </div>

      </motion.div>

      {/* Firebase Recaptcha */}

      <div id="recaptcha-container"></div>

    </main>
  );
}