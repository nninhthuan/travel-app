import { convertToDate, isFutureDate, twoDaysGap } from "./src/client/js/date-utilities";

/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://jestjs.io/"}
 */
const departingDate = '2024/05/18';
const furureDate = '2024/05/31';
const gapDays = '2024/09/24';

test('it should return correct format', () => {

  const result = convertToDate(departingDate);
  expect(result).toBe('18/05/2024')
});

test('determine if is a future day', () => {

  const result = isFutureDate(furureDate);
  expect(result).toBe(true)
});

test('calculate gap 2 days', () => {
  const result = twoDaysGap(gapDays);
  expect(result).not.toBe(125)
});