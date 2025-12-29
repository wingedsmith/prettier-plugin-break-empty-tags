const { parsers: htmlParsers } = require('prettier/parser-html');

function preprocessEmptyTags(text) {
    const matchPattern = /( *)(<[^>]*[\n\r]+[^>]*>) *(<\/[^>]*>)/gm
    const replacePattern = '$1$2\r\n$1$3'
    return text.replace(matchPattern, replacePattern);
}

module.exports = {
    parsers: {
        html: {
            ...htmlParsers.html,
            preprocess: preprocessEmptyTags,
        },
    },
};
