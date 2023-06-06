const fs = require('fs');
const dot = require('graphlib-dot');

const search = (path) => {
    // Đường dẫn đến file DOT
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

    const keys = Object.keys(graph);
    const entryNode = keys[0];
    const exitNode = keys[keys.length - 1];

    const basicPaths = [];

    function findBasicPaths(currentNode, currentPath, visited) {
        currentPath.push(currentNode);
        visited[currentNode] = true;
        if (currentNode === exitNode) {
            basicPaths.push(currentPath.join(" -> "));
        } else {
            const neighbors = graph[currentNode];
            if (neighbors) {
                neighbors.forEach((neighbor) => {
                    if (!visited[neighbor]) {
                        findBasicPaths(neighbor, [...currentPath], { ...visited });
                    }
                });
            }
        }
    }

    findBasicPaths(entryNode, [], {});

    console.log(`Các đường dẫn cơ sở trong đồ thị của file ${path} :`);
    basicPaths.forEach((path, index) => {
        console.log(`Path ${index + 1}: `, path);
    });
}
// search('giai_pt_bac_nhat.dot');
module.exports = search;