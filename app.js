const { urlencoded } = require("express")
//Formatage mois jour heure minutes secondes sur 2 char
Date.prototype.getMonthFormatted = function () {
  var month = this.getMonth() + 1
  return month < 10 ? "0" + month : month
}
Date.prototype.getDateFormatted = function () {
  var date = this.getDate()
  return date < 10 ? "0" + date : date
}
Date.prototype.getHoursFormatted = function () {
  var hours = this.getHours()
  return hours < 10 ? "0" + hours : hours
}
Date.prototype.getMinutesFormatted = function () {
  var minutes = this.getMinutes()
  return minutes < 10 ? "0" + minutes : minutes
}
Date.prototype.getSecondsFormatted = function () {
  var seconds = this.getSeconds()
  return seconds < 10 ? "0" + seconds : seconds
}

var express = require("express"),
  helmet = require("helmet"),
  session = require("express-session"),
  FileStore = require("session-file-store")(session),
  uid = require("uid-safe"),
  bodyParser = require("body-parser"),
  parseurl = require("parseurl"),
  urlencodedParser = bodyParser.urlencoded({
    extended: false,
  }),
  fs = require("fs"),
  favicon = require("serve-favicon"),
  path = require("path"),
  log4js = require("log4js"),
  geoip = require("geoip-lite"),
  minify = require("express-minify"),
  compression = require("compression"),
  frameguard = require("frameguard"),
  ms = require("ms"),
  datetime = new Date(),
  logger = log4js.getLogger("file"),
  nbLog =
    datetime.getFullYear() +
    String(datetime.getMonthFormatted()) +
    String(datetime.getDate()) +
    String(datetime.getHoursFormatted()) +
    String(datetime.getMinutesFormatted()) +
    String(datetime.getSecondsFormatted()),
  mysql = require("mysql"),
  ejs = require("ejs"),
  app = express()

let p0rt = 80,
  filePath = `./logs/ip${nbLog}.log`,
  sess = {
    genid: function (req) {
      return uid.sync(18)
    },
    store: new FileStore(),
    resave: false,
    saveUninitialized: true,
    secret: "qwerty",
    cookie: {
      expires: datetime.setUTCFullYear(datetime.getFullYear() + 1),
      maxAge: ms("90 days"),
      SameSite: "Lax",
    },
    horodate: "",
    ip: "",
    geoloc: {},
  }

//APP.LOGGER_________________________________________________________________
log4js.configure({
  appenders: {
    console: { type: "console" },
    file: { type: "file", filename: `logs/ip${nbLog}.log` },
  },
  categories: {
    default: { appenders: ["console"], level: "trace" },
    file: { appenders: ["file"], level: "trace" },
  },
})

//APP.FS____________________________________________________________________
fs.writeFile(filePath, datetime, (err) => {
  if (err) throw err
  console.log(`The file ${nbLog}.log was succesfully created`)
})

//APP.USE___________________________________________________________________
app.use(helmet())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(favicon(path.join(__dirname, "/public", "favicon.ico")))

app.use(
  frameguard({
    action: "sameorigin",
  })
)

app.use(compression())

//STATIC____________________________________________________________________
express.static.mime.define({
  "text/coffeescript": ["coffee"],
  "text/less": ["less"],
  "text/x-scss": ["scss"],
  "text/stylus": ["styl"],
})

app.use(
  minify({
    cache: false,
    jsMatch: /js/,
    cssMatch: /css/,
    scssMatch: "/scss/",
  })
)

app.use(
  "/static",
  express.static(__dirname + "/public", {
    maxAge: "0d",
  })
)

//sess.store.clear()
app.use(session(sess))

//app.engine('html', require('ejs').renderFile);
//app.set('view engine', 'pug')
app.set("view engine", "ejs")
app.set("views", "public")

if (app.get("env") === "production") {
  app.set("trust proxy", 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
}

//mysql
var conMysql
function handleDisconnect() {
  conMysql = mysql.createConnection({
    host: "localhost",
    user: "webuser",
    password: "azerty", //local=azerty online=iop
  })

  conMysql.connect(function (err) {
    if (err) {
      console.error("error connecting: " + err.stack)
      setTimeout(handleDisconnect, 2000)
    }
    console.log("connected as id " + conMysql.threadId)
  })

  conMysql.on("error", function (err) {
    console.log("connection lost: ", err)
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      handleDisconnect()
    } else throw err
  })
}
handleDisconnect()

