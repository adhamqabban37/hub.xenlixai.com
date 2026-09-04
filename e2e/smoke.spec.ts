import { test, expect } from "@playwright/test";

// -- Homepage loads ----------------------------------------------
test("homepage loads and renders hero", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/XenlixAI/);
  await expect(page.locator("text=XENLIX").first()).toBeVisible();
  await expect(page.locator("text=Intelligence Node")).toBeVisible();
});

// -- Navigation links work ---------------------------------------
test("all navigation links are present and clickable", async ({ page }) => {
  await page.goto("/");
  const items: [string, string][] = [
    ["/", "Home"],
    ["/platforms", "Platforms"],
    ["/ai-tools", "AI Tools"],
    ["/technology", "Technology"],
    ["/consulting", "Consulting"],
    ["/about", "About"],
    ["/resources", "Resources"],
    ["/contact", "Contact"],
  ];
  for (const [href, label] of items) {
    const link = page.locator(`nav a[href="${href}"]`).last();
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute("href", href);
  }

});
// -- Platforms page ----------------------------------------------
test("platforms page renders", async ({ page }) => {
  await page.goto("/platforms");
  await expect(page.locator("text=Platforms").first()).toBeVisible();
  await expect(page.locator("text=XenlixAI Core").first()).toBeVisible();
});

// -- AI Tools page -----------------------------------------------
test("ai-tools page renders", async ({ page }) => {
  await page.goto("/ai-tools");
  await expect(page.locator("text=AI Tools").first()).toBeVisible();
});

// -- Technology page ---------------------------------------------
test("technology page renders", async ({ page }) => {
  await page.goto("/technology");
  await expect(page.locator("text=Technology").first()).toBeVisible();
});

// -- Consulting page ---------------------------------------------
test("consulting page renders", async ({ page }) => {
  await page.goto("/consulting");
  await expect(page.getByRole("heading", { name: "AI Consulting" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "What We Deliver" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Book a Discovery Call" })).toBeVisible();
});

// -- About page --------------------------------------------------
test("about page renders", async ({ page }) => {
  await page.goto("/about");
  await expect(page.locator("text=About").first()).toBeVisible();
});

// -- Resources page ----------------------------------------------
test("resources page renders", async ({ page }) => {
  await page.goto("/resources");
  await expect(page.locator("text=Resources").first()).toBeVisible();
});

// -- Contact page loads with form --------------------------------
test("contact page loads with form", async ({ page }) => {
  await page.goto("/contact");
  await expect(page.locator("text=Contact Us")).toBeVisible();
  await expect(page.locator('input[name="name"]')).toBeVisible();
  await expect(page.locator('input[name="email"]')).toBeVisible();
  await expect(page.locator('textarea[name="message"]')).toBeVisible();
  await expect(page.locator('button[type="submit"]')).toBeVisible();
});

// -- Contact form submission (mocked) ----------------------------
test("contact form submits successfully", async ({ page }) => {
  await page.goto("/contact");
  await page.fill('input[name="name"]', "Test User");
  await page.fill('input[name="email"]', "test@example.com");
  await page.fill('textarea[name="message"]', "Hello from Playwright");

  await page.route("**/formspree.io/f/**", async (route) => {
    await route.fulfill({
      status: 200,
      body: JSON.stringify({ success: true }),
      headers: { "Content-Type": "application/json" },
    });
  });

  await page.click('button[type="submit"]');
  await expect(page.locator("text=Message Sent")).toBeVisible({ timeout: 5000 });
});

// -- Contact form error handling ---------------------------------
test("contact form handles error gracefully", async ({ page }) => {
  await page.goto("/contact");
  await page.fill('input[name="name"]', "Test User");
  await page.fill('input[name="email"]', "test@example.com");
  await page.fill('textarea[name="message"]', "Hello");

  await page.route("**/formspree.io/f/**", async (route) => {
    await route.fulfill({
      status: 500,
      body: JSON.stringify({ error: "server error" }),
      headers: { "Content-Type": "application/json" },
    });
  });

  await page.click('button[type="submit"]');
  await expect(page.locator('input[name="name"]')).toBeVisible({ timeout: 5000 });
});

// -- Voice demo section present ----------------------------------
test("voice demo section is present on homepage", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("text=Voice Agent").first()).toBeVisible({ timeout: 10000 });
});

// -- Footer email uses info@ -------------------------------------
test("footer displays info@xenlixai.com", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("text=info@xenlixai.com")).toBeVisible();
  await expect(page.locator("text=support@xenlixai.com")).not.toBeVisible();
});

// -- Mobile navigation -------------------------------------------
test("mobile menu toggle works", async ({ page }) => {
  await page.goto("/");
  await page.setViewportSize({ width: 375, height: 667 });
  const menuBtn = page.locator('button[aria-label="Toggle menu"]');
  await expect(menuBtn).toBeVisible();
  await menuBtn.click();
  await expect(page.locator("a:visible", { hasText: "Platforms" }).first()).toBeVisible();
  await expect(page.locator("a:visible", { hasText: "AI Tools" }).first()).toBeVisible();
});
