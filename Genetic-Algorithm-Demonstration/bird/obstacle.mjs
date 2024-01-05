class Obstacle {
    constructor(x, tunnelWidth, thickness) {
      this.tunnelWidth = tunnelWidth+40;
      this.thickness = thickness
      this.topHeight = Math.random() * (window.innerHeight - 2 * this.tunnelWidth) + this.tunnelWidth / 2;
      this.bottomHeight = window.innerHeight - this.topHeight - this.tunnelWidth / 2;
      this.speed = 4;
      this.x = x;
      this.top  = this.topHeight - this.tunnelWidth / 2;
      this.bottom =this.bottomHeight + this.tunnelWidth / 2;
    }
  
    draw(ctx, height=window.innerHeight,color="black") {
      // let height  = window.innerHeight
       
  
      ctx.beginPath();
      ctx.rect(this.x, 0, this.thickness, this.topHeight - this.tunnelWidth / 2);
      ctx.fillStyle = color; // Customize the obstacle color
      ctx.fill();
  
      ctx.beginPath();
      ctx.rect(this.x, height - this.bottomHeight + this.tunnelWidth / 2, this.thickness, this.bottomHeight - this.tunnelWidth / 2);
      ctx.fillStyle = color; // Customize the obstacle color
      ctx.fill();

      ctx.beginPath()
      ctx.moveTo(this.x-100, window.innerHeight - this.bottomHeight + this.tunnelWidth / 2);
      ctx.lineTo(this.x+100, window.innerHeight - this.bottomHeight + this.tunnelWidth / 2);
      ctx.strokeStyle='red';
      ctx.rect(this.x-30, window.innerHeight - this.bottomHeight + this.tunnelWidth / 2,this.tunnelWidth+20,20)
      ctx.fill()

      ctx.beginPath()
      ctx.moveTo(this.x-100, this.topHeight - this.tunnelWidth / 2);
      ctx.lineTo(this.x+100,  this.topHeight - this.tunnelWidth / 2);
      ctx.strokeStyle='red';
      ctx.rect(this.x-20, this.topHeight - this.tunnelWidth / 2-20,this.tunnelWidth+15,20)
      ctx.fill()
      
      
      
  
      this.update();
    }
  
    update() {
      this.x -= this.speed;
    }
    collision(bird){
      if(bird.x+bird.radius>=this.x && bird.x-bird.radius<=this.x+this.thickness && (bird.y-bird.radius<=this.topHeight-this.tunnelWidth/2 ||bird.y+bird.radius>=(window.innerHeight - this.bottomHeight + this.tunnelWidth / 2))){
        console.log("bird collided")
        return true
      }
      return false
      
    }
  
    outOfBound() {
      
      return this.x < -this.thickness;
    }

  }

  export default Obstacle