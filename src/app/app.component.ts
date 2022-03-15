import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { getDashboardList } from './library';
import { WynIntegration } from '@grapecity/wyn-integration';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loading = false;
  ins: any = null;

  title = 'WynDashboardsEmbeddedSample';
  token = '';
  serverUrl = '';
  username = '';
  dashboardID = '';
  docTitle = '';
  dashboardsList: any;

  constructor(private cd: ChangeDetectorRef) { }

  async ngOnInit() {

  }

  handleSubmit = async (serverUrl: string, token: string, username: string) => {
    const re = /\/$/;
    this.serverUrl = serverUrl.replace(re, "");
    this.token = token;
    this.username = username;
    this.dashboardsList = await getDashboardList(this.serverUrl, this.token);    
  }

  handleLogout = () => {
    this.token = '';
    this.dashboardID = '';
    this.docTitle = '';
    //this.cd.detectChanges();
  }

  dashboardSelected = (dashboardID, docTitle) => {
    this.dashboardID = dashboardID;
    this.docTitle = docTitle;   
    this.ins?.destroy?.();
    this.createViewer();
  }

  createViewer = () => {
    WynIntegration.createDashboardViewer({
      baseUrl: this.serverUrl,
      dashboardId: this.dashboardID,
      //theme: 'red',
      token: this.token,
      // for v5.0, v5.1 ignore
      //version: '5.0.21782.0',
    }, '#wyn-root').then(ins => {
      this.ins = ins;
      this.loading = false;
    });
  }

  createNewDashboard = () => {
    this.ins?.destroy?.();
    this.dashboardID = '';
    this.createDesigner();    
  }

  openDashboardInDesigner = () => {
    this.ins?.destroy?.();  
    this.createDesigner();
  }

  createDesigner = () => {
    WynIntegration.createDashboardDesigner({
      baseUrl: this.serverUrl,
      dashboardId: this.dashboardID,
      lng: 'en',
      token: this.token,
      // for v5.0, v5.1 ignore
      //version: '5.0.21782.0',
    }, '#wyn-root').then(ins => {
      this.ins = ins;
      this.loading = false;
    });
  }
}
