import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dashboards-list',
  templateUrl: './dashboards-list.component.html',
  styleUrls: ['./dashboards-list.component.css']
})
export class DashboardsListComponent implements OnInit {

  selectedDashboard: any;
  dashboardID = "";
  dashboardIconSrc = "assets/dashboard.svg";

  @Input() dashboardSelectedCallbackFn: (dashboardID, title) => void;
  @Input() token: string;
  @Input() serverUrl: string;
  @Input() dashboardsList: any;

  constructor() { }

  ngOnInit(): void {    
    
  }

  onClick = (dashboard: any) => {
    console.log(dashboard);
    this.selectedDashboard = dashboard;
    this.dashboardSelectedCallbackFn(dashboard.id, dashboard.name);
  }

  getIconSrc = (rpt: any) => {
    return this.dashboardIconSrc;
  }
}
