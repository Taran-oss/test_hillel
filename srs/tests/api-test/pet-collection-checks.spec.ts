import { test, expect } from "@playwright/test";

test("Check new pet created", async ({ request }) => {
  const response = await request.post(`https://petstore.swagger.io/v2/pet`, {
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    data: {
      id: 5,
      category: {
        id: 1,
        name: "doggy",
      },
      name: "doggie",
      photoUrls: ["string"],
      tags: [
        {
          id: 0,
          name: "string",
        },
      ],
      status: "available",
    },
  });
  expect(response.status()).toBe(200);
});

test("check pet updeted", async ({ request }) => {
  const response = await request.put(`https://petstore.swagger.io/v2/pet`, {
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    data: {
      id: 5,
      category: {
        id: 1,
        name: "string",
      },
      name: "doggie",
      photoUrls: ["string"],
      tags: [
        {
          id: 0,
          name: "string",
        },
      ],
      status: "available",
    },
  });
  expect(response.status()).toBe(200);
});

test("check I can find pet by status", async ({ request }) => {
  const issues = await request.get(
    `https://petstore.swagger.io/v2/pet/findByStatus?status=available`,
    {
      headers: {
        accept: "application/json",
      },
    }
  );
  expect(issues.ok()).toBeTruthy();
});

test("check pet can be deleted", async ({ request }) => {
  const issues = await request.delete(`https://petstore.swagger.io/v2/pet/5`, {
    headers: {
      accept: "application/json",
      api_key: "123",
    },
  });
  expect(issues.ok()).toBeTruthy();
});
