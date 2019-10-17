const main = require('../main/main');

describe('main()', () => {

    it('should calculate the remaindar', () => {
        expect(main.caclRemaindar(9, 3)).toBe(0);
        expect(main.caclRemaindar(11, 4)).toBe(3);
    });

    it('should calculate the sum of numbers which are in array', () => {
        let numArray1 = [3, 6, 1, 8, 6, 4, 2];
        let numArray2 = [1, 2, 6, 2, 9, 0, 4];
        
        expect(main.caclSum(numArray1)).toBe(30);
        expect(main.caclSum(numArray2)).toBe(24);
    });

    it('should calculate the sum of numbers which are in array and less than indicated num ', () => {
        let numArray1 = [3, 6, 1, 8, 6, 4, 2];
        let numArray2 = [1, 2, 6, 2, 9, 0, 4];
        
        expect(main.caclSumInConditon(numArray1 , 5)).toBe(10);
        expect(main.caclSumInConditon(numArray2 , 6)).toBe(9);
    });

});