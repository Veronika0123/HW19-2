let year = +prompt('Какой сейчас год');
if ((year % 4 == 0 || year % 100 != 0) && (year % 400 == 0)){
    console.log(` ${year} высокосный`);
}

else{
    console.log(` ${year} невысокосный`);
}
