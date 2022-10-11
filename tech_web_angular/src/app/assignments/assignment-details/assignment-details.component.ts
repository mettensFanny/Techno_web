import { Component, Input, OnInit } from '@angular/core';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-assignment-details',
  templateUrl: './assignment-details.component.html',
  styleUrls: ['./assignment-details.component.css']
})
export class AssignmentDetailsComponent implements OnInit {
  @Input() assignmentTransmis!:Assignment;

  onAssignmentRendu(){
    this.assignmentTransmis.rendu=true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
