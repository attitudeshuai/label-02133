import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import FeatureCard from '@/components/FeatureCard.vue'

describe('FeatureCard', () => {
  const mockProps = {
    icon: 'Search',
    title: '智能搜索',
    description: '智能搜索功能描述'
  }

  it('renders title and description correctly', () => {
    const wrapper = mount(FeatureCard, {
      props: mockProps
    })
    expect(wrapper.find('.feature-card h3').text()).toBe('智能搜索')
    expect(wrapper.find('.feature-card p').text()).toBe('智能搜索功能描述')
  })

  it('has correct CSS classes', () => {
    const wrapper = mount(FeatureCard, {
      props: mockProps
    })
    expect(wrapper.classes()).toContain('feature-card')
  })
})
