import { invoke } from "@tauri-apps/api/core";

export function pathExists(path: string): Promise<boolean> {
  return invoke("plugin:jarvis|path_exists", { path });
}

/**
 * This command is built into Jarvis App
 * Used to decompress a tarball file
 * @param path
 * @param destinationFolder
 * @param options
 * @returns
 */
export function decompressTarball(
  path: string,
  destinationFolder: string,
  options?: {
    overwrite?: boolean;
  },
): Promise<string> {
  return invoke("plugin:jarvis|decompress_tarball", {
    path,
    destinationFolder,
    overwrite: options?.overwrite ?? false,
  });
}

/**
 * Compress a given directory into a tarball file
 * @param srcDir Directory to compress
 * @param destFile destination file, should end with .tar.gz or .tgz
 * @param options
 * @returns
 */
export function compressTarball(
  srcDir: string,
  destFile: string,
  options?: {
    overwrite?: boolean;
  },
): Promise<string> {
  return invoke("plugin:jarvis|compress_tarball", {
    srcDir,
    destFile,
    overwrite: options?.overwrite ?? false,
  });
}
