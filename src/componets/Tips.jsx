
// import React from 'react';

// const Tips = () => {
//     return (
//         <div>
//             <div className="bg-green-50 p-8 rounded-2xl border border-green-100">
//                     <h2 className="text-2xl font-bold text-gray-800 mb-6">Essential Qurbani Tips</h2>
//                     <ul className="space-y-4 text-gray-700">
//                         <li className="flex items-start">
//                             <span className="text-green-500 mr-2">✔</span>
//                             Check for active movement and bright eyes.
//                         </li>
//                         <li className="flex items-start">
//                             <span className="text-green-500 mr-2">✔</span>
//                             Verify age by checking teeth (2 for cattle).
//                         </li>
//                         <li className="flex items-start">
//                             <span className="text-green-500 mr-2">✔</span>
//                             Ensure the animal is free from visible injuries.
//                         </li>
//                         <li className="flex items-start">
//                             <span className="text-green-500 mr-2">✔</span>
//                             Keep the environment clean after sacrifice.
//                         </li>
//                     </ul>
//                 </div>
            
//         </div>
//     );
// };

// export default Tips;
import React from 'react';
import { ShieldCheck, Stethoscope, Trash2, Milestone } from 'lucide-react'; // আইকন ব্যবহারের জন্য lucide-react (অপশনাল)

const Tips = () => {
    const categories = [
        {
            title: "পশু নির্বাচন (Selection)",
            icon: <Stethoscope className="text-green-600" />,
            tips: [
                "পশুটি চঞ্চল কি না এবং চোখ উজ্জ্বল কি না লক্ষ্য করুন।",
                "নাক ভেজা ভেজা থাকলে পশুটি সাধারণত সুস্থ থাকে।",
                "শরীরের কোথাও কোনো ক্ষত বা চামড়ায় পোকা আছে কি না দেখে নিন।",
                "পশুটি খুঁড়িয়ে হাঁটছে কি না তা যাচাই করতে কিছুটা সময় হাঁটিয়ে দেখুন।"
            ]
        },
        {
            title: "বয়স ও দাঁত (Age & Teeth)",
            icon: <Milestone className="text-green-600" />,
            tips: [
                "গরুর ক্ষেত্রে কমপক্ষে ২ বছর এবং ছাগলের ক্ষেত্রে ১ বছর হতে হবে।",
                "গরুর নিচের পাটিতে অন্তত ২টো স্থায়ী দাঁত থাকতে হবে।",
                "দাঁতগুলো বড় এবং জোড়া জোড়া থাকলে বয়সের প্রমাণ পাওয়া যায়।"
            ]
        },
        {
            title: "সতর্কতা (Precautions)",
            icon: <ShieldCheck className="text-green-600" />,
            tips: [
                "পশুকে কেনার পর অতিরিক্ত দানাদার খাবার খাওয়ানো থেকে বিরত থাকুন।",
                "পর্যাপ্ত পরিষ্কার পানি এবং শুকনো ঘাস সরবরাহ করুন।",
                "কোরবানির অন্তত ১২ ঘণ্টা আগে খাবার কমিয়ে দেওয়া ভালো।"
            ]
        },
        {
            title: "বর্জ্য ব্যবস্থাপনা (Waste Management)",
            icon: <Trash2 className="text-green-600" />,
            tips: [
                "নির্ধারিত স্থানে কোরবানি দিন এবং গর্ত করে রক্ত ও বর্জ্য পুঁতে ফেলুন।",
                "পরিষ্কারের জন্য ব্লিচিং পাউডার বা স্যাভলন মিশ্রিত পানি ব্যবহার করুন।",
                "চামড়া দ্রুত সরিয়ে ফেলুন এবং লবণ দিয়ে সংরক্ষণ করুন।"
            ]
        }
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 py-12">
            {/* Header Section */}
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-4">
                    Essential <span className="text-green-600">Qurbani Tips</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    সঠিক পশু নির্বাচন এবং নিয়ম মেনে কোরবানি সম্পন্ন করতে আমাদের এই নির্দেশিকাটি অনুসরণ করুন।
                </p>
            </div>

            {/* Grid Section - Responsive (1 col for mobile, 2 for tablet/desktop) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {categories.map((item, idx) => (
                    <div 
                        key={idx} 
                        className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-green-100 p-2 rounded-lg">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                        </div>
                        
                        <ul className="space-y-3">
                            {item.tips.map((tip, index) => (
                                <li key={index} className="flex items-start gap-3 text-gray-600 text-sm md:text-base leading-relaxed">
                                    <span className="text-green-500 font-bold mt-1">✔</span>
                                    {tip}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Support Box */}
            <div className="mt-12 bg-green-600 rounded-2xl p-8 text-center text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-2">আরো বিস্তারিত জানতে চান?</h3>
                <p className="mb-6 opacity-90">আমাদের বিশেষজ্ঞ টিমের সাথে যোগাযোগ করুন পশুর স্বাস্থ্য ও যত্নের বিষয়ে।</p>
                <button className="bg-white text-green-700 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition">
                    যোগাযোগ করুন
                </button>
            </div>
        </section>
    );
};

export default Tips;