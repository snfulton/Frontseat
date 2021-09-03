import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorComponent } from './editor/editor.component';
import { ScriptComponent } from './script/script.component';
import { RehearseComponent } from './rehearse/rehearse.component';
import { GridViewComponent } from './grid-view/grid-view.component';
import { ProductionComponent } from './production/production.component';
import { PersonnelListComponent } from './personnel-list/personnel-list.component';
import { EsSplitComponent } from './es-split/es-split.component';

const routes: Routes = [
  { path: 'edit', component: EditorComponent},
  { path: 'script', component: ScriptComponent},
  { path: 'rehearse', component: RehearseComponent},
  { path: 'grid', component: GridViewComponent},
  { path: 'production', component: ProductionComponent},
  { path: 'personnel', component: PersonnelListComponent},
  { path: 'split', component: EsSplitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
