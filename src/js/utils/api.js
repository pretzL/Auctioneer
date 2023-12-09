const moviesDb = "https://moviesdatabase.p.rapidapi.com";
const moviesDbKey = import.meta.env.VITE_MOVIESDATABASE_KEY;

const streamingAvailability = "https://streaming-availability.p.rapidapi.com";
const streamingAvailabilityKey = import.meta.env.VITE_STREAMINGAVAILABILITY_KEY;

export const api = {
    getAllTitles: async (params = "") => {
        try {
            const req = await fetch(`${moviesDb}/titles${params}`, {
                method: "GET",
                headers: {
                    "X-RapidAPI-Key": moviesDbKey,
                    "X-RapidAPI-Host": moviesDb.replace(/^https:\/\//, ""),
                },
            });
            const json = await req.json();
            return json;
        } catch (error) {
            throw new Error(error);
        }
    },
    getATitle: async (id, params = "") => {
        try {
            const req = await fetch(`${moviesDb}/titles/${id}${params}`, {
                method: "GET",
                headers: {
                    "X-RapidAPI-Key": moviesDbKey,
                    "X-RapidAPI-Host": moviesDb.replace(/^https:\/\//, ""),
                },
            });
            const json = await req.json();
            return json;
        } catch (error) {
            throw new Error(error);
        }
    },
    getRandomTitle: async (params = "") => {
        try {
            const req = await fetch(`${moviesDb}/titles/random${params}`, {
                method: "GET",
                headers: {
                    "X-RapidAPI-Key": moviesDbKey,
                    "X-RapidAPI-Host": moviesDb.replace(/^https:\/\//, ""),
                },
            });
            const json = await req.json();
            return json;
        } catch (error) {
            throw new Error(error);
        }
    },
    getTitleRating: async (id, params = "") => {
        try {
            const req = await fetch(`${moviesDb}/titles/${id}/ratings${params}`, {
                method: "GET",
                headers: {
                    "X-RapidAPI-Key": moviesDbKey,
                    "X-RapidAPI-Host": moviesDb.replace(/^https:\/\//, ""),
                },
            });
            const json = await req.json();
            return json;
        } catch (error) {
            throw new Error(error);
        }
    },
    getSeries: async (id, params = "") => {
        try {
            const req = await fetch(`${moviesDb}/titles/series/${id}${params}`, {
                method: "GET",
                headers: {
                    "X-RapidAPI-Key": moviesDbKey,
                    "X-RapidAPI-Host": moviesDb.replace(/^https:\/\//, ""),
                },
            });
            const json = await req.json();
            return json;
        } catch (error) {
            throw new Error(error);
        }
    },
    getSeasonsNumber: async (id, params = "") => {
        try {
            const req = await fetch(`${moviesDb}/titles/seasons/${id}${params}`, {
                method: "GET",
                headers: {
                    "X-RapidAPI-Key": moviesDbKey,
                    "X-RapidAPI-Host": moviesDb.replace(/^https:\/\//, ""),
                },
            });
            const json = await req.json();
            return json;
        } catch (error) {
            throw new Error(error);
        }
    },
    getEpisodes: async (id, season, params = "") => {
        try {
            const req = await fetch(`${moviesDb}/titles/series/${id}/${season}${params}`, {
                method: "GET",
                headers: {
                    "X-RapidAPI-Key": moviesDbKey,
                    "X-RapidAPI-Host": moviesDb.replace(/^https:\/\//, ""),
                },
            });
            const json = await req.json();
            return json;
        } catch (error) {
            throw new Error(error);
        }
    },
    getEpisode: async (id, params = "") => {
        try {
            const req = await fetch(`${moviesDb}/titles/episode/${id}${params}`, {
                method: "GET",
                headers: {
                    "X-RapidAPI-Key": moviesDbKey,
                    "X-RapidAPI-Host": moviesDb.replace(/^https:\/\//, ""),
                },
            });
            const json = await req.json();
            return json;
        } catch (error) {
            throw new Error(error);
        }
    },
    getUpcomingTitles: async (params = "") => {
        try {
            const req = await fetch(`${moviesDb}/titles/x/upcoming${params}`, {
                method: "GET",
                headers: {
                    "X-RapidAPI-Key": moviesDbKey,
                    "X-RapidAPI-Host": moviesDb.replace(/^https:\/\//, ""),
                },
            });
            const json = await req.json();
            return json;
        } catch (error) {
            throw new Error(error);
        }
    },
    search: async (mode, text, params = "") => {
        try {
            const req = await fetch(`${moviesDb}/titles/search/${mode}/${text}${params}`, {
                method: "GET",
                headers: {
                    "X-RapidAPI-Key": moviesDbKey,
                    "X-RapidAPI-Host": moviesDb.replace(/^https:\/\//, ""),
                },
            });
            const json = await req.json();
            return json;
        } catch (error) {
            throw new Error(error);
        }
    },
    getActors: async (params = "") => {
        try {
            const req = await fetch(`${moviesDb}/actors${params}`, {
                method: "GET",
                headers: {
                    "X-RapidAPI-Key": moviesDbKey,
                    "X-RapidAPI-Host": moviesDb.replace(/^https:\/\//, ""),
                },
            });
            const json = await req.json();
            return json;
        } catch (error) {
            throw new Error(error);
        }
    },
    getActor: async (id, params = "") => {
        try {
            const req = await fetch(`${moviesDb}/actors/${id}${params}`, {
                method: "GET",
                headers: {
                    "X-RapidAPI-Key": moviesDbKey,
                    "X-RapidAPI-Host": moviesDb.replace(/^https:\/\//, ""),
                },
            });
            const json = await req.json();
            return json;
        } catch (error) {
            throw new Error(error);
        }
    },
    getRandomActor: async (params = "") => {
        try {
            const req = await fetch(`${moviesDb}/actors/random${params}`, {
                method: "GET",
                headers: {
                    "X-RapidAPI-Key": moviesDbKey,
                    "X-RapidAPI-Host": moviesDb.replace(/^https:\/\//, ""),
                },
            });
            const json = await req.json();
            return json;
        } catch (error) {
            throw new Error(error);
        }
    },
    getTitleTypes: async (params = "") => {
        try {
            const req = await fetch(`${moviesDb}/titles/utils/titleTypes${params}`, {
                method: "GET",
                headers: {
                    "X-RapidAPI-Key": moviesDbKey,
                    "X-RapidAPI-Host": moviesDb.replace(/^https:\/\//, ""),
                },
            });
            const json = await req.json();
            return json;
        } catch (error) {
            throw new Error(error);
        }
    },
    getGenreTypes: async (params = "") => {
        try {
            const req = await fetch(`${moviesDb}/titles/utils/genres${params}`, {
                method: "GET",
                headers: {
                    "X-RapidAPI-Key": moviesDbKey,
                    "X-RapidAPI-Host": moviesDb.replace(/^https:\/\//, ""),
                },
            });
            const json = await req.json();
            return json;
        } catch (error) {
            throw new Error(error);
        }
    },
    getTitlesList: async (params = "") => {
        try {
            const req = await fetch(`${moviesDb}/titles/utils/lists${params}`, {
                method: "GET",
                headers: {
                    "X-RapidAPI-Key": moviesDbKey,
                    "X-RapidAPI-Host": moviesDb.replace(/^https:\/\//, ""),
                },
            });
            const json = await req.json();
            return json;
        } catch (error) {
            throw new Error(error);
        }
    },
    getCountries: async (params = "") => {
        try {
            const req = await fetch(`${streamingAvailability}/countries${params}`, {
                method: "GET",
                headers: {
                    "X-RapidAPI-Key": streamingAvailabilityKey,
                    "X-RapidAPI-Host": streamingAvailability.replace(/^https:\/\//, ""),
                },
            });
            const json = await req.json();
            return json;
        } catch (error) {
            throw new Error(error);
        }
    },
    getAvailabilityById: async (id, params = "") => {
        try {
            if (params.startsWith("?")) {
                params = params.replace("?", "&");
            }

            const req = await fetch(`${streamingAvailability}/get?output_language=en&imdb_id=${id}${params}`, {
                method: "GET",
                headers: {
                    "X-RapidAPI-Key": streamingAvailabilityKey,
                    "X-RapidAPI-Host": streamingAvailability.replace(/^https:\/\//, ""),
                },
            });
            const json = await req.json();
            return json;
        } catch (error) {
            throw new Error(error);
        }
    },
    getStreamingChanges: async (services, country, params = "") => {
        try {
            if (params.startsWith("?")) {
                params = params.replace("?", "&");
            }

            const req = await fetch(`${streamingAvailability}/changes?change_type=new&services=${services}&target_type=show&country=${country}&output_language=en${params}`, {
                method: "GET",
                headers: {
                    "X-RapidAPI-Key": streamingAvailabilityKey,
                    "X-RapidAPI-Host": streamingAvailability.replace(/^https:\/\//, ""),
                },
            });
            const json = await req.json();
            return json;
        } catch (error) {
            throw new Error(error);
        }
    },
};
