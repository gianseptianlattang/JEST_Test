import * as endpoint from "../endpoint/test";
import * as er from "../common/expect-response";
import rs from "../common/responseStatusLibrary";
import {
  bodyRegister,
  bodyLogin,
  bodyForgotPassword,
  bodyResetPassword,
} from "../data/data";

let response;
let body;
let email;
let token;

describe("Testing https://apingweb.com/#bearer", () => {
  test(`As a User, I can Create New Data`, async () => {
    body = bodyRegister();
    email = body.email;
    response = await endpoint.register(body);
    er.expectStatus(response, rs.statusOk);
    er.expectSnapshot(response);
  });

  test(`As a User, I can Login successfully`, async () => {
    response = await endpoint.login(bodyLogin(email));
    er.expectStatus(response, rs.statusOk);
    er.expectSnapshot(response);
  });

  test(`As a User, I can send email for Forgot Password successfully`, async () => {
    response = await endpoint.forgotPassword(bodyForgotPassword(email));
    token = response.body.or_use_this_token;
    er.expectStatus(response, rs.statusOk);
    er.expectSnapshot(response);
  });

  test(`As a User, I can Reset Password successfully`, async () => {
    response = await endpoint.resetPassword(bodyResetPassword(email, token));
    er.expectStatus(response, rs.statusOk);
    er.expectSnapshot(response);
  });
});
