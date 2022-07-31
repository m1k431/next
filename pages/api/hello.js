// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200
  res.json({
    competences: {
    informatiques: {
        frontend: [
          "reactJS",
          "HTML5",
          "Bootstrap",
          "jade/PUG",
          "w3c DOM",
          "SCSS",
          "Jquery",
          "ES6",
          "IBM dspf",
          "IBM prtf"
        ],
        backend: [
          "IBM i",
          "IBM RPG IV",
          "IBM CL",
          "IBM db2",
          "IBM QSH",
          "NextJS",
          "nodeJS",
          "ExpressJS",
          "Mongodb",
          "SQL",
          "Ajax"
        ],
        Tools: [
          "Git",
          "IBM Rdi",
          "IBM ACS",
          "ARCAD for i",
          "ADELIA for i",
          "IBM DPA",
          "bzh/zsh",
          "Linux",
          "osX",
          "Photoshop",
          "Windows"
        ]
      }
    }
  })
}
