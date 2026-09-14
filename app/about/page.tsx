import Image from "next/image";
import { BookOpen, Target, Heart, Award } from "lucide-react";

export default function About() {
    return (
        <div className="py-16 px-4 max-w-5xl mx-auto space-y-16">
            {/* MISSION & VISION */}
            <div className="text-center">
                <span className="text-mandate-blue font-bold uppercase tracking-widest text-sm">About Us</span>
                <h1 className="text-4xl font-extrabold text-mandate-dark mt-2">THE MANDATE GLOBAL</h1>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-4">
                    A non-profit Christian ministry focused on discipling children and teens through physical and online platforms.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-mandate-light p-8 rounded-2xl border border-mandate-blue/20">
                    <h2 className="text-2xl font-bold text-mandate-blue mb-3">Our Mission</h2>
                    <p className="text-slate-700 leading-relaxed">
                        To raise, reform, and transform youths into God's perfect will for their lives through biblical teaching, creative art, and godly mentorship.
                    </p>
                </div>

                <div className="bg-amber-50 p-8 rounded-2xl border border-mandate-gold">
                    <h2 className="text-2xl font-bold text-amber-800 mb-3">Core Pillars</h2>
                    <ul className="space-y-2 text-slate-700 font-medium">
                        <li>✔ <strong>RAISE:</strong> Building strong biblical foundations.</li>
                        <li>✔ <strong>REFORM:</strong> Cultivating creative skills and character.</li>
                        <li>✔ <strong>TRANSFORM:</strong> Reaching unchurched kids online & offline.</li>
                    </ul>
                </div>
            </div>

            {/* CONVENER PROFILE */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-200 flex flex-col md:flex-row gap-8 items-center">
                <div className="w-40 h-40 bg-slate-200 rounded-full flex-shrink-0 flex items-center justify-center text-slate-500 font-bold border-4 border-mandate-gold">
                    Bro Ezekiel
                </div>
                <div>
                    <span className="text-xs font-bold text-mandate-orange uppercase tracking-wider">Convener</span>
                    <h3 className="text-2xl font-bold text-mandate-dark mt-1">Ezekiel Humphery Aaron</h3>
                    <p className="text-slate-600 mt-2 leading-relaxed">
                        Passionate about discipling the next generation through digital innovation, art, and the uncompromised Word of God. Leading the vision to raise 200+ children equipped to transform their communities.
                    </p>
                </div>
            </div>
        </div>
    );
}