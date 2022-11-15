# @houseninja/capacitor-datadog

Capacitor plugin for Datadog RUM

## Install

```bash
npm install @houseninja/capacitor-datadog
npx cap sync
```

## API

<docgen-index>

* [`init(...)`](#init)
* [`setUserInfo(...)`](#setuserinfo)
* [`addUserExtraInfo(...)`](#adduserextrainfo)
* [`addUserAction(...)`](#adduseraction)
* [`addAttribute(...)`](#addattribute)
* [`removeAttribute(...)`](#removeattribute)
* [`addError(...)`](#adderror)
* [Interfaces](#interfaces)
* [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### init(...)

```typescript
init(options: { clientToken: string; applicationID: string; service: string; }) => Promise<void>
```

| Param         | Type                                                                          |
| ------------- | ----------------------------------------------------------------------------- |
| **`options`** | <code>{ clientToken: string; applicationID: string; service: string; }</code> |

--------------------


### setUserInfo(...)

```typescript
setUserInfo(options: { id?: string | undefined; name?: string | undefined; email?: string | undefined; extraInfo?: { [key: string]: string; } | undefined; }) => Promise<void>
```

| Param         | Type                                                                                                 |
| ------------- | ---------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ id?: string; name?: string; email?: string; extraInfo?: { [key: string]: string; }; }</code> |

--------------------


### addUserExtraInfo(...)

```typescript
addUserExtraInfo(options: { extraInfo: { [key: string]: string; }; }) => Promise<void>
```

| Param         | Type                                                    |
| ------------- | ------------------------------------------------------- |
| **`options`** | <code>{ extraInfo: { [key: string]: string; }; }</code> |

--------------------


### addUserAction(...)

```typescript
addUserAction(options: { type: RUMUserActionType; name: string; attributes: { [key: string]: string; }; }) => Promise<void>
```

| Param         | Type                                                                                                                             |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ type: <a href="#rumuseractiontype">RUMUserActionType</a>; name: string; attributes: { [key: string]: string; }; }</code> |

--------------------


### addAttribute(...)

```typescript
addAttribute(options: { key: string; value: string; }) => Promise<void>
```

| Param         | Type                                         |
| ------------- | -------------------------------------------- |
| **`options`** | <code>{ key: string; value: string; }</code> |

--------------------


### removeAttribute(...)

```typescript
removeAttribute(options: { key: string; }) => Promise<void>
```

| Param         | Type                          |
| ------------- | ----------------------------- |
| **`options`** | <code>{ key: string; }</code> |

--------------------


### addError(...)

```typescript
addError(options: { error: unknown; context?: Context; }) => Promise<void>
```

| Param         | Type                                                                       |
| ------------- | -------------------------------------------------------------------------- |
| **`options`** | <code>{ error: unknown; context?: <a href="#context">Context</a>; }</code> |

--------------------


### Interfaces


#### Context


### Enums


#### RUMUserActionType

| Members      | Value                 |
| ------------ | --------------------- |
| **`tap`**    | <code>'tap'</code>    |
| **`click`**  | <code>'click'</code>  |
| **`scroll`** | <code>'scroll'</code> |
| **`swipe`**  | <code>'swipe'</code>  |
| **`custom`** | <code>'custom'</code> |

</docgen-api>
