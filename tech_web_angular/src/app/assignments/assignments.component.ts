import { Component, OnInit } from '@angular/core';
import { Assignment } from './assignment.model';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {

  titre = "Mon application sur les Assignments !";
  ajoutActive = false;
  assignmentSelectionne!: Assignment;
  formVisible = false;

  assignments: Assignment[] = [
    {
      nom: "TP1 sur les WebComponents, un lecteur audio amélioré",
      dateDeRendu: new Date('2020-11-17'),
      rendu: true
    },
    {
      nom: "TP2 sur Angular, un joli hestionnaire de devoirs (Assignments)",
      dateDeRendu: new Date('2020-12-15'),
      rendu: false
    },
    {
      nom: "TP3 sur Angula,utilisation du router et de Web Services",
      dateDeRendu: new Date('2021-01-04'),
      rendu: false
    }
  ];

  ngOnInit(): void {
    setTimeout(() => {
      this.ajoutActive = true;
    }, 2000);
  }

  assignmentClique(assignment: Assignment) {
    this.assignmentSelectionne = assignment;
  }

  onAddAssignmentBtnClick(){
    this.formVisible = true;
  }

  onNouvelAssignment(event:Assignment){
    this.assignments.push(event);
    this.formVisible = false;
  }

  constructor() { }

}