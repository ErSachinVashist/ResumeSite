const getContent = (client) => {
    return async (content_type) => {
        try {
            const entries = await client.getEntries({
                select: 'fields',
                content_type,
            });

            const sanitizedEntries = entries.items.map((item) => {
                const icon = item?.fields?.icon?.fields?.file?.url;
                return {
                    ...item.fields,
                    icon
                };
            });

            return sanitizedEntries;
        } catch (error) {
            console.log(`Error fetching authors ${error}`);
        }
    }
};


export default getContent;
