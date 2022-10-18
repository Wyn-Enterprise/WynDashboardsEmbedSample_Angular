# WynDashboardsEmbedSample_Angular

This sample demonstrates the use of Wyn Dashboard Designer & Viewer connected to the Wyn portal in an Angular app

## System requirements

This sample requires:
 * [Node.js](https://nodejs.org/en/download/) 10.14.0 or newer
 * [Wyn Enterprise](https://wyn.grapecity.com/demos/request/trial) 5.0.00236.0 or newer
## Build and run the sample

### Description


### Steps

1. Open cmd.exe and go to the root directory WynDashboardsEmbedSample_Angular
2. Enter `npm install`
3. Enter `npm update @grapecity/wyn-integration --latest`
4. Open config.json under the src/assets folder and enter the Wyn Server url and Username to pre-fill the input boxes on application load
5. Enter `ng serve --open`
6. Open http://localhost:4200 in browser

### Wyn Enterprise System Configurations for API usage
1. In the Administrator Portal after installing Wyn Enterprise, open the System Configuration Page. 
2. Add http://localhost:4200 (or the host application URL) in the "Allowed CORS Origins" section. 
3. Add 'content-disposition' and 'location' in the "Exposed Headers" section. 

After configuration, the System configuration page should look like the image below: 
![](WynEnterprise-SystemConfigPage.png)

### About semantic versioning

package.json
```
"package-name": "~x.y.z"
```

- x - major releases
- y - minor releases
- z - patch releases
- ~ - updating packages as instructed will update to the latest patch

### Documentation

- [Developer Documentation](https://wyn.grapecity.com/docs/dev-docs/)
