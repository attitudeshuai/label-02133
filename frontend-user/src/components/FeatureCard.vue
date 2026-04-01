<template>
  <div class="feature-card">
    <div class="icon-wrapper">
      <el-icon :size="32">
        <component :is="icon" />
      </el-icon>
    </div>
    <h3 class="title">{{ title }}</h3>
    <p class="desc">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables.scss' as *;

.feature-card {
  background: $bg-white;
  border-radius: $radius-lg;
  padding: $spacing-xl;
  text-align: center;
  box-shadow: $shadow-md;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: $shadow-lg;

    .icon-wrapper {
      background: $primary-color;
      color: #fff;
    }
  }
}

.icon-wrapper {
  width: 72px;
  height: 72px;
  background: rgba($primary-color, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto $spacing-md;
  color: $primary-color;
  transition: all 0.3s ease;
}

.title {
  font-size: $font-size-lg;
  font-weight: 600;
  color: $text-primary;
  margin-bottom: $spacing-sm;
}

.desc {
  font-size: $font-size-sm;
  color: $text-secondary;
  line-height: $line-height-loose;
}
</style>
