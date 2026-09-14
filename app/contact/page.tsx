import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";

export default function Contact() {
    return (
        <div className="py-16 px-4 max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold text-mandate-dark">Get in Touch</h1>
                <p className="text-slate-600 mt-2">Reach out for enquiries, partnerships, or viewing center locations.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center">
                <a href="tel:+2349044620259" className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-mandate-blue transition">
                    <Phone className="w-8 h-8 text-mandate-blue mx-auto mb-3" />
                    <h3 className="font-bold text-slate-800">Phone</h3>
                    <p className="text-sm text-slate-600 mt-1">+234 904 462 0259</p>
                </a>

                <a href="mailto:Onemandateglobal@gmail.com" className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-mandate-orange transition">
                    <Mail className="w-8 h-8 text-mandate-orange mx-auto mb-3" />
                    <h3 className="font-bold text-slate-800">Email</h3>
                    <p className="text-sm text-slate-600 mt-1">Onemandateglobal@gmail.com</p>
                </a>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <MapPin className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                    <h3 className="font-bold text-slate-800">Location</h3>
                    <p className="text-sm text-slate-600 mt-1">Kaduna, Nigeria</p>
                </div>
            </div>
        </div>
    );
}