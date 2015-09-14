function generateFolders() {
  var topName = "Science Olympiad 2015-2016 Folder Structure";
  var allFolders = DriveApp.getFolders();
  var noFolder = true;
  while (allFolders.hasNext()) {
    var folder = allFolders.next();
    if (folder.getName() == topName) {
      noFolder = false;
      break;
    }
  }
  if (noFolder) DriveApp.createFolder(topName)
}
