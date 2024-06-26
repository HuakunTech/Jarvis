<script setup lang="ts">
import { Card, CardContent } from "@/components/ui/card";
import { default as TauriLink } from "@/components/tauri/link.vue";
import { getVersion } from "@tauri-apps/api/app";
import { onMounted, ref, type HTMLAttributes } from "vue";
import { Icon } from "@iconify/vue";
import { cn } from "@/lib/utils";
import { check } from "@tauri-apps/plugin-updater";
import { relaunch } from "@tauri-apps/plugin-process";
import { Button } from "@/components/ui/button";
import { confirm } from "@tauri-apps/plugin-dialog";
import { ElMessage, ElNotification } from "element-plus";

const appVersion = ref("");
onMounted(() => {
  getVersion().then((version) => {
    appVersion.value = version;
  });
});
const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();

async function checkUpdate() {
  const update = await check();
  if (update?.available) {
    const confirmUpdate = await confirm(
      `A new version ${update.version} is available. Do you want to install and relaunch?`,
    );
    if (confirmUpdate) {
      await update.downloadAndInstall();
      await relaunch();
    }
  } else {
    ElNotification.info("You are on the latest version");
  }
}
</script>
<template>
  <Card
    :class="
      cn('h-full border-none flex justify-center items-center border-2 border-red-500', props.class)
    "
  >
    <CardContent class="flex space-x-5 items-center">
      <img src="/128x128.png" class="w-44" />
      <div class="flex flex-col space-y-1">
        <p class="text-3xl font-bold">Jarvis</p>
        <p class="text-xs">Version: {{ appVersion }}</p>
        <p>
          <strong class="font-bold">Author: </strong>
          <TauriLink href="https://github.com/HuakunShen">
            @HuakunShen
            <Icon icon="mdi:github" class="inline text-white -translate-y-0.5" />
          </TauriLink>
        </p>
        <TauriLink href="https://github.com/HuakunTech/Jarvis">
          Jarvis Source Code
          <Icon icon="mdi:github" class="inline text-white -translate-y-0.5" />
        </TauriLink>
        <TauriLink href="https://github.com/HuakunTech/JarvisExtensions">
          Extensions Source Code
          <Icon icon="mdi:github" class="inline text-white -translate-y-0.5" />
        </TauriLink>
        <Button @click="checkUpdate" size="xs" variant="secondary">Check Update</Button>
      </div>
    </CardContent>
  </Card>
</template>
