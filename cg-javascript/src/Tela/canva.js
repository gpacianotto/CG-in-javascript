import React, { Component, useEffect, useState } from "react";
import Config from "../Configuration/Config";
export default function Canva(){
    const canvasElement = document.querySelector('#canvas-main');
    const config = Config.getInstance();
    const brushSize = config.getBrushSize();
        
    const [mouseDown, setMouseDown] = useState(false);
    const [scaled, setScaled] = useState(false);
    let tail = [];
    
    console.log("canvas element: ", canvasElement);
    
    function drawPixel(x, y, color) {
        let context = canvasElement.getContext('2d');

        var roundedX = Math.round(x);
        var roundedY = Math.round(y);
    
        context.beginPath();
        context.fillStyle = color || '#000';
        context.fillRect(roundedX, roundedY, brushSize, brushSize);
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
        // let context = canvasElement.getContext('2d');

        // context.canvas.width  = screenW;
        // context.canvas.height = screenH;

        //setScaled(false);
    }, []);
    return (
    <canvas
    style={{border: "2px solid gray"}}
    id="canvas-main"
    //onClick={() => {drawPixel((Math.floor(Math.random() * 100)), (Math.floor(Math.random() * 100)), 'black')}}
    onMouseDown={() => {setMouseDown(true)}}
    onMouseUp={() => {setMouseDown(false)}}
    onMouseMove={(ev) => {
        if(mouseDown && config.getBrushMode() == 0) drawPixel(ev.pageX, ev.pageY, 'black');
        if(mouseDown && config.getBrushMode() == 1) {tail.push(ev.pageX);}
        if(!mouseDown && config.getBrushMode() == 1) {
            console.log("tail: ",tail);
            
        }                        
    }}
    width={config.getCanvasWidth()}
    height={config.getCanvasHeight()}
    //onMouseDownCapture={() => {drawPixel((Math.floor(Math.random() * 100)), (Math.floor(Math.random() * 100)), 'black')}}
    >

    </canvas>
    )
}