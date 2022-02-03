export default class Config{
    static instance;

    static getInstance(){
        if(Config.instance)
        {
            return Config.instance;
        }
        else {Config.instance = new Config();}
        return Config.instance;
    }

    constructor(){
        this.brushSize = 4;
        this.brushMode = 1;
        this.canvasWidth = 350;
        this.canvasHeight = 350;
        this.tail = [];
    }

    addPoint(x, y){
        let point = {
            x: x,
            y: y
        }

        this.tail.push(point);
    }

    clearPoints()
    {
        this.tail = [];
    }

    showPoints()
    {
        console.log("points: ", this.tail);
    }

    getLastPoint()
    {
        return this.tail[this.tail.length - 1];
    }

    getSecondLastPoint()
    {
        return this.tail[this.tail.length - 2];
    }

    setCanvasWidth(width)
    {
        this.canvasWidth = width
    }

    getCanvasWidth()
    {
        return this.canvasWidth;
    }

    setCanvasHeight(height)
    {
        this.canvasHeight = height;
    }

    getCanvasHeight()
    {
        return this.canvasHeight;
    }

    setBrushMode(mode)
    {
        this.brushMode = mode;
    }

    getBrushMode()
    {
        return this.brushMode;
    }

    getBrushSize()
    {
        return this.brushSize;
    }

    setBrushSize(size)
    {
        this.brushSize = size;
    }
}