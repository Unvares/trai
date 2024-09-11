<template>
  <div class="hero" id="home">
    <Transition name="fade-slide" mode="out-in">
      <component :is="currentComponent" v-bind="currentProps" />
    </Transition>
    <Transition name="fade">
      <v-btn
        v-if="showHint"
        class="scroll-hint"
        :class="scrollHintClasses"
        @click="scrollDown"
        icon
      >
        <v-icon icon="mdi-chevron-down" size="large" />
        Scroll to Learn More
      </v-btn>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const showHint = ref(true);
const scrollDown = () => {
  window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  showHint.value = false;
};

onMounted(() => {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      showHint.value = false;
    }
  });
});

import { useDisplay } from 'vuetify';
const { xs, sm } = useDisplay();
const scrollHintClasses = ref({});
onMounted(
  () =>
    (scrollHintClasses.value = {
      'scroll-hint_mobile': xs,
      'scroll-hint_tablet': sm,
    })
);

import { useChatbotStore } from '@/stores/chatbotStore';

const store = useChatbotStore();
const chatHasStarted = computed(() => store.chatHasStarted);

const startChat = () => {
  store.chatHasStarted = true;
};

watch(chatHasStarted, (newVal) => {
  if (newVal) {
    showHint.value = false;
  }
});

import Chatbot from './Chatbot.vue';
import HeroContent from './HeroContent.vue';
const currentComponent = computed(() =>
  chatHasStarted.value ? Chatbot : HeroContent
);
const currentProps = computed(() =>
  chatHasStarted.value ? {} : { startChat }
);
</script>

<!-- Animations -->
<style scoped lang="scss">
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.5s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-leave-to {
  opacity: 0;
  pointer-events: none; /* Make unclickable during fade-out */
}
</style>

<style scoped lang="scss">
.hero {
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  min-height: 100svh;
  max-height: 1080px;
  background-image: url('assets/images/forest_and_skies.svg');
  background-position: bottom center;
}

.scroll-hint {
  position: fixed;
  bottom: 10px;
  left: 10px;
  background: rgba(0, 0, 0, 0.3);
  color: white;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  animation: bounce 2s infinite;
  min-width: 300px;
  width: 20%;
  z-index: 3;
}

.scroll-hint_tablet {
  left: calc(50% - 150px);
}

.scroll-hint_mobile {
  width: calc(100% - 20px);
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}
</style>
