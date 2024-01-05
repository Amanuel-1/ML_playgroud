class Road {
    constructor(laneCount, curvature) {
      this.laneCount = laneCount;
      this.curvature = curvature;
    }
  
    draw(context, canvasWidth, canvasHeight) {
      context.clearRect(0, 0, canvasWidth, canvasHeight);
      
      const roadWidth = canvasWidth / (2 * this.laneCount);
      const laneWidth = roadWidth / this.laneCount;
      const roadHeight = canvasHeight * 0.8;
      
      context.beginPath();
      context.moveTo(canvasWidth / 2 - roadWidth / 2, canvasHeight);
      context.lineTo(canvasWidth / 2 - roadWidth / 2, canvasHeight - roadHeight);
  
      for (let i = 0; i < this.laneCount; i++) {
        const laneX = canvasWidth / 2 - roadWidth / 2 + (i + 0.5) * laneWidth;
        const laneY = canvasHeight - roadHeight + this.curvature * Math.pow(laneX - canvasWidth / 2, 2);
        
        context.lineTo(laneX, laneY);
      }
  
      context.lineTo(canvasWidth / 2 + roadWidth / 2, canvasHeight - roadHeight);
      context.lineTo(canvasWidth / 2 + roadWidth / 2, canvasHeight);
      context.closePath();
  
      context.fillStyle = 'gray';
      context.fill();
    }
  }