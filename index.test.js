const { kiem_tra_snt, giai_pt_bac_nhat } = require('./index');
const assert = require('assert');

describe('kiem_tra_snt', function () {
    const TestFunction = (data, flag) => {
        data.forEach(item => {
            assert.strictEqual(kiem_tra_snt(item), flag);
        });
    }

    it('test path 1', function () {
        let data = [-10, -7, 1];
        TestFunction(data, false);
    });

    // it('test path 2', function () {
    //     let data = [2];
    //     TestFunction(data, true);
    // });

    // it('test path 3', function () {
    //     let data = [4, 10, 20];
    //     TestFunction(data, false);
    // });

    it('test path 4', function () {
        let data = [9, 15];
        // 25
        TestFunction(data, false);
    });

    it('test path 5', function () {
        let data = [3, 5, 7];
        TestFunction(data, true);
    });
});

describe('giai_pt_bac_nhat', function () {
    it('test path 1', function () {
        assert.strictEqual(giai_pt_bac_nhat(0, 0), 'Phương trình vô số nghiệm');
    });
    it('test path 2', function () {
        assert.strictEqual(giai_pt_bac_nhat(2, 0), 'Phương trình có nghiệm x = 0');
    });
    it('test path 3', function () {
        assert.strictEqual(giai_pt_bac_nhat(0, 5), 'Phương trình vô nghiệm');
    });
    it('test path 4', function () {
        assert.strictEqual(giai_pt_bac_nhat(2, 4), 'Phương trình có nghiệm x = -2');
    });
});