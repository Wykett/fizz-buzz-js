import minusString from './minusString'

describe('minusString', () => {
  it('executes', () => {
    expect(minusString('0,0')).toBe(0);
  })
})
