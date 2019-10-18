'use strict'

import React from 'react'
import { TheFooter, TheFooterStyle } from '@the-/ui-footer'

class ExampleComponent extends React.PureComponent {
  render() {
    return (
      <div>
        <TheFooterStyle />
        <TheFooter>
          <TheFooter.CopyRight holder={'the-labo'} />
        </TheFooter>
      </div>
    )
  }
}

export default ExampleComponent
