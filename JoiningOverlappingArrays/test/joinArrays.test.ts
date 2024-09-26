import {describe, expect, test} from '@jest/globals';
import joinArrays from '../joinArrays';

describe('Test 1', () => {
    test('2 elements overlap 1', () => {
        const input1 = [1, 2, 3, 4];
        const input2 = [3, 4, 5, 6];
        const result = joinArrays(input1, input2)

        expect(result).toStrictEqual([1, 2, 3, 4, 5, 6]);
    });
});

describe('Test 2', () => {
    test('No overlap 1', () => {
        const input1 = [1, 2, 3, 4];
        const input2 = [5, 6, 7, 8];
        const result = joinArrays(input1, input2)

        expect(result).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    });
});

describe('Test 3', () => {
    test('2 elements overlap 2', () => {
        const input1 = [1, 2, 1, 2];
        const input2 = [1, 2, 7, 8];
        const result = joinArrays(input1, input2)

        expect(result).toStrictEqual( [1, 2, 1, 2, 7, 8]);
    });
});

describe('Test 4', () => {
    test('No overlap 2', () => {
        const input1 = [5, 5, 1, 2];
        const input2 = [5, 1, 7, 8];
        const result = joinArrays(input1, input2)

        expect(result).toStrictEqual([5, 5, 1, 2, 5, 1, 7, 8]);
    });
});

describe('Test 5', () => {
    test('1 element overlap', () => {
        const input1 = [1, 2];
        const input2 = [2, 3];
        const result = joinArrays(input1, input2)

        expect(result).toStrictEqual([1, 2, 3]);
    });
});

describe('Test 6', () => {
    test('Input 1 empty', () => {
        const input1 = [];
        const input2 = [5, 1, 7, 8];
        const result = joinArrays(input1, input2)

        expect(result).toStrictEqual([5, 1, 7, 8]);
    });
});

describe('Test 7', () => {
    test('Input 2 empty', () => {
        const input1 = [1, 4, 7];
        const input2 = [];
        const result = joinArrays(input1, input2)

        expect(result).toStrictEqual([1, 4, 7]);
    });
});
