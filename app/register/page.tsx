"use client";
import { useState } from "react";
import confetti from "canvas-confetti";
import { CheckCircle, Send, MessageCircle } from "lucide-react";

export default function Register() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        parentName: "",
        email: "",
        phone: "",
        childName: "",
        age: "8-12",
        track: "Both Bible & Drawing",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        setSubmitted(true);
    };

    return (
        <div className="py-12 px-4 max-w-2xl mx-auto">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-mandate-dark">Free Registration</h1>
                <p className="text-slate-600 mt-2">MANDATE GLOBAL Kids & Teens Discipleship Club</p>
            </div>

            {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-2xl text-center space-y-6">
                    <CheckCircle className="w-16 h-16 text-emerald-600 mx-auto" />
                    <h2 className="text-2xl font-bold text-emerald-900">Registration Successful!</h2>
                    <p className="text-emerald-800">
                        Thank you, <strong>{formData.parentName}</strong>. We are excited to have <strong>{formData.childName}</strong> join us!
                    </p>

                    <div className="flex flex-col gap-3 pt-4">
                        <a
                            href={`https://wa.me/2349044620259?text=Hello,%20I%20have%20registered%20${encodeURIComponent(formData.childName)}%20for%20The%20Mandate%20Global%20Classes.`}
                            target="_blank"
                            rel="noreferrer"
                            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2"
                        >
                            <MessageCircle className="w-5 h-5" /> Confirm via WhatsApp (+2349044620259)
                        </a>
                    </div>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1">Parent / Guardian Name</label>
                        <input
                            required
                            type="text"
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-mandate-blue outline-none"
                            placeholder="Full Name"
                            onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Email Address</label>
                            <input
                                required
                                type="email"
                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-mandate-blue outline-none"
                                placeholder="name@gmail.com"
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">WhatsApp Phone Number</label>
                            <input
                                required
                                type="tel"
                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-mandate-blue outline-none"
                                placeholder="+234..."
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Child's Name</label>
                            <input
                                required
                                type="text"
                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-mandate-blue outline-none"
                                placeholder="Child's Full Name"
                                onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Age Bracket</label>
                            <select
                                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-mandate-blue outline-none bg-white"
                                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                            >
                                <option value="8-12">8 – 12 years</option>
                                <option value="13-18">13 – 18 years</option>
                            </select>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-mandate-orange hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-md transition flex items-center justify-center gap-2"
                    >
                        <Send className="w-5 h-5" /> Submit Registration
                    </button>
                </form>
            )}
        </div>
    );
}