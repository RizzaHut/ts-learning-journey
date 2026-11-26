export const withSubmit: boolean = true;

export function describe(suiteName: string, fn: () => void): void {
  console.log(`\n\x1b[1m=== ${suiteName} ===\x1b[0m`);
  fn();
}

export function it(testName: string, fn: () => void): void {
  try {
    fn();
    console.log(`\x1b[32m✔ PASS:\x1b[0m ${testName}`);
  } catch (err: any) {
    console.log(`\x1b[31m✖ FAIL:\x1b[0m ${testName}`);
    console.log(err.message);
  }
}

export const assert = {
  strictEqual(actual: unknown, expected: unknown, message?: string): void {
    if (actual !== expected) {
      throw new Error(
        `  Expected : \x1b[32m${JSON.stringify(expected)}\x1b[0m\n` +
        `  Actual   : \x1b[31m${JSON.stringify(actual)}\x1b[0m` +
        (message ? `\n  Note     : ${message}` : "")
      );
    }
  },
  notEqual(actual: unknown, expected: unknown, message?: string): void {
    if (actual === expected) {
      throw new Error(
        `  Expected values not to be equal: \x1b[31m${JSON.stringify(actual)}\x1b[0m` +
        (message ? `\n  Note     : ${message}` : "")
      );
    }
  },
  deepEqual(actual: unknown, expected: unknown, message?: string): void {
    if (JSON.stringify(actual) !== JSON.stringify(expected)) {
      throw new Error(
        `  Expected : \x1b[32m${JSON.stringify(expected)}\x1b[0m\n` +
        `  Actual   : \x1b[31m${JSON.stringify(actual)}\x1b[0m` +
        (message ? `\n  Note     : ${message}` : "")
      );
    }
  },
  isTrue(value: unknown, message?: string): void {
    if (value !== true) {
      throw new Error(`  Expected: true, Actual: ${value}`);
    }
  },
  isFalse(value: unknown, message?: string): void {
    if (value !== false) {
      throw new Error(`  Expected: false, Actual: ${value}`);
    }
  },
  isDefined(value: unknown, message?: string): void {
    if (value === undefined) {
      throw new Error(`  Expected value to be defined, but got undefined`);
    }
  },
  throws(fn: () => void, message?: string): void {
    let threw = false;
    try {
      fn();
    } catch {
      threw = true;
    }
    if (!threw) {
      throw new Error(`  Expected function to throw an error, but it did not`);
    }
  }
};