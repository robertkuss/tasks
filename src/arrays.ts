import { PassThrough } from "stream";

/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let bookEnded: number[] = [];
    if (numbers.length > 1) {
        bookEnded.push(numbers[0]);
        bookEnded.push(numbers[numbers.length - 1]);
    } else if (numbers.length === 1) {
        bookEnded.push(numbers[0]);
        bookEnded.push(numbers[0]);
    }
    return bookEnded;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((item: number): number => item * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const intArray = numbers.map((item: string): number =>
        parseInt(item) ? parseInt(item) : 0,
    );
    return intArray;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const dollarLess = amounts.map((item: string): string =>
        item[0] === "$" ? item.slice(1) : item,
    );
    const amountArray = dollarLess.map((item: string): number =>
        parseInt(item) ? parseInt(item) : 0,
    );
    return amountArray;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const messagesWithoutQuestion = messages.filter(
        (message: string): boolean => !message.endsWith("?"),
    );
    const exclaimedMessages = messagesWithoutQuestion.map(
        (message: string): string =>
            message.endsWith("!") ? message.toUpperCase() : message,
    );
    return exclaimedMessages;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let shortWords: number = 0;
    words.map((word: string) => (word.length < 4 ? shortWords++ : word));
    return shortWords;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    let RGBAll: boolean = true;
    colors.map((color: string) => {
        if (
            color.toLowerCase() !== "red" &&
            color.toLowerCase() !== "blue" &&
            color.toLowerCase() !== "green"
        ) {
            RGBAll = false;
        }
    });
    return RGBAll;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let total: number = 0;
    let index: number = 0;
    let equation: string = "";
    if (addends.length === 0) {
        return "0=0";
    } else {
        addends.map((item: number) => {
            total += item;
            equation += String(item);
            if (index < addends.length - 1) {
                equation += "+";
            }
            index++;
        });
    }
    return total + "=" + equation;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    /*let taking: boolean = true;
    let currentSum: number = 0;
    let index: number = 0;
    const injected = values.map((item: number): number => {
        if (item > 0 && taking) {
            currentSum += item;
            index++;
        } else {
            taking = false;
        }
    });
    const injectedPositive = [...values];
    injectedPositive.splice(index + 1, 0, currentSum);*/
    return values;
}
