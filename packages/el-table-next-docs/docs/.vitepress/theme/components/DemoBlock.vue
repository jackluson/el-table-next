<!--
 * @Date: 2022-01-25 17:41:54
 * @LastEditTime: 2022-02-08 16:00:53
 * @Description: 
-->
<template>
  <div
    class="demo-block"
    :class="[{ hover: hovering }]"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
  >
    <div class="demo-content">
      <slot name="demo"></slot>
    </div>
    <div class="meta" ref="meta">
      <div class="description" v-show="$slots.description">
        <slot name="description"></slot>
      </div>
      <div class="code-content">
        <slot name="source"></slot>
      </div>
    </div>
    <div
      class="demo-block-control"
      :class="{ 'is-fixed': fixedControl }"
      :style="{ width: fixedControl ? `${codeContentWidth}px` : 'unset' }"
      ref="control"
      @click="isExpanded = !isExpanded"
    >
      <div class="fold-block" :class="[{ hovering: hovering }]">
        <i :class="[iconClass, 'icon']"></i>
        <div class="text">{{ controlText }}</div>
      </div>
      <el-tooltip
        class="box-item"
        effect="dark"
        :content="playGroundTooltip"
        placement="top"
      >
        <icon-carbon:edit-filter class="edit-filter" @click="handleGo" />
      </el-tooltip>
      <transition name="bounce">
        <span
          @click.stop="copyCode"
          :class="['copy-action', { 'copy-action-success ': copied }]"
          >{{ copiedText }}</span
        >
      </transition>
    </div>
  </div>
</template>

<script type="ts">
import { ref, unref } from 'vue'
import { useRoute, useData } from 'vitepress'

export default {
  props: {
    sourceCode: {
      type: String,
      default: '',
    },
  },
  setup() {
    const route = useRoute()
    const info = useData()
    const navs = unref(info.theme).nav
    const playGroundNav = navs.find(nav => nav.text === 'PlayGround')
    return {
      route,
      hovering: ref(false),
      copied: ref(false),
      isExpanded: ref(false),
      fixedControl: ref(false),
      codeContentWidth: ref(0),
      scrollParent: ref(0),
      playGroundLink: playGroundNav.link
    }
  },
  computed: {
    langConfig() {
      return {
        "hide-text": "收起代码",
        "show-text": "展开代码",
        "copy-text": "Copy",
        "copy-success": "Copied！"
      }
    },
    playGroundTooltip() {
      return this.sourceCode
        ? '在 Playground 中编辑'
        : 'lang="tsx" 暂不支持在Playground中编辑'
    },
    iconClass() {
      return this.isExpanded ? "caret-top" : "caret-bottom";
    },
    controlText() {
      return this.isExpanded ? this.langConfig["hide-text"] : this.langConfig["show-text"];
    },
    copiedText() {
      return this.copied ? this.langConfig["copy-success"] : this.langConfig["copy-text"];
    },
    codeArea() {
      return this.$el.getElementsByClassName("meta")[0];
    },
  },
  methods: {
    async copyCode() {
      if (this.copied) {
        return;
      }
      const pre = this.$el.querySelectorAll("pre")[0];
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(pre.innerText);
        this.copied = true
      } else {
        pre.setAttribute("contenteditable", "true");
        pre.focus();
        document.execCommand("selectAll", false, null);
        this.copied = document.execCommand("copy");
        pre.removeAttribute("contenteditable");
      }
      setTimeout(() => {
        this.copied = false;
      }, 1500);
    },
    scrollHandler() {
      const rect = this.$refs.meta && this.$refs.meta.getBoundingClientRect();
      if (!rect) return
      const { top, bottom, left } = rect
      this.fixedControl =
        bottom > document.documentElement.clientHeight &&
        top + 44 <= document.documentElement.clientHeight;
      this.$refs.control.style.left = this.fixedControl ? `${left}px` : "0";
    },
    removeScrollHandler() {
      this.scrollParent && this.scrollParent.removeEventListener("scroll", this.scrollHandler);
    },
    handleGo(e) {
      e.stopPropagation()
      if (this.sourceCode) {
        const link = this.playGroundLink + "#" + this.sourceCode
        window.open(link)
      } else {
        this.$message({
          message: 'lang=\'tsx\' 暂不支持在Playground中编辑',
          type: 'warning',
        })
      }
    }
  },
  watch: {
    isExpanded(val) {
      let codeAreaHeight = this.$el.getElementsByClassName("code-content")[0].clientHeight;
      if (this.$el.getElementsByClassName("description").length > 0) {
        codeAreaHeight = codeAreaHeight + this.$el.getElementsByClassName("description")[0].clientHeight + 20
      }
      this.codeArea.style.height = val ? `${codeAreaHeight + 1}px` : "0";
      if (!val) {
        this.fixedControl = false;
        this.$refs.control.style.left = "0";
        this.removeScrollHandler();
        return;
      }
      setTimeout(() => {
        this.scrollParent = document;
        this.scrollParent && this.scrollParent.addEventListener("scroll", this.scrollHandler);
        this.scrollHandler();
      }, 60);
    }
  },
  mounted() {
    this.$nextTick(() => {
      let codeContent = this.$el.getElementsByClassName("code-content")[0];
      this.codeContentWidth = this.$el.offsetWidth;
      if (this.$el.getElementsByClassName("description").length === 0) {
        codeContent.style.width = "100%";
        codeContent.borderRight = "none";
      }
    });
  },
  beforeDestroy() {
    this.removeScrollHandler();
  }
};
</script>
<style scoped>
.demo-block {
  border: solid 1px #ebebeb;
  border-radius: 3px;
  transition: 0.2s;
  margin-top: 15px;
  margin-bottom: 15px;
}

