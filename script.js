let array = ["Olma", "Banan", "Gilos", "Shaftoli"];
let arrayLength = (array.length);

console.log(array);
alert(`Boshlanishda Arrayning uzunligi: ${arrayLength}`);
let confirmif = confirm("Sizning Arrayingizdan malumotni olib tashlamoqchimiz");
if (confirmif) {
    array.pop()
    console.log(array)
} else {
    alert(`Arrayning uzunligi: ${arrayLength}`)
}