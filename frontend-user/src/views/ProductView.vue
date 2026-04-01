<template>
  <div class="product-page">
    <!-- 页面头部 -->
    <section class="page-header">
      <div class="container">
        <h1 class="page-title">产品服务</h1>
        <p class="page-subtitle">全方位智慧物流解决方案，助力企业数字化转型</p>
      </div>
    </section>

    <!-- 产品列表 -->
    <section class="section section-light">
      <div class="container">
        <div class="product-detail" v-for="(product, index) in products" :key="product.title">
          <div class="product-content" :class="{ 'order-2': index % 2 === 1 }">
            <div class="product-tag">{{ product.tag }}</div>
            <h2 class="product-title">{{ product.title }}</h2>
            <p class="product-desc">{{ product.description }}</p>
            <div class="product-features">
              <div class="feature-item" v-for="feature in product.features" :key="feature.title">
                <el-icon :size="20"><Check /></el-icon>
                <div>
                  <h4>{{ feature.title }}</h4>
                  <p>{{ feature.desc }}</p>
                </div>
              </div>
            </div>
            <el-button type="primary" size="large" @click="$router.push('/contact')">
              获取方案
              <el-icon class="el-icon--right"><ArrowRight /></el-icon>
            </el-button>
          </div>
          <div class="product-image">
            <div class="image-placeholder" :style="{ background: product.gradient }">
              <el-icon :size="80">
                <component :is="product.icon" />
              </el-icon>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 技术优势 -->
    <section class="section section-gray">
      <div class="container">
        <SectionTitle title="技术优势" subtitle="领先的技术架构，保障系统稳定高效运行" />
        <div class="tech-grid">
          <div class="tech-card" v-for="tech in technologies" :key="tech.title">
            <div class="tech-icon">
              <el-icon :size="32">
                <component :is="tech.icon" />
              </el-icon>
            </div>
            <h3>{{ tech.title }}</h3>
            <p>{{ tech.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 服务流程 -->
    <section class="section section-light">
      <div class="container">
        <SectionTitle title="服务流程" subtitle="专业规范的服务流程，确保项目顺利交付" />
        <div class="process-steps">
          <div class="step-item" v-for="(step, index) in steps" :key="step.title">
            <div class="step-number">{{ index + 1 }}</div>
            <div class="step-content">
              <h4>{{ step.title }}</h4>
              <p>{{ step.description }}</p>
            </div>
            <div class="step-arrow" v-if="index < steps.length - 1">
              <el-icon><ArrowRight /></el-icon>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section cta-section">
      <div class="container text-center">
        <h2 class="cta-title">需要定制化解决方案？</h2>
        <p class="cta-desc">我们的专家团队将为您提供一对一咨询服务</p>
        <el-button type="primary" size="large" round @click="$router.push('/contact')">
          立即咨询
          <el-icon class="el-icon--right"><ArrowRight /></el-icon>
        </el-button>
      </div>
    </section>
  </div>
</template>

<script setup>
import SectionTitle from '@/components/SectionTitle.vue';

const products = [
  {
    tag: '核心产品',
    title: '智慧仓储管理系统 (WMS)',
    description:
      '全面的仓库管理解决方案，通过智能算法优化库位分配、拣货路径，实现仓库作业效率最大化。支持多仓库、多货主管理，满足不同业务场景需求。',
    icon: 'Box',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    features: [
      { title: '智能库位管理', desc: 'AI算法自动分配最优库位，提升空间利用率' },
      { title: '高效拣货作业', desc: '智能路径规划，减少拣货行走距离40%' },
      { title: '实时库存监控', desc: '库存数据实时同步，准确率达99.9%' },
      { title: '批次追溯管理', desc: '全程追溯，满足质量管理要求' }
    ]
  },
  {
    tag: '核心产品',
    title: '运输管理系统 (TMS)',
    description:
      '高效的运输调度平台，整合运力资源，优化运输路线，降低运输成本。支持多种运输方式，实现运输全程可视化追踪。',
    icon: 'Van',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    features: [
      { title: '智能路径规划', desc: '基于实时路况的最优路线推荐' },
      { title: '运力资源整合', desc: '对接多家承运商，灵活调度运力' },
      { title: '运费自动核算', desc: '多维度计费规则，自动生成账单' },
      { title: '全程可视追踪', desc: '实时定位，异常预警及时推送' }
    ]
  },
  {
    tag: '核心产品',
    title: '配送调度系统 (DMS)',
    description:
      '智能配送解决方案，优化末端配送效率。通过智能派单、路线优化，提升配送时效，降低配送成本。',
    icon: 'Location',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    features: [
      { title: '智能订单分配', desc: '基于配送员位置、能力智能派单' },
      { title: '配送路线优化', desc: '多点配送路线最优规划' },
      { title: '电子签收', desc: '拍照、签名电子化，凭证可追溯' },
      { title: '配送员管理', desc: '绩效考核、工作量统计一目了然' }
    ]
  },
  {
    tag: '增值服务',
    title: '数据分析平台',
    description:
      '强大的数据分析能力，将物流数据转化为业务洞察。多维度报表、可视化大屏，助力管理决策。',
    icon: 'DataAnalysis',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    features: [
      { title: '多维度报表', desc: '运营、财务、绩效报表一键生成' },
      { title: '可视化大屏', desc: '实时数据大屏，运营状态一目了然' },
      { title: '智能预警', desc: '异常数据自动预警，及时发现问题' },
      { title: '趋势分析', desc: '历史数据分析，预测业务趋势' }
    ]
  }
];

const technologies = [
  {
    icon: 'Cpu',
    title: '微服务架构',
    description: '采用Spring Cloud微服务架构，支持弹性扩展，保障系统高可用'
  },
  {
    icon: 'Connection',
    title: 'API开放平台',
    description: '标准化API接口，轻松对接ERP、电商等第三方系统'
  },
  {
    icon: 'Lock',
    title: '安全保障',
    description: '多层安全防护，数据加密传输，通过等保三级认证'
  },
  {
    icon: 'Monitor',
    title: '智能运维',
    description: '7x24小时监控，自动故障恢复，99.9%系统可用性'
  }
];

const steps = [
  {
    title: '需求调研',
    description: '深入了解业务需求，梳理痛点问题'
  },
  {
    title: '方案设计',
    description: '定制化解决方案，明确实施路径'
  },
  {
    title: '系统部署',
    description: '专业团队实施，确保平稳上线'
  },
  {
    title: '培训交付',
    description: '系统培训，确保用户熟练使用'
  },
  {
    title: '持续服务',
    description: '7x24技术支持，持续优化升级'
  }
];
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables.scss' as *;

.page-header {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  padding: $spacing-xxl 0;
  text-align: center;
  color: #fff;
}

.page-title {
  font-size: $font-size-xxxl;
  font-weight: 700;
  margin-bottom: $spacing-sm;
}

.page-subtitle {
  font-size: $font-size-lg;
  opacity: 0.75;
}

.product-detail {
  display: flex;
  gap: $spacing-xxl;
  align-items: center;
  padding: $spacing-xxl 0;
  border-bottom: 1px solid $border-light;

  &:last-child {
    border-bottom: none;
  }
}

.product-content {
  flex: 1;

  &.order-2 {
    order: 2;
  }
}

.product-tag {
  display: inline-block;
  background: rgba($primary-color, 0.1);
  color: $primary-color;
  padding: $spacing-xs $spacing-sm;
  border-radius: $radius-sm;
  font-size: $font-size-xs;
  font-weight: 500;
  margin-bottom: $spacing-md;
}

.product-title {
  font-size: $font-size-xxl;
  font-weight: 700;
  color: $text-primary;
  margin-bottom: $spacing-md;
}

.product-desc {
  font-size: $font-size-base;
  color: $text-secondary;
  line-height: $line-height-loose;
  margin-bottom: $spacing-lg;
}

.product-features {
  margin-bottom: $spacing-xl;
}

.feature-item {
  display: flex;
  gap: $spacing-sm;
  margin-bottom: $spacing-md;

  .el-icon {
    color: $success-color;
    margin-top: 4px;
  }

  h4 {
    font-size: $font-size-base;
    color: $text-primary;
    margin-bottom: 2px;
  }

  p {
    font-size: $font-size-sm;
    color: $text-secondary;
  }
}

.product-image {
  flex: 0 0 450px;
}

.image-placeholder {
  width: 100%;
  height: 350px;
  border-radius: $radius-lg;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: $spacing-lg;
}

.tech-card {
  background: $bg-white;
  padding: $spacing-xl;
  border-radius: $radius-lg;
  text-align: center;
  box-shadow: $shadow-md;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-8px);
    box-shadow: $shadow-lg;
  }
}

