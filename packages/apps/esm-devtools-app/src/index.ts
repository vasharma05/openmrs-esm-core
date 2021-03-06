import { getAsyncLifecycle } from "@openmrs/esm-framework";

const importTranslation = () => Promise.resolve();

const frontendDependencies = {
  "@openmrs/esm-framework": "^3.1.10",
};

function setupOpenMRS() {
  const options = {
    featureName: "devtools",
    moduleName: "@openmrs/esm-devtools-app",
  };

  return {
    lifecycle: getAsyncLifecycle(
      () => import("./devtools/devtools.component"),
      options
    ),
    activate: () =>
      window.spaEnv === "development" ||
      !!localStorage.getItem("openmrs:devtools"),
  };
}

export { setupOpenMRS, importTranslation, frontendDependencies };
