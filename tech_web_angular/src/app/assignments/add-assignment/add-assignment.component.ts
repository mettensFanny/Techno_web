import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})



export class AddAssignmentComponent implements OnInit {
  @Output() nouvelAssignment = new EventEmitter<Assignment>();

  nomDevoir!: string;
  dateRendu!: Date;
  rendu!: boolean;

  constructor() { }
  ngOnInit(): void {
  }

  onSubmit() {
    const newAssignment = new Assignment();
    newAssignment.nom = this.nomDevoir;
    newAssignment.dateDeRendu = this.dateRendu;
    newAssignment.rendu = this.rendu;

    //this.assignments.push(newAssignment); l'exemple de passage pere/fils qui fonctionne pas
    this.nouvelAssignment.emit(newAssignment);
  }
}
