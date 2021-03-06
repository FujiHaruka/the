<!--- Code generated by @the-/script-doc. DO NOT EDIT. -->

<a name="module_@the-/state"></a>

## @the-/state
State holder for the-components

**Version**: 15.4.2  
**License**: MIT  

* [@the-/state](#module_@the-/state)
    * [.TheState](#module_@the-/state.TheState) ⇐ <code>RootState</code>
        * [new TheState([options])](#new_module_@the-/state.TheState_new)
    * [.constants](#module_@the-/state.constants) : <code>object</code>
        * [.ActionTypes](#module_@the-/state.constants.ActionTypes) : <code>object</code>
    * [.helpers](#module_@the-/state.helpers) : <code>object</code>
    * [.state](#module_@the-/state.state) : <code>object</code>
        * [.RootState](#module_@the-/state.state.RootState) ⇐ [<code>State</code>](#module_@the-/state.state.State)
            * [new RootState([options])](#new_module_@the-/state.state.RootState_new)
            * [.del(name)](#module_@the-/state.state.State+del)
            * [.drop()](#module_@the-/state.state.State+drop)
            * [.get(name)](#module_@the-/state.state.State+get) ⇒ <code>\*</code>
            * [.keys()](#module_@the-/state.state.State+keys) ⇒ <code>Array.&lt;string&gt;</code>
            * [.publish()](#module_@the-/state.state.State+publish)
            * [.set(values)](#module_@the-/state.state.State+set) ⇒ <code>\*</code>
            * [.subscribe(callback)](#module_@the-/state.state.State+subscribe) ⇒ <code>function</code>
            * [.unsubscribe(callback)](#module_@the-/state.state.State+unsubscribe)
        * [.ScopedState](#module_@the-/state.state.ScopedState) ⇐ [<code>State</code>](#module_@the-/state.state.State)
            * [new ScopedState(name)](#new_module_@the-/state.state.ScopedState_new)
            * [.scope(...names)](#module_@the-/state.state.ScopedState+scope)
            * [.del(name)](#module_@the-/state.state.State+del)
            * [.drop()](#module_@the-/state.state.State+drop)
            * [.get(name)](#module_@the-/state.state.State+get) ⇒ <code>\*</code>
            * [.keys()](#module_@the-/state.state.State+keys) ⇒ <code>Array.&lt;string&gt;</code>
            * [.publish()](#module_@the-/state.state.State+publish)
            * [.set(values)](#module_@the-/state.state.State+set) ⇒ <code>\*</code>
            * [.subscribe(callback)](#module_@the-/state.state.State+subscribe) ⇒ <code>function</code>
            * [.unsubscribe(callback)](#module_@the-/state.state.State+unsubscribe)
        * *[.State](#module_@the-/state.state.State)*
            * *[new State()](#new_module_@the-/state.state.State_new)*
            * *[.del(name)](#module_@the-/state.state.State+del)*
            * *[.drop()](#module_@the-/state.state.State+drop)*
            * *[.get(name)](#module_@the-/state.state.State+get) ⇒ <code>\*</code>*
            * *[.keys()](#module_@the-/state.state.State+keys) ⇒ <code>Array.&lt;string&gt;</code>*
            * *[.publish()](#module_@the-/state.state.State+publish)*
            * *[.set(values)](#module_@the-/state.state.State+set) ⇒ <code>\*</code>*
            * *[.subscribe(callback)](#module_@the-/state.state.State+subscribe) ⇒ <code>function</code>*
            * *[.unsubscribe(callback)](#module_@the-/state.state.State+unsubscribe)*
    * [.create(...args)](#module_@the-/state.create) ⇒ <code>TheState</code>
    * [.default()](#module_@the-/state.default)

<a name="module_@the-/state.TheState"></a>

### state.TheState ⇐ <code>RootState</code>
**Kind**: static class of [<code>@the-/state</code>](#module_@the-/state)  
**Extends**: <code>RootState</code>  
<a name="new_module_@the-/state.TheState_new"></a>

#### new TheState([options])

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> | <code>{}</code> | Optional settings |
| [options.defaults] | <code>Object</code> | <code>{}</code> | Default values |

<a name="module_@the-/state.constants"></a>

### state.constants : <code>object</code>
Constant namespaces

**Kind**: static namespace of [<code>@the-/state</code>](#module_@the-/state)  
**Access**: protected  
<a name="module_@the-/state.constants.ActionTypes"></a>

#### constants.ActionTypes : <code>object</code>
Action types

**Kind**: static namespace of [<code>constants</code>](#module_@the-/state.constants)  
<a name="module_@the-/state.helpers"></a>

### state.helpers : <code>object</code>
Helper functions

**Kind**: static namespace of [<code>@the-/state</code>](#module_@the-/state)  
**Access**: protected  
<a name="module_@the-/state.state"></a>

### state.state : <code>object</code>
State classes

**Kind**: static namespace of [<code>@the-/state</code>](#module_@the-/state)  
**Access**: protected  

* [.state](#module_@the-/state.state) : <code>object</code>
    * [.RootState](#module_@the-/state.state.RootState) ⇐ [<code>State</code>](#module_@the-/state.state.State)
        * [new RootState([options])](#new_module_@the-/state.state.RootState_new)
        * [.del(name)](#module_@the-/state.state.State+del)
        * [.drop()](#module_@the-/state.state.State+drop)
        * [.get(name)](#module_@the-/state.state.State+get) ⇒ <code>\*</code>
        * [.keys()](#module_@the-/state.state.State+keys) ⇒ <code>Array.&lt;string&gt;</code>
        * [.publish()](#module_@the-/state.state.State+publish)
        * [.set(values)](#module_@the-/state.state.State+set) ⇒ <code>\*</code>
        * [.subscribe(callback)](#module_@the-/state.state.State+subscribe) ⇒ <code>function</code>
        * [.unsubscribe(callback)](#module_@the-/state.state.State+unsubscribe)
    * [.ScopedState](#module_@the-/state.state.ScopedState) ⇐ [<code>State</code>](#module_@the-/state.state.State)
        * [new ScopedState(name)](#new_module_@the-/state.state.ScopedState_new)
        * [.scope(...names)](#module_@the-/state.state.ScopedState+scope)
        * [.del(name)](#module_@the-/state.state.State+del)
        * [.drop()](#module_@the-/state.state.State+drop)
        * [.get(name)](#module_@the-/state.state.State+get) ⇒ <code>\*</code>
        * [.keys()](#module_@the-/state.state.State+keys) ⇒ <code>Array.&lt;string&gt;</code>
        * [.publish()](#module_@the-/state.state.State+publish)
        * [.set(values)](#module_@the-/state.state.State+set) ⇒ <code>\*</code>
        * [.subscribe(callback)](#module_@the-/state.state.State+subscribe) ⇒ <code>function</code>
        * [.unsubscribe(callback)](#module_@the-/state.state.State+unsubscribe)
    * *[.State](#module_@the-/state.state.State)*
        * *[new State()](#new_module_@the-/state.state.State_new)*
        * *[.del(name)](#module_@the-/state.state.State+del)*
        * *[.drop()](#module_@the-/state.state.State+drop)*
        * *[.get(name)](#module_@the-/state.state.State+get) ⇒ <code>\*</code>*
        * *[.keys()](#module_@the-/state.state.State+keys) ⇒ <code>Array.&lt;string&gt;</code>*
        * *[.publish()](#module_@the-/state.state.State+publish)*
        * *[.set(values)](#module_@the-/state.state.State+set) ⇒ <code>\*</code>*
        * *[.subscribe(callback)](#module_@the-/state.state.State+subscribe) ⇒ <code>function</code>*
        * *[.unsubscribe(callback)](#module_@the-/state.state.State+unsubscribe)*

<a name="module_@the-/state.state.RootState"></a>

#### state.RootState ⇐ [<code>State</code>](#module_@the-/state.state.State)
**Kind**: static class of [<code>state</code>](#module_@the-/state.state)  
**Extends**: [<code>State</code>](#module_@the-/state.state.State)  

* [.RootState](#module_@the-/state.state.RootState) ⇐ [<code>State</code>](#module_@the-/state.state.State)
    * [new RootState([options])](#new_module_@the-/state.state.RootState_new)
    * [.del(name)](#module_@the-/state.state.State+del)
    * [.drop()](#module_@the-/state.state.State+drop)
    * [.get(name)](#module_@the-/state.state.State+get) ⇒ <code>\*</code>
    * [.keys()](#module_@the-/state.state.State+keys) ⇒ <code>Array.&lt;string&gt;</code>
    * [.publish()](#module_@the-/state.state.State+publish)
    * [.set(values)](#module_@the-/state.state.State+set) ⇒ <code>\*</code>
    * [.subscribe(callback)](#module_@the-/state.state.State+subscribe) ⇒ <code>function</code>
    * [.unsubscribe(callback)](#module_@the-/state.state.State+unsubscribe)

<a name="new_module_@the-/state.state.RootState_new"></a>

##### new RootState([options])
State works as root


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> | <code>{}</code> | Optional settings |
| [options.defaults] | <code>Object</code> | <code>{}</code> | Default values |

<a name="module_@the-/state.state.State+del"></a>

##### rootState.del(name)
Delete value for name

**Kind**: instance method of [<code>RootState</code>](#module_@the-/state.state.RootState)  
**Overrides**: [<code>del</code>](#module_@the-/state.state.State+del)  

| Param | Type |
| --- | --- |
| name | <code>string</code> | 

<a name="module_@the-/state.state.State+drop"></a>

##### rootState.drop()
Drop all values

**Kind**: instance method of [<code>RootState</code>](#module_@the-/state.state.RootState)  
**Overrides**: [<code>drop</code>](#module_@the-/state.state.State+drop)  
<a name="module_@the-/state.state.State+get"></a>

##### rootState.get(name) ⇒ <code>\*</code>
Get value for name

**Kind**: instance method of [<code>RootState</code>](#module_@the-/state.state.RootState)  

| Param | Type |
| --- | --- |
| name | <code>string</code> | 

<a name="module_@the-/state.state.State+keys"></a>

##### rootState.keys() ⇒ <code>Array.&lt;string&gt;</code>
Get keys

**Kind**: instance method of [<code>RootState</code>](#module_@the-/state.state.RootState)  
<a name="module_@the-/state.state.State+publish"></a>

##### rootState.publish()
Publish to subscriptions

**Kind**: instance method of [<code>RootState</code>](#module_@the-/state.state.RootState)  
<a name="module_@the-/state.state.State+set"></a>

##### rootState.set(values) ⇒ <code>\*</code>
Set values

**Kind**: instance method of [<code>RootState</code>](#module_@the-/state.state.RootState)  

| Param | Type |
| --- | --- |
| values | <code>Object</code> | 

<a name="module_@the-/state.state.State+subscribe"></a>

##### rootState.subscribe(callback) ⇒ <code>function</code>
Subscribe changes

**Kind**: instance method of [<code>RootState</code>](#module_@the-/state.state.RootState)  
**Returns**: <code>function</code> - - unsubscribe function  

| Param | Type |
| --- | --- |
| callback | <code>function</code> | 

<a name="module_@the-/state.state.State+unsubscribe"></a>

##### rootState.unsubscribe(callback)
Unsubscribe

**Kind**: instance method of [<code>RootState</code>](#module_@the-/state.state.RootState)  

| Param | Type |
| --- | --- |
| callback | <code>function</code> | 

<a name="module_@the-/state.state.ScopedState"></a>

#### state.ScopedState ⇐ [<code>State</code>](#module_@the-/state.state.State)
**Kind**: static class of [<code>state</code>](#module_@the-/state.state)  
**Extends**: [<code>State</code>](#module_@the-/state.state.State)  

* [.ScopedState](#module_@the-/state.state.ScopedState) ⇐ [<code>State</code>](#module_@the-/state.state.State)
    * [new ScopedState(name)](#new_module_@the-/state.state.ScopedState_new)
    * [.scope(...names)](#module_@the-/state.state.ScopedState+scope)
    * [.del(name)](#module_@the-/state.state.State+del)
    * [.drop()](#module_@the-/state.state.State+drop)
    * [.get(name)](#module_@the-/state.state.State+get) ⇒ <code>\*</code>
    * [.keys()](#module_@the-/state.state.State+keys) ⇒ <code>Array.&lt;string&gt;</code>
    * [.publish()](#module_@the-/state.state.State+publish)
    * [.set(values)](#module_@the-/state.state.State+set) ⇒ <code>\*</code>
    * [.subscribe(callback)](#module_@the-/state.state.State+subscribe) ⇒ <code>function</code>
    * [.unsubscribe(callback)](#module_@the-/state.state.State+unsubscribe)

<a name="new_module_@the-/state.state.ScopedState_new"></a>

##### new ScopedState(name)
State works as scope


| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | Name of scope |

<a name="module_@the-/state.state.ScopedState+scope"></a>

##### scopedState.scope(...names)
Scope with name

**Kind**: instance method of [<code>ScopedState</code>](#module_@the-/state.state.ScopedState)  

| Param | Type | Description |
| --- | --- | --- |
| ...names | <code>string</code> | Name of scope |

<a name="module_@the-/state.state.State+del"></a>

##### scopedState.del(name)
Delete value for name

**Kind**: instance method of [<code>ScopedState</code>](#module_@the-/state.state.ScopedState)  

| Param | Type |
| --- | --- |
| name | <code>string</code> | 

<a name="module_@the-/state.state.State+drop"></a>

##### scopedState.drop()
Drop all values

**Kind**: instance method of [<code>ScopedState</code>](#module_@the-/state.state.ScopedState)  
<a name="module_@the-/state.state.State+get"></a>

##### scopedState.get(name) ⇒ <code>\*</code>
Get value for name

**Kind**: instance method of [<code>ScopedState</code>](#module_@the-/state.state.ScopedState)  

| Param | Type |
| --- | --- |
| name | <code>string</code> | 

<a name="module_@the-/state.state.State+keys"></a>

##### scopedState.keys() ⇒ <code>Array.&lt;string&gt;</code>
Get keys

**Kind**: instance method of [<code>ScopedState</code>](#module_@the-/state.state.ScopedState)  
<a name="module_@the-/state.state.State+publish"></a>

##### scopedState.publish()
Publish to subscriptions

**Kind**: instance method of [<code>ScopedState</code>](#module_@the-/state.state.ScopedState)  
<a name="module_@the-/state.state.State+set"></a>

##### scopedState.set(values) ⇒ <code>\*</code>
Set values

**Kind**: instance method of [<code>ScopedState</code>](#module_@the-/state.state.ScopedState)  

| Param | Type |
| --- | --- |
| values | <code>Object</code> | 

<a name="module_@the-/state.state.State+subscribe"></a>

##### scopedState.subscribe(callback) ⇒ <code>function</code>
Subscribe changes

**Kind**: instance method of [<code>ScopedState</code>](#module_@the-/state.state.ScopedState)  
**Returns**: <code>function</code> - - unsubscribe function  

| Param | Type |
| --- | --- |
| callback | <code>function</code> | 

<a name="module_@the-/state.state.State+unsubscribe"></a>

##### scopedState.unsubscribe(callback)
Unsubscribe

**Kind**: instance method of [<code>ScopedState</code>](#module_@the-/state.state.ScopedState)  

| Param | Type |
| --- | --- |
| callback | <code>function</code> | 

<a name="module_@the-/state.state.State"></a>

#### *state.State*
**Kind**: static abstract class of [<code>state</code>](#module_@the-/state.state)  

* *[.State](#module_@the-/state.state.State)*
    * *[new State()](#new_module_@the-/state.state.State_new)*
    * *[.del(name)](#module_@the-/state.state.State+del)*
    * *[.drop()](#module_@the-/state.state.State+drop)*
    * *[.get(name)](#module_@the-/state.state.State+get) ⇒ <code>\*</code>*
    * *[.keys()](#module_@the-/state.state.State+keys) ⇒ <code>Array.&lt;string&gt;</code>*
    * *[.publish()](#module_@the-/state.state.State+publish)*
    * *[.set(values)](#module_@the-/state.state.State+set) ⇒ <code>\*</code>*
    * *[.subscribe(callback)](#module_@the-/state.state.State+subscribe) ⇒ <code>function</code>*
    * *[.unsubscribe(callback)](#module_@the-/state.state.State+unsubscribe)*

<a name="new_module_@the-/state.state.State_new"></a>

##### *new State()*
Abstract state

<a name="module_@the-/state.state.State+del"></a>

##### *state.del(name)*
Delete value for name

**Kind**: instance method of [<code>State</code>](#module_@the-/state.state.State)  

| Param | Type |
| --- | --- |
| name | <code>string</code> | 

<a name="module_@the-/state.state.State+drop"></a>

##### *state.drop()*
Drop all values

**Kind**: instance method of [<code>State</code>](#module_@the-/state.state.State)  
<a name="module_@the-/state.state.State+get"></a>

##### *state.get(name) ⇒ <code>\*</code>*
Get value for name

**Kind**: instance method of [<code>State</code>](#module_@the-/state.state.State)  

| Param | Type |
| --- | --- |
| name | <code>string</code> | 

<a name="module_@the-/state.state.State+keys"></a>

##### *state.keys() ⇒ <code>Array.&lt;string&gt;</code>*
Get keys

**Kind**: instance method of [<code>State</code>](#module_@the-/state.state.State)  
<a name="module_@the-/state.state.State+publish"></a>

##### *state.publish()*
Publish to subscriptions

**Kind**: instance method of [<code>State</code>](#module_@the-/state.state.State)  
<a name="module_@the-/state.state.State+set"></a>

##### *state.set(values) ⇒ <code>\*</code>*
Set values

**Kind**: instance method of [<code>State</code>](#module_@the-/state.state.State)  

| Param | Type |
| --- | --- |
| values | <code>Object</code> | 

<a name="module_@the-/state.state.State+subscribe"></a>

##### *state.subscribe(callback) ⇒ <code>function</code>*
Subscribe changes

**Kind**: instance method of [<code>State</code>](#module_@the-/state.state.State)  
**Returns**: <code>function</code> - - unsubscribe function  

| Param | Type |
| --- | --- |
| callback | <code>function</code> | 

<a name="module_@the-/state.state.State+unsubscribe"></a>

##### *state.unsubscribe(callback)*
Unsubscribe

**Kind**: instance method of [<code>State</code>](#module_@the-/state.state.State)  

| Param | Type |
| --- | --- |
| callback | <code>function</code> | 

<a name="module_@the-/state.create"></a>

### state.create(...args) ⇒ <code>TheState</code>
Create a TheState instance

**Kind**: static method of [<code>@the-/state</code>](#module_@the-/state)  

| Param | Type |
| --- | --- |
| ...args | <code>\*</code> | 

<a name="module_@the-/state.default"></a>

### state.default()
Default exports

**Kind**: static method of [<code>@the-/state</code>](#module_@the-/state)
