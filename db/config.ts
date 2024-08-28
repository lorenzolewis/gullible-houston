import { column, defineDb, defineTable } from "astro:db";

const User = defineTable({
  columns: {
    user: column.text(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { User },
});
