import { expect, test } from "@playwright/test";

test.describe("omcreativos landing page", () => {
  test("renders the recreated hero and navigation", async ({ page }) => {
    await page.goto("/");
    const navigation = page.getByLabel("Navegación principal");

    await expect(page.getByRole("heading", { name: "seamos creativos", level: 1 })).toBeVisible();
    await expect(page.getByText("Creamos sitios web, diseños visuales")).toBeVisible();
    await expect(page.getByRole("link", { name: "Pedí propuesta" })).toBeVisible();
    await expect(navigation.getByRole("link", { name: "Servicios" })).toBeVisible();
    await expect(navigation.getByRole("link", { name: "Proyectos" })).toBeVisible();
    await expect(page.locator('img[src="/img/herosection.jpg"]')).toBeVisible();
  });

  test("navigates to projects and plans sections", async ({ page }) => {
    await page.goto("/");
    const navigation = page.getByLabel("Navegación principal");

    await navigation.getByRole("link", { name: "Proyectos" }).click();
    await expect(
      page.getByRole("heading", {
        name: /Una home armada para parecer final incluso antes de cargar las imágenes/,
      })
    ).toBeVisible();
    await expect(page.getByText("Zona editable para imagen o mockup")).toBeVisible();

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

    await expect(page.getByRole("heading", { name: "Preguntas comunes sobre esta recreación" })).toBeVisible();
    await page.getByText("El estilo queda adaptado a celular?").click();
    await expect(page.getByText("La composición se reorganiza para mobile")).toBeVisible();
  });
});
