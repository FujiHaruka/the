'use strict'

import c from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { eventHandlersFor, htmlAttributesFor } from '@the-/util-component'

/**
 * ToastGroup
 */
class TheToastGroup extends React.Component {
  render() {
    const { props } = this
    const { children, className } = props
    return (
      <div
        {...htmlAttributesFor(props, { except: ['className'] })}
        {...eventHandlersFor(props, { except: [] })}
        className={c('the-toast-group', className)}
      >
        {children}
      </div>
    )
  }
}

TheToastGroup.propTypes = {}

TheToastGroup.defaultProps = {}

TheToastGroup.displayName = 'TheToastGroup'

export default TheToastGroup