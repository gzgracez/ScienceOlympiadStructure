function main() {
  color();
  byStudent();
}

function color () {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  studentSheet = ss.getSheetByName("By Students");
  for (var i=2; i<=16; i++) {
    var range = studentSheet.getRange(i, 1, 1, 16);
    if (i%2==0){
      range.setBackground("#fff2cc");
    }
    else {
      range.setBackground("white");
    }
  }
  
  for (var i=19; i<=33; i++) {
    var range = studentSheet.getRange(i, 1, 1, 16);
    if (i%2==1){
      range.setBackground("#fff2cc");
    }
    else {
      range.setBackground("white");
    }
  }
}

function byStudent() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var eventASheet = ss.getSheetByName("A Team");
  var eventBSheet = ss.getSheetByName("B Team");
  var studentSheet = ss.getSheetByName("By Students");
  clear();
  var students = studentSheet.getDataRange();
  var srange = students.getValues();
  var eventsA = eventASheet.getDataRange();
  var earange = eventsA.getValues();
  var eventsB = eventBSheet.getDataRange();
  var ebrange = eventsB.getValues();
  eToS(earange, srange);
  eToS(ebrange, srange);
  
  for (var sr = 1; sr < 33; sr++) {
    if (sr != 16 && sr != 17) {
      var count = 0;
      for (var sc = 2; sc < 11; sc++) { 
        if (sc != 3 && srange[sr][sc] != "") {
          count++;
        }
      }
      srange[sr][11] = count;
    }
  }
  
  students.setValues(srange);
}

function clear() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var studentSheet = ss.getSheetByName("By Students");
  var students = studentSheet.getDataRange();
  var sRange = students.getValues();
  for (var r = 1; r < 33; r++) {
    for (var c = 2; c < 11; c++) { 
      sRange[r][c] = "";
    }
  }
  students.setValues(sRange);
}

function eToS(eRange, sRange) {
  for (var er = 1; er < 26; er++) {
    for (var sr = 1; sr < 33; sr++) {
      for (var sc = 2; sc < 12; sc++) { 
        if (eRange[er][3] == sRange[sr][0]) {
          if (eRange[er][2] == sRange[0][sc]) {
            sRange[sr][sc] = eRange[er][0];
          }
          if (eRange[0][1] == sRange[0][sc]) {
            sRange[sr][sc] = eRange[er][1];
          }
        }
        else if (eRange[er][4] == sRange[sr][0]) {
          if (eRange[er][2] == sRange[0][sc]) {
            sRange[sr][sc] = eRange[er][0];
          }
          if (eRange[0][1] == sRange[0][sc]) {
            sRange[sr][sc] = eRange[er][1];
          }
        }
        else if (eRange[er][5] != "" && eRange[er][5] == sRange[sr][0]) {
          if (eRange[er][2] == sRange[0][sc]) {
            sRange[sr][sc] = eRange[er][0];
          }
          if (eRange[0][1] == sRange[0][sc]) {
            sRange[sr][sc] = eRange[er][1];
          }
        }
      }
    }
  }
}
