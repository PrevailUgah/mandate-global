"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-sky-50/50 py-12 px-4 sm:px-6 lg:px-8 text-slate-800">
            <div className="max-w-5xl mx-auto space-y-12">

                <div className="text-center space-y-3">
                    <span className="bg-amber-100 text-amber-800 border border-amber-300 px-4 py-1.5 rounded-full text-xs font-black tracking-wider uppercase inline-block">
                        ★ About The Ministry
                    </span>
                    <h1 className="text-3xl sm:text-5xl font-black text-slate-900">THE MANDATE GLOBAL</h1>
                    <p className="text-slate-600 text-base max-w-2xl mx-auto font-medium">
                        A non-profit Christian ministry discipling children and teens through digital online learning and physical viewing centers.
                    </p>
                </div>

                <div className="grid sm:grid-cols-3 gap-6">
                    <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-3xl border border-sky-100 shadow-md space-y-2">
                        <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center font-black text-xl">1</div>
                        <h3 className="text-xl font-bold text-slate-900">RAISE</h3>
                        <p className="text-slate-600 text-sm">Building firm biblical foundations in the hearts of children through Superbook animations & scripture.</p>
                    </motion.div>

                    <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-3xl border border-orange-100 shadow-md space-y-2">
                        <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center font-black text-xl">2</div>
                        <h3 className="text-xl font-bold text-slate-900">REFORM</h3>
                        <p className="text-slate-600 text-sm">Developing creative skills, artistic talents, and godly character that stand out in society.</p>
                    </motion.div>

                    <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-3xl border border-amber-100 shadow-md space-y-2">
                        <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center font-black text-xl">3</div>
                        <h3 className="text-xl font-bold text-slate-900">TRANSFORM</h3>
                        <p className="text-slate-600 text-sm">Reaching unchurched kids and empowering 200+ youths into God's perfect will for their lives.</p>
                    </motion.div>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 grid md:grid-cols-3 gap-8 items-center">
                    <div className="flex flex-col items-center text-center">
                        <div className="w-36 h-36 rounded-full bg-gradient-to-tr from-sky-600 to-amber-400 p-1.5 shadow-md mb-3">
                            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-amber-300 font-black text-2xl">
                                EHA
                            </div>
                        </div>
                        <h3 className="font-extrabold text-slate-900 text-lg">Ezekiel Humphery Aaron</h3>
                        <span className="text-xs font-bold text-sky-600 uppercase">Convener & Leader</span>
                    </div>

                    <div className="md:col-span-2 space-y-4 text-slate-600 text-sm leading-relaxed">
                        <h2 className="text-2xl font-black text-slate-900">A Vision for the Next Generation</h2>
                        <p>
                            Under the leadership of Convener Ezekiel Humphery Aaron, <strong>THE MANDATE GLOBAL</strong> bridges faith and creative art. By partnering with visionary platforms like Superbook Nigeria and MALAK, we provide children and teens with safe, spiritually uplifting environment online and offline.
                        </p>
                        <div className="pt-2">
                            <Link href="/register" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-2xl transition shadow-md">
                                Register a Child Now <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}