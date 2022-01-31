import React, { useEffect, useState } from "react";
export default function Canva(){
    const canvasElement = document.querySelector('#canvas-main')
    const [mouseDown, setMouseDown] = useState(false);
    const [scaled, setScaled] = useState(false);
    // const [MousePosition, setMousePosition] = useState({
    //     left: 0,
    //     top: 0
    // })
    console.log("canvas element: ", canvasElement);
    function drawPixel(x, y, color) {
        let context = canvasElement.getContext('2d');
        var roundedX = Math.round(x);
        var roundedY = Math.round(y);
    
        context.beginPath();
        context.fillStyle = color || '#000';
        context.fillRect(roundedX, roundedY, 1, 1);
        context.fill();
    }
    function handleMouseMove(ev){
        if(mouseDown)
        {
            drawPixel(ev.pageX, ev.pageY, 'black')
        }
        
    }

    useEffect(() => {
        // if(mouseDown)
        // {
        //     drawPixel((Math.floor(Math.random() * 100)), (Math.floor(Math.random() * 100)), 'black')
        // }
        // if(scaled == false)
        // {
        //     canvasElement.width = window.innerWidth;
        //     canvasElement.height = window.innerHeight;
        //     setScaled(true)
        // }
        
    }, [mouseDown]);
    return (
    <canvas
    style={{height: "100%", width: "100%"}}
    id="canvas-main"
    //onClick={() => {drawPixel((Math.floor(Math.random() * 100)), (Math.floor(Math.random() * 100)), 'black')}}
    onMouseDown={() => {setMouseDown(true)}}
    onMouseUp={() => {setMouseDown(false)}}
    onMouseMove={(ev) => {if(mouseDown) drawPixel(ev.pageX, ev.pageY, 'black')}}
    //onMouseDownCapture={() => {drawPixel((Math.floor(Math.random() * 100)), (Math.floor(Math.random() * 100)), 'black')}}
    >

    </canvas>
    )
}