export default function joinArrays<T>(input1: T[], input2: T[]): T[] {
    let overlapIndex = 0
    let inputIndex1 = 0

    while (inputIndex1<input1.length && overlapIndex < input2.length) {
        if (input1[inputIndex1] === input2[overlapIndex]) {
            overlapIndex++
        } else if(overlapIndex > 0) {
            overlapIndex = 0
            inputIndex1 --
        }

        inputIndex1 ++
    }

    return [...input1, ...input2.slice(overlapIndex)]
}
