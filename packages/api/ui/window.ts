import * as _windowApis from "@tauri-apps/api/window";
import * as _webviewWindowApis from "@tauri-apps/api/webviewWindow";
import * as _webviewApis from "@tauri-apps/api/webview";

export { getCurrent, getAll, currentMonitor } from "@tauri-apps/api/window";
export { WebviewWindow } from "@tauri-apps/api/webviewWindow";

type Unlisten = () => void;

export function closeWindow() {
  return _windowApis.getCurrent().close();
}

/**
 * Force current window to close
 * @returns Promise<void>
 */
export function destroyWindow() {
  return _windowApis.getCurrent().destroy();
}

export function windowLabelExists(label: string) {
  return _windowApis.getAll().some((w) => w.label === label);
}

export function getWindowByLabel(label: string) {
  return _windowApis.getAll().find((w) => w.label === label);
}

export function closeMainWindow() {
  return _windowApis
    .getAll()
    .find((w) => w.label === "main")
    ?.close();
}

export function hideWindow(windowLabel: string) {
  return _windowApis
    .getAll()
    .find((w) => w.label === windowLabel)
    ?.hide();
}

export function hideMainWindow() {
  return hideWindow("main");
}

export function showWindow(windowLabel: string) {
  return _windowApis
    .getAll()
    .find((w) => w.label === windowLabel)
    ?.show();
}

export function showMainWindow() {
  return showWindow("main");
}

/**
 * Run this function to close the current window when the specified key is pressed
 * An unlistener is returned to stop listening, but not necessary as the window will be destroyed
 * @param key The key to listen for, default is Escape
 * @returns
 */
export function destroyWindowOnKeyPressed(key: string = "Escape"): Unlisten {
  function quitOn(e: KeyboardEvent) {
    if (e.key === key) {
      destroyWindow();
    }
  }
  document.addEventListener("keydown", quitOn);
  return () => document.removeEventListener("keydown", quitOn);
}
