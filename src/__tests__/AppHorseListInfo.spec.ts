import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import AppHorseListInfo from '@/components/AppHorseListInfo.vue'
import { generateHorseList } from '@/utils'
import { hex2rgb } from '@/__tests__/utils/color'

function renderAppHorseListInfo() {
  const horse = generateHorseList()[0]
  return {
    horse,
    wrapper: mount(AppHorseListInfo, {
      props: {
        horse
      }
    })
  }
}

describe('AppHorseListInfo', () => {
  it('should have a div with horse color', () => {
    const { wrapper, horse } = renderAppHorseListInfo();
    const colorEl = wrapper.find('[data-testid=horse-color]')

    expect(colorEl).toBeDefined()
    expect(colorEl.attributes('style')).toBe(`background-color: ${hex2rgb(horse.color)};`)
  })

  it('should render horse name', () => {
    const { wrapper, horse } = renderAppHorseListInfo();

    expect(wrapper.text()).toContain(horse.name)
  })

  it('should render horse condition', () => {
    const { wrapper, horse } = renderAppHorseListInfo();

    expect(wrapper.text()).toContain(horse.condition)
  })
})
