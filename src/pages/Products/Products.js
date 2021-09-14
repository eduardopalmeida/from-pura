import React from 'react'

const Products = () => {

    const products = [{
            imageSrc: "https://www.eternalvinesoaps.com/wp-content/uploads/Clove-Single-Bar.jpg",
            name: "Absolute",
            description: "shampoo sólido",
            price: "5.25€",
            id: 0
        },{
            imageSrc: "https://www.eternalvinesoaps.com/wp-content/uploads/Discover-Single-Bar.jpg",
            name: "Claro/Limpo/Lúzio/Mundo",
            description: "shampoo sólido",
            price: "5.25€",
            id: 1
        },{
            imageSrc: "https://www.eternalvinesoaps.com/wp-content/uploads/Beach-Single-Bar.jpg",
            name: "Reparador/Amparo",
            description: "shampoo sólido",
            price: "5.25€",
            id: 2
        },{
            imageSrc: "https://www.eternalvinesoaps.com/wp-content/uploads/Beach-Single-Bar.jpg",
            name: "Sensível",
            description: "shampoo sólido",
            price: "5.25€",
            id: 3
        }];

    return ( 
        <div className="bg-white">
        {/* <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"> */}

            <div className="max-w-2xl mx-auto my-16 px-4 py-8  sm:my-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:my-16">

                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Shampoos Sólidos</h2>
        
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                    <div key={product.id} className="group relative">
                        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                        <img
                            src={product.imageSrc}
                            alt={product.imageAlt}
                            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                        />
                        </div>
                        <div className="mt-4 flex justify-between">
                        <div>
                            <h3 className="text-sm text-gray-700">
                            <a href={product.href}>
                                <span aria-hidden="true" className="absolute inset-0" />
                                {product.name}
                            </a>
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">{product.price}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            {/* <div className="max-w-2xl mx-auto pb-3 py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"> */}
            <div className="max-w-2xl mx-auto my-16 px-4 sm:my-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:my-8">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Amaciadores Sólidos</h2>
        
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                    <div key={product.id} className="group relative">
                        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                            <img
                                src={product.imageSrc}
                                alt={product.imageAlt}
                                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                            />
                        </div>
                        <div className="mt-4 flex justify-between">
                            <div>
                                <h3 className="text-sm text-gray-700">
                                <a href={product.href}>
                                    <span aria-hidden="true" className="absolute inset-0" />
                                    {product.name}
                                </a>
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                            </div>
                            <p className="text-sm font-medium text-gray-900">{product.price}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )}

export default Products;
