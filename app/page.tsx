import Image from "next/image";

export default function Home() {
    return (
        <>
            <div>
                <section
                    className="w-full h-screen bg-cover bg-center relative mt-16"
                    style={{ backgroundImage: 'url("/images/elnido.jpg")' }}
                >
                    <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
                    <div className="text-center space-y-6 relative z-10 max-w-4xl mx-auto py-12">
                        <h1 className="text-4xl font-bold text-white">Solo con DFMTravel</h1>
                        <h2 className="text-2xl font-medium text-white">Viaja como nunca antes:</h2>
                        <h2 className="text-2xl font-medium text-white">Explora, descubre y vive experiencias únicas.</h2>
                        <h2 className="text-2xl font-medium text-white">Miles de destinos te esperan.</h2>
                        <h1 className="text-4xl font-bold text-white">¡Reserva tu viaje ahora!</h1>
                    </div>
                    <div className="mt-8 text-center relative z-10 max-w-4xl mx-auto">
                        <h2 className="text-3xl font-semibold text-white mb-4">¡LLÁMANOS AHORA PLANIFICA EL VIAJE DE TU VIDA!</h2>
                        <button className="px-8 py-3 bg-blue-600 text-white text-xl font-bold rounded-lg hover:bg-blue-700 transition-colors">¡Llámanos!</button>
                    </div>
                </section>
                <section className="py-12 bg-blue-50">
                    <div className="text-center space-y-4">
                        <h1 className="text-3xl font-bold text-blue-700">Agencia de viajes en Madrid</h1>
                        <h2 className="text-2xl font-semibold text-blue-600">Viajes DFMTravel</h2>
                        <h3 className="text-lg font-medium text-blue-500">¿Tienes dudas? ¡Te escuchamos!</h3>
                        <a
                            href="tel:+34910228319"
                            className="text-3xl font-semibold hover:text-blue-800 transition-colors 
                    shadow-lg rounded-lg bg-gradient-to-r from-blue-400 to-blue-600
                    text-white flex items-center justify-center space-x-2 p-2"
                        >910228319</a>
                    </div>
                </section>
                <section className="py-12 bg-gray-50 flex items-center justify-center space-x-8">
                    <div className="w-1/3 max-w-xs">
                        <Image
                            width={200}
                            height={200}
                            src="/images/caption.jpg"
                            alt="Imagen de ejemplo"
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </div>
                    <div className="w-2/3 max-w-lg">
                        <h1 className="text-3xl font-bold text-blue-700 mb-4">
                            Descubre los viajes más exclusivos con dfmtravel, ¡tu agencia de confianza!
                        </h1>
                        <p className="text-lg text-gray-700">
                            Con dfmtravel, viajar es mucho más que llegar a un destino. Ofrecemos experiencias únicas, diseñadas para que disfrutes de cada momento.
                            Ya sea que busques aventura, relax o exploración cultural, tenemos el paquete perfecto para ti.
                        </p>
                    </div>
                </section>
                <section className="py-12 bg-blue-50 flex items-center justify-center space-x-8">
                    <div className="w-full max-w-2xl">
                        <h1 className="text-3xl font-bold text-blue-700 mb-4 text-center">
                            ¿Por qué elegir nuestra agencia de viajes?
                        </h1>
                        <p className="text-lg text-gray-700 text-center">
                            En dfmtravel, entendemos que cada viaje es una oportunidad única de explorar el mundo y crear recuerdos inolvidables. Nuestro equipo de expertos en viajes trabaja de la mano contigo para ofrecerte experiencias personalizadas que se adapten a tus deseos y necesidades. Ya sea que busques relajarte en playas paradisíacas, aventurarte en destinos exóticos o explorar la historia y cultura de nuevos lugares, tenemos opciones para todos los gustos.
                            <br /><br />
                            Lo que nos diferencia es nuestra atención al detalle, la calidad de nuestros servicios y la pasión que ponemos en cada itinerario que diseñamos. Nos aseguramos de que cada aspecto de tu viaje sea perfecto, desde la selección de los mejores alojamientos hasta las actividades más emocionantes. Además, contamos con un equipo de atención al cliente disponible para resolver cualquier duda o preocupación antes, durante y después de tu aventura.
                            <br /><br />
                            Viajar con dfmtravel es más que solo planificar un viaje; es crear experiencias que durarás para siempre. ¡Déjanos ser parte de tu próxima gran aventura!
                        </p>
                    </div>
                    <div className="w-full max-w-xs">
                        <Image
                            width={200}
                            height={200}
                            src="/images/dock.jpg"
                            alt="Imagen de ejemplo"
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </div>
                </section>
            </div>


        </>
    );
}
