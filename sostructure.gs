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
  var noteSheetLayout = DriveApp.getFilesByName(noteLayoutName).next();
  var events = ["Air Trajectory", 
                "Anatomy & Physiology", 
                "Astronomy", 
                "Bridge Building", 
                "Cell Biology", 
                "Chemistry Lab",
                "Disease Detectives",
                "Dynamic Planet",
                "Electric Vehicle",
                "Experimental Design",
                "Forensics",
                "Fossils",
                "Game On",
                "GeoLogic Mapping",
                "Green Generation",
                "Hydrogeology",
                "Invasive Species",
                "It's About Time",
                "Protein Modeling",
                "Robot Arm",
                "Wind Power",
                "Wright Stuff",
                "Write It Do It"
               ];
  for (var i=0; i<events.length; i++){
    var inFolder;
    // create/get inner folder
    if (!topFolder.getFoldersByName(events[i]).hasNext()) {
      inFolder = topFolder.createFolder(events[i]);
    }
    else {
      inFolder = topFolder.getFoldersByName(events[i]).next();
    }
    
    // create inner file if it doesn't exist
    if (!inFolder.getFilesByName(events[i]).hasNext())
      noteSheetLayout.makeCopy(events[i], inFolder);
  };
}
