<script lang="ts">
  import { onMount } from "svelte";
  import startCanvas from "../canvas/main";

  let canvas: HTMLCanvasElement | null = null;

  onMount(() => {
    if (canvas == null) {
      console.log("Something went wronng, canvas element is not detected");
      return;
    }

    startCanvas(canvas);
  });
</script>

<main>
  <div class="canvas-container">
    <canvas bind:this={canvas} id="main-canvas"></canvas>
  </div>
</main>

<style>
  .canvas-container {
    width: 100vw;
    height: 100vh;
  }

  #main-canvas {
    width: 100vw;
    height: 100vh;
  }
</style>
