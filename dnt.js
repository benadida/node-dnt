/*
 * DNT implementation in Node
 */

exports.dnt = function(config) {
  console.log("setting up");
  console.log(config);
  return function(req, res, next) {
    var dnt_header = req.get('DNT');

    console.log("DNT header is: " + dnt_header);

    // no preference or "track me" preference
    if (!dnt_header || dnt_header == "0") {
      console.log("no dnt");
      return process.nextTick(next);
    }

    res.set({
      'TK': '1'
    });

    console.log("set tk");

    return process.nextTick(next);
  };
};