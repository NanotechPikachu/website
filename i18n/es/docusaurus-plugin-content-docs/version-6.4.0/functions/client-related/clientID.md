---
title: '$clientID'
description: '$clientID devolverá el ID de usuario de Discord del cliente.'
id: clientID
---

`$clientID` devolverá el ID de usuario de Discord del cliente.

## Modo de uso

```php
$clientID
```

## Ejemplo(s)

Esto devolverá el ID del cliente:

```javascript
bot.command({
    name: 'clientID',
    code: `
  $clientID
  `
});
```