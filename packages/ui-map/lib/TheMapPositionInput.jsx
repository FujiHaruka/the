'use strict'

import formatcoords from 'formatcoords'
import PropTypes from 'prop-types'
import React from 'react'
import TheMap from './TheMap'

const hasVal = (v) => !!v || v === 0

class TheMapPositionInput extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange({ lat, lng, zoom }) {
    const {
      props: { name, onUpdate, value },
    } = this
    const isStringBase = typeof value === 'string'
    onUpdate({
      [name]: isStringBase ? [lat, lng, zoom].join(',') : { lat, lng, zoom },
    })
  }

  parseValue(value) {
    if (typeof value === 'string') {
      const [lat, lng, zoom] = value.split(',')
      return this.parseValue({ lat, lng, zoom })
    }

    const { lat, lng, zoom = 13 } = value
    return { lat: Number(lat), lng: Number(lng), zoom: Number(zoom) }
  }

  render() {
    const {
      props: { height, id, layers, value, width },
    } = this
    if (!value) {
      return null
    }

    const { lat, lng, zoom } = this.parseValue(value)
    const hasLatLng = hasVal(lat) && hasVal(lng)
    return (
      <div className='the-map-position-input' id={id} style={{ height, width }}>
        <TheMap
          height={height}
          lat={Number(lat)}
          layerControlEnabled={false}
          layers={layers}
          lng={Number(lng)}
          onChange={this.handleChange}
          width={width}
          zoom={zoom}
        />
        <input
          className='the-map-position-input-input'
          type='hidden'
          value={`${lat},${lng}`}
        />
        <div className='the-map-position-input-display'>
          {hasLatLng && formatcoords(lat, lng).format('f')}
        </div>
        <div className='the-map-position-input-target'>
          <div className='the-map-position-input-target-dot' />
          <div className='the-map-position-input-target-bar1' />
          <div className='the-map-position-input-target-bar2' />
        </div>
      </div>
    )
  }
}

TheMapPositionInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

TheMapPositionInput.defaultProps = {
  height: 150,
  layers: TheMap.defaultProps.layers || [],
  value: { lat: 35.6895, lng: 139.6917, zoom: 13 },
  width: 300,
}

export default TheMapPositionInput
