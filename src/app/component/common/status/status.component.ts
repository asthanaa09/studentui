import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

  @Input()
  message: string = '';
  @Input()
  isSuccess: boolean = false;
  @Input()
  showSpinner: boolean = false;
  @Input()
  hide: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
}
