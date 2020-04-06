const fs = require("fs");

export function files(){
    try{
        const files = fs.readdirSync('./content/blog/');
        return files;
    }catch(error){
        throw error;
    }
}

export function file(slug){
    try{
        const file = fs.readFileSync('./content/blog/' + slug + '/index.md', {encoding: 'utf-8'});
        return file;
    }catch(error){
        throw error;
    }
}

export function has(slug){
    try{
        const exists = fs.existsSync('./content/blog/' + slug);
        return exists;
    }catch(error){
        throw error;
    }
}

const content = {};
content.files = files;
content.file = file;
content.has = has;

export default content;