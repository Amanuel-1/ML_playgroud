class Car{
    constructor(x,y,width,height){
        this.speed  = 1
        this.acceleration=0.8
        this.x =x 
        this.y=y
        this.width = width
        this.height = height
        this.friction=0.04
        this.maxspeed=3
        this.angle =0
        this.control  =  new Control()
    

    }

    draw(ctx){
        ctx.save()
        ctx.translate(this.x,this.y)
        ctx.rotate(-this.angle)
        ctx.beginPath();
        ctx.rect(-this.width/2,-this.height/2,this.width,this.height)
        ctx.fill();
        this.move()
    }
    // move(){
    //     if(this.speed > 0){
    //         this.speed -= this.friction;
    //     }
    //     if(this.speed < 0){
    //         this.speed += this.friction;
    //     }
    
    //     if(this.speed > this.maxspeed){
    //         this.speed = this.maxspeed;
    //     }
    //     if(this.speed < -this.maxspeed/2){
    //         this.speed = -this.maxspeed/2;
    //     }
    //     if(this.control.forward){
    //         this.speed += this.acceleration;
    //     }
    //     if(this.control.backward){
    //         this.speed -= this.acceleration;
    //     }
    
    //     if(this.speed !== 0){
    //         const flip = this.speed > 0 ? 1 : -1;
    //         if(this.control.right){
    //             this.angle+= 0.05 * flip;
    //         }
    //         if(this.control.left){
    //             this.angle -= 0.05 * flip;
    //         }
    //     }
    
    //     this.x += this.speed * Math.sin(-this.angle);
    //     this.y -= this.speed * Math.cos(this.angle);
    
    //     if(Math.abs(this.speed) < this.friction){
    //         this.speed = 0;
    //     }
    // }
    
move() {
    if (this.speed > 0) {
      this.speed -= this.friction;
    }
    if (this.speed < 0) {
      this.speed += this.friction;
    }

    if (this.speed > this.maxspeed) {
      this.speed = this.maxspeed;
    }
    if (this.speed < -this.maxspeed / 2) {
      this.speed = -this.maxspeed / 2;
    }
    if (this.control.forward) {
      this.speed += this.acceleration;
    }
    if (this.control.backward) {
      this.speed -= this.acceleration;
    }

    if (this.speed !== 0) {
        let flip  =this.speed>0?1:-1
      if (this.control.right) {
        this.angle -= 0.03*flip;
      }
      if (this.control.left) {
        this.angle += 0.03*flip;
      }
    }
    console.log(this.speed)

    this.x += this.speed * Math.sin(-this.angle);
    this.y -= this.speed * Math.cos(this.angle);

    if (Math.abs(this.speed) < this.friction) {
      this.speed = 0;
    }
  }
    


    // move() {
    //     if (this.control.forward) {
    //       this.speed += this.acceleration;
    //     }
    //     if (this.control.backward) {
    //       this.speed -= this.acceleration;
    //     }
      
    //     if (this.speed > this.maxspeed) {
    //       this.speed = this.maxspeed;
    //     }
    //     if (this.speed < -this.maxspeed / 2) {
    //       this.speed = -this.maxspeed / 2;
    //     }
      
    //     if (this.control.right) {
    //       this.angle += 0.03;
    //     }
    //     if (this.control.left) {
    //       this.angle -= 0.03;
    //     }
      
    //     const angleInRadians = this.angle * Math.PI / 180;
    //     const velocityX = this.speed * Math.cos(angleInRadians);
    //     const velocityY = this.speed * Math.sin(angleInRadians);
      
    //     const deltaPosX = velocityX * Math.cos(angleInRadians) - velocityY * Math.sin(angleInRadians);
    //     const deltaPosY = velocityX * Math.sin(angleInRadians) + velocityY * Math.cos(angleInRadians);
      
    //     this.x += deltaPosX;
    //     this.y += deltaPosY;
      
    //     this.speed *= (1 - this.friction);
      
    //     if (Math.abs(this.speed) < this.friction) {
    //       this.speed = 0;
    //     }
    //   }


}
