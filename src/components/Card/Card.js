import React from 'react'

const Card = (props) => {

    return (
        <div className="w-full lg:w-3/6 xl:w-4/12 px-2.5 mb-5">

            <div className="bg-white">

                <div>
                    <img 
                        src={props.url}
                        alt={props.alt}
                        className="w-full"
                    />
                </div>
                
                <div className="p-2.5">
                    <ul>
                        <li className="list-none">
                            <span className="font-bold text-base">
                                {props.title}
                            </span>
                        </li>
                        
                        <li className="list-none">
                            <span className="text-base">
                                {props.description}
                            </span>
                        </li>
                        
                    </ul>
                </div>

            </div>
        </div>

    )
}

export default Card;
