const { kiem_tra_snt, giai_pt_bac_nhat } = require('./index');
const fs = require('fs');
const dot = require('graphlib-dot');
let clg = (str) => {
    return `console.log(${str});`;
}

const change = (strFunc) => {
    const modifiedString =
        console.log(modifiedString);
}

let keyWord = ['{'];
const iterateLines = (str, path) => {
    const dotFilePath = './graphviz/' + path;

    // Đọc nội dung file DOT
    const dotSource = fs.readFileSync(dotFilePath, 'utf-8');

    // Parse đồ thị từ nội dung DOT
    const dotGraph = dot.read(dotSource);

    const graph = {};

    const objectList = Object.values(dotGraph._out);
    objectList.forEach((node, index) => {
        let object = Object.values(node);
        let k = `n${index}`;
        let values = [];
        object.forEach((item) => {
            values.push(item.w);
        })
        let obj = { key: k, value: values }
        const { key, value } = obj;
        graph[key] = value;
    })

    // console.log(dotGraph);

    const keys = Object.keys(graph);
    const entryNode = keys[0];
    const exitNode = keys[keys.length - 1];
    const nodeList = Object.values(dotGraph._nodes);
    const Nodes = [];
    let nodeword = ["ReturnStatement", "entry", "AssignmentExpression"];
    nodeList.forEach((node, index) => {
        for (const word of nodeword) {
            if (node.label.includes(word)) {
                Nodes.push(`n${index}`);
            }
        }

    })
    // console.log(Nodes);
    const lines = str.split("\n");
    let i = 0;
    let n = 0;
    for (const line of lines) {
        // Kiểm tra từng dòng nếu có từ trùng khớp với từ trong mảng keyWord
        for (const word of keyWord) {
            if (line.includes(word)) {
                lines.splice(i + 1, 0, Nodes[n]); // Chèn dòng vào vị trí lineNumber
                n++;
                break; // Thoát khỏi vòng lặp khi tìm thấy từ trùng khớp
            }
        }
        i++;
    }
    let line = [];
    for (let i = lines.length - 1; i >= 0; i--) {
        if (lines[i].includes('}')) {
            line.push(i);
        }
    }
    lines.splice(line[1] + 1, 0, exitNode);
    const updatedString = lines.join("\n"); // Kết hợp các dòng thành chuỗi

    return updatedString;
};

const strFunc = kiem_tra_snt.toString();

// change(strFunc)
let test = iterateLines(strFunc, 'giai_pt_bac_nhat.dot');
console.log(test);