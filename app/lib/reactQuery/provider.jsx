"use client"

const { QueryClient, QueryClientProvider } = require("react-query");

const ReactQueryProvider = ({ children }) => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: 1
            },
        },
    });

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};

export default ReactQueryProvider;
