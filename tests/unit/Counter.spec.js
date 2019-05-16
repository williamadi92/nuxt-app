import { mount } from '@vue/test-utils'
import Counter from '../../components/Counter.vue'

describe('Counter.vue', () => {
  const wrapper = mount(Counter)

  test('testing increment button', () => {
    expect(wrapper.text()).toContain('counter: 0')
    wrapper.find('.increment-btn').trigger('click')
    expect(wrapper.text()).toContain('counter: 1')
    wrapper.find('.increment-btn').trigger('click')
    expect(wrapper.text()).toContain('counter: 2')
  })

  test('testing decrement button', () => {
    wrapper.find('.reset-btn').trigger('click')
    expect(wrapper.text()).toContain('counter: 0')
    wrapper.find('.decrement-btn').trigger('click')
    expect(wrapper.text()).toContain('counter: -1')
    wrapper.find('.decrement-btn').trigger('click')
    expect(wrapper.text()).toContain('counter: -2')
  })

  test('testing custom', () => {
    wrapper.find('.reset-btn').trigger('click')
    expect(wrapper.text()).toContain('counter: 0')
    wrapper.find('.decrement-btn').trigger('click')
    expect(wrapper.text()).toContain('counter: -1')
    wrapper.find('.increment-btn').trigger('click')
    wrapper.find('.increment-btn').trigger('click')
    wrapper.find('.increment-btn').trigger('click')
    expect(wrapper.text()).toContain('counter: 2')
    wrapper.find('.decrement-btn').trigger('click')
    wrapper.find('.decrement-btn').trigger('click')
    expect(wrapper.text()).toContain('counter: 0')
  })
})
