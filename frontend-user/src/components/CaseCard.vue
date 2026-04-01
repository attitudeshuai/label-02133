<template>
  <div class="case-card" @click="$emit('click')">
    <div class="case-image">
      <div class="image-placeholder">
        <el-icon :size="40"><OfficeBuilding /></el-icon>
      </div>
      <div class="case-tag">{{ tag }}</div>
    </div>
    <div class="case-content">
      <h3 class="title">{{ title }}</h3>
      <p class="desc">{{ description }}</p>
      <div class="case-meta">
        <span class="industry">
          <el-icon><Briefcase /></el-icon>
          {{ industry }}
        </span>
        <span class="link">
          查看详情
          <el-icon><ArrowRight /></el-icon>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  tag: {
    type: String,
    default: '成功案例'
  },
  industry: {
    type: String,
    default: '物流行业'
  }
})

defineEmits(['click'])
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables.scss' as *;

.case-card {
  background: $bg-white;
  border-radius: $radius-lg;
  overflow: hidden;
  box-shadow: $shadow-md;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: $shadow-lg;

    .link {
      color: $primary-color;
    }
  }
}

.case-image {
  height: 180px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-placeholder {
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.case-tag {
  position: absolute;
  top: $spacing-md;
  right: $spacing-md;
  background: rgba(255, 255, 255, 0.9);
  color: $primary-color;
  padding: $spacing-xs $spacing-sm;
  border-radius: $radius-sm;
  font-size: $font-size-xs;
  font-weight: 500;
}

.case-content {
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
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.case-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.industry {
  display: flex;
  align-items: center;
  gap: $spacing-xs;
  font-size: $font-size-sm;
  color: $text-secondary;
}

.link {
  display: flex;
  align-items: center;
  gap: $spacing-xs;
  font-size: $font-size-sm;
  color: $text-regular;
  transition: color 0.3s;
}
</style>
