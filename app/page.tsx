import Image from "next/image";

export default function Home() {
    return (
        <>
            <section className="bg-blue-50">
                <div className="container mx-auto h-screen flex items-start bg-red-100 flex flex-col">
                    <div className="bg-green-200 flex-1 flex flex-col justify-center items-start">
                        <h1 className="text-7xl max-w-[600px]">Explore The majestic Asia Landscape Now</h1>
                        <button className="bg-black text-white px-2 py-2 my-2">Get Started!</button>
                    </div>
                    <div className="flex flex-row py-[100px] bg-yellow-100">
                        <div>
                            <div className="opacity-25">
                                <Image src={"/images/clock.svg"} alt="clock" width={50} height={50} />
                            </div>
                            <p>Lorem ipsum dolor</p>
                        </div>
                        <div>
                            <div>
                                <Image src={"/images/chart.svg"} alt="chart" width={50} height={50} />
                            </div>
                            <p>Lorem ipsum dolor</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-red-50">
                <div className="container mx-auto py-[50px] grid grid-cols-2 gap-4">
                    <div className="bg-red-100">
                        <h1>Kelingking Beach</h1>
                        <p>Bali</p>
                    </div>
                    <div className="bg-red-100 grid grid-rows-2 gap-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-red-300">
                                <h1>Grand Palace</h1>
                                <p>Thailand</p>
                            </div>
                            <div className="bg-red-400">
                                <h1>Cappadocia</h1>
                                <p>Turkey</p>
                            </div>
                        </div>
                        <div className="bg-red-500"><h1>Padar Island</h1>
                            <p>East Nueva Tenggara</p></div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container mx-auto grid grid-cols-2 gap-6 py-[50px]">
                    <div className="grid grid-row-2">
                        <div>
                            <h1>Experience the new adventure</h1>
                            <p>Lorem ipsum dolor amat.askdbaskdbadskjsbfjbasjkdfabbefjkaebfjkfbaewjkefbawekfbawkjebfjkwbajkfbawekjfbjkwafbkwjaefbkjawejbfakwjeb</p>
                        </div>
                        <div className="grid grid-rows-3 py-2">
                            <div><h1>Titulo</h1><p>Texto</p></div>
                        </div>
                        <div className="grid grid-rows-3">
                            <div><h1>Titulo</h1><p>Texto</p></div>
                        </div>
                        <div className="grid grid-rows-3">
                            <div><h1>Titulo</h1><p>Texto</p></div>
                        </div>
                    </div>
                    {/* <Image src={ } alt="" width={ } height={ } /> */}
                </div>
            </section>
            {/* <section
                className="w-full h-screen bg-cover bg-center relative mt-16"
            // style={{ backgroundImage: 'url(\"/images/elnido.jpg\")' }}
            >
                <div className="container h-full flex flex-col items-center mx-auto">
                    <div className="text-left">
                        <h1 className="text-7xl font-bold text-black">Explore The Majestic Asia Now</h1>
                        <button className="px-6 py-2 my-4 bg-blue-600 text-white text-lg font-bold rounded-lg hover:bg-blue-700 transition-colors">
                            Empezar
                        </button>
                    </div>
                    <div className="flex flex-row">
                        <div>
                             <Image src={ } alt="" width={ } height={ } /> 
                            <p>Lorem ipsum dolor</p>
                        </div>
                        <div>
                            <Image src={ } alt="" width={ } height={ } /> 
                            <p>Lorem ipsum dolor</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="py-12 bg-blue-50">
                <div className="container">
                    <div className="text-center space-y-4">
                        <h1 className="text-3xl font-bold text-blue-700">Agencia de viajes en Madrid</h1>
                        <h2 className="text-2xl font-semibold text-blue-600">Viajes DFMTravel</h2>
                        <h3 className="text-lg font-medium text-blue-500">¿Tienes dudas? ¡Te escuchamos!</h3>
                        <a
                            href="tel:+34910228319"
                        >910228319</a>
                    </div>
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
            */}
        </>
    );
}
