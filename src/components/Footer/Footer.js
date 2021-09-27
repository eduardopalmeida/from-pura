import React from 'react'
import { Link } from 'react-router-dom';

const Footer = (props) => {
    return (
        <footer className="footer bg-yellow-50 pt-1 content-center">
            <div className="container mx-auto px-6">

                <div className="sm:flex sm:mt-8">
                    <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                        <div className=" flex flex-col">
                            <Link to="/products" className="text-md font-bold text-gray-700 uppercase mb-2">Produtos</Link>
                            <Link to="/" className="my-2 text-yellow-900 text-md hover:text-yellow-700">Shampoos Sólidos</Link>
                            <Link to="/" className="my-2 text-yellow-900 text-md hover:text-yellow-700">Amaciadores Sólidos</Link>
                        </div>
                        <div className=" flex flex-col">
                            <Link to="/aboutus" className="text-md font-bold text-gray-700 uppercase mb-2">Quem Somos</Link>
                        </div>
                        <div className=" flex flex-col">
                            <Link to="/contacts" className="text-md font-bold text-gray-700 uppercase mb-2">Contactos</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-6">
                <div className="mt-4 border-t-2 border-gray-300 flex flex-col items-center">
                    <div className="sm:w-2/3 text-center py-6 ">
                        <p className="text-sm text-yellow-900 font-bold mb-2">
                            © 2021  LOPO - raw and clean care
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
