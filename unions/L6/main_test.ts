import { describe, it, assert, withSubmit } from "./unit_test";
import { createLogEntry, LogMessage, LogSource } from "./utils";

const validLogMessage: LogMessage = "info: Valid message";
// @ts-expect-error
const invalidLogMessage: LogMessage = "debug: Invalid log level";

const validLogSource: LogSource = "api_123";
// @ts-expect-error
const invalidLogSource: LogSource = "web_123";
// @ts-expect-error
const literalNumberLogSource: LogSource = "api_number";

describe("Template Literal Types", () => {
  const runCases = [
    {
      message: "info: User logged in" as LogMessage,
      source: "api_123" as LogSource,
      expected: "[api_123] LOG - info: User logged in",
    },
    {
      message: "warn: Database connection unstable" as LogMessage,
      source: "database_456" as LogSource,
      expected: "[database_456] LOG - warn: Database connection unstable",
    },
  ];

  const submitCases = runCases.concat([
    {
      message: "error: Authentication failed" as LogMessage,
      source: "auth_789" as LogSource,
      expected: "[auth_789] LOG - error: Authentication failed",
    },
    {
      message: "info: Data backup completed" as LogMessage,
      source: "database_101" as LogSource,
      expected: "[database_101] LOG - info: Data backup completed",
    },
  ]);

  let testCases = runCases;
  if (withSubmit) {
    testCases = submitCases;
  }

  for (let i = 0; i < testCases.length; i++) {
    const { message, source, expected } = testCases[i];
    it(`Combined Test ${i}`, () => {
      const result = createLogEntry(message, source);
      console.log(`Log Message: ${message}`);
      console.log(`Log Source: ${source}`);
      console.log(`Expected: ${expected}`);
      console.log(`Result: ${result}`);
      assert.strictEqual(result, expected);
    });
    console.log("---------------------------------");
  }

  it("Type check: LogMessage template literal validation", () => {
    console.log(
      "✓ Type check passed: Function enforces valid LogMessage format",
    );
  });

  it("Type check: LogSource template literal validation", () => {
    console.log(
      "✓ Type check passed: Function enforces valid LogSource format",
    );
  });

  const numSkipped = submitCases.length - testCases.length;
  if (numSkipped > 0) {
    console.log(`- Skip: ${numSkipped} test case(s) for submit`);
  }
});
