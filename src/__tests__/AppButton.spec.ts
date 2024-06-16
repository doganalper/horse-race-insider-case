import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import AppButton, { type AppButtonProps } from '@/components/AppButton.vue'

function renderAppButton(props: AppButtonProps) {
  return mount(AppButton, {
    props
  })
}

describe('AppButton', () => {
  it('should render given text', () => {
    const buttonText = 'Mock Button Text'
    const wrapper = renderAppButton({ text: buttonText })

    expect(wrapper.text()).toBe(buttonText)
  })

  it('should be unclickable on disabled', () => {
    const wrapper = renderAppButton({ disabled: true, text: 'Click' })

    expect(wrapper.attributes('disabled')).toBeDefined()

    wrapper.trigger('click')

    expect(wrapper.emitted()).not.toHaveProperty('click')
  })
})
