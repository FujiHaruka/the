the-pager
==========

<!---
This file is generated by the-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/the-labo/the-pager
[bd_travis_url]: http://travis-ci.org/the-labo/the-pager
[bd_travis_shield_url]: http://img.shields.io/travis/the-labo/the-pager.svg?style=flat
[bd_travis_com_url]: http://travis-ci.com/the-labo/the-pager
[bd_travis_com_shield_url]: https://api.travis-ci.com/the-labo/the-pager.svg?token=
[bd_license_url]: https://github.com/the-labo/the-pager/blob/master/LICENSE
[bd_npm_url]: http://www.npmjs.org/package/the-pager
[bd_npm_shield_url]: http://img.shields.io/npm/v/the-pager.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Pager of the-components

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>



<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/guides/01.Installation.md.hbs" Start -->

<a name="section-doc-guides-01-installation-md"></a>

Installation
-----

```bash
$ npm install the-pager --save
```


<!-- Section from "doc/guides/01.Installation.md.hbs" End -->

<!-- Section from "doc/guides/02.Usage.md.hbs" Start -->

<a name="section-doc-guides-02-usage-md"></a>

Usage
---------

[Live Demo](https://the-labo.github.io/the-pager/doc/demo/index.html#/) is hosted on GitHub Page

```javascript
'use strict'

import React from 'react'
import { ThePager, ThePagerStyle } from 'the-pager'

class ExampleComponent extends React.PureComponent {
  constructor (props) {
    super(props)
    const s = this
    s.state = {page: 2}
  }

  render () {
    const s = this
    let {state} = s
    return (
      <div>
        <ThePagerStyle/>
        <ThePager.Row>
          <ThePager total={8}
                    page={state.page}
                    size={3}
                    onChange={(e) => s.setState({page: e.page})}>
          </ThePager>
          <ThePager.Counts counts={{limit: 25, offset: 25, total: 52}}/>
        </ThePager.Row>

        <hr/>

        <ThePager total={15}
                  page={state.page}
                  size={5}
                  hrefPattern='?page=:page'>
        </ThePager>
      </div>

    )
  }
}

export default ExampleComponent

```


<!-- Section from "doc/guides/02.Usage.md.hbs" End -->

<!-- Section from "doc/guides/03.Components.md.hbs" Start -->

<a name="section-doc-guides-03-components-md"></a>

Components
-----------

### ThePager

Pager of the-components

**Props**

| Name | Type | Description | Default |
| --- | --- | ---- | ---- |
| `hrefPattern` | string  | Pattern for href | `null` |
| `onChange` | func  | Handler for page change | `` |
| `page` | number  | Current page number. Start with 0 | `` |
| `size` | number  | Number of items to show | `5` |
| `total` | number  | Total page count | `` |

### ThePagerStyle

Style for ThePager

**Props**

| Name | Type | Description | Default |
| --- | --- | ---- | ---- |
| `options` | object  | Style options | `{}` |



<!-- Section from "doc/guides/03.Components.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/the-labo/the-pager/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [THE Labo][the_labo_url]

[the_labo_url]: https://github.com/the-labo

<!-- Links End -->