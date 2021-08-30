import React from 'react'
import Card from '../../components/Card/Card';

const HomePage = () => {

    const url_img1 = "https://www.eternalvinesoaps.com/wp-content/uploads/Clove-Single-Bar.jpg";
    const url_img2 = "https://www.eternalvinesoaps.com/wp-content/uploads/Discover-Single-Bar.jpg";
    const url_img3 = "https://www.eternalvinesoaps.com/wp-content/uploads/Beach-Single-Bar.jpg";

    return (
        <div className="flex flex-row flex-wrap py-14 justify-center">

            <Card 
                url={url_img1}
                title={"Exemplo 1"}
                description={"sabonete"}
                alt-text={"sabonete"} 
            />

            <Card 
                url={url_img2}
                title={"Exemplo 2"}
                description={"shampoo sólido"}
                alt-text={"shampoo sólido"} 
            />
            
            <Card 
                url={url_img3}
                title={"Exemplo 3"}
                description={"amaciador"}
                alt-text={"amaciador"} 
            />
            
        </div>
    )
}

export default HomePage;
