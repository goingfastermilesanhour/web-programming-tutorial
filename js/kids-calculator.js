// JavaScript source code

function countTo(n) {
    for (var i=1; i<=n; i++) {
        console.log(i);
    }
}

countTo(7);



function addNumbers(a, b) {

    console.log('Primul numar este ' + a);
    console.log('Primul numar este ' + b);

    for (; b >  0;) {
        a++; // luam un deget de la b;
        b--; // il punem la a;
        console.log(a + ' - au mai ramas ' + b + ' degetele ');
    }
    console.log('Suma este: ' + a);
}

var count = addNumbers(9, 6);