import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import AppHorsePrograms from '@/components/AppHorsePrograms.vue'
import AppProgramTable from '@/components/AppProgramTable.vue'
import { globalStateKey } from '@/store'
import { RUN_COUNT, generateHorseList, generateProgram } from '@/utils'

function renderAppHorsePrograms(withResults = true) {
  const horses = generateHorseList()
  const programs = generateProgram(horses)
  const results = generateProgram(horses)

  const store = {
    state: {
      race: {
        programs,
        results: withResults ? results : []
      }
    }
  }

  return mount(AppHorsePrograms, {
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

describe('AppHorsePrograms', () => {
  it('should render program column with generated program', () => {
    const wrapper = renderAppHorsePrograms()
    const programColumn = wrapper.find('[data-testid=program-column]')

    expect(programColumn).toBeDefined()
    expect(programColumn.findAllComponents(AppProgramTable).length).toBe(RUN_COUNT)
  })

  it('should render results column with results tables', () => {
    const wrapper = renderAppHorsePrograms()
    const resultsColumn = wrapper.find('[data-testid=results-column]')

    expect(resultsColumn).toBeDefined()
    expect(resultsColumn.findAllComponents(AppProgramTable).length).toBe(RUN_COUNT)
  })

  it('should render results column with no results text', () => {
    const wrapper = renderAppHorsePrograms(false)
    const notStartedEl = wrapper.find('[data-testid=race-not-started]')

    expect(notStartedEl).toBeDefined()
    expect(notStartedEl.text()).toBe("Race has not started yet!")
  })
})
