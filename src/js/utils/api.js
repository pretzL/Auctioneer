const BASE_URL = "https://api.noroff.dev/api/v1";

export const api = {
    register: async (body) => {
        try {
            const req = await fetch(`${BASE_URL}/auction/auth/register`, {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const json = await req.json();
            return json;
        } catch (error) {
            throw new Error(error);
        }
    },
    login: async (body) => {
        try {
            const req = await fetch(`${BASE_URL}/auction/auth/login`, {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const json = await req.json();
            return json;
        } catch (error) {
            throw new Error(error);
        }
    },
    getListings: async (params = "") => {
        try {
            const req = await fetch(`${BASE_URL}/auction/listings${params}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const json = await req.json();
            return json;
        } catch (error) {
            throw new Error(error);
        }
    },
    getListing: async (id, params = "") => {
        try {
            const req = await fetch(`${BASE_URL}/auction/listings/${id}${params}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const json = await req.json();
            return json;
        } catch (error) {
            throw new Error(error);
        }
    },
    createListing: async (body) => {
        try {
            const req = await fetch(`${BASE_URL}/auction/listings`, {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const json = await req.json();
            return json;
        } catch (error) {
            throw new Error(error);
        }
    },
    updateListing: async (id, body) => {
        try {
            const req = await fetch(`${BASE_URL}/auction/listings/${id}`, {
                method: "PUT",
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const json = await req.json();
            return json;
        } catch (error) {
            throw new Error(error);
        }
    },
    deleteListing: async (id) => {
        try {
            const req = await fetch(`${BASE_URL}/auction/listings/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const json = await req.json();
            return json;
        } catch (error) {
            throw new Error(error);
        }
    },
    getProfiles: async (params = "") => {
        try {
            const req = await fetch(`${BASE_URL}/auction/profiles${params}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const json = await req.json();
            return json;
        } catch (error) {
            throw new Error(error);
        }
    },
    getProfile: async (name, params = "") => {
        try {
            const req = await fetch(`${BASE_URL}/auction/profiles/${name}${params}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const json = await req.json();
            return json;
        } catch (error) {
            throw new Error(error);
        }
    },
    updateProfileMedia: async (name, body) => {
        try {
            const req = await fetch(`${BASE_URL}/auction/profiles/${name}/media`, {
                method: "PUT",
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const json = await req.json();
            return json;
        } catch (error) {
            throw new Error(error);
        }
    },
    getListingsByProfile: async (name, params = "") => {
        try {
            const req = await fetch(`${BASE_URL}/auction/profiles/${name}/listings${params}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const json = await req.json();
            return json;
        } catch (error) {
            throw new Error(error);
        }
    },
    getAllBidsByProfile: async (name, params = "") => {
        try {
            const req = await fetch(`${BASE_URL}/auction/profiles/${name}/bids${params}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const json = await req.json();
            return json;
        } catch (error) {
            throw new Error(error);
        }
    },
};
