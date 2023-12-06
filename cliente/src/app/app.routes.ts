import { Routes } from '@angular/router';

//Componentes
import { ListarTareasComponent } from './components/listar-tareas/listar-tareas.component';
import { CrearTareaComponent } from './components/crear-tarea/crear-tarea.component';

export const routes: Routes = [
    {path: '', component: ListarTareasComponent},
    {path: 'crear-tarea', component: CrearTareaComponent},
    {path: 'editar-tarea/:id', component: CrearTareaComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];

