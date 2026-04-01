# 广州知运信息技术有限公司官网

## 1. How to Run

### 方式一：Docker Compose（推荐）

```bash
# 构建并启动
docker-compose up --build -d

# 访问地址
http://localhost:8081
```

### 方式二：本地开发

```bash
# 进入前端目录
cd frontend-user

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

### 方式三：单元测试与代码规范

```bash
# 进入前端目录
cd frontend-user

# 安装依赖（首次使用）
npm install

# 运行单元测试
npm run test

# 运行单元测试并生成覆盖率报告
npm run test:coverage

# 运行ESLint检查并自动修复
npm run lint

# 运行Prettier格式化代码
npm run format
```

## 2. Services

| 服务 | 端口 | 说明 |
|------|------|------|
| 官网前端 | 8081 | Vue 3 静态页面 |

## 3. 测试账号

本项目为纯静态官网，无需登录账号。

## 4. 题目内容

> 在此空文件夹帮我创建一个Vue项目，它是我公司的官网，静态页面来的，公司名称是广州知运信息技术有限公司，首页的内容先帮我随意填充，公司目前经营的内容是智慧物流的系统

## 5. 项目结构

```
├── docs/                          # 项目文档
│   └── project_design.md          # 设计文档
├── frontend-user/                 # 前端项目
│   ├── public/                    # 静态资源
│   ├── src/
│   │   ├── assets/               # 资源文件
│   │   │   └── styles/           # 样式文件
│   │   ├── components/           # 公共组件
│   │   │   ├── NavHeader.vue     # 导航栏
│   │   │   ├── FooterSection.vue # 页脚
│   │   │   ├── HeroBanner.vue    # 首页横幅
│   │   │   ├── FeatureCard.vue   # 特性卡片
│   │   │   ├── ProductCard.vue   # 产品卡片
│   │   │   ├── CaseCard.vue      # 案例卡片
│   │   │   └── SectionTitle.vue  # 区块标题
│   │   ├── router/               # 路由配置
│   │   │   └── index.js
│   │   ├── views/                # 页面视图
│   │   │   ├── HomeView.vue      # 首页
│   │   │   ├── AboutView.vue     # 关于我们
│   │   │   ├── ProductView.vue   # 产品服务
│   │   │   ├── CaseView.vue      # 案例展示
│   │   │   └── ContactView.vue   # 联系我们
│   │   ├── __tests__/            # 单元测试文件
│   │   │   └── App.spec.js       # App组件测试用例
│   │   ├── App.vue               # 根组件
│   │   └── main.js               # 入口文件
│   ├── coverage/                  # 测试覆盖率报告（自动生成）
│   ├── Dockerfile                # Docker构建文件
│   ├── nginx.conf                # Nginx配置
│   ├── package.json              # 依赖配置
│   ├── vite.config.js            # Vite配置
│   ├── vitest.config.js          # Vitest测试配置
│   ├── .eslintrc.cjs             # ESLint配置
│   ├── .prettierrc.json          # Prettier配置
│   └── .eslintignore             # ESLint忽略配置
├── docker-compose.yml            # Docker编排
├── .gitignore                    # Git忽略配置
└── README.md                     # 项目说明
```

## 6. 功能清单

### 页面功能

| 页面 | 功能点 |
|------|--------|
| 首页 | Hero横幅、公司简介、核心优势、产品亮点、合作伙伴 |
| 关于我们 | 公司介绍、发展历程、企业文化、团队风采 |
| 产品服务 | 智慧物流系统介绍、功能模块、技术优势 |
| 案例展示 | 成功案例列表、案例详情 |
| 联系我们 | 联系方式、公司地址、在线留言表单 |

### 技术特性

- ✅ Vue 3 Composition API
- ✅ Vue Router 路由管理
- ✅ Element Plus UI组件库
- ✅ SCSS 样式预处理
- ✅ 响应式布局适配
- ✅ Docker 容器化部署
- ✅ Vitest + Vue Test Utils 单元测试
- ✅ 测试覆盖率统计
- ✅ ESLint 代码规范检查
- ✅ Prettier 代码自动格式化

## 7. 工程化配置详解

### 7.1 Vitest + Vue Test Utils 测试配置

#### 安装的依赖
- `vitest`: 基于 Vite 的单元测试框架
- `@vue/test-utils`: Vue 3 官方测试工具库
- `@vitest/coverage-v8`: 测试覆盖率统计工具
- `jsdom`: DOM 环境模拟器

#### 配置文件
- `vitest.config.js`: Vitest 主配置文件
  - 配置测试环境为 `jsdom`
  - 启用全局 API
  - 配置覆盖率报告格式和输出目录

#### 测试目录
- `src/__tests__/`: 单元测试文件存放目录
- `coverage/`: 测试覆盖率报告目录（自动生成）

#### 使用方式
```bash
# 运行测试
npm run test

# 运行测试并生成覆盖率报告
npm run test:coverage
```

### 7.2 ESLint + Prettier 代码规范配置

#### 安装的依赖
- `eslint`: JavaScript/TypeScript 代码检查工具
- `eslint-plugin-vue`: Vue 组件代码检查插件
- `prettier`: 代码格式化工具
- `eslint-config-prettier`: 关闭 ESLint 与 Prettier 冲突的规则
- `eslint-plugin-prettier`: 将 Prettier 作为 ESLint 规则运行

#### 配置文件
- `.eslintrc.cjs`: ESLint 配置文件
  - 继承推荐的 Vue 3 规则
  - 集成 Prettier 规则
  - 配置了必要的忽略规则
- `.prettierrc.json`: Prettier 配置文件
  - 配置了代码格式化规则
- `.eslintignore`: ESLint 忽略文件

#### 使用方式
```bash
# 运行 ESLint 检查并自动修复可修复的问题
npm run lint

# 使用 Prettier 格式化代码
npm run format
```

### 7.3 配置过程记录

#### 第一步：安装依赖
在 `frontend-user` 目录下执行以下命令安装所有依赖：
```bash
npm install
```

#### 第二步：配置测试工程
1. 创建 `vitest.config.js` 配置文件
2. 创建 `src/__tests__/` 测试目录
3. 编写示例测试用例 `App.spec.js`
4. 在 `package.json` 中添加测试脚本命令

#### 第三步：配置代码规范
1. 创建 `.eslintrc.cjs` ESLint 配置文件
2. 创建 `.prettierrc.json` Prettier 配置文件
3. 创建 `.eslintignore` 忽略文件
4. 在 `package.json` 中添加代码检查和格式化脚本命令

#### 第四步：更新文档
1. 更新 `package.json` 中的 `scripts` 字段
2. 更新 `README.md` 中的使用说明
3. 更新 `README.md` 中的项目结构
4. 更新 `README.md` 中的技术特性
5. 在 `README.md` 中添加详细的工程化配置说明
