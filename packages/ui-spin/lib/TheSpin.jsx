'use strict'

import c from 'classnames'
import PropTypes from 'prop-types'
import React, { useMemo } from 'react'
import { TheIcon } from '@the-/ui-icon'
import { eventHandlersFor, htmlAttributesFor } from '@the-/util-ui'

const SpinnerSizes = [
  'medium',
  'xx-small',
  'x-small',
  'small',
  'large',
  'x-large',
  'xx-large',
  'smaller',
  'larger',
]

const DEFAULT_THEME = 'C'
const DEFAULT_SIZE = 'large'

/**
 * Spin of the-components
 */
const TheSpin = (props) => {
  const { children, className, cover, enabled, size, theme } = props
  const iconStyle = useMemo(() => ({ fontSize: size }), [size])
  return (
    <div
      {...htmlAttributesFor(props, { except: ['className'] })}
      {...eventHandlersFor(props, { except: [] })}
      className={c('the-spin', className, {
        'the-spinner-cover': !!cover,
        'the-spinner-enabled': !!enabled,
      })}
    >
      <TheIcon.Spin className='the-spin-icon' style={iconStyle} theme={theme} />
      {children}
    </div>
  )
}

TheSpin.Sizes = SpinnerSizes

TheSpin.propTypes = {
  /** Shows spin */
  /** show as cover */
  cover: PropTypes.bool,
  enabled: PropTypes.bool,
  /** Size of spinner icon */
  size: PropTypes.oneOf(SpinnerSizes),
  /** Theme of the spinner */
  theme: PropTypes.oneOf(Object.keys(TheIcon.SpinIconThemes)),
}

TheSpin.defaultProps = {
  cover: false,
  enabled: false,
  size: DEFAULT_SIZE,
  theme: DEFAULT_THEME,
}

TheSpin.displayName = 'TheSpin'

export default TheSpin
