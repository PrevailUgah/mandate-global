"use client";

import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-sky-50/50 py-12 px-4 sm:px-6 lg:px-8 text-slate-800">
            <div className="max-w-4xl mx-auto space-y-10">

                <div className="text-center space-y-2">
                    <span className="bg-sky-100 text-sky-800 border border-sky-300 px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider inline-block">
                        ★ Reach Out To Us
                    </span>
                    <h1 className="text-3xl font-black text-slate-900">Contact The Mandate Global</h1>
                    <p className="text-slate-600 text-sm">Have questions about viewing centers, partnerships, or registration?</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <a href="tel:+2349044620259" className="bg-white p-6 rounded-3xl border border-sky-100 shadow-md text-center hover:border-sky-500 transition block">
                        <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                            <Phone size={22} />
                        </div>
                        <h3 className="font-bold text-slate-900">Phone & WhatsApp</h3>
                        <p className="text-xs text-slate-600 mt-1 font-semibold">+234 904 462 0259</p>
                    </a>

                    <a href="mailto:Onemandateglobal@gmail.com" className="bg-white p-6 rounded-3xl border border-orange-100 shadow-md text-center hover:border-orange-500 transition block">
                        <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                            <Mail size={22} />
                        </div>
                        <h3 className="font-bold text-slate-900">Email Address</h3>
                        <p className="text-xs text-slate-600 mt-1 font-semibold">Onemandateglobal@gmail.com</p>
                    </a>

                    <div className="bg-white p-6 rounded-3xl border border-emerald-100 shadow-md text-center">
                        <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                            <MapPin size={22} />
                        </div>
                        <h3 className="font-bold text-slate-900">Location</h3>
                        <p className="text-xs text-slate-600 mt-1 font-semibold">Kaduna, Nigeria</p>
                    </div>
                </div>

                <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md space-y-4">
                    <h2 className="text-xl font-bold text-slate-900">Send Us a Direct Message</h2>
                    <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                            <input required type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-sky-500 outline-none" />
                            <input required type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-sky-500 outline-none" />
                        </div>
                        <textarea required rows={4} placeholder="Your message or enquiry..." className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-sky-500 outline-none"></textarea>
                        <button type="submit" className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-3.5 px-6 rounded-2xl shadow-md transition inline-flex items-center gap-2 text-sm">
                            <Send size={16} /> Send Message
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
}