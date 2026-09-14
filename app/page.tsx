"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Video, Palette, BookOpen, CheckCircle, MapPin, Phone, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-mandate-dark via-slate-900 to-mandate-blue text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-mandate-gold/20 border border-mandate-gold text-mandate-gold px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide mb-6"
          >
            ★ RAISE · REFORM · TRANSFORM
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6"
          >
            THE MANDATE GLOBAL
            <span className="block text-mandate-orange text-2xl sm:text-4xl mt-2 font-medium">
              Equipped to Transform
            </span>
          </motion.h1>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-200 mb-8 leading-relaxed">
            Free online Bible & Drawing classes discipling kids and teens (Ages 8–18) through creative art, godly character, and biblical truths.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/register"
              className="bg-mandate-orange hover:bg-orange-600 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              Register Kids Now — 100% Free
            </Link>
            <Link
              href="/about"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold text-lg px-8 py-4 rounded-xl border border-white/20 transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* SCRIPTURE & THEME BANNER */}
      <section className="bg-mandate-orange text-white py-8 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs uppercase font-bold tracking-widest text-orange-200">Current Theme</span>
          <h2 className="text-3xl font-black mt-1">"BE NOT CONFORMED"</h2>
          <p className="text-sm sm:text-base italic mt-2 opacity-95">
            "And be not conformed to this world: but be ye transformed by the renewing of your mind..." — Romans 12:2
          </p>
        </div>
      </section>

      {/* CLASS SCHEDULE & FEATURES */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-mandate-dark">Class Details & Schedule</h2>
          <p className="text-slate-600 mt-2">Interactive hybrid learning for kids & teens</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 hover:shadow-lg transition">
            <div className="w-12 h-12 bg-mandate-blue/10 text-mandate-blue rounded-xl flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Duration & Platform</h3>
            <p className="text-slate-600 text-sm">4 Months Discipleship Club</p>
            <p className="text-slate-600 text-sm mt-1">Google Meet + Physical Viewing Centers in Kaduna</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 hover:shadow-lg transition">
            <div className="w-12 h-12 bg-mandate-orange/10 text-mandate-orange rounded-xl flex items-center justify-center mb-4">
              <Palette className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Target Audience</h3>
            <p className="text-slate-600 text-sm">200+ Kids & Teens</p>
            <p className="text-slate-600 text-sm mt-1">Ages 8 to 18 years old</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 hover:shadow-lg transition">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">100% Free</h3>
            <p className="text-slate-600 text-sm">Free registration, activity sheets, and live interactive classes.</p>
          </div>
        </div>
      </section>

      {/* PARTNERS SECTION */}
      <section className="bg-slate-100 py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-6">Partnering Organizations</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 font-bold text-xl text-slate-700">
            <span className="bg-white px-6 py-3 rounded-xl shadow-sm border">SUPERBOOK NIGERIA</span>
            <span className="bg-white px-6 py-3 rounded-xl shadow-sm border">MALAK</span>
          </div>
        </div>
      </section>
    </div>
  );
}