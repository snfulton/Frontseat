import { Component, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ColorPickerComponent } from 'ngx-color-picker';
import { Color } from 'chart.js';

@Component({
  // notice the variable name myCanvas
  templateUrl: './editor.component.html',
  //template: `<canvas #canvas width="100%" height="90%"></canvas>`,
  //<button (click)="drawRect()">Draw rectangle</button>`,
  selector: 'app-editor',
  styleUrls: ['./editor.component.scss']
  //styles: ['canvas { border: 2px solid #000; background: white;}']
})
export class EditorComponent implements AfterViewInit {
  //@Input() width = 1400;
  //@Input() height = 418;
  // its important myCanvas matches the variable name in the template
  @ViewChild('canvas')
  public canvas!: ElementRef<HTMLCanvasElement>;
  
  public context!: CanvasRenderingContext2D;

  public canvasEl!: HTMLCanvasElement;

  public ngAfterViewInit() {
    this.canvasEl = <HTMLCanvasElement>this.canvas.nativeElement;
    this.context = <CanvasRenderingContext2D>this.canvasEl.getContext('2d');
    //this.canvasEl.width = this.width;
    //this.canvasEl.height = this.height;
  }

  color: string = '#FFFFFF';

  drawRect(){
    this.context.fillStyle = "#D74022";
    this.context.fillRect(25, 25, 15, 15);
  }

  drawCircle() {
    let x = this.canvasEl.width/2;
    let y = this.canvasEl.height/2;
    let radius = 50;
    this.context.strokeStyle = "blue";
    this.context.fillStyle = "blue";
    this.context.beginPath();
    this.context.arc(x, y, radius, 0, 2 * Math.PI);
    this.context.stroke();
    this.context.fill();
  }

  drawRectable() {
    this.context.fillStyle = "#D74022";
    this.context.fillRect(25, 25, 150, 150);

    this.context.fillStyle = "rgba(0,0,0,0.5)";
    this.context.clearRect(60, 60, 120, 120);
    this.context.strokeRect(90, 90, 80, 80);
  }

  eraseAll(){
    this.context.clearRect(0,0,this.canvasEl.width, this.canvasEl.height);
  }

  characters = ["Hamlet", "Ophelia", "Claudius", "Gertrude", "Rosencrantz", "Guildenstern"];
  character!: string;
}