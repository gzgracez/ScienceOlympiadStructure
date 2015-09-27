function main() {
  generateInnerFolders(generateTopFolder());
}

function generateTopFolder() {
  var topFolder;
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
  if (noFolder) {
    topFolder = DriveApp.createFolder(topName)
  }
  else {
    topFolder = DriveApp.getFoldersByName(topName).next();
  }
  return topFolder;
}

function generateInnerFolders(topFolder){
  var noteLayoutName = "Science Olympiad Layout";
  var buildLayoutName = "Science Olympiad Build Checklist";
  var noteSheetLayout = DriveApp.getFilesByName(noteLayoutName).next();
  var buildSheetLayout = DriveApp.getFilesByName(buildLayoutName).next();
  var events = [["Air Trajectory", "yes"],
                ["Anatomy & Physiology", "no"],
                ["Astronomy", "no"],
                ["Bridge Building", "yes"],
                ["Cell Biology", "no"],
                ["Chemistry Lab", "no"],
                ["Disease Detectives", "no"],
                ["Dynamic Planet", "no"],
                ["Electric Vehicle", "yes"],
                ["Experimental Design", "no"],
                ["Forensics", "no"],
                ["Fossils", "no"],
                ["Game On", "no"],
                ["GeoLogic Mapping", "no"],
                ["Green Generation", "no"],
                ["Hydrogeology", "no"],
                ["Invasive Species", "no"],
                ["It's About Time", "yes"],
                ["Protein Modeling", "no"],
                ["Robot Arm", "yes"],
                ["Wind Power", "yes"],
                ["Wright Stuff", "yes"],
                ["Write It Do It", "no"]
               ];
  for (var i=0; i<events.length; i++){
    var inFolder;
    // create/get inner folder
    if (!topFolder.getFoldersByName(events[i][0]).hasNext()) {
      inFolder = topFolder.createFolder(events[i][0]);
    }
    else {
      inFolder = topFolder.getFoldersByName(events[i][0]).next();
    }
    
    // create inner notes file if it doesn't exist
    if (!inFolder.getFilesByName(events[i][0]).hasNext())
      noteSheetLayout.makeCopy(events[i][0], inFolder);
    // create inner build checklist file if it doesn't exist
    if (events[i][1] == "yes" && !inFolder.getFilesByName(events[i][0] + " Build Checklist").hasNext())
      buildSheetLayout.makeCopy(events[i][0] + " Build Checklist", inFolder);
  };
}
