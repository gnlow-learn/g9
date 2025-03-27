import g9 from "https://esm.sh/g9@1.0.16"

g9({ x: 0, y: 0, }, (data, ctx) => {
    ctx.point(data.x, data.y)
    ctx.point(data.y, data.x)
}).insertInto(document.body)
