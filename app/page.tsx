"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  BookOpen,
  Palette,
  Calendar,
  Video,
  CheckCircle2,
  Award,
  HeartHandshake,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Tv
} from "lucide-react";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<"bible" | "art">("bible");

  return (
    <div className="min-h-screen bg-sky-50/50 text-slate-800 font-sans overflow-x-hidden">

      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-br from-slate-900 via-sky-900 to-sky-600 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden rounded-b-[2.5rem] shadow-xl">
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-8 text-amber-400 opacity-30 pointer-events-none"
        >
          <Sparkles size={64} />
        </motion.div>

        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 right-10 text-orange-400 opacity-30 pointer-events-none"
        >
          <Palette size={80} />
        </motion.div>

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-400/50 text-amber-300 px-5 py-2 rounded-full text-sm font-extrabold tracking-wider uppercase backdrop-blur-md"
          >
            ★ RAISE · REFORM · TRANSFORM
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl font-black tracking-tight leading-tight"
          >
            THE MANDATE GLOBAL
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300 text-2xl sm:text-4xl mt-2 font-bold">
              Equipped to Transform
            </span>
          </motion.h1>

          <p className="max-w-2xl mx-auto text-slate-200 text-base sm:text-lg leading-relaxed font-medium">
            Empowering children and teens (Ages 8–18) through free online Bible teaching, animated Superbook stories, and creative drawing classes!
          </p>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="pt-4 flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              href="/register"
              className="bg-orange-500 hover:bg-orange-600 text-white font-black text-lg px-8 py-4 rounded-2xl shadow-lg hover:shadow-orange-500/30 transition-all flex items-center justify-center gap-2 group"
            >
              <span>Register Free Today</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="bg-white/10 hover:bg-white/20 text-white font-bold text-lg px-8 py-4 rounded-2xl border border-white/20 transition-all flex items-center justify-center"
            >
              Learn Our Vision
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. SCRIPTURE BANNER */}
      <section className="bg-gradient-to-r from-orange-500 to-amber-500 text-white py-6 px-4 shadow-md">
        <div className="max-w-4xl mx-auto text-center space-y-1">
          <span className="text-xs font-black uppercase tracking-widest text-orange-100">Discipleship Theme 2027</span>
          <h2 className="text-2xl sm:text-3xl font-black">"BE NOT CONFORMED"</h2>
          <p className="text-xs sm:text-sm italic font-medium opacity-90 max-w-2xl mx-auto">
            "And be not conformed to this world: but be ye transformed by the renewing of your mind..." — Romans 12:2
          </p>
        </div>
      </section>

      {/* 3. CONVENER SPOTLIGHT */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-sky-100 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/40 rounded-full blur-2xl -z-0"></div>

          <div className="relative flex-shrink-0">
            <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-sky-600 to-amber-400 p-1.5 shadow-md">
              <div className="w-full h-full rounded-full bg-slate-800 flex flex-col items-center justify-center text-white p-2 text-center">
                <span className="text-amber-400 font-extrabold text-xs uppercase tracking-widest">Convener</span>
                <span className="font-bold text-sm mt-1">Ezekiel Humphery Aaron</span>
              </div>
            </div>
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-900 font-extrabold text-[10px] uppercase px-3 py-1 rounded-full shadow-sm">
              Ministry Leader
            </span>
          </div>

          <div className="space-y-3 text-center md:text-left z-10">
            <span className="text-sky-600 font-bold uppercase tracking-wider text-xs">Our Founder & Convener</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Bro Ezekiel Humphery Aaron</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Dedicated to raising, reforming, and transforming youths into God's perfect will. Through digital technology and physical viewing centers, THE MANDATE GLOBAL provides creative space for young minds to grow spiritually and artistic skills to flourish.
            </p>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE DISCIPLESHIP TRACKS */}
      <section className="py-12 px-4 max-w-5xl mx-auto">
        <div className="text-center space-y-2 mb-8">
          <span className="text-orange-500 font-bold text-xs uppercase tracking-widest">Interactive Learning</span>
          <h2 className="text-3xl font-black text-slate-900">What Kids & Teens Will Experience</h2>
          <p className="text-slate-600 text-sm">Select a track below to see what kids will learn</p>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab("bible")}
            className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all flex items-center gap-2 ${activeTab === "bible"
                ? "bg-sky-600 text-white shadow-lg shadow-sky-500/30 scale-105"
                : "bg-white text-slate-600 hover:bg-sky-50 border border-slate-200"
              }`}
          >
            <Tv size={18} /> Superbook Bible Club
          </button>

          <button
            onClick={() => setActiveTab("art")}
            className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all flex items-center gap-2 ${activeTab === "art"
                ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30 scale-105"
                : "bg-white text-slate-600 hover:bg-orange-50 border border-slate-200"
              }`}
          >
            <Palette size={18} /> Drawing & Art Studio
          </button>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "bible" ? (
            <motion.div
              key="bible"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-white rounded-3xl p-8 border border-sky-100 shadow-md grid md:grid-cols-2 gap-6 items-center"
            >
              <div className="space-y-4">
                <div className="inline-block bg-sky-100 text-sky-700 text-xs font-bold px-3 py-1 rounded-full">
                  In Partnership with Superbook
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Animated Bible Adventures</h3>
                <ul className="space-y-2 text-sm text-slate-600 font-medium">
                  <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-500 w-4 h-4" /> Animated Bible story screening</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-500 w-4 h-4" /> Activity sheets & coloring pages</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-500 w-4 h-4" /> Guided interactive discussions</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-sky-500 to-indigo-600 text-white p-6 rounded-2xl text-center space-y-2">
                <BookOpen className="w-12 h-12 mx-auto text-amber-300" />
                <h4 className="font-bold text-lg">Goal: Spiritual Foundation</h4>
                <p className="text-xs text-sky-100">Discipling 200+ kids with uncompromised Bible truths in an engaging format.</p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="art"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-white rounded-3xl p-8 border border-orange-100 shadow-md grid md:grid-cols-2 gap-6 items-center"
            >
              <div className="space-y-4">
                <div className="inline-block bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full">
                  Creative Development
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Drawing & Art Class</h3>
                <ul className="space-y-2 text-sm text-slate-600 font-medium">
                  <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-500 w-4 h-4" /> Step-by-step cartoon & sketch lessons</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-500 w-4 h-4" /> Creative expression of godly values</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-500 w-4 h-4" /> Student artwork showcases</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-amber-500 text-white p-6 rounded-2xl text-center space-y-2">
                <Palette className="w-12 h-12 mx-auto text-sky-200" />
                <h4 className="font-bold text-lg">Goal: Creative Skills</h4>
                <p className="text-xs text-orange-100">Unlocking creative artistic talents for godly influence.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* 5. EVENT OVERVIEW CARD */}
      <section className="py-12 px-4 max-w-5xl mx-auto">
        <div className="bg-gradient-to-r from-slate-900 to-sky-950 text-white rounded-3xl p-8 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-6">
            <div>
              <span className="text-amber-400 font-bold text-xs uppercase tracking-wider">Next Major Program</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold mt-1">THE MANDATE GLOBAL KIDS & TEENS DISCIPLESHIP CLUB 2027</h3>
            </div>
            <span className="bg-emerald-500 text-white font-extrabold text-xs px-4 py-2 rounded-full uppercase tracking-wider">
              100% FREE
            </span>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm">
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <Calendar className="text-amber-400 mb-2 w-5 h-5" />
              <div className="font-bold">Date & Duration</div>
              <div className="text-slate-300 text-xs">2nd Week Jan 2027 (4 Months)</div>
            </div>

            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <Video className="text-sky-400 mb-2 w-5 h-5" />
              <div className="font-bold">Platform</div>
              <div className="text-slate-300 text-xs">Google Meet + Kaduna Center</div>
            </div>

            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <Award className="text-orange-400 mb-2 w-5 h-5" />
              <div className="font-bold">Target Audience</div>
              <div className="text-slate-300 text-xs">200+ Kids/Teens (Ages 8-18)</div>
            </div>

            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <HeartHandshake className="text-emerald-400 mb-2 w-5 h-5" />
              <div className="font-bold">Partners</div>
              <div className="text-slate-300 text-xs">Superbook & MALAK</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONTACT BANNER */}
      <section className="bg-white py-12 border-t border-slate-200 mt-12">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center font-bold">
              <Phone size={20} />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-bold uppercase">Phone / WhatsApp</div>
              <a href="tel:+2349044620259" className="font-bold text-slate-800 hover:text-sky-600">+234 904 462 0259</a>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center font-bold">
              <Mail size={20} />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-bold uppercase">Official Email</div>
              <a href="mailto:Onemandateglobal@gmail.com" className="font-bold text-slate-800 hover:text-orange-600 text-sm">Onemandateglobal@gmail.com</a>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center font-bold">
              <MapPin size={20} />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-bold uppercase">Location</div>
              <div className="font-bold text-slate-800 text-sm">Kaduna, Nigeria</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}