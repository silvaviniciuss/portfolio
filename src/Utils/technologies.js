const technologies = {
    javascript: "https://img.shields.io/badge/JavaScript-000?style=for-the-badge&logo=javascript",
    typescript: "https://img.shields.io/badge/TypeScript-000?style=for-the-badge&logo=typescript",
    html5: "https://img.shields.io/badge/HTML5-000?style=for-the-badge&logo=html5",
    css3: "https://img.shields.io/badge/CSS3-000?style=for-the-badge&logo=css3&logoColor=264CE4",
    react: "https://img.shields.io/badge/React-000?style=for-the-badge&logo=react",
    angular: "https://img.shields.io/badge/Angular-000?style=for-the-badge&logo=angular&logoColor=C3002F",
    sqlLite: "https://img.shields.io/badge/SQLite-000?style=for-the-badge&logo=sqlite&logoColor=07405E"
}


export const technologiesUsed = (tech) => {
    switch(tech) {
        case "javascript":
            return technologies.javascript
        case "typescript":
            return technologies.typescript
        case "html5":
            return technologies.html5
        case "css3":
            return technologies.css3
        case "react":
            return technologies.react
        case "sqllite":
            return technologies.sqlLite
    }
}
