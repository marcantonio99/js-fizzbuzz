let numberBox = document.getElementById("container");
let singleBox = document.createElement("div");

for (let i = 1; i <= 100; i++) {



    if (i % 3 === 0 && i % 5 === 0) {

        console.log('FizzBuzz')
        //  document.write("<div>FizzBuzz</div>")
        let box = document.createElement("div");
        box.classList.add('colore1');
        box.innerText = 'Fizzbuzz';
        numberBox.append(box);


    }

    else if (i % 3 === 0) {
        console.log('Fizz')
        //  document.write("<div>Fizz</div>");
        let box = document.createElement("div");
        box.classList.add('colore2');
        box.innerText = 'Fizz';
        numberBox.append(box);




    }

    else if (i % 5 === 0) {
        console.log('Buzz')
        //  document.write("<div>Buzz</div>");
        let box = document.createElement("div");
        box.classList.add('colore3');
        box.innerText = 'Buzz';
        numberBox.append(box);

    }

    else {
        console.log(i)
        //  document.write(`<div>${i}</div> `)
        let box = document.createElement("div");
        box.classList.add('colore4');
        box.innerText = `${i}`;
        numberBox.append(box);






    }
}