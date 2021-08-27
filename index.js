
// Modules

const chalk = require("chalk")
const path = require("path")
const fs = require("fs")
const { resolve } = require("path/posix")

// Making Promise

let r = new Promise((resolve, rejects) => {
    let mkDir = name => {
        if (!name) {
            return
        }
        fs.mkdir(path.resolve(__dirname, name), (err) => {
            if (err) throw err
            console.log(chalk.green(`Folder named ${chalk.yellow(name)} successfully created`));
        })
    }
    resolve(mkDir)
})
    .then(data => {
        data('test')
    })
    .then(() => {
        return new Promise((resolve, rejects) => {
            let makeNewFile = (name, dir, cont) => {
                if (!name || !cont) {
                    return
                }
                if (!dir) {
                    let fileNotDir = path.resolve(__dirname, name)
                    fs.writeFile(fileNotDir, cont, (err) => {
                        if (err) throw err
                        console.log(chalk.green(`File named ${chalk.yellow(name)} successfully created`));
                    })
                    resolve(fileNotDir)
                } else {
                    let file = path.resolve(__dirname, dir, name)
                    fs.writeFile(file, cont, (err) => {
                        if (err) throw err
                        console.log(chalk.green(`File named ${chalk.yellow(name)} successfully created`));
                    })
                    resolve(file)
                }
            }
            resolve(makeNewFile)
        })
    })
    .then(dataFile => {
        dataFile('text.txt', 'text.txt', 'Hello Promise')
    })
    .catch(err => {
        console.log(chalk.red(`Error: ${chalk.yellow(err)}`));
    })


// || \\    
    