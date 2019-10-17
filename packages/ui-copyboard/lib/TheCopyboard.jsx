'use strict'

import classnames from 'classnames'
import copy from 'copy-to-clipboard'
import PropTypes from 'prop-types'
import React from 'react'
import select from 'select'
import { eventHandlersFor, htmlAttributesFor } from '@the-/util-ui'

/**
 * Component for clip-to-copy
 */
class TheCopyboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tipShown: false,
    }
    this.anchorRef = React.createRef()
    this.hideTip = this.hideTip.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.tipOffTimer = null
  }

  componentWillUnmount() {
    clearTimeout(this.tipOffTimer)
  }

  doCopy() {
    const {
      anchorRef,
      props: { text },
    } = this

    copy(text)
    select(anchorRef.current)
    this.showTip()
  }

  handleClick(e) {
    const { props } = this
    this.doCopy()
    const { onClick } = props
    onClick && onClick(e)
    e.stopPropagation()
  }

  hideTip() {
    clearTimeout(this.tipOffTimer)
    if (this.state.tipShown) {
      this.setState({ tipShown: false })
    }
  }

  render() {
    const {
      props,
      props: { children, className, href, text, tipText },
      state: { tipShown },
    } = this

    const Anchor = href ? 'a' : 'span'
    return (
      <span
        {...htmlAttributesFor(props, { except: ['className'] })}
        {...eventHandlersFor(props, { except: [] })}
        className={classnames('the-copyboard', className)}
      >
        {tipShown && (
          <span className='the-copyboard-tip' onClick={this.hideTip}>
            <span className='the-copyboard-tip-square' />
            {tipText}
          </span>
        )}
        <Anchor
          className='the-copyboard-anchor'
          href={href}
          onClick={this.handleClick}
          ref={this.anchorRef}
        >
          {text}
          {children}
        </Anchor>
      </span>
    )
  }

  showTip() {
    const {
      props: { tipDuration },
    } = this
    clearTimeout(this.tipOffTimer)
    this.setState({ tipShown: true })
    this.tipOffTimer = setTimeout(() => {
      if (this.state.tipShown) {
        this.setState({ tipShown: false })
      }
    }, tipDuration)
  }
}

TheCopyboard.propTypes = {
  /** Text to show */
  text: PropTypes.string.isRequired,
  /** Duration to shows tip */
  tipDuration: PropTypes.number,
  /** Text for tip */
  tipText: PropTypes.string,
}

TheCopyboard.defaultProps = {
  href: null,
  tipDuration: 800,
  tipText: 'Copied',
}

TheCopyboard.displayName = 'TheCopyboard'

export default TheCopyboard
