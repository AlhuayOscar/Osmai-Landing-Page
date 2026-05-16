import { expect, test } from "@playwright/test";

test.describe("Osmai landing page", () => {
  test("renders the main landing content and navigation", async ({ page }) => {
    await page.goto("/");
    const navigation = page.getByLabel("Navegacion principal");

    await expect(page.getByRole("heading", { name: "Osmai", level: 1 })).toBeVisible();
    await expect(page.getByText("Creamos sitios web")).toBeVisible();
    await expect(page.getByRole("link", { name: "Pedir propuesta" })).toBeVisible();
    await expect(navigation.getByRole("link", { name: "Servicios" })).toBeVisible();
    await expect(navigation.getByRole("link", { name: "Proyectos" })).toBeVisible();
  });

  test("navigates to project and plans sections", async ({ page }) => {
    await page.goto("/");
    const navigation = page.getByLabel("Navegacion principal");

    await navigation.getByRole("link", { name: "Proyectos" }).click();
    await expect(
      page.getByRole("heading", {
        name: /De la idea inicial a una web lista para presentar tu negocio/,
      })
    ).toBeVisible();
    await expect(page.getByText("Landing comercial")).toBeVisible();

    await navigation.getByRole("link", { name: "Planes" }).click();
    await expect(page.getByRole("heading", { name: "Elige el punto de partida para tu proyecto" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Web Pro" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Quiero este plan" })).toBeVisible();
  });

  test("opens FAQ answers", async ({ page }) => {
    await page.goto("/#faq");

    await expect(page.getByRole("heading", { name: "Preguntas frecuentes antes de empezar" })).toBeVisible();
    await page.getByText("Oscar desarrolla la web y el software?").click();
    await expect(page.getByText("Oscar se encarga de la programacion web")).toBeVisible();
  });

  test("chatbot answers known and unknown questions", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("button", { name: "Abrir chat de Osmai" }).click();
    await expect(page.getByRole("region", { name: "Chatbot de prueba de Osmai" })).toBeVisible();

    await page.getByRole("button", { name: "Quien es Oscar?" }).click();
    await expect(page.getByText("Oscar es el creador y programador web/software")).toBeVisible();

    await page.getByLabel("Pregunta para el chatbot").fill("Necesito algo muy especifico que el bot no sabe");
    await page.getByRole("button", { name: "Enviar pregunta" }).click();

    const contactLink = page.getByRole("link", { name: "Contactar con equipo" }).last();
    await expect(contactLink).toBeVisible();
    await expect(contactLink).toHaveAttribute("href", /wa\.me\/543487477269/);
  });
});
