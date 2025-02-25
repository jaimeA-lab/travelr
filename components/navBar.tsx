import React from 'react';

export default function NavBar() {
    return (
        <nav className="w-full fixed top-0 left-0 z-50 bg-white shadow-md py-4 px-8">
            <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-blue-700">
                    <span>DFMTravel</span>
                </div>
                <div className="space-x-8">
                    <p><a href="tel:+34910228319">910228319</a></p>
                    <p><a href="mailto: info@dfmtravel.com">Send email</a></p>
                </div>
            </div>
        </nav>
    )
}

