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
        this.brushSize = 1;
        this.brushMode = 0;
        this.canvasWidth = 350;
        this.canvasHeight = 350;
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