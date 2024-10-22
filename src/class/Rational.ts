/**
 * 請參考 human.ts 的語法完成 Rational 類
 */
export class Rational {
    // todo: ...
    numerator: number;
    denominator: number;

    constructor(numerator: number, denominator: number) {
        if (denominator === 0) {
            throw new Error("Denominator cannot be zero.");
        }
        const gcd = Rational.gcd(numerator, denominator);
        this.numerator = numerator / gcd;
        this.denominator = denominator / gcd;
    }

    // 獲取分子
    getNumerator(): number {
        return this.numerator;
    }

    // 獲取分母
    getDenominator(): number {
        return this.denominator;
    }

    // 正規化方法
    normalize(): Rational {
        const gcd = Rational.gcd(this.numerator, this.denominator);
        return new Rational(this.numerator / gcd, this.denominator / gcd);
    }

    // 檢查是否為整數
    isWhole(): boolean {
        return this.numerator % this.denominator === 0;
    }

    // 檢查是否有小數
    isDecimal(): boolean {
        return this.numerator % this.denominator !== 0;
    }

    // 比較兩個有理數
    equals(num: number, denom: number): boolean {
        const other = new Rational(num, denom);
        return this.numerator === other.numerator && this.denominator === other.denominator;
    }

    equalsRational(r: Rational): boolean {
        return this.numerator === r.numerator && this.denominator === r.denominator;
    }

    // 靜態方法解析字串
    static parseRational(str: string): Rational {
        const parts = str.split("/");
        const numerator = parseInt(parts[0]);
        const denominator = parseInt(parts[1]);
        return new Rational(numerator, denominator);
    }

    // 求最大公約數的輔助方法
    static gcd(a: number, b: number): number {
        if (b === 0) return a;
        return Rational.gcd(b, a % b);
    }

    // toString 方法，將有理數轉換為字串
    toString(): string {
        if (this.denominator === 1) {
            return `${this.numerator}`; // 如果分母為1，僅返回分子
        }
        return `${this.numerator}/${this.denominator}`;
    }
}

// 測試程式
const r1 = new Rational(4, 6);
console.log("Numerator:", r1.getNumerator()); // 應該顯示 2
console.log("Denominator:", r1.getDenominator()); // 應該顯示 3
console.log("Is whole number:", r1.isWhole()); // false
console.log("Has decimal:", r1.isDecimal()); // true

const r2 = r1.normalize();
console.log("Normalized numerator:", r2.getNumerator()); // 應該顯示 2
console.log("Normalized denominator:", r2.getDenominator()); // 應該顯示 3

console.log("Is r1 equal to r2:", r1.equalsRational(r2)); // true

const r3 = Rational.parseRational("8/12");
console.log("Parsed string '8/12' to Rational:", r3.getNumerator() + "/" + r3.getDenominator()); // 2/3

// 使用 toString() 方法
console.log(r1.toString()); // 應該顯示 "2/3"
const r4 = new Rational(5, 1);
console.log(r4.toString()); // 應該顯示 "5"
