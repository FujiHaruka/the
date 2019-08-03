/**
 * Component to show caught errors
 * @memberof module:@the-/ui-caught
 * @class TheCaught
 */
'use strict'

import c from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { isProduction } from '@the-/check'
import { TheCondition } from '@the-/ui-condition'
import { eventHandlersFor, htmlAttributesFor } from '@the-/util-ui'

/** @lends module:@the-/ui-caught.TheCaught */
class TheCaught extends React.Component {
  render() {
    const {
      props,
      props: { children, className, error, info },
    } = this

    const { componentStack } = info || {}
    if (!error) {
      return null
    }

    return (
      <div
        {...htmlAttributesFor(props, { except: ['className'] })}
        {...eventHandlersFor(props, { except: [] })}
        className={c('the-caught', className)}
      >
        <h3 className='the-caught-title' role='heading'>
          {String(error.message || error)}
        </h3>
        {children}
        <TheCondition if={!isProduction()}>
          <pre className='the-caught-stack'>
            <div>{error.stack}</div>
            <hr className={'the-caught-line'} />
            <TheCondition if={!!componentStack}>
              <div>{componentStack}</div>
            </TheCondition>
          </pre>
        </TheCondition>
      </div>
    )
  }
}

TheCaught.propTypes = {
  /** Caught error */
  error: PropTypes.string,
  /** Error Info */
  info: PropTypes.object,
}

TheCaught.defaultProps = {
  error: null,
  info: null,
}

TheCaught.displayName = 'TheCaught'

export default TheCaught
