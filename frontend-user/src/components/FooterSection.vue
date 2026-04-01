<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-main">
        <div class="footer-brand">
          <div class="logo">
            <div class="logo-icon">知</div>
            <span class="logo-text">广州知运信息技术有限公司</span>
          </div>
          <p class="brand-desc">专注智慧物流系统解决方案，助力企业数字化转型升级</p>
          <div class="social-links">
            <a href="#" class="social-item" title="微信">
              <el-icon><ChatDotRound /></el-icon>
            </a>
            <a href="#" class="social-item" title="微博">
              <el-icon><Share /></el-icon>
            </a>
            <a href="#" class="social-item" title="邮箱">
              <el-icon><Message /></el-icon>
            </a>
          </div>
        </div>

        <div class="footer-links">
          <div class="link-group">
            <h4>快速导航</h4>
            <router-link to="/">首页</router-link>
            <router-link to="/about">关于我们</router-link>
            <router-link to="/products">产品服务</router-link>
            <router-link to="/cases">案例展示</router-link>
          </div>

          <div class="link-group">
            <h4>产品服务</h4>
            <a href="#">智慧仓储系统</a>
            <a href="#">运输管理系统</a>
            <a href="#">配送调度系统</a>
            <a href="#">数据分析平台</a>
          </div>

          <div class="link-group">
            <h4>联系我们</h4>
            <p>
              <el-icon><Location /></el-icon> 广州市天河区科技园
            </p>
            <p>
              <el-icon><Phone /></el-icon> 400-888-8888
            </p>
            <p>
              <el-icon><Message /></el-icon> contact@zhiyun.com
            </p>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© 2024 广州知运信息技术有限公司 版权所有</p>
        <p>
          <a href="#">粤ICP备XXXXXXXX号</a>
          <span class="divider">|</span>
          <a href="#">隐私政策</a>
          <span class="divider">|</span>
          <a href="#">服务条款</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
@use '@/assets/styles/variables.scss' as *;

.footer {
  background: $bg-dark;
  color: rgba(255, 255, 255, 0.85);
  padding-top: $spacing-xxl;
}

.footer-main {
  display: flex;
  justify-content: space-between;
  gap: $spacing-xxl;
  padding-bottom: $spacing-xl;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-brand {
  max-width: 320px;
}

.logo {
  display: flex;
  align-items: center;
  gap: $spacing-sm;
  margin-bottom: $spacing-md;
}

.logo-icon {
  width: 44px;
  height: 44px;
  background: linear-gradient(135deg, $primary-color, $primary-dark);
  border-radius: $radius-md;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 22px;
  font-weight: bold;
}

.logo-text {
  font-size: $font-size-lg;
  font-weight: 600;
  color: #fff;
}

.brand-desc {
  color: rgba(255, 255, 255, 0.65);
  line-height: $line-height-loose;
  margin-bottom: $spacing-lg;
}

.social-links {
  display: flex;
  gap: $spacing-md;
}

.social-item {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: all 0.3s;

  &:hover {
    background: $primary-color;
    transform: translateY(-3px);
  }
}

.footer-links {
  display: flex;
  gap: $spacing-xxl;
}

.link-group {
  h4 {
    color: #fff;
    font-size: $font-size-base;
    margin-bottom: $spacing-md;
    font-weight: 600;
  }

  a,
  p {
    display: flex;
    align-items: center;
    gap: $spacing-xs;
    color: rgba(255, 255, 255, 0.65);
    margin-bottom: $spacing-sm;
    font-size: $font-size-sm;
    transition: color 0.3s;

    &:hover {
      color: $primary-color;
    }
  }

  .el-icon {
    font-size: 16px;
  }
}

.footer-bottom {
  padding: $spacing-lg 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: $font-size-sm;
  color: rgba(255, 255, 255, 0.45);

  a {
    color: rgba(255, 255, 255, 0.45);

    &:hover {
      color: $primary-color;
    }
  }

  .divider {
    margin: 0 $spacing-sm;
  }
}

@media (max-width: $breakpoint-lg) {
  .footer-main {
    flex-direction: column;
  }

  .footer-brand {
    max-width: 100%;
  }

  .footer-links {
    flex-wrap: wrap;
    gap: $spacing-xl;
  }

  .link-group {
    min-width: 140px;
  }
}

@media (max-width: $breakpoint-md) {
  .footer-bottom {
    flex-direction: column;
    gap: $spacing-sm;
    text-align: center;
  }
}
</style>
