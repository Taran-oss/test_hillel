import {
    test,
    expect
}
from "@playwright/test";


test('should user report', async ({
    request
}) => {
    const reqResponse = await request.get("https://reqres.in/api/users?page=2");

    expect(reqResponse.ok()).toBeTruthy();
    expect(reqResponse.status()).toBe(200);

    let responseJson = await reqResponse.json();
    expect(responseJson["data"].length).toBe(6);

    let responseArr = responseJson["data"];
    for (let obj of responseArr) {
        expect(obj["email"]).toContain("@")
    }
    console.log(responseJson)


});


test("create new user", async ({
    request
}) => {
    let uniqueEmail = `create new user.${Date.now()}@gmail.com`
    const response = await request.post(`https://reqres.in/api/users`, {
        data: {
            "name": "morpheus",
            "job": "leader",
            "email": `${uniqueEmail}`
        }
    });
    expect(response.status()).toBe(201);

    const responseBody = await response.json();
    expect(responseBody["id"]).toBeDefined();
    expect(responseBody["createdAt"]).toBeDefined();
    expect(responseBody["name"]).toBe("morpheus");
    expect(responseBody["email"]).toBeDefined();
    expect(responseBody["email"].includes("@gmail.com")).toBeTruthy();
});

test("update user", async ({
    request
}) => {

    let uniqueEmail = `update user.${Date.now()}@gmail.com`
    const response = await request.put(`https://reqres.in/api/users/2`, {
        data: {
            "name": "Dmytro",
            "job": "zion resident"
        }
    });
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody["name"]).toBe("Dmytro");
    expect(responseBody["job"].includes("zion resident")).toBeTruthy();

});

test("delete user", async ({
    request
}) => {
    const reqResponse = await request.delete("https://reqres.in/api/users/892");

    expect(reqResponse.ok()).toBeTruthy();
    expect(reqResponse.status()).toBe(204);
});

test("patch user", async ({
    request
}) => {
    let uniqueEmail = `patch user.${Date.now()}@gmail.com`
    const response = await request.patch(`https://reqres.in/api/users/2`, {
        data: {
            "name": "morpheus",
            "job": "leader",
            "email": `${uniqueEmail}`
        }
    });
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody["name"]).toBe("morpheus");
    expect(responseBody["job"]).toBe("leader");
});