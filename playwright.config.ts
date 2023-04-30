import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
    testDir: "src/playwright-tests",
    fullyParallel: true,
    reporter: "html",
    use: { baseURL: "http://localhost:5173" },
    projects: [
        {
            name: "chromium",
            use: { ...devices["Desktop Edge"] },
        },
    ],
    webServer: {
        command: "npm run dev",
        url: "http://localhost:5173",
        reuseExistingServer: true,
    },
});
