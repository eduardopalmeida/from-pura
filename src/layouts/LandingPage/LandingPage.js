import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../assets/hero.jpg';
import Footer from '../../components/Footer/Footer'

const LandingPageLayout = ({heading, ...otherProps}) => {
    return (
        <div className="bg-gray-50 flex flex-col h-screen justify-between font-body">
            <Header/>

            {heading &&
                <div className="relative flex items-center justify-center h-full
                                bg-cover bg-center bg-fixed bg-no-repeat"

                    style={{
                        backgroundImage: `url(${Hero})`
                    }}
                >
                    <h1 className="relative px-2.5 text-white uppercase
                                    z-10 text-4xl text-center md:text-6xl" >
                        {heading}
                    </h1>
                    <div className="z-0 absolute -top-0 -left-0 h-full w-full bg-black opacity-40" />
                </div>
            }
            {otherProps.children}
            <Footer />
        </div>
    );
}

export default LandingPageLayout;