/**
 * EducatorCTASection Component
 * For deans, program directors, and faculty members
 */
import React from 'react';
import { FaUniversity, FaUserGraduate, FaChartLine, FaHandshake } from 'react-icons/fa';

function EducatorCTA() {
    return (

        <section className="bg-gray-50 py-16 px-4">
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-8 md:p-12">

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Are you a dean, program director, or faculty member?
                </h1>

                {/* Description */}
                <p className="text-gray-700 text-lg mb-8">
                    If so, you're in the right place! Get bulk pricing discounts when you partner
                    with us. We'll work with you to help your students succeed and ensure your
                    institution achieves its goals.
                </p>

                {/* Subheading */}
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                    Request a demo to:
                </h2>

                {/* Bullet Points */}
                <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                        <div className="mr-3 mt-1">
                            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                                <span className="text-blue-600 text-sm font-bold">1</span>
                            </div>
                        </div>
                        <p className="text-gray-800">
                            Get access to a free account so you can try out NCLEX Bootcamp for yourself.
                        </p>
                    </li>

                    <li className="flex items-start">
                        <div className="mr-3 mt-1">
                            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                                <span className="text-blue-600 text-sm font-bold">2</span>
                            </div>
                        </div>
                        <p className="text-gray-800">
                            Get access to our faculty dashboard demo and monitor your students progress.
                        </p>
                    </li>

                    <li className="flex items-start">
                        <div className="mr-3 mt-1">
                            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                                <span className="text-blue-600 text-sm font-bold">3</span>
                            </div>
                        </div>
                        <p className="text-gray-800">
                            Ask us about bulk pricing and learn how we're fully committed and
                            accountable to helping your students succeed on their NCLEX®.
                        </p>
                    </li>
                </ul>

                {/* Closing Line */}
                <p className="text-gray-700 text-lg mb-8">
                    We look forward to hearing from you!
                </p>

                {/* Author Section */}
                <div className="flex items-center gap-4 pt-8 border-t border-gray-200">
                    {/* Circular Image */}
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gray-200">
                        <img
                            src="https://cdn.prod.website-files.com/606392a644232d174453ec02/63ee3e7ccabe517e41ec1db5_emily_profile_small.jpeg"
                            alt="Dr. Emily Wilson"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Text */}
                    <div>
                        <p className="font-bold text-gray-900">Dr. Emily Wilson, DNP, RN, CCRN, CNE</p>
                        <p className="text-gray-600 text-sm">Creator of NCLEX Bootcamp</p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default EducatorCTA;