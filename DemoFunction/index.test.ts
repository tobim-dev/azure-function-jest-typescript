import httpTrigger from "./index";
import { Context } from "@azure/functions";

describe("Test for Demo Function", () => {
  let context: Context;

  beforeEach(() => {
    context = ({ log: jest.fn() } as unknown) as Context;
  });

  it("should return a 200", async () => {
    // Arrange
    const request = {
      body: { name: "John" },
    };

    // Action
    await httpTrigger(context, request);

    // Assertion
    expect(context.log).toBeCalledTimes(1);
    expect(context.res.status).toEqual(200);
  });

  it("should return a result string with the name given in the request body", async () => {
    // Arrange
    const request = {
      body: { name: "John" },
    };
    const resultString =
      "Hello, John. This HTTP triggered function executed successfully.";

    // Action
    await httpTrigger(context, request);

    // Assertion
    expect(context.log).toBeCalledTimes(1);
    expect(context.res.body).toEqual(resultString);
  });
});
