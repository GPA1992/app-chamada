import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface Student {
  name: string;
  status: string;
}

const STUDENTS: Student[] = [
  { name: "Ana Silva", status: "presente" },
  { name: "Carlos Oliveira", status: "ausente" },
  { name: "Larissa Souza", status: "presente" },
  { name: "Roberto Santos", status: "ausente" },
  { name: "Amanda Pereira", status: "presente" },
  { name: "Rafaela Lima", status: "ausente" },
  { name: "Fernando Costa", status: "presente" },
  { name: "Juliana Oliveira", status: "ausente" },
  { name: "Marcos Santos", status: "presente" },
  { name: "Luciana Oliveira", status: "ausente" },
  { name: "Pedro Costa", status: "presente" },
  { name: "Gabriela Lima", status: "ausente" },
  { name: "Lucas Pereira", status: "presente" },
  { name: "Mariana Silva", status: "ausente" },
  { name: "Felipe Souza", status: "presente" },
  { name: "Isabela Santos", status: "ausente" },
  { name: "Gustavo Oliveira", status: "presente" },
  { name: "Camila Costa", status: "ausente" },
  { name: "Eduardo Lima", status: "presente" },
  { name: "Beatriz Oliveira", status: "ausente" },
];

@Component({
  selector: 'app-call',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './call.component.html',
  styleUrl: './call.component.css'
})
export class CallComponent {
  displayedColumns: string[] = ['name', 'status', 'action'];
  dataSource = STUDENTS;
}
