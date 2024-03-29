// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom

import "@testing-library/jest-dom";
import { server } from "./testUtils/msw/server";

beforeAll(() => server.listen());
beforeEach(() => {
  jest.restoreAllMocks();
  jest.clearAllMocks();
});
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
