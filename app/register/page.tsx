"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { CheckCircle2, Send, MessageCircle } from "lucide-react";

export default function RegisterPage() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        parentName: "",
        email: "",
        phone: "",
        childName: "",
        age: "8-12",
        attendanceType: "Google Meet (Online)",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-sky-50/50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl mx-auto">

                <div className="text-center space-y-2 mb-8">
                    <span className="bg-emerald-100 text-emerald-800 border border-emerald-300 px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider inline-block">
                        ★ 100% Free Registration
                    </span>
                    <h1 className="text-3xl font-black text-slate-900">Kids & Teens Discipleship Club</h1>
                    <p className="text-slate-600 text-sm">Theme: "BE NOT CONFORMED" (Romans 12:2)</p>
                </div>

                {submitted ? (
                    <div className="bg-white rounded-3xl p-8 border border-emerald-200 shadow-xl text-center space-y-6">
                        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                            <CheckCircle2 size={48} />
                        </div>

                        <div className="space-y-2">
                            <h2 className="text-2xl font-black text-slate-900">Registration Complete!</h2>
                            <p className="text-slate-600 text-sm">
                                Thank you, <strong>{formData.parentName}</strong>! We are excited to welcome <strong>{formData.childName}</strong> to The Mandate Global.
                            </p>
                        </div>

                        <div className="bg-sky-50 p-4 rounded-2xl text-left text-xs space-y-1 border border-sky-100 text-slate-700">
                            <p><strong>Attendance:</strong> {formData.attendanceType}</p>
                            <p><strong>Age Group:</strong> {formData.age} years</p>
                            <p><strong>Duration:</strong> 4 Months starting 2nd Week of Jan 2027</p>
                        </div>

                        <a
                            href={`https://wa.me/2349044620259?text=Hello%20Bro%20Ezekiel,%20I%20have%20registered%20${encodeURIComponent(formData.childName)}%20for%20The%20Mandate%20Global%20Discipleship%20Club.`}
                            target="_blank"
                            rel="noreferrer"
                            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 shadow-lg transition"
                        >
                            <MessageCircle size={20} /> Confirm Registration on WhatsApp
                        </a>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-xl border border-sky-100 space-y-5">
                        <div>
                            <label className="block text-xs font-extrabold text-slate-700 uppercase mb-1">Parent / Guardian Name</label>
                            <input
                                required
                                type="text"
                                placeholder="e.g. Mary Aaron"
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 outline-none text-sm"
                                onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                            />
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-extrabold text-slate-700 uppercase mb-1">Email Address</label>
                                <input
                                    required
                                    type="email"
                                    placeholder="name@email.com"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 outline-none text-sm"
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-extrabold text-slate-700 uppercase mb-1">WhatsApp Phone</label>
                                <input
                                    required
                                    type="tel"
                                    placeholder="+2349044620259"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 outline-none text-sm"
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-extrabold text-slate-700 uppercase mb-1">Child's Name</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="Child's Full Name"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 outline-none text-sm"
                                    onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-extrabold text-slate-700 uppercase mb-1">Age Bracket</label>
                                <select
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 outline-none text-sm bg-white"
                                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                                >
                                    <option value="8-12">8 – 12 Years Old</option>
                                    <option value="13-18">13 – 18 Years Old</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-extrabold text-slate-700 uppercase mb-1">Preferred Platform</label>
                            <select
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 outline-none text-sm bg-white"
                                onChange={(e) => setFormData({ ...formData, attendanceType: e.target.value })}
                            >
                                <option value="Google Meet (Online)">Google Meet (Online)</option>
                                <option value="Physical Viewing Center (Kaduna)">Physical Viewing Center (Kaduna)</option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-4 rounded-2xl shadow-lg transition flex items-center justify-center gap-2"
                        >
                            <Send size={18} /> Submit Free Registration
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}