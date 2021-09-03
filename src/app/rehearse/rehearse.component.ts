import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-rehearse',
  //template: ``,
  templateUrl: './rehearse.component.html',
  styles: ['canvas { border-style: solid }']
})
export class RehearseComponent {

  drawRectable() {
    var canvas = <HTMLCanvasElement>document.getElementById('stage');
    //var ctx = canvas.getContext('2d');
    if (canvas.getContext('2d')) {
      var ctx = <CanvasRenderingContext2D>canvas.getContext('2d');

      ctx.fillStyle = "#D74022";
      ctx.fillRect(25, 25, 150, 150);

      ctx.fillStyle = "rgba(0,0,0,0.5)";
      ctx.clearRect(60, 60, 120, 120);
      ctx.strokeRect(90, 90, 80, 80);
    }
  }

  drawCircle() {
    var canvas = <HTMLCanvasElement>document.getElementById('stage');
    if (canvas.getContext('2d')) {
      var ctx = <CanvasRenderingContext2D>canvas.getContext('2d');
      let x = canvas.width/2;
      let y = canvas.height/2;
      let radius = 50;
      ctx.strokeStyle = "blue";
      ctx.fillStyle = "blue";
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.fill();
    }
  }

  erase(){
    var canvas = <HTMLCanvasElement>document.getElementById('stage');
    if (canvas.getContext('2d')) {
      var ctx = <CanvasRenderingContext2D>canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }  
  }
}
