// 完整函数定义
let myAdd: (x: number, y: number) => number =
    function(x: number, y: number): number { return x + y; };

// firstName 是必须的参数，lastName 是可选的
// middleName 是默认值。当用户没有传递这个参数或传递的值是undefined时。 它们叫做有默认初始化值的参数。
function buildName(middeleName="Roes", firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + middeleName + " " + lastName;
    else
        return firstName + " " + middeleName;
}

// 剩余参数会被当做个数不限的可选参数。 可以一个都没有，同样也可以有任意个。 
// 编译器创建参数数组，名字是你在省略号（ ...）后面给定的名字
function buildMultiName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

interface Card {
    suit: string;
    card: number;
}
interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}
let deck: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function() {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();
console.log("card:" + pickedCard.card + " of " + pickedCard.suit);

// this 回调函数
class Handler {
    info: string;
    onClickGood = (e: Event) => { this.info = e.srcElement.ATTRIBUTE_NODE.toLocaleString()};
    // 不使用 this 时
    onClick(this: void, e: Event) {
        console.log("no this");
    }
}

// 函数重载
// 查找重载列表时，会尝试使用第一个重载定义。如果匹配的话，就是用这个。因此，在定义重载的时候，一定要把最精确的定义放到最前面
let suits =  ["hearts", "spades", "clubs", "diamonds"];
function pickCard (x: {suit: string; card: number}[]): number;
function pickCard(x: number): {suit: string, card: number};

function pickCard(x) : any {
    if (typeof x == 'object') {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    } else if (typeof x == 'number') {
        let pickedSuit = Math.floor(x/13);
        return {suit: suits[pickedSuit], card: x%13}
    }
}

