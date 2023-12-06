import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { TareaService } from '../../services/tarea.service';
import { Tarea } from '../../models/tarea';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-tareas',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './listar-tareas.component.html',
  styleUrl: './listar-tareas.component.css'
})
export class ListarTareasComponent implements OnInit{
  listTareas: Tarea[] = [];

  constructor(private _tareaService: TareaService) { }

  ngOnInit() {
    this.obtenerTareas();
  }


  obtenerTareas(){
    this._tareaService.getTareas().subscribe(data => {
      console.log(data);
      this.listTareas = data.tareas;
    }, error =>{
      console.log(error);
    })
  }

  eliminarTarea(id: any){
    this._tareaService.eliminarTarea(id).subscribe(data => {
      console.log(data);
      console.log('Tarea eliminada');
      this.obtenerTareas();
    }, error =>{
      console.log(error);
    })
  }


}
