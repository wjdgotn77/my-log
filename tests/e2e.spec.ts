import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByRole("heading", { name: "Haesoo's Blog" }).click();
  await page.getByRole("link", { name: "About me" }).click();
  await page.getByRole("link", { name: "@email" }).click();
  await page.getByRole("link", { name: "Posts" }).click();
  await page.getByText("독서").first().click();
  await page.getByRole("link", { name: "Posts" }).click();
  await page.getByRole("heading", { name: "Haesoo's Blog" }).click();
  await page.getByRole("link", { name: "About me" }).click();
  const page4Promise = page.waitForEvent("popup");
  await page.getByRole("link", { name: "@linkedin" }).click();
  const page4 = await page4Promise;
  await page.getByRole("link", { name: "Posts" }).click();
  await page
    .getByText("지식한입 : Stack 과 Thread 를 알아보자September 13, 2024CS")
    .click();
  await page.getByRole("link", { name: "About me" }).click();
});
