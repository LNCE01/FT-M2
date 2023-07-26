import React from "react";
import Bienvenido from "./Bienvenido";

export default class Botones extends React.Component{
    render(){
        return (
            <div>
                <button onClick={() => alert('Tu mensaje')}>Módulo 1</button>
                <button onClick={() => alert('Tu mensaje')}>Módulo 2</button>
            </div>
        )
    }
}