# WynDashboardsEmbedSample_Angular

This sample demonstrates the use of Wyn Dashboard Designer & Viewer connected to the Wyn portal in an Angular app

## System requirements

This sample requires:
 * [Node.js](https://nodejs.org/en/download/) 10.14.0 or newer
 * [Wyn Enterprise](https://wyn.grapecity.com/demos/request/trial) 5.0.00236.0 or newer

### Wyn Enterprise System Configurations for API usage
1. In the Administrator Portal after installing Wyn Enterprise, open the System Configuration Page. 
2. Add http://localhost:3000 (or the host application URL) in the "Allowed CORS Origins" section. 
3. Add 'content-disposition' and 'location' in the "Exposed Headers" section. 

## Build and run the sample

Run the following commands:
```
npm install
npm run build
npm run start -- the application starts at http://localhost:3000
```

### Documentation

- [Developer Documentation](https://learn.wynenterprise.com/docs/dev-docs)
