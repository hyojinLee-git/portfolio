export const randomNumBetween = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
};

export const hypotenuse = (x: number, y: number) => {
    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
};

export function distance(x1: number, y1: number, x2: number, y2: number) {
    const x = x2 - x1;
    const y = y2 - y1;
    return Math.sqrt(x * x + y * y);
}

export function lineCircle(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    cx: number,
    cy: number,
    r: number
) {
    const lineLength = distance(x1, y1, x2, y2);
    // Math.pow(x,y)=x^y
    const point =
        ((cx - x1) * (x2 - x1) + (cy - y1) * (y2 - y1)) /
        Math.pow(lineLength, 2);
    const px = x1 + point * (x2 - x1);
    const py = y1 + point * (y2 - y1);

    if (distance(px, py, cx, cy) < r) {
        return true;
    } else {
        return false;
    }
}
