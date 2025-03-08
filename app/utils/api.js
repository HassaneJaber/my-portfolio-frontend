const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const fetchProjects = async () => {
    try {
        const response = await fetch(API_URL);
        return response.json();
    } catch (error) {
        console.error("Error fetching projects:", error);
        return [];
    }
};
