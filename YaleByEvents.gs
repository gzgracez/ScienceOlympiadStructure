function main() {
  color();
  byEvent();
}

function color() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("By Student");
  for (var i=2; i<=16; i++) {
    var range = sheet.getRange(i, 1, 1, 9);
    if (i%2==0){
      range.setBackground("#fff2cc");
    }
    else {
      range.setBackground("white");
    }
  }
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Events (Conflicts)");
  for (var i=2; i<=24; i++) {
    var range = sheet.getRange(i, 1, 1, 8);
    if (i%2==0){
      range.setBackground("#cfe2f3");
    }
    else {
      range.setBackground("white");
    }
  }
}

function byEvent() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var studentSheet = ss.getSheetByName("By Student");
  var eventConflicts = ss.getSheetByName("Events (Conflicts)");
  var eventSheet;
  if (ss.getSheetByName("By Event")!=null) {
    ss.deleteSheet(ss.getSheetByName("By Event"));
  }
  eventSheet = eventConflicts.copyTo(ss).setName("By Event");
  eventSheet = ss.getSheetByName("By Event");
  var events = eventSheet.getDataRange();
  var eRange = events.getValues();
  var byEvents = [[]];
  for (var a = 1; a < 24; a++){ //row
    byEvents[0].push(eRange[a][0]);
    byEvents.push([]);
    for (var i = 2; i < 8; i++) { //col
      if (eRange[a][i]!=""){
        eRange[a][2] = eRange[0][i];
        eRange[a][i] = "";
      }
    }
  }
  eRange[0][2] = "Time";
  eRange[0][3] = "Student";
  eRange[0][4] = "Student";
  eRange[0][5] = "Student";
  
  //students by events
  var students = studentSheet.getDataRange();
  var sRange = students.getValues();
  for (var a = 1; a < 16; a++){ //row 
    for (var i = 2; i < 8; i++) { //col
      if (sRange[a][i]!=""){
        var tempIndex = byEvents[0].indexOf(sRange[a][i]);
        byEvents[tempIndex+1].push(sRange[a][0]);
      }
    }
  }
  
  for (var i=1; i<byEvents.length; i++) {
    var t = 0;
    while (t < byEvents[i].length) {
      eRange[i][3+t] = byEvents[i][t];
      t++;
    }
  }
  
  events.setValues(eRange);
  eventSheet.deleteColumns(7,2);
}
