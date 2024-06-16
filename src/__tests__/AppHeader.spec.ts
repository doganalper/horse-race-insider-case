import { describe, it, expect, vitest } from 'vitest'
import { mount } from '@vue/test-utils'

import AppHeader from '@/components/AppHeader.vue'
import { globalStateKey } from '@/store'
import { HorseRaceMutation } from '@/types'

function renderAppHeader(raceStarted = true) {
  const commitMock = vitest.fn()
  const store = {
    state: {
      race: {
        raceStarted
      }
    },
    commit: commitMock
  }

  return {
    commit: commitMock,
    wrapper: mount(AppHeader, {
      global: {
        mocks: {
          store
        },
        provide: {
          [globalStateKey as symbol]: store
        }
      }
    })
  }
}

describe('AppHeader', () => {
  it('should have disable buttons if race is started', () => {
    const { wrapper } = renderAppHeader()

    expect(
      wrapper.find('[data-testid=generate-program-button]').attributes('disabled')
    ).toBeDefined()
    expect(wrapper.find('[data-testid=start-race-button]').attributes('disabled')).toBeDefined()
  })

  it('should commit generate program on button click', () => {
    const { wrapper, commit } = renderAppHeader(false)
    const generateBtn = wrapper.find('[data-testid=generate-program-button]')

    generateBtn.trigger('click')

    expect(commit).toHaveBeenCalledWith(HorseRaceMutation.GENERATE_PROGRAM)
  })

  it('should commit start race on button click', () => {
    const { wrapper, commit } = renderAppHeader(false)
    const startBtn = wrapper.find('[data-testid=start-race-button]')

    startBtn.trigger('click')

    expect(commit).toHaveBeenCalledWith(HorseRaceMutation.MOVE_HORSES)
  })
})
