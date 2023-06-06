function kiem_tra_snt(n) {
    var flag = true;
    if (n < 2) {
        flag = false;
    }
    else if (n == 2) {
        flag = true;
    }
    else if (n % 2 == 0) {
        flag = false;
    }
    else {
        for (var i = 3; i <= Math.sqrt(n); i += 2) {
            if (n % i == 0) {
                flag = false;
                break;
            }
        }
    }
    return flag;
}

function giai_pt_bac_nhat(a, b) {
    if (a == 0 && b == 0){
        return 'Phương trình vô số nghiệm';
    }
    else if (a != 0 && b == 0){
        return 'Phương trình có nghiệm x = 0';
    }
    else if (a == 0 && b != 0){
        return "Phương trình vô nghiệm";
    }
    else {
        return 'Phương trình có nghiệm x = ' + (-b/a);
    }
}
giai_pt_bac_nhat(2, 0)

module.exports = { kiem_tra_snt, giai_pt_bac_nhat}