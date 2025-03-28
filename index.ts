import g9 from "https://esm.sh/g9@1.0.16"

const probDieAt =
(a: number, b: number) =>
(age: number) =>
    a * Math.E**(age*b)

const popAliveUntil =
(a: number, b: number) =>
(age: number) =>
    Math.E**(-a/b*(Math.E**(age*b)-1))

const popDieAt =
(a: number, b: number) =>
(age: number) =>
    probDieAt(a, b)(age) * popAliveUntil(a, b)(age)

const arr =
(length: number) =>
    Array.from({ length }).map((_, i) => i)

g9({ a: 0.00015, b: 0.1 }, (data, ctx) => {
    arr(100)
        .map(i => 20*popDieAt(data.a, data.b)(i))
        .map((y, x) => ctx.point(-400+x*8, 100-y*300))
}).insertInto(document.body)
