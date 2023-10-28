import { createClient } from "contentful";
import getContent from "./getContent";

const useContentful = () => {
    const client = createClient({
        space: import.meta.env.VITE_CONTENTFUL_SPACE,
        accessToken: import.meta.env.VITE_CONTENTFUL_TOKEN,
        host: "preview.contentful.com"
    });
    const getData = getContent(client)
    return { getData };
};

export default useContentful;
