import { add } from './calculations'

describe('Calculations', () => {
    it('should sum correctly', () => {
        expect(add(1, 1)).toBe(2)
    })
})
