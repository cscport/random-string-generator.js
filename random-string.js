function RandomString(length) {
  var sample = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
  var sampleLength = sample.length;
  var result = "";
  for (var i = 0; i < length; i++) {
    result += sample[Math.floor(Math.random() * sampleLength)];
  };

  return result;
}

module.export = RandomString;
