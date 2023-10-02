import * as endpoint from '../endpoint/test';
import * as er from '../common/expect-response';
import rs from '../common/responseStatusLibrary';
import data from '../data/create';

let body;
let response;

describe('Create New Data', () => {
    test(`As a User, I can Create New Data`, async () => {
        body = data;
        response = await endpoint.create(data);
        er.expectStatus(response, rs.statusCreated);
        er.expectObject(response, data);
        er.expectSnapshot(response);
    });
});
