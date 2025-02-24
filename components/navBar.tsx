import React from 'react';

export default function NavBar() {
    return (
        <nav className="w-full fixed top-0 left-0 z-50 bg-white shadow-md py-4 px-8">
            <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-blue-700">
                    <span>DFMTravel</span>
                </div>
                <div className="space-x-8">
                    <a
                        className="text-xl text-blue-600 hover:text-blue-800 transition-colors"
                    >
                        Inicio
                    </a>
                    <a
                        href="#contacto"
                        className="text-xl text-blue-600 hover:text-blue-800 transition-colors"
                    >
                        Contacto
                    </a>
                </div>
            </div>
        </nav>
    )
}

