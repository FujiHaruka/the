/**
 * Style for TheDemoUi
 * @memberof module:@the-/demo-ui
 * @function TheDemoUiStyle
 */
'use strict'

import c from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { TheStyle } from '@the-/ui-style'
import { asStyleData } from '@the-/util-ui'

/** @lends TheDemoUiStyle */
const TheDemoUiStyle = ({ className, id, options }) => (
  <TheStyle
    className={c('the-demo-ui-style', className)}
    id={id}
    styles={TheDemoUiStyle.data(options)}
  />
)

TheDemoUiStyle.displayName = 'TheDemoUiStyle'
TheDemoUiStyle.propTypes = {
  /** Style options */
  options: PropTypes.object,
}

TheDemoUiStyle.defaultProps = {
  options: {},
}

TheDemoUiStyle.data = () =>
  asStyleData({
    '.the-demo-ui': {},
  })

export default TheDemoUiStyle
