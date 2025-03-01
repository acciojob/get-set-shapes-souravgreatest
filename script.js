//complete this code
class Rectangle {
	constructor(width,height)
	{
		this._height=height
		this._width=width
	}
	getArea()
	{
		return (this._height)*(this._width)
	}
	get width(){
		return this._width
	}
	get height(){
		return this._height
	}
}

class Square extends Rectangle {
	constructor(side)
	{
		super(side,side)
		this._side=side
	}
	getPerimeter(){
		return 4*(this._side)
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
