import { expect, test } from "@playwright/test";

async function waitForInitialLoader(page) {
  await expect(page.getByRole("status", { name: "Cargando omcreativos" })).toBeHidden({ timeout: 10_000 });
}

test.describe("omcreativos landing page", () => {
  test("renders the hero and navigation", async ({ page }) => {
    await page.goto("/");
    await waitForInitialLoader(page);
    const navigation = page.getByLabel("Navegación principal");

    await expect(page.getByRole("heading", { name: "seamos creativos", level: 1 })).toBeVisible();
    await expect(page.getByText("Creamos sitios web, diseños visuales")).toBeVisible();
    const primaryContact = page.locator(".hero-nav").getByRole("link", { name: "Hablar con Oscar" });
    await expect(primaryContact).toBeVisible();
    await expect(navigation.getByRole("link", { name: "Servicios" })).toBeVisible();
    await expect(navigation.getByRole("link", { name: "Proyectos" })).toBeVisible();
    await expect(page.locator(".hero-image")).toBeVisible();
    await expect(page.getByText("Método en movimiento")).toBeVisible();
    await page.getByRole("button", { name: /^Diseñar/ }).click();
    await expect(page.getByText("Las decisiones se vuelven visibles.")).toBeVisible();
    await expect(primaryContact).toHaveAttribute(
      "href",
      /wa\.me\/543487477269/
    );
  });

  test("navigates to projects and plans sections", async ({ page }) => {
    await page.goto("/");
    await waitForInitialLoader(page);
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
    await waitForInitialLoader(page);

    await expect(page.getByRole("heading", { name: "Preguntas frecuentes antes de empezar" })).toBeVisible();
    await page.getByText("El estilo queda adaptado a celular?").click();
    await expect(page.getByText("La composición se reorganiza para mobile")).toBeVisible();
  });

  test("shows real project details and completed work", async ({ page }) => {
    await page.goto("/proyectos");
    await waitForInitialLoader(page);

    await expect(
      page.getByRole("heading", {
        name: "Lo que hicimos, contado desde el problema hasta la entrega.",
      })
    ).toBeVisible();
    await expect(page.getByRole("heading", { name: "LibertApp" })).toBeVisible();
    await expect(page.getByText("QA visual y funcional de todo el front-end")).toBeVisible();
    const libertAppDetail = page.getByRole("button", { name: "Detalle de LibertApp" });
    await libertAppDetail.scrollIntoViewIfNeeded();
    await page.waitForTimeout(700);
    await libertAppDetail.click();
    await expect(page.getByRole("button", { name: "Detalle de LibertApp" })).toHaveAttribute("aria-pressed", "true");
    await expect(page.getByRole("heading", { name: "UrbanClub" })).toBeVisible();
    await expect(page.getByText("Compra, venta y pagos mediante PayPal")).toBeVisible();
    await expect(page.getByRole("heading", { name: "LaChoco Latera" })).toBeVisible();
    await expect(page.getByText("Reservas para degustaciones y experiencias")).toBeVisible();
    const laChocoGallery = page.locator("#lachoco-latera");
    await laChocoGallery.getByRole("button", { name: "Mostrar imagen 2 de LaChoco Latera" }).click();
    await expect(
      laChocoGallery.getByRole("img", { name: "Caja de bombones frescos de LaChoco Latera" })
    ).toBeVisible();
    await laChocoGallery.getByRole("button", { name: "Mostrar imagen 5 de LaChoco Latera" }).click();
    await expect(
      laChocoGallery.getByRole("img", { name: "Captura actual de la portada en vivo de LaChoco Latera" })
    ).toBeVisible();
    await expect(page.getByRole("heading", { name: "Punto Arte Perú" })).toBeVisible();
    await expect(page.getByText("Acceso directo a consultas por WhatsApp")).toBeVisible();
    await expect(page.getByRole("link", { name: "Hablar con Oscar" })).toHaveAttribute(
      "href",
      /wa\.me\/543487477269/
    );
    await expect(page.getByRole("link", { name: "Escribir por email" })).toHaveAttribute(
      "href",
      /^mailto:info@omcreativos\.com/
    );
  });

  test("presents the QR business card with interactive solution demos", async ({ page }) => {
    await page.goto("/proyectos/negocios");
    await waitForInitialLoader(page);

    await expect(
      page.getByRole("heading", { name: "Hacemos que tu negocio se vea, venda y trabaje mejor." })
    ).toBeVisible();
    await expect(page.getByText("Carta digital para negocios")).toBeVisible();
    await expect(page.getByRole("link", { name: "Hablar con Oscar" }).first()).toHaveAttribute(
      "href",
      /wa\.me\/543487477269/
    );
    await expect(page.getByRole("link", { name: "Email empresarial" }).first()).toHaveAttribute(
      "href",
      /^mailto:info@omcreativos\.com/
    );

    await page.getByRole("button", { name: "Catálogo y ventas" }).click();
    await expect(page.getByText("Productos ordenados, carrito, WhatsApp o pago online.")).toBeVisible();
    await expect(page.getByText("Consulta lista para responder")).toBeVisible();

    await page.getByRole("button", { name: "Gestión y cobros" }).click();
    await expect(page.getByText("Pago aprobado")).toBeVisible();
    await page.getByRole("button", { name: "Reservas y turnos" }).click();
    await expect(page.getByText("Turno listo para confirmar")).toBeVisible();
    await page.getByRole("button", { name: "Menú + QR" }).click();
    await expect(page.getByText("Sabores de casa")).toBeVisible();
    await expect(page.getByRole("heading", { name: "Buenas ideas que hoy funcionan en vivo." })).toBeVisible();
    await expect(page.getByLabel("Elegir referencia en vivo").getByRole("button")).toHaveCount(6);
    await expect(page.getByRole("heading", { name: "Una entrada simple para cada etapa del negocio." })).toBeVisible();
  });

  test("keeps the QR presentation usable on a small mobile viewport", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/proyectos/negocios");
    await waitForInitialLoader(page);

    await expect(
      page.getByRole("heading", { name: "Hacemos que tu negocio se vea, venda y trabaje mejor." })
    ).toBeVisible();
    await expect(page.getByLabel("Ejemplos de soluciones")).toBeVisible();

    await page.getByRole("button", { name: "Catálogo y ventas" }).click();
    await expect(page.getByText("Consulta lista para responder")).toBeVisible();

    const layout = await page.evaluate(() => ({
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
      scrollX: window.scrollX,
    }));

    expect(layout.scrollWidth).toBeLessThanOrEqual(layout.clientWidth);
    expect(layout.scrollX).toBe(0);
  });

  test("keeps project transitions and galleries inside the mobile viewport", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/proyectos");
    await waitForInitialLoader(page);

    const laChocoGallery = page.locator("#lachoco-latera");
    await laChocoGallery.getByRole("button", { name: "Mostrar imagen 3 de LaChoco Latera" }).click();
    await expect(
      laChocoGallery.getByRole("img", { name: "Chocolate caliente colombiano con especias" })
    ).toBeVisible();

    const layout = await page.evaluate(() => ({
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
      scrollX: window.scrollX,
    }));

    expect(layout.scrollWidth).toBeLessThanOrEqual(layout.clientWidth);
    expect(layout.scrollX).toBe(0);
  });
});
