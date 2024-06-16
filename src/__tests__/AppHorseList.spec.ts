import { describe, it, expect, vitest } from 'vitest'
import { mount } from '@vue/test-utils'

import AppHorseList from '@/components/AppHorseList.vue'
import { globalStateKey } from '@/store'
import { HorseRaceMutation } from '@/types'
import { HORSE_LIST_LENGTH, generateHorseList } from '@/utils'

function renderAppHorseList() {
  const horses = generateHorseList()
  const commitMock = vitest.fn()

  const store = {
    state: {
      race: {
        horses
      }
    },
    commit: commitMock
  }

  return {
    commit: commitMock,
    wrapper: mount(AppHorseList, {
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

describe('AppHorseList', () => {
  it('should set horses and generate race program on mount', () => {
    const { commit } = renderAppHorseList();

    expect(commit).toHaveBeenCalledWith(HorseRaceMutation.SET_HORSES)
    expect(commit).toHaveBeenCalledWith(HorseRaceMutation.GENERATE_PROGRAM)
  })

  it('should render horse info 20 times', () => {
    const { wrapper } = renderAppHorseList();

    expect(wrapper.findAll('[data-testid=horse-list-info]').length).toBe(HORSE_LIST_LENGTH)
  })
})
