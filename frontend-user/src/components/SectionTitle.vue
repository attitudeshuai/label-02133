<template>
  <div class="section-title" :class="{ 'section-title-light': light }">
    <h2 class="title">{{ title }}</h2>
    <p v-if="subtitle" class="subtitle">{{ subtitle }}</p>
    <div class="title-line"></div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  light: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables.scss' as *;

.section-title {
  text-align: center;
  margin-bottom: $spacing-xl;
}

.title {
  font-size: $font-size-xxl;
  font-weight: 700;
  color: $text-primary;
  margin-bottom: $spacing-sm;
}

.subtitle {
  font-size: $font-size-base;
  color: $text-secondary;
  max-width: 600px;
  margin: 0 auto $spacing-md;
}

.title-line {
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, $primary-color, $primary-light);
  border-radius: 2px;
  margin: 0 auto;
}

.section-title-light {
  .title {
    color: #fff;
  }
  
  .subtitle {
    color: rgba(255, 255, 255, 0.75);
  }
}

@media (max-width: $breakpoint-md) {
  .title {
    font-size: $font-size-xl;
  }
}
</style>
