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
    if (!DriveApp.getFoldersByName(events[i]).hasNext()) 
      topFolder.createFolder(events[i]);
  };
}