.tech-icon {
  width: 64px;
  height: 64px;
  background: rgba($primary-color, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto $spacing-md;
  color: $primary-color;
}

.tech-card h3 {
  font-size: $font-size-lg;
  color: $text-primary;
  margin-bottom: $spacing-sm;
}

.tech-card p {
  font-size: $font-size-sm;
  color: $text-secondary;
}

.process-steps {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.step-item {
  flex: 1;
  text-align: center;
  position: relative;
}

.step-number {
  width: 48px;
  height: 48px;
  background: $primary-color;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: $font-size-lg;
  font-weight: 700;
  margin: 0 auto $spacing-md;
}

.step-content {
  h4 {
    font-size: $font-size-base;
    color: $text-primary;
    margin-bottom: $spacing-xs;
  }

  p {
    font-size: $font-size-sm;
    color: $text-secondary;
    padding: 0 $spacing-sm;
  }
}

.step-arrow {
  position: absolute;
  right: -10px;
  top: 20px;
  color: $border-color;
}

.cta-section {
  background: linear-gradient(135deg, $primary-color, $primary-dark);
  color: #fff;
}

.cta-title {
  font-size: $font-size-xxl;
  font-weight: 700;
  margin-bottom: $spacing-md;
}

.cta-desc {
  font-size: $font-size-lg;
  opacity: 0.85;
  margin-bottom: $spacing-xl;
}

@media (max-width: $breakpoint-lg) {
  .product-detail {
    flex-direction: column;
  }

  .product-content.order-2 {
    order: 0;
  }

  .product-image {
    flex: none;
    width: 100%;
  }

  .tech-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .process-steps {
    flex-wrap: wrap;
    gap: $spacing-lg;
  }

  .step-item {
    flex: 0 0 calc(33.333% - 16px);
  }

  .step-arrow {
    display: none;
  }
}

@media (max-width: $breakpoint-md) {
  .page-title {
    font-size: $font-size-xxl;
  }

  .product-title {
    font-size: $font-size-xl;
  }

  .tech-grid {
    grid-template-columns: 1fr;
  }

  .step-item {
    flex: 0 0 100%;
  }
}
</style>
