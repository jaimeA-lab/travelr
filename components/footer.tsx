import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className="w-full bg-gray-900 text-white py-4 border-t border-gray-700">
                <div className="text-center">
                    <p>&copy; {new Date().getFullYear()} DFMTravel. Todos los derechos reservados.</p>
                </div>
            </footer>
        </>
    )
}
