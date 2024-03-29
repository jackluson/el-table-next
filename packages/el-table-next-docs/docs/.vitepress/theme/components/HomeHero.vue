<template>
  <header v-if="showHero" class="home-hero pt-15 pb-10 px-5">
    <div class="description mx-auto -mt-8 mb-2">
      <img class="mx-auto" src="/.vitepress/img/logo.png" alt="el-table-next" />
      <h1>{{ heroText }}</h1>
      A Simple and Friendly Table Component based on el-table of Element Plus
    </div>
    <div class="mb-15 flex gap-1 place-content-center">
      <a href="https://github.com/jackluson/el-table-next/blob/main/LICENSE" target="__blank">
        <img src="https://img.shields.io/github/license/jackluson/el-table-next?style=plastic" alt="MIT" />
      </a>
      <a href="https://www.npmjs.com/package/el-table-next" target="__blank">
        <img src="https://img.shields.io/npm/v/el-table-next?color=a1b858&label=" alt="NPM version" />
      </a>
      <a href="https://www.npmjs.com/package/el-table-next" target="__blank">
        <img alt="NPM Downloads" src="https://img.shields.io/npm/dt/el-table-next?color=50a36f&label=downloads" />
      </a>
      <img alt="visitor badge" src="https://visitor-badge.glitch.me/badge?page_id=jackluson.el-table-next" />
    </div>

    <p class="actions flex gap-2 place-content-center">
      <a class="get-started" :href="baseRoot + 'guide/'">
        Get Started
        <icon-carbon:arrow-right class="icon" />
      </a>
      <a class="setup" href="https://github.com/jackluson/el-table-next" target="_blank">
        <icon-carbon:logo-github class="icon" />GitHub
      </a>
    </p>
  </header>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useData, withBase } from "vitepress";

const { site, frontmatter } = useData();

const showHero = computed(() => {
  const { heroImage, heroText, tagline, actionLink, actionText } = frontmatter.value;
  return heroImage || heroText || tagline || (actionLink && actionText);
});

const heroText = computed(() => frontmatter.value.heroText || site.value.title);

const baseRoot = computed(() => __BASE_ROOT__);
</script>

<style scoped>
.home-hero {
  margin: 0rem 0 2.75rem;
  text-align: center;
}

@media (min-width: 420px) {
  .home-hero {
    margin: 0rem 0;
  }
}

@media (min-width: 720px) {
  .home-hero {
    margin: 0rem 0 4.25rem;
  }
}

html:not(.dark) .light\:hidden {
  display: none;
}

.figure {
  padding: 0 1.5rem;
}

.image {
  display: block;
  margin: 0 auto;
  width: auto;
  max-width: 100%;
  max-height: 280px;
}

.title {
  margin-top: 1.5rem;
  font-size: 2rem;
}

@media (min-width: 420px) {
  .title {
    font-size: 3rem;
  }
}

@media (min-width: 720px) {
  .title {
    margin-top: 2rem;
  }
}

.description {
  max-width: 760px;
  line-height: 1.5;
  color: var(--vt-c-text-2);
  transition: color 0.5s;
  font-size: 19px;
}

.actions a {
  font-size: 16px;
  display: inline-block;
  background-color: var(--vt-c-bg-mute);
  padding: 8px 18px;
  font-weight: 500;
  border-radius: 8px;
  transition: background-color 0.5s, color 0.5s;
}

.actions .get-started {
  font-weight: 600;
  background-color: var(--vt-c-brand);
  color: #fff;
}

.actions .icon {
  display: inline;
  position: relative;
  top: -1px;
  margin-left: 2px;
  fill: currentColor;
  transition: transform 0.2s;
}

.dark .actions .get-started {
  color: var(--vt-c-indigo);
}

.actions .get-started:hover {
  background-color: var(--vt-c-green-dark);
  transition-duration: 0.2s;
}

.actions .get-started:hover .icon {
  transform: translateX(2px);
}

.dark .actions .get-started:hover {
  background-color: var(--vt-c-green-light);
}

.actions .setup {
  color: var(--vt-c-text-code);
}

.actions .setup:hover {
  background-color: var(--vt-c-gray-light-4);
  transition-duration: 0.2s;
}

.dark .actions .setup:hover {
  background-color: var(--vt-c-gray-dark-3);
}
</style>
