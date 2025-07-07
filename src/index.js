const { parsers: typescriptParsers } = require('prettier/parser-typescript');
const { parsers: javascriptParsers } = require('prettier/parser-babel');
const { parsers: htmlParsers } = require('prettier/parser-html');

function preprocessEmptyTags(text) {
    const matchPattern = /([ ]*)(<[^>]*[\n]+[^>]*>)(<\/[^>]*>)/gm
    const replacePattern = '$1$2\r\n$1$3'
    return text.replace(matchPattern, replacePattern);
}

module.exports = {
    parsers: {
        typescript: {
            ...typescriptParsers.typescript,
            preprocess: preprocessEmptyTags,
        },
        babel: {
            ...javascriptParsers.babel,
            preprocess: preprocessEmptyTags,
        },
        vue: {
            ...htmlParsers.html,
            preprocess: preprocessEmptyTags,
        },
        angular: {
            ...htmlParsers.html,
            preprocess: preprocessEmptyTags,
        },
        html: {
            ...htmlParsers.html,
            preprocess: preprocessEmptyTags,
        },
    },
};
