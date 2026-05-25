import { expect, test } from "@playwright/test";

test.describe("Osmai landing page", () => {
  test("renders the recreated hero and navigation", async ({ page }) => {
    await page.goto("/");
    const navigation = page.getByLabel("Navegacion principal");

    await expect(page.getByRole("heading", { name: "osmai", level: 1 })).toBeVisible();
    await expect(page.getByText("Creamos sitios web, disenos visuales")).toBeVisible();
    await expect(page.getByRole("link", { name: "Pedi propuesta" })).toBeVisible();
    await expect(navigation.getByRole("link", { name: "Servicios" })).toBeVisible();
    await expect(navigation.getByRole("link", { name: "Proyectos" })).toBeVisible();
    await expect(page.getByText("Agrega aqui tu imagen de portada")).toBeVisible();
  });

  test("navigates to projects and plans sections", async ({ page }) => {
    await page.goto("/");
    const navigation = page.getByLabel("Navegacion principal");

    await navigation.getByRole("link", { name: "Proyectos" }).click();
    await expect(
      page.getByRole("heading", {
        name: /Una home armada para parecer final incluso antes de cargar las imagenes/,
      })
    ).toBeVisible();
    await expect(page.getByText("Zona editable para imagen o mockup")).toBeVisible();

    await navigation.getByRole("link", { name: "Planes" }).click();
    await expect(
      page.getByRole("heading", {
        name: "La misma direccion visual puede escalar a una web mas grande",
      })
    ).toBeVisible();
    await expect(page.getByRole("heading", { name: "Web completa" })).toBeVisible();
  });

  test("opens faq answers", async ({ page }) => {
    await page.goto("/#faq");

    await expect(page.getByRole("heading", { name: "Preguntas comunes sobre esta recreacion" })).toBeVisible();
    await page.getByText("El estilo queda adaptado a celular?").click();
    await expect(page.getByText("La composicion se reorganiza para mobile")).toBeVisible();
  });
});
