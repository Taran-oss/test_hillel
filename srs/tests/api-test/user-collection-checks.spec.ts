import { test, expect } from "@playwright/test";

test("Check new new list of user", async ({ request }) => {
    const response = await request.post(`https://petstore.swagger.io/v2/user/createWithArray`, {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        id: 0,
        category: {
          id: 0,
          name: "string"
        },
        name: "doggie",
        photoUrls: [
          "string"
        ],
        tags: [
          {
            id: 0,
            name: "string"
          }
        ],
        status: "available"
      })
    });
    expect(response.status()).toBe(200);
  });

test("check user updeted", async ({ request }) => {
  const response = await request.put(`https://petstore.swagger.io/v2/user/Dmytro`, {
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    data: {
        id: 0,
        username: "string",
        firstName: "string",
        lastName: "string",
        email: "string",
        password: "string",
        phone: "string",
        userStatus: 0
    },
  });
  expect(response.status()).toBe(200);
});

test("check user by user name", async ({ request }) => {
  const issues = await request.get(
    `https://petstore.swagger.io/v2/user/Dmytro`,
    {
      headers: {
        accept: "application/json",
      },
    }
  );
  expect(issues.ok()).toBeTruthy();
});

test("check deleted user", async ({ request }) => {
  const issues = await request.delete(`https://petstore.swagger.io/v2/user/Dmytro`, {
    headers: {
      accept: "application/json",
    },
  });
  expect(issues.ok()).toBeTruthy();
});
