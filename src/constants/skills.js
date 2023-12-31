import reactLogo from "../assets/skills/react.png"
import javascriptLogo from "../assets/skills/javascript.png"
import sqlLogo from "../assets/skills/sql.png"
import nodeLogo from "../assets/skills/node-js.png"
import typescriptLogo from "../assets/skills/typescript.png"
import gitLogo from "../assets/skills/git.png"
import angularLogo from "../assets/skills/angular.png"
import gitHubLogo from "../assets/skills/github.png"
import htmlLogo from "../assets/skills/html-5.png"
import cssLogo from "../assets/skills/css-3.png"
import jestLogo from "../assets/skills/jest.png"

export const skills = [
    {
        name: "React",
        logo: reactLogo
    },
    {
        name: "JavaScript",
        logo: javascriptLogo
    },
    {
        name: "SqlLite",
        logo: sqlLogo
    },
    {
        name: "NodeJs",
        logo: nodeLogo
    },
    {
        name: "TypeScript",
        logo: typescriptLogo
    },
    {
        name: "Git",
        logo: gitLogo
    },
    {
        name: "Angular",
        logo: angularLogo
    },
    {
        name: "Html5",
        logo: htmlLogo
    },
    {
        name: "CSS 3",
        logo: cssLogo
    },
    {
        name: "GitHub",
        logo: gitHubLogo
    },
    {
        name: "Jest Test",
        logo: jestLogo
    },

]

export const technologiesUsed = (tech) => {
    switch(tech) {
        case "javascript":
            return javascriptLogo
        case "typescript":
            return typescriptLogo
        case "html5":
            return htmlLogo
        case "css3":
            return cssLogo
        case "react":
            return reactLogo
        case "sqllite":
            return sqlLogo
        case "jest test":
            return jestLogo
    }
}
