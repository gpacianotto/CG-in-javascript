import React, { Component, useEffect, useState } from "react";
import Config from "../Configuration/Config";
export default function Canva({canvasWidth, canvasHeight}){
    const canvasElement = document.querySelector('#canvas-main');
    const config = Config.getInstance();
    const brushSize = config.getBrushSize();
        
    const [mouseDown, setMouseDown] = useState(false);
    const [scaled, setScaled] = useState(false);
    let tail = [];
    
    //console.log("canvas element: ", canvasElement);
    
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
    function drawLine(point1, point2)
    {
        let x0 = point1.x;
        let y0 = point1.y;
        let x1 = point2.x;
        let y1 = point2.y;

        var dx = Math.abs(x1 - x0);
        var dy = Math.abs(y1 - y0);
        var sx = (x0 < x1) ? 1 : -1;
        var sy = (y0 < y1) ? 1 : -1;
        var err = dx - dy;

        while(true) {
            drawPixel(x0, y0, 'black'); // Do what you need to for this

            if ((x0 === x1) && (y0 === y1)) break;
            var e2 = 2*err;
            if (e2 > -dy) { err -= dy; x0  += sx; }
            if (e2 < dx) { err += dx; y0  += sy; }
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
    onMouseDown={(ev) => {
        setMouseDown(true);
        if(config.getBrushMode() == 1)
        {
            config.addPoint(ev.pageX, ev.pageY);
        }  
        
        
    }}
    onMouseUp={(ev) => {
        setMouseDown(false); 
        if(config.getBrushMode() == 1)
        {
            config.addPoint(ev.pageX, ev.pageY);
            config.getRadiusLastClick();
            drawLine(config.getLastPoint(), config.getSecondLastPoint())
        }
        
    }}
    onMouseMove={(ev) => {
        if(mouseDown && config.getBrushMode() == 0) drawPixel(ev.pageX, ev.pageY, 'black');
        // if(mouseDown && config.getBrushMode() == 1) {tail.push(ev.pageX);}
        // if(!mouseDown && config.getBrushMode() == 1) {
        //     console.log("tail: ",tail);
            
        // }                        
    }}
    width={canvasWidth}
    height={canvasHeight}
    //onMouseDownCapture={() => {drawPixel((Math.floor(Math.random() * 100)), (Math.floor(Math.random() * 100)), 'black')}}
    >

    </canvas>
    )
}