import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import SectionTitle from '@/components/SectionTitle.vue'

describe('SectionTitle', () => {
  it('renders title correctly', () => {
    const wrapper = mount(SectionTitle, {
      props: {
        title: '测试标题'
      }
    })
    expect(wrapper.find('.section-title h2').text()).toBe('测试标题')
  })

  it('renders subtitle when provided', () => {
    const wrapper = mount(SectionTitle, {
      props: {
        title: '测试标题',
        subtitle: '测试副标题'
      }
    })
    expect(wrapper.find('.section-title p').text()).toBe('测试副标题')
  })

  it('does not render subtitle when not provided', () => {
    const wrapper = mount(SectionTitle, {
      props: {
        title: '测试标题'
      }
    })
    expect(wrapper.find('.section-title p').exists()).toBe(false)
  })
})
