const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {

    let arr = [1,2,3,4,5]

    test('shuffleArray function should return array',()=>{
        expect(typeof(shuffleArray(arr))).toBe(Array)
    }),

    test('shuffledArray should be same length as given array',()=>{
        expect(shuffleArray(arr).length).toBe(5)
    })
})