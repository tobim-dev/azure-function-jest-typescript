import httpTrigger from "./index";
import { Context } from "@azure/functions";

const context = function () {
    return {log: jest.fn()} as unknown as Context
}()

describe('Test for Demo Function',   () => {
    it('should return a 200',  async () => {

        // Arrange
        const request = {
            body: {name: "John"},
        };

        // Action
        await httpTrigger(context, request);

        // Assertion
        expect(context.res.status).toEqual(200)
    });

    it('should return a result string with the name given in the request body',  async () => {

        // Arrange
        const request = {
            body: {name: "John"},
        };
        const resultString = "Hello, John. This HTTP triggered function executed successfully."

        // Action
        await httpTrigger(context, request);

        // Assertion
        expect(context.res.body).toEqual(resultString);
    });
});