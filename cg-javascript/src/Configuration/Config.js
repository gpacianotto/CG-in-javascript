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