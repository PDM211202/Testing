const generateDotCode = require('./test/create_graph');
const search = require('./search_basic_path');
const { kiem_tra_snt, giai_pt_bac_nhat } = require('./index');

generateDotCode(kiem_tra_snt.toString(), 'graphviz/kiem_tra_snt.dot');
generateDotCode(giai_pt_bac_nhat.toString(), 'graphviz/giai_pt_bac_nhat.dot');

search('kiem_tra_snt.dot');
search('giai_pt_bac_nhat.dot');