"use client";

import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import { db } from "@/firebase/firestore";

import { auth } from "@/firebase/config";

import {
  useEffect,
  useState,
} from "react";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function MyCoursesPage() {

  const [courses, setCourses] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const fetchCourses =
      async () => {

        try {

          const user =
            auth.currentUser;

          if (!user) return;

          const q = query(
            collection(
              db,
              "enrollments"
            ),
            where(
              "uid",
              "==",
              user.uid
            )
          );

          const snapshot =
            await getDocs(q);

          const enrolled =
            snapshot.docs.map(
              (doc) => ({
                id: doc.id,
                ...doc.data(),
              })
            );

          setCourses(enrolled);

        } catch (error) {

          console.log(error);

        } finally {

          setLoading(false);
        }
      };

    fetchCourses();

  }, []);

  return (

    <main className="min-h-screen bg-black text-white p-8 md:p-14">
    <Navbar />
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <div className="mb-14">

          <p className="text-cyan-400 uppercase tracking-[0.2em] text-sm font-bold">
            Student Learning Space
          </p>

          <h1 className="text-6xl font-black mt-4">
            My Courses
          </h1>

          <p className="text-gray-500 mt-4 text-lg">
            Access your enrolled programs and continue learning.
          </p>

        </div>

        {/* LOADING */}

        {loading && (

          <div className="text-gray-400 text-xl">
            Loading courses...
          </div>

        )}

        {/* EMPTY */}

        {!loading &&
          courses.length === 0 && (

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-14 text-center">

            <h2 className="text-3xl font-black">
              No Courses Yet
            </h2>

            <p className="text-gray-500 mt-4">
              Purchase a course to begin learning.
            </p>

          </div>

        )}

        {/* COURSES */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {courses.map((course, i) => (

            <motion.div
              key={course.id}
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: i * 0.1,
              }}
              className="rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-8 hover:border-blue-500/20 transition-all"
            >

              <div className="w-16 h-16 rounded-[1.5rem] bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-3xl">

                🚀

              </div>

              <h2 className="text-3xl font-black mt-8 leading-tight">

                {course.courseTitle}

              </h2>

              <div className="mt-8">

                <div className="flex justify-between text-sm mb-3">

                  <span className="text-gray-400">
                    Progress
                  </span>

                  <span className="text-cyan-400 font-bold">
                    68%
                  </span>

                </div>

                <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">

                  <div className="w-[68%] h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full" />

                </div>

              </div>

              <button className="w-full mt-8 py-4 rounded-[1.5rem] bg-blue-600 hover:bg-blue-500 transition-all font-bold text-lg">

                Continue Learning

              </button>

            </motion.div>

          ))}

        </div>

      </div>

    </main>
  );
}