import test from "ava";

import { BibleGatewayAPI } from "./dist/index";

test("can search", async t => {
  let bgw = new BibleGatewayAPI();

  let { verse, content } = await bgw.search("Luke 2.28");

  t.is(verse, "Luke 2:28");
  t.true(
    content[0].includes("he took him up in his arms and blessed God and said")
  );
});