.demo-block.hover {
  box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6), 0 2px 4px 0 rgba(232, 237, 250, 0.5);
}

.demo-block code {
  font-family: Menlo, Monaco, Consolas, Courier, monospace;
}

.demo-block .demo-content {
  padding: 24px;
}

.demo-block .meta {
  border: solid 1px #ebebeb;
  background-color: #f9f9f9;
  border-radius: 3px;
  overflow: hidden;
  height: 0;
  transition: height 0.2s;
}

.demo-block .description {
  padding: 20px;
  box-sizing: border-box;
  border: solid 1px var(--el-border-color-base);
  border-radius: 3px;
  font-size: 14px;
  line-height: 22px;
  color: #666;
  word-break: break-word;
  margin: 10px;
  background-color: var(--vt-c-bg);
}

.demo-block .demo-block-control {
  height: 44px;
  box-sizing: border-box;
  background-color: var(--vt-c-bg);
  text-align: center;
  color: #d3dce6;
  cursor: pointer;
  position: relative;
}

.demo-block .demo-block-control.is-fixed {
  position: fixed;
  bottom: 0;
  width: 660px;
  z-index: 999;
}

.demo-block .demo-block-control .icon {
  font-family: element-icons !important;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  vertical-align: baseline;
  display: inline-block;
}

.demo-block .demo-block-control .caret-top::before {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border-bottom: 6px solid #ccc;
  border-right: 6px solid transparent;
  border-left: 6px solid transparent;
}

.demo-block .demo-block-control .caret-bottom::before {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border-top: 6px solid #ccc;
  border-right: 6px solid transparent;
  border-left: 6px solid transparent;
}

.demo-block .demo-block-control i {
  font-size: 16px;
  line-height: 44px;
  transition: 0.3s;
}

.demo-block .demo-block-control i {
  font-size: 16px;
  line-height: 44px;
  transition: 0.3s;
}

.demo-block .demo-block-control .copy-action {
  position: absolute;
  display: flex;
  text-align: center;
  align-items: center;
  height: 100%;
  min-width: 60px;
  right: 0;
  top: 0;
}

.demo-block .edit-filter {
  position: absolute;
  display: flex;
  text-align: center;
  align-items: center;
  height: 100%;
  min-width: 60px;
  right: 58px;
  top: 13px;
  height: 24px;
  outline: none;
}

.demo-block .fold-block {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.demo-block .fold-block {
  transition: transform 0.3s;
  transform: translateX(0px);
}

.demo-block .fold-block.hovering {
  transform: translateX(-30px);
}

.demo-block .fold-block .text {
  transform: translateX(18px);
  opacity: 0;
}

.demo-block .fold-block.hovering .text {
  opacity: 1;
}

.demo-block .fold-block:hover i::before {
  border-top-color: #409eff;
  border-bottom-color: #409eff;
}

.demo-block .demo-block-control .copy-action-success {
  color: #1bc1a1;
}

.demo-block .demo-block-control:hover {
  color: #409eff;
}

.demo-block .demo-block-control .bounce-enter-active {
  will-change: transform;
  animation: bounce-in 0.5s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}
</style>
