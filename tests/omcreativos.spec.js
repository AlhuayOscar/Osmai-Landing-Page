import { expect, test } from "@playwright/test";

test.describe("omcreativos landing page", () => {
  test("renders the hero and navigation", async ({ page }) => {
    await page.goto("/");
    const navigation = page.getByLabel("Navegación principal");

    await expect(page.getByRole("heading", { name: "seamos creativos", level: 1 })).toBeVisible();
    await expect(page.getByText("Creamos sitios web, diseños visuales")).toBeVisible();
    await expect(page.getByRole("link", { name: "Pedí propuesta" })).toBeVisible();
    await expect(navigation.getByRole("link", { name: "Servicios" })).toBeVisible();
    await expect(navigation.getByRole("link", { name: "Proyectos" })).toBeVisible();
    await expect(page.locator(".hero-image")).toBeVisible();
  });

  test("navigates to projects and plans sections", async ({ page }) => {
    await page.goto("/");
    const navigation = page.getByLabel("Navegación principal");

    await navigation.getByRole("link", { name: "Proyectos" }).click();
    await expect(
      page.getByRole("heading", {
        name: /Trabajo real: diseño, desarrollo e integraciones en producción/,
      })
    ).toBeVisible();
    await expect(page.getByRole("link", { name: "Ver todos los casos" })).toBeVisible();
    await expect(page.getByText("LibertApp").first()).toBeVisible();

    await navigation.getByRole("link", { name: "Planes" }).click();
    await expect(
      page.getByRole("heading", {
        name: "La misma dirección visual puede escalar a una web más grande",
      })
    ).toBeVisible();
    await expect(page.getByRole("heading", { name: "Web completa" })).toBeVisible();
  });

  test("opens faq answers", async ({ page }) => {
    await page.goto("/#faq");

    await expect(page.getByRole("heading", { name: "Preguntas frecuentes antes de empezar" })).toBeVisible();
    await page.getByText("El estilo queda adaptado a celular?").click();
    await expect(page.getByText("La composición se reorganiza para mobile")).toBeVisible();
  });

  test("shows real project details and completed work", async ({ page }) => {
    await page.goto("/proyectos");

    await expect(
      page.getByRole("heading", {
        name: "Lo que hicimos, contado desde el problema hasta la entrega.",
      })
    ).toBeVisible();
    await expect(page.getByRole("heading", { name: "LibertApp" })).toBeVisible();
    await expect(page.getByText("QA visual y funcional de todo el front-end")).toBeVisible();
    await expect(page.getByRole("heading", { name: "UrbanClub" })).toBeVisible();
    await expect(page.getByText("Compra, venta y pagos mediante PayPal")).toBeVisible();
  });
});
