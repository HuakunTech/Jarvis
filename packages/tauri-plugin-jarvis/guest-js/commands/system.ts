import { invoke } from "@tauri-apps/api/core";
import { TCommand, CommandType, AppInfo } from "@models/";
import { platform } from "@tauri-apps/plugin-os";

export function openTrash(): Promise<void> {
  return invoke("plugin:jarvis|open_trash");
}

export function emptyTrash(): Promise<void> {
  return invoke("plugin:jarvis|empty_trash");
}

export function shutdown(): Promise<void> {
  return invoke("plugin:jarvis|shutdown");
}

export function reboot(): Promise<void> {
  return invoke("plugin:jarvis|reboot");
}

export function sleep(): Promise<void> {
  return invoke("plugin:jarvis|sleep");
}

export function toggleSystemAppearance(): Promise<void> {
  return invoke("plugin:jarvis|toggle_system_appearance");
}

export function showDesktop(): Promise<void> {
  return invoke("plugin:jarvis|show_desktop");
}

export function quitAllApps(): Promise<void> {
  return invoke("plugin:jarvis|quit_app_apps");
}

export function sleepDisplays(): Promise<void> {
  return invoke("plugin:jarvis|sleep_displays");
}

export function setVolume(percentage: number): Promise<void> {
  return invoke("plugin:jarvis|set_volume", { percentage });
}

export function setVolumeTo0(): Promise<void> {
  return setVolume(0);
}

export function setVolumeTo25(): Promise<void> {
  return setVolume(25);
}

export function setVolumeTo50(): Promise<void> {
  return setVolume(50);
}

export function setVolumeTo75(): Promise<void> {
  return setVolume(75);
}

export function setVolumeTo100(): Promise<void> {
  return setVolume(100);
}

export function turnVolumeUp(): Promise<void> {
  return invoke("plugin:jarvis|turn_volume_up");
}

export function turnVolumeDown(): Promise<void> {
  return invoke("plugin:jarvis|turn_volume_down");
}

export function toggleStageManager(): Promise<void> {
  return invoke("plugin:jarvis|toggle_stage_manager");
}

export function toggleBluetooth(): Promise<void> {
  return invoke("plugin:jarvis|toggle_bluetooth");
}

export function toggleHiddenFiles(): Promise<void> {
  return invoke("plugin:jarvis|toggle_hidden_files");
}

export function ejectAllDisks(): Promise<void> {
  return invoke("plugin:jarvis|eject_all_disks");
}

export function logoutUser(): Promise<void> {
  return invoke("plugin:jarvis|logout_user");
}

export function toggleMute(): Promise<void> {
  return invoke("plugin:jarvis|toggle_mute");
}

export function mute(): Promise<void> {
  return invoke("plugin:jarvis|mute");
}

export function unmute(): Promise<void> {
  return invoke("plugin:jarvis|unmute");
}

export function getFrontmostApp(): Promise<AppInfo> {
  return invoke("plugin:jarvis|get_frontmost_app").then((app) => AppInfo.parse(app));
}

export function hideAllAppsExceptFrontmost(): Promise<void> {
  return invoke("plugin:jarvis|hide_all_apps_except_frontmost");
}

