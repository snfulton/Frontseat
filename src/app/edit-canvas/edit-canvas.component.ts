import { Component, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { switchMap, takeUntil, pairwise } from 'rxjs/operators'

@Component({
   // notice the variable name myCanvas
   templateUrl: './edit-canvas.component.html',
   //template: `<canvas #canvas></canvas><button (click)="drawRect()">Draw rectangle</button>`,
   selector: 'app-edit-canvas',
   styleUrls: ['./edit-canvas.component.scss']
   //styles: ['canvas { border: 2px solid #000; background: white;}']
})
export class EditCanvasComponent implements AfterViewInit {
  // its important myCanvas matches the variable name in the template
  @ViewChild('canvas')
  public canvas!: ElementRef<HTMLCanvasElement>;
  
  public context!: CanvasRenderingContext2D;

  public canvasEl!: HTMLCanvasElement;

  public ngAfterViewInit() {
    this.canvasEl = <HTMLCanvasElement>this.canvas.nativeElement;
    this.context = <CanvasRenderingContext2D>this.canvasEl.getContext('2d');
  }

  drawRect(){
    this.context.fillStyle = "#D74022";
    this.context.fillRect(25, 25, 15, 15);
  }

  drawRectable() {
    this.context.fillStyle = "#D74022";
    this.context.fillRect(25, 25, 150, 150);

    this.context.fillStyle = "rgba(0,0,0,0.5)";
    this.context.clearRect(60, 60, 120, 120);
    this.context.strokeRect(90, 90, 80, 80);
  }
}