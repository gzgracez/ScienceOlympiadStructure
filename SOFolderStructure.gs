function main() {
  generateInnerFolders(generateTopFolder());
}

function generateTopFolder() {
  var topFolder;
  var topName = "Science Olympiad 2015-2016 Folder Structure";
  var allFolders = DriveApp.getFolders();
  var noFolder = true;
  var indivFolder; // for individual checklist/timeline
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
  var noteLayoutName = "Science Olympiad Notes Layout";
  var buildLayoutName = "Build Resources";
  var materialsLayoutName = "Materials";
  var testResourcesName = "Test Resources";
  var checklistName = "Checklist/Timeline";
  var schedulesName = "Schedules";
  var noteSheetLayout = DriveApp.getFilesByName(noteLayoutName).next();
  var buildSheetLayout = DriveApp.getFilesByName(buildLayoutName).next();
  var materialsSheetLayout = DriveApp.getFilesByName(materialsLayoutName).next();
  var testResourcesLayout = DriveApp.getFilesByName(testResourcesName).next();
  var checklistLayout = DriveApp.getFilesByName(checklistName).next();
  var schedulesLayout = DriveApp.getFilesByName(schedulesName).next();
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
                ["Geologic Mapping", "no"],
                ["Green Generation", "no"],
                ["Hydrogeology", "no"],
                ["Invasive Species", "no"],
                ["It's About Time", "yes"],
                ["Protein Modeling", "no"],
                ["Robot Arm", "yes"],
                ["Wind Power", "yes"],
                ["Wright Stuff", "yes"],
                ["Write It Do It", "no"],
                ["Remote Sensing", "no"],
                ["Optics", "no"]
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
    if (!inFolder.getFilesByName(events[i][0] + " Notes Layout").hasNext())
      noteSheetLayout.makeCopy(events[i][0] + " Notes Layout", inFolder);
    // create inner notes file if it doesn't exist
    if (!inFolder.getFilesByName(events[i][0] + " Schedules").hasNext())
      schedulesLayout.makeCopy(events[i][0] + " Schedules", inFolder);
    
    // create inner files if they don't exist
    // build events
    if (events[i][1] == "yes") {
      if (!inFolder.getFilesByName(events[i][0] + " Materials List").hasNext())
        materialsSheetLayout.makeCopy(events[i][0] + " Materials List", inFolder);
      if (!inFolder.getFilesByName(events[i][0] + " Resources/Links").hasNext())
        buildSheetLayout.makeCopy(events[i][0] + " Resources/Links", inFolder);
    }
    // testing events
    else {
      if (!inFolder.getFilesByName(events[i][0] + " Resources/Links").hasNext())
        testResourcesLayout.makeCopy(events[i][0] + " Resources/Links", inFolder);
    }
  };
  
  // Generate folder for individual checklist/timeline
  if (!topFolder.getFoldersByName("A-Individual Checklist/Timeline").hasNext()) {
    indivFolder = topFolder.createFolder("A-Individual Checklist/Timeline");
  }
  else {
    indivFolder = topFolder.getFoldersByName("A-Individual Checklist/Timeline").next();
  }
  var students = [
    ["Student 1"],
    ["Student 2"]
  ];
  for (var i=0; i<students.length; i++) {
    if (!indivFolder.getFilesByName(students[i] + " Checklist/Timeline").hasNext())
      checklistLayout.makeCopy(students[i] + " Checklist/Timeline", indivFolder);
  }
}
