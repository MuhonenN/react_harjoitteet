import createSchema from "../schema"

describe('createShema', () => {
    it('creates schema without errors', () => {
        createSchema();

        expect(true).toBe(true);
    });
});