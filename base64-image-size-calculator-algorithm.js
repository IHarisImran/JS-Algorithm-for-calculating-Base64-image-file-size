base64String = "data:image/jpeg;base64...";
var stringLength = base64String.length - 'data:image/png;base64,'.length;
var sizeInBytes = 4 * Math.ceil((stringLength / 3)) * 0.5624896334383812;
var sizeInKb = sizeInBytes / 1000;
alert(`${sizeInKb} KB`);