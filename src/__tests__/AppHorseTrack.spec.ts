import { describe, it, expect, vitest } from 'vitest'
import { mount } from '@vue/test-utils'

import AppHorseTrack from '@/components/AppHorseTrack.vue'
import HorseIcon from '@/components/HorseIcon.vue'
import { globalStateKey } from '@/store'
import { generateHorseList } from '@/utils'

const MOCK_TRACK_LENGTH = 400;

function renderAppHorseTrack(horseMoveValue: number = 0) {
  const horse = generateHorseList()[0]
  const mockCommit = vitest.fn()

  const store = {
    state: {
      race: {
        trackLength: MOCK_TRACK_LENGTH
      }
    },
    commit: mockCommit
  }

  return {
    horse,
    commit: mockCommit,
    wrapper: mount(AppHorseTrack, {
      props: {
        horse: {
          ...horse,
          move: horseMoveValue
        },
        order: 1
      },
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

describe('AppHorseTrack', () => {-
  it('should render horse icon with horse color', () => {
    const { wrapper, horse } = renderAppHorseTrack();

    expect(wrapper.findComponent(HorseIcon).attributes('fill')).toBe(horse.color)
  })

  it('should render order number', () => {
    const { wrapper } = renderAppHorseTrack();

    expect(wrapper.text()).toContain('1')
  })

  it('should emit finished event if horse move is greater than track length', () => {
    const { wrapper } = renderAppHorseTrack(420);

    expect(wrapper.emitted('finished')).toBeTruthy()
  })

  it('should set left alignment of horse depending on horse move and track length', () => {
    const { wrapper } = renderAppHorseTrack(200);

    expect(wrapper.find('[data-testid=horse-icon]').attributes('style')).toBe('transform: translateX(-50%); left: 50%;')
  })
})
