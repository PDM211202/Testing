const esprima = require('esprima');
const esgraph = require('esgraph');
const { kiem_tra_snt, giai_pt_bac_nhat } = require('../index');
const dot = require('dot/index');
const fs = require('fs');

// function generateDotCode(code, outputFile) {
//     const ast = esprima.parseScript(code);
//     const cfg = esgraph(ast.body[0].body);

//     const dotCode = esgraph.dot(cfg, { counter: 0, exceptions: false });

//     fs.writeFileSync(outputFile, `digraph {
//         ${dotCode}
//     }`);
// }

function generateDotCode(code, outputFile) {
    const ast = esprima.parseScript(code);
    const cfg = esgraph(ast.body[0].body);

    const dotCode = esgraph.dot(cfg, { counter: 0 });
    const lines = dotCode.trim().split('\n');
    const nodes = lines.map(line => line.trim());

    const filteredNodes = nodes.filter(node => !node.includes("exception"));
    const joinedString = filteredNodes.join('\n').replace(/,\s*(?=n\d+)/g, '');

    fs.writeFileSync(outputFile, `digraph {
        ${joinedString}
    }`);
}

// generateDotCode(kiem_tra_snt.toString(), 'graphviz/kiem_tra_snt.dot');

module.exports = generateDotCode;