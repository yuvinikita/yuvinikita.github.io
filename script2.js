let accum = new Accumulator(0);
    let cartItems = document.querySelector('.shoppingCart span');
    let shoppingButtons = document.querySelectorAll('.shoppingElement button');

    function Accumulator(startingValue) {
        this.value = startingValue;

        this.read = () => {
            this.value += Number(prompt("Введите число товаров ", "1"));
            if (this.value < 0) {
              alert("Неверно набрано число товаров");
              this.value = 0;
            }
        }
    }
    function addToCart() {
        accum.read();
        cartItems.innerHTML = accum.value;
    }

    for (let i = 0; i < shoppingButtons.length; i++) {
        shoppingButtons[i].onclick = () => addToCart();
    }
    