export const rawSystemCommands = [
  {
    name: "Open Trash",
    icon: "uil:trash",
    confirmRequired: false,
    function: openTrash,
    platforms: ["macos", "linux"],
  },
  {
    name: "Empty Trash",
    icon: "uil:trash",
    confirmRequired: true,
    function: emptyTrash,
    platforms: ["macos", "linux"],
  },
  {
    name: "Shutdown",
    icon: "mdi:shutdown",
    confirmRequired: true,
    function: shutdown,
    platforms: ["macos", "linux"],
  },
  {
    name: "Reboot",
    icon: "mdi:restart",
    confirmRequired: true,
    function: reboot,
    platforms: ["macos", "linux"],
  },
  {
    name: "Sleep",
    icon: "carbon:asleep",
    confirmRequired: false,
    function: sleep,
    platforms: ["macos", "linux"],
  },
  {
    name: "Toggle System Appearance",
    icon: "line-md:light-dark",
    confirmRequired: false,
    function: toggleSystemAppearance,
    platforms: ["macos"],
  },
  {
    name: "Show Desktop",
    icon: "bi:window-desktop",
    confirmRequired: false,
    function: showDesktop,
    platforms: ["macos"],
  },
  {
    name: "Quit App",
    icon: "charm:cross",
    confirmRequired: false,
    function: quitAllApps,
    platforms: ["macos"],
  },
  {
    name: "Sleep Displays",
    icon: "solar:display-broken",
    confirmRequired: false,
    function: sleepDisplays,
    platforms: ["macos"],
  },
  {
    name: "Set Volume to 0%",
    icon: "flowbite:volume-mute-outline",
    confirmRequired: false,
    function: setVolumeTo0,
    platforms: ["macos", "linux"],
  },
  {
    name: "Set Volume to 25%",
    icon: "flowbite:volume-down-solid",
    confirmRequired: false,
    function: setVolumeTo25,
    platforms: ["macos", "linux"],
  },
  {
    name: "Set Volume to 50%",
    icon: "flowbite:volume-down-solid",
    confirmRequired: false,
    function: setVolumeTo50,
    platforms: ["macos", "linux"],
  },
  {
    name: "Set Volume to 75%",
    icon: "flowbite:volume-down-solid",
    confirmRequired: false,
    function: setVolumeTo75,
    platforms: ["macos", "linux"],
  },
  {
    name: "Set Volume to 100%",
    icon: "flowbite:volume-up-solid",
    confirmRequired: false,
    function: setVolumeTo100,
    platforms: ["macos", "linux"],
  },
  {
    name: "Turn Volume Up",
    icon: "flowbite:volume-down-solid",
    confirmRequired: false,
    function: turnVolumeUp,
    platforms: ["macos", "linux"],
  },
  {
    name: "Turn Volume Down",
    icon: "flowbite:volume-down-outline",
    confirmRequired: false,
    function: turnVolumeDown,
    platforms: ["macos", "linux"],
  },
  {
    name: "Toggle Mute",
    icon: "flowbite:volume-down-outline",
    confirmRequired: false,
    function: toggleMute,
    platforms: ["macos", "linux"],
  },
  {
    name: "Mute",
    icon: "flowbite:volume-mute-solid",
    confirmRequired: false,
    function: mute,
    platforms: ["macos", "linux"],
  },
  {
    name: "Unmute",
    icon: "flowbite:volume-mute-solid",
    confirmRequired: false,
    function: unmute,
    platforms: ["macos", "linux"],
  },
  {
    name: "Toggle Stage Manager",
    icon: "material-symbols:dashboard",
    confirmRequired: false,
    function: toggleStageManager,
    platforms: [],
  },
  {
    name: "Toggle Bluetooth",
    icon: "material-symbols:bluetooth",
    confirmRequired: false,
    function: toggleBluetooth,
    platforms: [],
  },
  {
    name: "Toggle Hidden Files",
    icon: "mdi:hide",
    confirmRequired: false,
    function: toggleHiddenFiles,
    platforms: [],
  },
  {
    name: "Eject All Disks",
    icon: "ph:eject-fill",
    confirmRequired: true,
    function: ejectAllDisks,
    platforms: ["macos"],
  },
  {
    name: "Log Out User",
    icon: "ic:baseline-logout",
    confirmRequired: false,
    function: logoutUser,
    platforms: ["macos", "linux"],
  },
  {
    name: "Hide All Apps Except Frontmost",
    icon: "mdi:hide",
    confirmRequired: false,
    function: hideAllAppsExceptFrontmost,
    platforms: [],
  },
];

const currentPlatform = await platform();

export const systemCommands: TCommand[] = rawSystemCommands
  .filter((cmd) => cmd.platforms.includes(currentPlatform)) // Filter out system commands that are not supported on the current platform
  .map((cmd) => ({
    name: cmd.name,
    value: "system-cmd" + cmd.name.split(" ").join("-").toLowerCase(),
    icon: cmd.icon,
    keywords: cmd.name.split(" "),
    commandType: CommandType.Enum.system,
    function: cmd.function,
    confirmRequired: cmd.confirmRequired,
  }));
