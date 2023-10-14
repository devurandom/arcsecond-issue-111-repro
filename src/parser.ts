import {
    optionalWhitespace,
    Parser,
    possibly,
    sepBy1 as _sepBy1,
    sequenceOf,
    str,
    whitespace
} from "arcsecond";

const sepBy1 = <S, T>(sep: Parser<S>, value: Parser<T>) =>
    _sepBy1(sep)(value) as Parser<T[]>;

const b = str("b")
const c = str("c")
const a1 = sequenceOf([
    str("a"),
    possibly(sequenceOf([whitespace, b])),
    possibly(sequenceOf([whitespace, c]))])
const a2 = sequenceOf([
    str("a"),
    possibly(sequenceOf([whitespace, sepBy1(optionalWhitespace, b)])),
    possibly(sequenceOf([whitespace, sepBy1(optionalWhitespace, c)]))])

export const parse1 = (input: string) => a1.run(input);
export const parse2 = (input: string) => a2.run(input);
