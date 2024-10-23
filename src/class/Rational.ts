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
        this.numerator = numerator;
        this.denominator = denominator;
    }

    getNumerator(): number {
        return this.numerator;
    }

    getDenominator(): number {
        return this.denominator;
    }

    normalize(): Rational {
        const gcd = Rational.gcd(this.numerator, this.denominator);
        return new Rational(this.numerator / gcd, this.denominator / gcd);
    }
    
    isWhole(): boolean {
        return this.numerator % this.denominator === 0;
    }

    isDecimal(): boolean {
        return this.numerator % this.denominator !== 0;
    }

    equals(other: Rational): boolean {
        return this.numerator * other.denominator === other.numerator * this.denominator;
    }
    
    equalsRational(r: Rational): boolean {
        return this.numerator === r.numerator && this.denominator === r.denominator;
    }

    static parseRational(str: string): Rational {
        const parts = str.split("/");
        const numerator = parseInt(parts[0]);
        const denominator = parseInt(parts[1]);
        return new Rational(numerator, denominator);
    }

    static gcd(a: number, b: number): number {
        a = Math.abs(a);
        b = Math.abs(b);
        while (b !== 0) {
            const temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    

    static _parseRational(numeratorArr: string[], denominatorArr: string[]): Rational {
        const numerator = parseInt(numeratorArr.join(""), 10);
        const denominator = parseInt(denominatorArr.join(""), 10);
        return new Rational(numerator, denominator);
    }    
    
    toString(): string {
        return `${this.numerator}/${this.denominator}`;
    }      
}