# bible-gateway-api

This library provides a sane way for programmatically interacting with the bible-gate-way-api website.

### Install

```bash
yarn add bible-gateway-api
# or
npm install bible-gateway-api
```

### Usage

```javascript
import { BibleGatewayAPI } from "bible-gateway-api";

let bgw = new BibleGatewayAPI();

let { verse, content } = await bgw.search("Luke 2.28-32");
```
