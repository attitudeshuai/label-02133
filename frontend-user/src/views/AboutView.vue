<template>
  <div class="about-page">
    <!-- 页面头部 -->
    <section class="page-header">
      <div class="container">
        <h1 class="page-title">关于我们</h1>
        <p class="page-subtitle">专注智慧物流，赋能企业数字化转型</p>
      </div>
    </section>

    <!-- 公司简介 -->
    <section class="section section-light">
      <div class="container">
        <div class="about-intro">
          <div class="intro-content">
            <SectionTitle title="公司简介" />
            <p class="intro-text">
              广州知运信息技术有限公司成立于2018年，是一家专注于智慧物流系统研发与服务的高新技术企业。
              公司总部位于广州市天河区科技园，拥有一支由资深物流专家和技术精英组成的核心团队。
            </p>
            <p class="intro-text">
              我们致力于为企业提供全方位的智慧物流解决方案，涵盖仓储管理、运输调度、配送优化、
              数据分析等核心业务领域。通过先进的人工智能、大数据、物联网等技术，
              帮助客户实现物流运营的数字化、智能化升级。
            </p>
            <div class="intro-stats">
              <div class="stat-item">
                <span class="value">6+</span>
                <span class="label">年行业经验</span>
              </div>
              <div class="stat-item">
                <span class="value">500+</span>
                <span class="label">服务客户</span>
              </div>
              <div class="stat-item">
                <span class="value">50+</span>
                <span class="label">技术专利</span>
              </div>
            </div>
          </div>
          <div class="intro-image">
            <div class="image-placeholder">
              <el-icon :size="80"><OfficeBuilding /></el-icon>
              <span>公司大楼</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 发展历程 -->
    <section class="section section-gray">
      <div class="container">
        <SectionTitle title="发展历程" subtitle="砥砺前行，不断突破" />
        <div class="timeline">
          <div class="timeline-item" v-for="item in timeline" :key="item.year">
            <div class="timeline-year">{{ item.year }}</div>
            <div class="timeline-content">
              <h4>{{ item.title }}</h4>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 企业文化 -->
    <section class="section section-light">
      <div class="container">
        <SectionTitle title="企业文化" subtitle="以客户为中心，以创新为驱动" />
        <div class="culture-grid">
          <div class="culture-card" v-for="culture in cultures" :key="culture.title">
            <div class="culture-icon">
              <el-icon :size="36">
                <component :is="culture.icon" />
              </el-icon>
            </div>
            <h3>{{ culture.title }}</h3>
            <p>{{ culture.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 团队风采 -->
    <section class="section section-gray">
      <div class="container">
        <SectionTitle title="核心团队" subtitle="汇聚行业精英，打造专业团队" />
        <div class="team-grid">
          <div class="team-card" v-for="member in team" :key="member.name">
            <div class="member-avatar">
              <el-icon :size="48"><User /></el-icon>
            </div>
            <h4 class="member-name">{{ member.name }}</h4>
            <p class="member-title">{{ member.title }}</p>
            <p class="member-desc">{{ member.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import SectionTitle from '@/components/SectionTitle.vue'

const timeline = [
  {
    year: '2018',
    title: '公司成立',
    description: '广州知运信息技术有限公司在广州正式成立，开启智慧物流创业之路'
  },
  {
    year: '2019',
    title: '产品发布',
    description: '首款智慧仓储系统正式发布，获得首批客户认可'
  },
  {
    year: '2020',
    title: '业务拓展',
    description: '推出运输管理系统，服务客户突破100家'
  },
  {
    year: '2021',
    title: '技术突破',
    description: '获得多项技术专利，被认定为高新技术企业'
  },
  {
    year: '2022',
    title: '规模扩张',
    description: '团队规模突破200人，服务客户超过300家'
  },
  {
    year: '2024',
    title: '行业领先',
    description: '成为智慧物流领域领先服务商，服务客户超过500家'
  }
]

const cultures = [
  {
    icon: 'Aim',
    title: '使命',
    description: '用科技让物流更简单，助力企业降本增效'
  },
  {
    icon: 'View',
    title: '愿景',
    description: '成为中国最值得信赖的智慧物流服务商'
  },
  {
    icon: 'Star',
    title: '价值观',
    description: '客户第一、创新驱动、诚信务实、合作共赢'
  },
  {
    icon: 'Promotion',
    title: '精神',
    description: '追求卓越、永不止步、勇于担当、团队协作'
  }
]

const team = [
  {
    name: '张总',
    title: 'CEO / 创始人',
    description: '20年物流行业经验，曾任知名物流企业高管'
  },
  {
    name: '李总',
    title: 'CTO / 联合创始人',
    description: '15年技术研发经验，前互联网大厂技术总监'
  },
  {
    name: '王总',
    title: 'COO',
    description: '10年运营管理经验，精通供应链管理'
  },
  {
    name: '陈总',
    title: '产品VP',
    description: '12年产品经验，深耕物流行业产品设计'
  }
]
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

.about-intro {
  display: flex;
  gap: $spacing-xxl;
  align-items: center;
}

.intro-content {
  flex: 1;
}

.intro-text {
  font-size: $font-size-base;
  color: $text-regular;
  line-height: $line-height-loose;
  margin-bottom: $spacing-md;
}

.intro-stats {
  display: flex;
  gap: $spacing-xl;
  margin-top: $spacing-xl;
}

.intro-stats .stat-item {
  text-align: center;

  .value {
    display: block;
    font-size: 36px;
    font-weight: 700;
    color: $primary-color;
  }

  .label {
    font-size: $font-size-sm;
    color: $text-secondary;
  }
}

.intro-image {
  flex: 0 0 400px;
}

.image-placeholder {
  width: 100%;
  height: 300px;
  background: linear-gradient(135deg, rgba($primary-color, 0.1), rgba($primary-light, 0.1));
  border-radius: $radius-lg;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: $spacing-md;
  color: $primary-color;

  span {
    font-size: $font-size-sm;
    color: $text-secondary;
  }
}

.timeline {
  position: relative;
  padding-left: 120px;

  &::before {
    content: '';
    position: absolute;
    left: 100px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: $border-color;
  }
}

.timeline-item {
  position: relative;
  padding-bottom: $spacing-xl;

  &::before {
    content: '';
    position: absolute;
    left: -24px;
    top: 8px;
    width: 12px;
    height: 12px;
    background: $primary-color;
    border-radius: 50%;
    border: 3px solid #fff;
    box-shadow: 0 0 0 3px rgba($primary-color, 0.2);
  }
}

.timeline-year {
  position: absolute;
  left: -120px;
  top: 0;
  font-size: $font-size-lg;
  font-weight: 700;
  color: $primary-color;
}

.timeline-content {
  background: $bg-white;
  padding: $spacing-lg;
  border-radius: $radius-md;
  box-shadow: $shadow-sm;

  h4 {
    font-size: $font-size-lg;
    color: $text-primary;
    margin-bottom: $spacing-xs;
  }

  p {
    font-size: $font-size-sm;
    color: $text-secondary;
  }
}

.culture-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: $spacing-lg;
}

.culture-card {
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

.culture-icon {
  width: 72px;
  height: 72px;
  background: rgba($primary-color, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto $spacing-md;
  color: $primary-color;
}

.culture-card h3 {
  font-size: $font-size-lg;
  color: $text-primary;
  margin-bottom: $spacing-sm;
}

.culture-card p {
  font-size: $font-size-sm;
  color: $text-secondary;
  line-height: $line-height-loose;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: $spacing-lg;
}

.team-card {
  background: $bg-white;
  padding: $spacing-xl;
  border-radius: $radius-lg;
  text-align: center;
  box-shadow: $shadow-md;
}

.member-avatar {
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, $primary-color, $primary-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto $spacing-md;
  color: #fff;
}

.member-name {
  font-size: $font-size-lg;
  color: $text-primary;
  margin-bottom: $spacing-xs;
}

.member-title {
  font-size: $font-size-sm;
  color: $primary-color;
  margin-bottom: $spacing-sm;
}

.member-desc {
  font-size: $font-size-sm;
  color: $text-secondary;
}

@media (max-width: $breakpoint-lg) {
  .about-intro {
    flex-direction: column;
  }

  .intro-image {
    flex: none;
    width: 100%;
  }

  .culture-grid,
  .team-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: $breakpoint-md) {
  .page-title {
    font-size: $font-size-xxl;
  }

  .timeline {
    padding-left: 30px;

    &::before {
      left: 10px;
    }
  }

  .timeline-year {
    position: static;
    margin-bottom: $spacing-xs;
  }

  .timeline-item::before {
    left: -24px;
  }

  .culture-grid,
  .team-grid {
    grid-template-columns: 1fr;
  }

  .intro-stats {
    flex-wrap: wrap;
  }
}
</style>
