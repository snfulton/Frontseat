import { Component, OnInit } from '@angular/core';
import { Character, Crew, Cast } from '../personnel-model/personnel.model';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-personnel-list',
  templateUrl: './personnel-list.component.html',
  styleUrls: ['./personnel-list.component.scss']
})
export class PersonnelListComponent{
  //CHARACTER SECTION
  newChar : string = '';
  charArray : string[] = [];

  // Function to add character
  addChar(){
      this.charArray.push(this.newChar);
      //Reset input
      this.newChar = '';
      console.log(this.charArray);
  }

  deleteChar() {
    this.charArray.pop();
  }
  chars = new FormControl('', [Validators.required]);

  getCharsErrorMessage() {
    if (this.chars.hasError('required')) {
      return 'You must enter a name';
    }
    return '';
  }


  // CREW SECTION
  crewMem = new Crew();
  crewArray= [] as any;

  //log(x: any) { console.log(x);}

  addCrewForm() {
    this.crewArray.push(this.crewMem);
    this.crewMem = new Crew();
  }

  removeCrewForm(index: any) {
    if (index !== -1) {
        this.crewArray.splice(index, 1);
    }   
  }

  onCrewSubmit() {
    console.log(this.crewArray);
  }

  //CAST SECTION
  actor = new Cast();
  castArray= [] as any;

  addCastForm() {
    this.castArray.push(this.actor);
    this.actor = new Cast();
  }

  removeCastForm(index: any) {
    if (index !== -1) {
      this.castArray.splice(index, 1);
    }  
  }

  onCastSubmit() {
    console.log(this.castArray);
  }

  //Crew Errors
  charName = new FormControl('', [Validators.required]);

  getCharErrorMessage() {
    if (this.charName.hasError('required')) {
      return 'You must enter a character name';
    }
    return '';
  }

  crewName = new FormControl('', [Validators.required]);

  getCrewNameErrorMessage() {
    if (this.crewName.hasError('required')) {
      return 'You must enter a name';
    }
    return '';
  }

  crewEmail = new FormControl('', [Validators.required, Validators.email]);

  getCrewEmailErrorMessage() {
    if (this.crewEmail.hasError('required')) {
      return 'You must enter a value';
    }

    return this.crewEmail.hasError('email') ? 'Not a valid email' : '';
  }

  crewPhone = new FormControl('', [Validators.required, Validators.minLength(10)]);

  getCrewPhoneErrorMessage() {
    if (this.crewPhone.hasError('required')) {
      return 'You must enter a value';
    }

    if (this.crewPhone.hasError('minlength')) {
      return 'Phone number must have at least 10 digits';
    }

    return '';
  }

  position = new FormControl('', [Validators.required]);

  getPosErrorMessage() {
    if (this.position.hasError('required')) {
      return 'You must select a position';
    }
    return '';
  }

  admin = new FormControl('');


  //Cast Errors

  castName = new FormControl('', [Validators.required]);

  getCastNameErrorMessage() {
    if (this.castName.hasError('required')) {
      return 'You must enter a name';
    }
    return '';
  }

  castEmail = new FormControl('', [Validators.required, Validators.email]);

  getCastEmailErrorMessage() {
    if (this.castEmail.hasError('required')) {
      return 'You must enter a value';
    }

    return this.castEmail.hasError('email') ? 'Not a valid email' : '';
  }

  castPhone = new FormControl('', [Validators.required, Validators.minLength(10)]);

  getCastPhoneErrorMessage() {
    if (this.castPhone.hasError('required')) {
      return 'You must enter a value';
    }

    return this.castPhone.hasError('length') ? 'Phone number must have at least 10 digits' : '';
  }

  charSel = new FormControl('', [Validators.required]);

  getCharSelErrorMessage() {
    if (this.charSel.hasError('required')) {
      return 'You must select a character';
    }
    return '';
  }
}
