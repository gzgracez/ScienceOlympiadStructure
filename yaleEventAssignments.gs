function main() {
  color();
  byEvent();
}

function color() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("By Student");
  for (var i=2; i<=16; i++) {
    var range = sheet.getRange(i, 1, 1, 8);
    if (i%2==0){
      range.setBackground("#fff2cc");
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
  for (var a = 1; a < 24; a++){ //row 
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
  events.setValues(eRange);
  eventSheet.deleteColumns(7,2);
  
  var students = studentSheet.getDataRange();
  var sRange = students.getValues();
  
  Logger.log(eRange);
}
