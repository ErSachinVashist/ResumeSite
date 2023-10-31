const getContent = (client) => {
    return async (content_type, { order }) => {
        const filter = {
            select: 'fields',
            content_type,
        }
        if (order) filter.order = `fields.${order}`
        try {
            const entries = await client.getEntries(filter);

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
