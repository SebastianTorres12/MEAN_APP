import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Tarea } from '../../models/tarea';
import { Router } from '@angular/router';
import { TareaService } from '../../services/tarea.service';


@Component({
  selector: 'app-crear-tarea',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, ReactiveFormsModule, CommonModule],
  templateUrl: './crear-tarea.component.html',
  styleUrl: './crear-tarea.component.css'
})

export class CrearTareaComponent implements OnInit {
  tareaForm: FormGroup;
  titulo: string = 'Crear Tarea';
  id: string | null = '';


  constructor(private fb: FormBuilder, private router: Router, private _tareaService: TareaService, private aRouter: ActivatedRoute) {
    this.tareaForm = this.fb.group({
      tarea: ['', Validators.required],
      detalle: ['', Validators.required],
      fecha_ini: ['', Validators.required],
      fecha_fin: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarTarea() {
    console.log(this.tareaForm);
    console.log(this.tareaForm.get('tarea')?.value);

    const TAREA: Tarea = {
      nombre: this.tareaForm.get('tarea')?.value,
      detalle: this.tareaForm.get('detalle')?.value,
      fecha_ini: this.tareaForm.get('fecha_ini')?.value,
      fecha_fin: this.tareaForm.get('fecha_fin')?.value,

    }

    if (this.id !== null) {
      // editamos
      this._tareaService.editarTarea(this.id, TAREA).subscribe(data => {
        console.log("La tarea se edito con exito"),
          console.log(data),
          this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.tareaForm.reset();
      })
    } else {
      // agregamos 
      this._tareaService.guardarTarea(TAREA).subscribe(data => {
        console.log("La tarea se guardo con exito"),
          console.log(data),
          this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.tareaForm.reset();
      })
    }

    console.log(TAREA);


  }

  esEditar() {
    if (this.id !== null) {
      console.log('Editando tarea. ID:', this.id);
      this.titulo = 'Editar Tarea';
      this._tareaService.obtenerTarea(this.id).subscribe(data => {
        console.log('Datos obtenidos:', data.tarea);

        if (data.tarea) {
          // Formatear las fechas al formato "yyyy-MM-dd"
          const fechaIni = new Date(data.tarea.fecha_ini).toISOString().split('T')[0];
          const fechaFin = new Date(data.tarea.fecha_fin).toISOString().split('T')[0];

          this.tareaForm.patchValue({
            tarea: data.tarea.nombre,
            detalle: data.tarea.detalle,
            fecha_ini: fechaIni,
            fecha_fin: fechaFin,
          });
        }
      });
    }
  }


}
