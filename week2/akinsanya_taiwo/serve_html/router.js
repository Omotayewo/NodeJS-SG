const httpStatus = require("http-status-codes"),
  htmlContentType = {
    "Content-Type": "text/html",
  },
  routes = {
    GET: {},
    POST: {},
  };
exports.handle = (req, res) => {
  try {
    if (routes[req.method][req.url]) {
      routes[req.method][req.url](req, res);
    } else {
      res.writeHead(httpStatus.N0T_FOUND, htmlContentType);
      res.end("<h1>No such file exists</h1>");
    }
  } catch (err) {
    console.log("Error: " + err);
  }
};
exports.get = (url, action) => {
  routes["GET"][url] = action;
};
exports.post = (url, action) => {
  routes["POST"][url] = action;
};