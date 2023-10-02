import * as endpoint from '../endpoint/test';
import * as er from '../common/expect-response';
import rs from '../common/responseStatusLibrary';
import schema from '../schema/getAllData';

let response;

describe('Get All Data', () => {
    test(`As a User, I can Get All Data`, async () => {
        response = await endpoint.getAllData();
        er.expectStatus(response, rs.statusOk);
        er.expectSchema(response, schema);
        er.expectSnapshot(response);
    });
});
