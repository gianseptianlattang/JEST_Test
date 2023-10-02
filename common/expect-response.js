const { matchers } = require('jest-json-schema');
expect.extend(matchers);

export const expectStatus = (response, expectedStatus) => {
  expect((response).status).toEqual(expectedStatus);
};

export const expectSchema = (response, expectedSchema) => {
  expect((response).body).toMatchSchema(expectedSchema);
};

export const expectObject = (response, expectedObject) => {
  expect((response).body).toMatchObject(expectedObject);
};

export const expectSnapshot = (response) => {
  expect((response).body).toMatchSnapshot();
};