//APP.GET_________________________________________________________________
app.get("/", (req, res) => {
  //VIEWS
  if (!req.session.views) {
    req.session.views = {}
  }
  var pathname = parseurl(req).pathname
  req.session.views[pathname] = (req.session.views[pathname] || 0) + 1
  //horodate last visite
  req.session.horodate = new Date()
  //fix UTC+2 hours
  req.session.horodate.setUTCHours(req.session.horodate.getHours())
  //ip track
  req.session.ip = req.connection.remoteAddress
  req.session.geoloc = geoip.lookup(req.session.ip)
  res.render("index", {})
  //LOGGER
  logger.trace(req.sessionID)
  logger.trace(req.session)
  console.log(req.sessionID)
  console.log(req.session)
})

app.get("/cv", (req, res) => {
  //VIEWS
  if (!req.session.views) {
    req.session.views = {}
  }
  pathname = parseurl(req).pathname
  req.session.views[pathname] = (req.session.views[pathname] || 0) + 1
  //horodate last visite
  req.session.horodate = new Date()
  //fix UTC+2 hours
  req.session.horodate.setUTCHours(req.session.horodate.getHours())
  res.render("cv", {})
  //LOGGER
  logger.trace(req.session)
  console.log(req.session)
})

app.get("/adm1n", (req, res) => {
  //VIEWS
  if (!req.session.views) {
    req.session.views = {}
  }
  pathname = parseurl(req).pathname
  req.session.views[pathname] = (req.session.views[pathname] || 0) + 1
  //horodate last visite
  req.session.horodate = new Date()
  //fix UTC+2 hours
  req.session.horodate.setUTCHours(req.session.horodate.getHours())
  res.render("adm1n", {})
  //LOGGER
  logger.trace(req.session)
  console.log(req.session)
})

app.get("/giftedADHD", (req, res) => {
  //VIEWS
  if (!req.session.views) {
    req.session.views = {}
  }
  pathname = parseurl(req).pathname
  req.session.views[pathname] = (req.session.views[pathname] || 0) + 1
  //horodate last visite
  req.session.horodate = new Date()
  //fix UTC+2 hours
  req.session.horodate.setUTCHours(req.session.horodate.getHours())
  res.render("giftedADHD", {})
  //LOGGER
  logger.trace(req.session)
  console.log(req.session)
})

app.get("/leaflet", (req, res) => {
  //ip track
  req.session.ip = req.connection.remoteAddress
  req.session.geoloc = geoip.lookup(req.session.ip)
  var longitude = req.session.geoloc.ll[0],
    latitude = req.session.geoloc.ll[1]
  //VIEWS
  if (!req.session.views) {
    req.session.views = {}
  }
  pathname = parseurl(req).pathname
  req.session.views[pathname] = (req.session.views[pathname] || 0) + 1
  //horodate last visite
  req.session.horodate = new Date()
  //fix UTC+2 hours
  req.session.horodate.setUTCHours(req.session.horodate.getHours())
  res.render("leaflet", { longitude, latitude, req })
  //LOGGER
  logger.trace(req.session)
  console.log(req.session)
  console.log("longitude: " + longitude + " Latitude: " + latitude)
})

app.get("/highscore", urlencodedParser, (req, res) => {
  conMysql.query(
    "select name, score from portfolio.highscore order by score desc",
    function (error, results, fields) {
      if (error) {
        console.error("error connecting: " + error.stack)
      }
      console.log(results)
      res.send(results)
    }
  )
})
app.post("/highscore", urlencodedParser, (req, res) => {
  var name = req.body.name
  var score = req.body.score
  console.log(req.body.name + "score: " + req.body.score)
  console.log(req.body)
  conMysql.query(
    "insert into portfolio.highscore values (?,?)",
    [name, score],
    function (error, ok) {
      if (error) {
        console.error("error connecting: " + error.stack)
      }
      console.log(ok)
      conMysql.query(
        "select name, score from portfolio.highscore order by score desc",
        function (error, results, fields) {
          if (error) {
            console.error("error connecting: " + error.stack)
          }
          console.log(results)
          res.send(results)
        }
      )
    }
  )
})

//APP.LISTEN______________________________________________________________
app.use((req, res) => {
  res.status(404).render("404")
})

app.use((error, req, res) => {
  res.status(500).render("404")
})

var listener = app.listen(p0rt, "0.0.0.0", () => {
  //LOGGER
  console.log(
    `Listening on ${listener.address().address}:${listener.address().port}`
  )
})
