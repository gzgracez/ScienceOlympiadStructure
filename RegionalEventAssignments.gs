function main() {
  color();
  byEvent();
  byEventB();
}

function color() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("By Student A");
  for (var i=2; i<=16; i++) {
    var range = sheet.getRange(i, 1, 1, 16);
    if (i%2==0){
      range.setBackground("#fff2cc");
    }
    else {
      range.setBackground("white");
    }
  }
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("By Student B");
  for (var i=2; i<=16; i++) {
    var range = sheet.getRange(i, 1, 1, 16);
    if (i%2==0){
      range.setBackground("#fff2cc");
    }
    else {
      range.setBackground("white");
    }
  }
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Events (Conflicts)");
  for (var i=2; i<=25; i++) {
    var range = sheet.getRange(i, 1, 1, 25);
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
  var studentSheet = ss.getSheetByName("By Student A");
  var eventConflicts = ss.getSheetByName("Events (Conflicts)");
  var eventSheet;
  var byEventSheetName = "By Event A";
  if (ss.getSheetByName(byEventSheetName)!=null) {
    ss.deleteSheet(ss.getSheetByName("By Event A"));
  }
  eventSheet = eventConflicts.copyTo(ss).setName(byEventSheetName);
  eventSheet = ss.getSheetByName(byEventSheetName);
  var events = eventSheet.getDataRange();
  var eRange = events.getValues();
  var byEvents = [[]];
  for (var a = 1; a < 26; a++){ //row = events column
    byEvents[0].push(eRange[a][0]);
    byEvents.push([]);
    for (var i = 2; i < 10; i++) { //col = # of time slots
      if (eRange[a][i]!=""){
        eRange[a][2] = eRange[0][i];
        if (i!=2) {
          eRange[a][i] = "";
        }
      }
    }
  }
  eRange[0][2] = "Time";
  eRange[0][3] = "Student";
  eRange[0][4] = "Student";
  eRange[0][5] = "Student";
  Logger.log(eRange);
  
  //students by events
  var students = studentSheet.getDataRange();
  var sRange = students.getValues();
  for (var a = 1; a < 16; a++){ // row = # of students
    for (var i = 2; i < 10; i++) { //col = # of time slots
      if (sRange[a][i]!=""){
        var tempIndex = byEvents[0].indexOf(sRange[a][i]);
        byEvents[tempIndex+1].push(sRange[a][0]);
      }
    }
  }
  Logger.log(byEvents);
  for (var i=1; i<byEvents.length; i++) {
    var t = 0;
    while (t < byEvents[i].length) {
      eRange[i][3+t] = byEvents[i][t];
      t++;
    }
  }
  
  events.setValues(eRange);
  eventSheet.deleteColumns(7,4);
  var fontStyles = [];
  for (var i = 0; i<25; i++) {
    fontStyles.push(["bold"]);
  }
  var bRange = eventSheet.getRange("C2:C26");
  bRange.setFontWeights(fontStyles);
}

function byEventB() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var studentSheet = ss.getSheetByName("By Student B");
  var eventConflicts = ss.getSheetByName("Events (Conflicts)");
  var eventSheet;
  var byEventSheetName = "By Event B";
  if (ss.getSheetByName(byEventSheetName)!=null) {
    ss.deleteSheet(ss.getSheetByName("By Event B"));
  }
  eventSheet = eventConflicts.copyTo(ss).setName(byEventSheetName);
  eventSheet = ss.getSheetByName(byEventSheetName);
  var events = eventSheet.getDataRange();
  var eRange = events.getValues();
  var byEvents = [[]];
  for (var a = 1; a < 26; a++){ //row = events column
    byEvents[0].push(eRange[a][0]);
    byEvents.push([]);
    for (var i = 2; i < 10; i++) { //col = # of time slots
      if (eRange[a][i]!=""){
        eRange[a][2] = eRange[0][i];
        if (i!=2) {
          eRange[a][i] = "";
        }
      }
    }
  }
  eRange[0][2] = "Time";
  eRange[0][3] = "Student";
  eRange[0][4] = "Student";
  eRange[0][5] = "Student";
  Logger.log(eRange);
  
  //students by events
  var students = studentSheet.getDataRange();
  var sRange = students.getValues();
  for (var a = 1; a < 16; a++){ // row = # of students
    for (var i = 2; i < 10; i++) { //col = # of time slots
      if (sRange[a][i]!=""){
        var tempIndex = byEvents[0].indexOf(sRange[a][i]);
        byEvents[tempIndex+1].push(sRange[a][0]);
      }
    }
  }
  Logger.log(byEvents);
  for (var i=1; i<byEvents.length; i++) {
    var t = 0;
    while (t < byEvents[i].length) {
      eRange[i][3+t] = byEvents[i][t];
      t++;
    }
  }
  
  events.setValues(eRange);
  eventSheet.deleteColumns(7,4);
  var fontStyles = [];
  for (var i = 0; i<25; i++) {
    fontStyles.push(["bold"]);
  }
  var bRange = eventSheet.getRange("C2:C26");
  bRange.setFontWeights(fontStyles);
}
