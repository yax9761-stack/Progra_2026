let total = 0;
function sumarHasta(num) {
    if (num > 5) {
        return;
    }
    total += num;
    console.log(total);
    sumarHasta(num + 1);
}
sumarHasta(1);