import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorComponent } from './editor/editor.component';
import { ScriptComponent } from './script/script.component';
import { RehearseComponent } from './rehearse/rehearse.component';

const routes: Routes = [
  { path: 'edit', component: EditorComponent},
  { path: 'script', component: ScriptComponent},
  { path: 'rehearse', component: RehearseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
