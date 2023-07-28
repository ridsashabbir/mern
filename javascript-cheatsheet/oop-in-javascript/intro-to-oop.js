let videoName = "intro to oop";
let fileformat = "mp4";
let duration = " 2:56";
let owner = "Ridsa";

function getVideoName() {
  return videoName;
}

function getFileformat() {
  return fileformat;
}

function getDuration() {
  return duration;
}

function getOwner() {
  return owner;
}

// let's implement it i form of object
let video = {
  videoName: "intro to oop",
  fileformat: "mp4",
  duration: "2:56",
  owner: "Ridsa",
  getVideoName: function () {
    return this.videoName;
  },
  getFileformat: function () {
    return this.fileformat;
  },
  getDuration: function () {
    return this.duration;
  },
  getOwner: function () {
    return this.owner;
  },
};

// now let's try to access the values from the object
console.log(video.getVideoName());
console.log(video.getFileformat());
console.log(video.getDuration());
console.log(video.getOwner());
