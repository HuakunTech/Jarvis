<script setup lang="ts">
import type { TListItem } from "jarvis-api";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "lucide-vue-next";

const props = defineProps<{ item: TListItem }>();
const emits = defineEmits<{
  (e: "delete", item: TListItem): void;
}>();
</script>
<template>
  <div class="text-sm flex justify-between">
    <span>{{ props.item.title }}</span>
    <Button size="icon" variant="outline" @click="emits('delete', props.item)"
      ><TrashIcon
    /></Button>
  </div>
  <!-- <Separator class="my-2" /> -->
</template>
