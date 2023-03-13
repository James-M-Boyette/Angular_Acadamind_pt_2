// export class Ingredient {
//     public name: string;
//     public amount: number;

//     constructor(name: string, amount: number) {
//         this.name = name;
//         this.amount = amount;
//     }
// }

/* Simplified Constructors
    - Since there's a lot of "wet" code in the first version of this constructor, TS has an abreviated version (below). In it, we no longer have our property declarations; instead, we put our accessor 'public' in front of both arguments, and TS will infer the properties and values automatically.
 */

export class Ingredient {
    constructor(public name: string, public amount: number) {
    }
}