import { type App } from "vue";
import * as components from "src/components";
import "src/style.css";

function install(app: App) {
    for (const key in components) {
        app.component(key, (components as Record<string, any>)[key]);
    }
}

export default { install };

export * from "src/components";
