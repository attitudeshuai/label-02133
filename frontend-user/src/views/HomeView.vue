<template>
  <div class="home-page">
    <!-- Hero Banner -->
    <HeroBanner />

    <!-- 核心优势 -->
    <section class="section section-gray">
      <div class="container">
        <SectionTitle
          title="为什么选择知运"
          subtitle="我们致力于为企业提供最专业的智慧物流解决方案"
        />
        <div class="row">
          <div class="col col-3" v-for="feature in features" :key="feature.title">
            <FeatureCard
              :icon="feature.icon"
              :title="feature.title"
              :description="feature.description"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- 产品服务 -->
    <section class="section section-light">
      <div class="container">
        <SectionTitle title="产品与服务" subtitle="全方位的智慧物流系统，满足您的各种业务需求" />
        <div class="row">
          <div class="col col-4" v-for="product in products" :key="product.title">
            <ProductCard
              :icon="product.icon"
              :title="product.title"
              :description="product.description"
              :features="product.features"
              @detail="$router.push('/products')"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- 数据展示 -->
    <section class="section section-dark stats-section">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-card" v-for="stat in stats" :key="stat.label">
            <div class="stat-icon">
              <el-icon :size="32">
                <component :is="stat.icon" />
              </el-icon>
            </div>
            <div class="stat-value">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 成功案例 -->
    <section class="section section-gray">
      <div class="container">
        <SectionTitle title="成功案例" subtitle="众多企业选择知运，实现物流数字化转型" />
        <div class="row">
          <div class="col col-4" v-for="caseItem in cases" :key="caseItem.title">
            <CaseCard
              :title="caseItem.title"
              :description="caseItem.description"
              :tag="caseItem.tag"
              :industry="caseItem.industry"
              @click="$router.push('/cases')"
            />
          </div>
        </div>
        <div class="text-center" style="margin-top: 32px">
          <el-button type="primary" size="large" @click="$router.push('/cases')">
            查看更多案例
            <el-icon class="el-icon--right"><ArrowRight /></el-icon>
          </el-button>
        </div>
      </div>
    </section>

    <!-- 合作伙伴 -->
    <section class="section section-light">
      <div class="container">
        <SectionTitle title="合作伙伴" subtitle="携手行业领先企业，共创智慧物流新未来" />
        <div class="partners-grid">
          <div class="partner-item" v-for="i in 8" :key="i">
            <div class="partner-logo">
              <el-icon :size="32"><OfficeBuilding /></el-icon>
              <span>合作伙伴 {{ i }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section cta-section">
      <div class="container text-center">
        <h2 class="cta-title">准备好开启智慧物流之旅了吗？</h2>
        <p class="cta-desc">立即联系我们，获取专属解决方案</p>
        <el-button type="primary" size="large" round @click="$router.push('/contact')">
          免费咨询
          <el-icon class="el-icon--right"><ArrowRight /></el-icon>
        </el-button>
      </div>
    </section>
  </div>
</template>

<script setup>
import HeroBanner from '@/components/HeroBanner.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import FeatureCard from '@/components/FeatureCard.vue'
import ProductCard from '@/components/ProductCard.vue'
import CaseCard from '@/components/CaseCard.vue'

const features = [
  {
    icon: 'Cpu',
    title: '智能化技术',
    description: '基于AI和大数据的智能算法，实现物流全流程自动化决策'
  },
  {
    icon: 'Connection',
    title: '全链路整合',
    description: '打通仓储、运输、配送各环节，实现供应链一体化管理'
  },
  {
    icon: 'DataAnalysis',
    title: '数据驱动',
    description: '实时数据监控与分析，助力企业精准决策，降本增效'
  },
  {
    icon: 'Service',
    title: '专业服务',
    description: '资深行业专家团队，提供7x24小时技术支持与咨询服务'
  }
]

const products = [
  {
    icon: 'Box',
    title: '智慧仓储系统',
    description: '全面的仓库管理解决方案，实现库存精准管控',
    features: ['库位智能管理', '出入库自动化', '库存实时监控', '批次追溯管理']
  },
  {
    icon: 'Van',
    title: '运输管理系统',
    description: '高效的运输调度平台，优化运输成本与时效',
    features: ['智能路径规划', '车辆实时追踪', '运费自动核算', '承运商管理']
  },
  {
    icon: 'Location',
    title: '配送调度系统',
    description: '智能配送解决方案，提升末端配送效率',
    features: ['订单智能分配', '配送路线优化', '签收电子化', '配送员管理']
  }
]

const stats = [
  { icon: 'User', value: '500+', label: '服务客户' },
  { icon: 'Goods', value: '1亿+', label: '日处理订单' },
  { icon: 'TrendCharts', value: '30%', label: '效率提升' },
  { icon: 'Timer', value: '99.9%', label: '系统稳定性' }
]

const cases = [
  {
    title: '某大型电商平台',
    description: '通过部署知运智慧仓储系统，实现仓库作业效率提升40%，库存准确率达99.9%',
    tag: '电商物流',
    industry: '电子商务'
  },
  {
    title: '某知名快递企业',
    description: '采用知运运输管理系统，优化运输路线，降低运输成本25%，时效提升20%',
    tag: '快递物流',
    industry: '快递行业'
  },
  {
    title: '某连锁零售集团',
    description: '使用知运配送调度系统，实现门店配送准时率提升至98%，客户满意度显著提高',
    tag: '零售配送',
    industry: '零售行业'
  }
]
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables.scss' as *;

.stats-section {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: $spacing-xl;
}

.stat-card {
  text-align: center;
  padding: $spacing-xl;
  background: rgba(255, 255, 255, 0.05);
  border-radius: $radius-lg;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.stat-icon {
  width: 64px;
  height: 64px;
  background: rgba($primary-color, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto $spacing-md;
  color: $primary-color;
}

.stat-value {
  font-size: 36px;
  font-weight: 700;
  color: #fff;
  margin-bottom: $spacing-xs;
}

.stat-label {
  font-size: $font-size-sm;
  color: rgba(255, 255, 255, 0.65);
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: $spacing-lg;
}

.partner-item {
  background: $bg-color;
  border-radius: $radius-md;
  padding: $spacing-lg;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;

  &:hover {
    box-shadow: $shadow-md;
  }
}

.partner-logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: $spacing-sm;
  color: $text-secondary;

  span {
    font-size: $font-size-sm;
  }
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
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .partners-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: $breakpoint-md) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: $spacing-md;
  }

  .stat-card {
    padding: $spacing-md;
  }

  .stat-value {
    font-size: 24px;
  }

  .stat-icon {
    width: 48px;
    height: 48px;
  }

  .partners-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: $spacing-md;
  }

  .partner-item {
    padding: $spacing-md;
  }

  .cta-title {
    font-size: $font-size-xl;
  }

  .cta-desc {
    font-size: $font-size-base;
  }
}

@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: 1fr 1fr;
  }

  .partners-grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
