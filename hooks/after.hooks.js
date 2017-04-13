//
// (function(){
//     var jsonFormatter = cucumber.Listener.JsonFormatter(),
//     jsonFile = require('jsonfile');
//     this.AfterFeature(function(feature, callback){
//         console.log('in here');
//         jsonFormatter.log=function(json){
//             jsonFile.writeFile('report.json', JSON.parse(json),function(error){
//
//             });
//         }
//     });
//
// });