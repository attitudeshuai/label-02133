<template>
  <div class="product-card">
    <div class="product-image">
      <div class="image-placeholder">
        <el-icon :size="48">
          <component :is="icon" />
        </el-icon>
      </div>
    </div>
    <div class="product-content">
      <h3 class="title">{{ title }}</h3>
      <p class="desc">{{ description }}</p>
      <ul class="features">
        <li v-for="(feature, index) in features" :key="index">
          <el-icon><Check /></el-icon>
          {{ feature }}
        </li>
      </ul>
      <el-button type="primary" plain @click="$emit('detail')">
        了解详情
        <el-icon class="el-icon--right"><ArrowRight /></el-icon>
      </el-button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    default: 'Box'
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  features: {
    type: Array,
    default: () => []
  }
})

defineEmits(['detail'])
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables.scss' as *;

.product-card {
  background: $bg-white;
  border-radius: $radius-lg;
  overflow: hidden;
  box-shadow: $shadow-md;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: $shadow-lg;
  }
}

.product-image {
  height: 200px;
  background: linear-gradient(135deg, rgba($primary-color, 0.1), rgba($primary-light, 0.1));
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-placeholder {
  width: 100px;
  height: 100px;
  background: rgba($primary-color, 0.15);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: $primary-color;
}

.product-content {
  padding: $spacing-lg;
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
  margin-bottom: $spacing-md;
}

.features {
  list-style: none;
  margin-bottom: $spacing-lg;

  li {
    display: flex;
    align-items: center;
    gap: $spacing-xs;
    font-size: $font-size-sm;
    color: $text-regular;
    margin-bottom: $spacing-xs;

    .el-icon {
      color: $success-color;
    }
  }
}

// 修复按钮颜色
:deep(.el-button--primary.is-plain) {
  color: $primary-color;
  background: rgba($primary-color, 0.1);
  border-color: $primary-color;

  &:hover,
  &:focus {
    color: #fff;
    background: $primary-color;
    border-color: $primary-color;
  }
}
</style>
