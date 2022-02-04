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

    getDistanceBetweenPoints(pointA, pointB)
    {
        let squareX = (pointB.x - pointA.x) * (pointB.x - pointA.x);
        let squareY = (pointB.y - pointA.y) * (pointB.y - pointA.y);

        let sum = squareX + squareY;

        let root = Math.sqrt(sum);
        
        return root;
    }

    getRadiusLastClick()
    {
        let radius = this.getDistanceBetweenPoints(this.getSecondLastPoint(), this.getLastPoint());

        console.log("raio: ", radius);

        return Math.ceil(radius);
    }

    getCenterCircle()
    {
        //retorna o penultimo ponto

        return this.getSecondLastPoint();
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