import { useState } from 'react';
import { useParams } from 'react-router';
import img1 from '../../../src/assets/imagens_random/exemplos/solid-shampoo1.jpg'
import img2 from '../../../src/assets/imagens_random/exemplos/solid-shampoo2.jpg'

const ProductDetail = () => {

    const params = useParams();
    const { productId } = params;

    console.log("PRODUCT_ID :: ", productId);

    const [quantity, setQuantity] = useState(0);

    const quantMinusHandler = () => {
        console.log("MENOS !");

        if(quantity > 0) {
            setQuantity(quantity - 1);
        }
    }
    
    const quantPlusHandler = () => {
        console.log("MAIS !");

        setQuantity(quantity + 1);
    }

    return (
        // <main className="bg-gray-50 mb-auto ">
        <main className="bg-gray-50">
            <div className="grid grid-cols-2 gap-6 
                            place-items-center 
                            max-w-5xl mx-auto
                            p-8 md:p-16 lg:max-w-screen-xl 
                            ">

                <div className="xs:hidden sm:block bg-gray-50 rounded-lg" >
                    <div className="grid lg:grid-cols-2 gap-5 " >
                            <div><img src={img1} alt="" /></div>
                            <div className="md:hidden lg:block" ><img src={img2} alt="" /></div>
                    </div>
                </div>

                <div className="bg-gray-50 px-3 rounded-lg xs:col-span-2 sm:col-span-1">
                    <h1 className="text-3xl lg:text-5xl font-medium">Shampoo Sólido</h1>
                    <div className="xs:block sm:hidden bg-gray-50 rounded-lg" >
                        <div className="grid lg:grid-cols-2 xs:grid-cols-2 gap-5 " >
                                <div><img src={img1} alt="" /></div>
                                <div className="md:hidden lg:block" ><img src={img2} alt="" /></div>
                        </div>
                    </div>
                    <h3 className="text-xl py-2">€12,75</h3>
                    <div className="py-4 grid lg:grid-cols-8 ">
                        <button className="bg-gray-300 hover:bg-gray-400 font-bold py-2 px-4 rounded" onClick={quantMinusHandler}>-</button>
                        <button className="bg-gray-200 py-2 px-4 cursor-default"> {quantity} </button>
                        <button className="bg-gray-300 hover:bg-gray-400 font-bold py-2 px-4 rounded" onClick={quantPlusHandler}>+</button>
                        <button className="xl:hidden bg-yellow-700 hover:bg-yellow-900 col-span-3 lg:col-start-5 text-yellow-50 py-2 px-4 font-bold rounded">Ad. ao carrinho</button>
                        <button className="hidden xl:block bg-yellow-700 hover:bg-yellow-900 col-span-3 lg:col-start-5 text-yellow-50 py-2 px-4 font-bold rounded">Adicionar ao carrinho</button>
                    </div>
                    <h2 className="text-xl pt-2 font-bold">Ingredientes:</h2>
                    <p>Sodium cocoyl isethionate, infusão de camomila, manteiga de cacau, óleo de argão, óleo de rícino, Cocamidopropil Betaína, óleo essencial de alecrim, óleo essencial de neroli light, argila rosa, proteína de aveia, ácido cítrico, extrato de semente de toranja.</p>
                </div>
                <div className="bg-gray-50 col-span-2 rounded-lg mb-8">
                    <p className="text-3xl text-justify" >Feito à mão com a relaxante infusão de camomila, o 'Absoluto' é enriquecido com óleo de argão, rícino e argila rosa. Este shampoo proporciona uma lavagem equilibrada do couro cabeludo e dos fios, mantendo-os suaves, leves, fortificados e com volume.<br/>
                    Adequado para todos os tipos de couro cabeludo, incluindo os mais sensíveis.</p>
                </div>
            </div>
        </main>
    )
}

export default ProductDetail;
