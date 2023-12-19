import type { Tag } from "@yext/pages";
import defaultMetaTags from "./defaultMetaTags";

const tags: Tag[] = [...defaultMetaTags({ withRobots: false })];

/**
 * Headers for a page that is not meant to be indexed by search engines, and that users will not be able to navigate to.
 */
export default tags;
