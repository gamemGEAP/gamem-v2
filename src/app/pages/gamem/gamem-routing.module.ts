import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamemComponent } from './gamem.component';

const routes: Routes = [
  { path: '', redirectTo: 'gamem', pathMatch: 'full' },
  {
    path: 'gamem',
    component: GamemComponent,
    children: [
      {
        path: 'configuracoes',
        loadChildren: () =>
          import('./configuracoes/configuracoes.module').then(
            (m) => m.ConfiguracoesModule
          ),
      },
      {
        path: 'formulario',
        loadChildren: () =>
          import('./formulario/formulario.module').then(
            (m) => m.FormularioModule
          ),
      },
      {
        path: 'pacientes',
        loadChildren: () =>
          import('./pacientes/pacientes.module').then((m) => m.PacientesModule),
      },
      {
        path: 'trabalhadores',
        loadChildren: () =>
          import('./trabalhadores/trabalhadores.module').then(
            (m) => m.TrabalhadoresModule
          ),
      },
      {
        path: 'tratamentos',
        loadChildren: () =>
          import('./tratamentos/tratamentos.module').then(
            (m) => m.TratamentosModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamemRoutingModule {}
