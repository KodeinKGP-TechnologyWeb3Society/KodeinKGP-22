import React from "react";
import './Events.css';
import bg from '../pictures/bg.gif';
import pic from '../pictures/sample.png';

export default function Events() {
    return (
        <div>
            <div className="album py-5" style={{ backgroundImage: `url(${bg})` }}>
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <div className="col card1">
                            <div className="card shadow-sm">
                                <img src={pic} alt=""/>
                                <div className="card-body">
                                    <p className="card-text" style={{ color: "black", textAlign: "center" }}><strong>Tile1 Should be put here</strong></p>
                                    <p className="Dsc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vero consequuntur maiores totam! Beatae, similique alias rem ipsum ex tempore suscipit molestias obcaecati minus deleniti enim? Quia cupiditate aut enim nisi sapiente!</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col card2">
                            <div className="card shadow-sm">
                                <img src={pic} alt=""/>
                                <div className="card-body">
                                    <p className="card-text" style={{ color: "black", textAlign: "center" }}><strong>Tile2 Should be put here</strong></p>
                                    <p className="Dsc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vero consequuntur maiores totam! Beatae, similique alias rem ipsum ex tempore suscipit molestias obcaecati minus deleniti enim? Quia cupiditate aut enim nisi sapiente!</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col card3">
                            <div className="card shadow-sm">
                                <img src={pic} alt=""/>
                                <div className="card-body">
                                    <p className="card-text" style={{ color: "black", textAlign: "center" }}><strong>Tile3 Should be put here</strong></p>
                                    <p className="Dsc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vero consequuntur maiores totam! Beatae, similique alias rem ipsum ex tempore suscipit molestias obcaecati minus deleniti enim? Quia cupiditate aut enim nisi sapiente!</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}