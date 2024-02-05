// ***************** [4] ********************

// ? Meter > Millimeter, centimeter, inch, km , Miles

function conversionFromMeter() {
  var meter = +prompt("Enter the length in meter:");
  if(isNaN(meter)) {
    alert("Invalid input!");
    return;
  }
  var conversion = {
    mm: meter * 1000,
    cm: meter * 100,
    inch: meter * 39.3701,
    km: meter / 39370,
    miles: meter / 63360,
  };
  return conversion;
}

var getConversion = conversionFromMeter();
console.log("Conversion of Meter to: " + getConversion.mm + " mm");
console.log("Conversion of Meter to: " + getConversion.cm + " cm");
console.log(
  "Conversion of Meter to: " + getConversion.inch.toFixed(4) + " inch"
);
console.log("Conversion of Meter to: " + getConversion.km.toFixed(4) + " km");
console.log(
  "Conversion of Meter to: " + getConversion.miles.toFixed(4) + " miles"
);
