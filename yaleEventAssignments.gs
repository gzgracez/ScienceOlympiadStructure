function color() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[2];
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
