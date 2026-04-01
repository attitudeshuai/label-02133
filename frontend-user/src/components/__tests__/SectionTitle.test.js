import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import SectionTitle from '../SectionTitle.vue';

describe('SectionTitle', () => {
  it('renders title correctly', () => {
    const wrapper = mount(SectionTitle, {
      props: {
        title: '测试标题'
      }
    });
    expect(wrapper.find('.title').text()).toBe('测试标题');
  });

  it('renders subtitle when provided', () => {
    const wrapper = mount(SectionTitle, {
      props: {
        title: '测试标题',
        subtitle: '测试副标题'
      }
    });
    expect(wrapper.find('.subtitle').text()).toBe('测试副标题');
  });

  it('does not render subtitle when not provided', () => {
    const wrapper = mount(SectionTitle, {
      props: {
        title: '测试标题'
      }
    });
    expect(wrapper.find('.subtitle').exists()).toBe(false);
  });

  it('applies light class when light prop is true', () => {
    const wrapper = mount(SectionTitle, {
      props: {
        title: '测试标题',
        light: true
      }
    });
    expect(wrapper.find('.section-title-light').exists()).toBe(true);
  });

  it('does not apply light class when light prop is false', () => {
    const wrapper = mount(SectionTitle, {
      props: {
        title: '测试标题',
        light: false
      }
    });
    expect(wrapper.find('.section-title-light').exists()).toBe(false);
  });
});
