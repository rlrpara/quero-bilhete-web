import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdministracaoComponent } from './pages/administracao/administracao.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmpresasComponent } from './pages/empresas/empresas.component';
import { LoginComponent } from './pages/login/login.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  },
  {
    path: "administrativo",
    component: AdministracaoComponent
  },
  {
    path: "empresas",
    component: EmpresasComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "perfil",
    component: PerfilComponent
  },
  {
    path: "usuarios",
    component: UsuariosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
