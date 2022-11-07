const {KonversiSuhu} = require('./index');
test('Test C to F', () => {
  expect(KonversiSuhu(100, 'C', 'F')).toBe(212);
});
test('Test C to K', () => {
  expect(KonversiSuhu(100, 'C', 'K')).toBe(373);
});
test('Test F to K', () => {
  expect(KonversiSuhu(100, 'C', 'K')).toBe(310);
});