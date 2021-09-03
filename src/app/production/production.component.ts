import { Component, OnInit } from '@angular/core';
import { Crew, Cast, Character } from '../personnel-model/personnel.model';
import { PersonnelListComponent } from '../personnel-list/personnel-list.component';
import { FormControl } from '@angular/forms';
import { stringify } from '@angular/compiler/src/util';
import { ActStructure } from '../play-struct/play-struct.model';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.scss']
})
export class ProductionComponent implements OnInit {

  play = [] as any;

  ngOnInit() {
    this.act = new ActStructure();
    this.play.push(this.act);
  }
 
  
  act = new ActStructure();

  title : string = '';

  titleInput = new FormControl('');

  saveTitle() {
    this.title = this.title;
    console.log(this.title);
  }

  counter = 0;
  numActs: number[] = [];
  acts: string[] = [];
  scenes: string[] = [];
  counter2 = 0;
  scene = new ActStructure();

  addAct() {
    this.counter++;
    this.act = new ActStructure();
    this.play.push(this.act);
    this.numActs.push(this.counter);
    this.acts.push("Act " + this.counter.toString());
    console.log(this.acts);
    console.log(this.play);
    //this.act.name = this.acts[this.counter];
  }
  /*
  */
  addScene(i: number) {
    this.counter2++;
    this.scene = new ActStructure()
    this.scene.name = "Scene";//+ this.counter2.toString();
    
    this.play[i].children.append(this.scene);
    //this.acts.splice(i + this.counter2, 0, "Scene " + this.counter2.toString());
    //this.scenes.push("Scene " + this.counter2.toString());
    console.log(this.play);
  }
  
  
}
